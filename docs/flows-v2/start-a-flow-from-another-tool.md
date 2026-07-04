---
title: Start a Flow from Another Tool
description: Use a Webhook trigger to start a Waplify Flows V2 chatbot from Google Sheets, Zapier, or your CRM whenever a lead arrives or a value changes
sidebar_position: 7
keywords: [WhatsApp webhook trigger, start flow from Google Sheets, WhatsApp automation lead, Zapier WhatsApp, trigger chatbot from CRM]
---

## What is a Webhook trigger?

Most flows start when a customer messages you. A **Webhook** trigger is different — it lets an **outside tool start the flow for you**. When a new lead lands in a Google Sheet, a deal is marked "approved" in your CRM, or a form is filled in, that tool can "call" your flow and it will message the contact automatically.

In short: **something happens in another app → Waplify sends the WhatsApp message.**

:::note A bit more technical
Setting this up takes a few minutes and one copy-and-paste. Google Sheets needs no developer; for Zapier or a CRM, anyone comfortable with those tools can do it.
:::

## How to use it

### 1. Add the Webhook trigger to your flow

1. Open your flow in the builder and click the **Start** block.
2. Under **Trigger type**, choose **Webhook**.
3. **Save** the flow. A unique **Webhook URL** now appears — this is the link other tools use to start your flow.

<!-- screenshot: Start triggers panel with Webhook selected, showing the URL and Copy button -->

### 2. Create an API key

The Webhook URL needs a key so only you can use it.

1. Go to **Developers → API keys**.
2. Create a new key and copy it. Keep it private — treat it like a password.

### 3. Connect your tool

Whatever calls the URL must send:

- An **Authorization** header: `Bearer YOUR_API_KEY`
- A small **JSON body** with the contact's phone number and any details the flow should use:

```json
{
  "phone": "+1234567890",
  "variables": { "name": "John", "status": "approved" }
}
```

Your flow can then use those details in its messages as `{{name}}`, `{{status}}`, and so on.

## Connect Google Sheets (one paste, no coding)

:::tip Prefer a form over editing code?
See **[Send WhatsApp from Google Sheets](./google-sheets-to-whatsapp.md)** — same result, but you set everything up in a friendly **popup** (dropdowns for your tab and columns, no settings to edit by hand). The method below still works and is a single file if you'd rather paste and go.
:::

This is the most common setup: **when a new lead row appears — or a status changes to "approved" — Waplify sends the WhatsApp message.**

It works **two ways at once**, so you're covered no matter how rows arrive:

- **Instantly** when you or a teammate type or edit a row by hand.
- **Every few minutes** it also checks the sheet, so rows added by *another tool* — a Google Form, Zapier, your CRM, an import — get sent too.

Waplify adds one small **"Waplify Sent"** column to tick off rows it has already handled, so **no one is ever messaged twice**.

### Set it up

1. Open your Google Sheet. Make sure row 1 has headers, including a **phone number** column (for example `Phone`) and, optionally, a **Status** column.
2. In the sheet, click **Extensions → Apps Script**.
3. Delete anything in the editor, paste the script below, and fill in the settings at the top.
4. Click **Save**, then run the **`installWaplify`** function once (you'll be asked to allow permissions — that's normal).

<!-- screenshot: Google Apps Script editor with the script pasted and the settings filled in -->

```javascript
// ===== Waplify → WhatsApp: start a flow from this sheet =====
// Fill in the settings, then Save and run installWaplify once.

const WAPLIFY_WEBHOOK_URL = 'PASTE_YOUR_WEBHOOK_URL_HERE'; // from the Start block
const WAPLIFY_API_KEY     = 'PASTE_YOUR_API_KEY_HERE';     // from Developers → API keys

const SHEET_NAME     = '';          // '' = first tab, or type a tab name
const PHONE_HEADER   = 'Phone';     // the column with the WhatsApp number
const TRIGGER_COLUMN = 'Status';    // a row is "ready" once this column is filled ('' = always ready)
const WATCH_COLUMN   = 'Status';    // send instantly only when this column is edited ('' = any edit)
const SENT_COLUMN    = 'Waplify Sent'; // added automatically — marks rows already sent

// Only send when ALL of these match. equals / atLeast / atMost — or omit the value = just non-empty.
const CONDITIONS = [
  { header: 'Status', equals: 'approved' },
  // { header: 'Budget', atLeast: 20000 },
];

const ENABLE_ON_EDIT  = true;  // send instantly when someone edits the sheet
const ENABLE_SCHEDULE = true;  // also check every few minutes (catches rows added by other tools)
const POLL_MINUTES    = 5;     // must be 1, 5, 10, 15, or 30
const MAX_PER_RUN     = 50;    // most rows to send per check (safety limit)

// --- You don't need to change anything below this line. ---

function installWaplify() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    var fn = t.getHandlerFunction();
    if (fn === 'waplifyOnEdit' || fn === 'waplifyPoll') ScriptApp.deleteTrigger(t);
  });
  if (ENABLE_ON_EDIT)
    ScriptApp.newTrigger('waplifyOnEdit').forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
  if (ENABLE_SCHEDULE)
    ScriptApp.newTrigger('waplifyPoll').timeBased().everyMinutes(POLL_MINUTES).create();
  markExistingReadyRowsAsSent_();
  SpreadsheetApp.getActive().toast('Waplify connected. New rows will start your flow.');
}

function waplifyOnEdit(e) {
  var sheet = e.range.getSheet();
  if (SHEET_NAME && sheet.getName() !== SHEET_NAME) return;
  var row = e.range.getRow();
  if (row === 1) return;
  var headers = readHeaders_(sheet);
  if (WATCH_COLUMN) {
    var wi = headers.indexOf(WATCH_COLUMN);
    if (wi === -1 || e.range.getColumn() !== wi + 1) return;
  }
  var sentIdx = ensureSentColumn_(sheet, headers);
  var rowData = rowToObject_(headers, sheet.getRange(row, 1, 1, headers.length).getValues()[0]);
  if (!shouldSend_(rowData)) return;
  if (postRow_(rowData)) sheet.getRange(row, sentIdx + 1).setValue(new Date());
}

function waplifyPoll() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    var sheet = getSheet_();
    if (!sheet || sheet.getLastRow() < 2) return;
    var headers = readHeaders_(sheet);
    var sentIdx = ensureSentColumn_(sheet, headers);
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    var sent = 0;
    for (var i = 0; i < data.length && sent < MAX_PER_RUN; i++) {
      var rowData = rowToObject_(headers, data[i]);
      if (!shouldSend_(rowData)) continue;
      if (postRow_(rowData)) { sheet.getRange(2 + i, sentIdx + 1).setValue(new Date()); sent++; }
    }
  } finally { lock.releaseLock(); }
}

function shouldSend_(rowData) {
  if (rowData[SENT_COLUMN]) return false;                                   // already sent
  if (TRIGGER_COLUMN && !nonEmpty_(rowData[TRIGGER_COLUMN])) return false;  // row not ready
  if (!rowData[PHONE_HEADER]) return false;                                 // no phone
  return CONDITIONS.every(function (c) { return conditionMatches_(rowData, c); });
}

function conditionMatches_(rowData, c) {
  var raw = rowData[c.header];
  var num = Number(String(raw == null ? '' : raw).replace(/,/g, ''));
  if (c.atLeast !== undefined) return !isNaN(num) && num >= Number(c.atLeast);
  if (c.atMost  !== undefined) return !isNaN(num) && num <= Number(c.atMost);
  if (c.equals !== undefined && c.equals !== '') {
    var want = Number(String(c.equals).replace(/,/g, ''));
    if (!isNaN(num) && !isNaN(want)) return num === want;
    return String(raw == null ? '' : raw).trim().toLowerCase() === String(c.equals).trim().toLowerCase();
  }
  return nonEmpty_(raw);
}

function postRow_(rowData) {
  var res = UrlFetchApp.fetch(WAPLIFY_WEBHOOK_URL, {
    method: 'post', contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + WAPLIFY_API_KEY },
    muteHttpExceptions: true,
    payload: JSON.stringify({ phone: String(rowData[PHONE_HEADER]), variables: rowData }),
  });
  return res.getResponseCode() >= 200 && res.getResponseCode() < 300;
}

function markExistingReadyRowsAsSent_() {
  var sheet = getSheet_();
  if (!sheet || sheet.getLastRow() < 2) return;
  var headers = readHeaders_(sheet);
  var sentIdx = ensureSentColumn_(sheet, headers);
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  for (var i = 0; i < data.length; i++) {
    var rowData = rowToObject_(headers, data[i]);
    if (!rowData[SENT_COLUMN] && (!TRIGGER_COLUMN || nonEmpty_(rowData[TRIGGER_COLUMN])))
      sheet.getRange(2 + i, sentIdx + 1).setValue('(existing — not sent)');
  }
}

function getSheet_() { var ss = SpreadsheetApp.getActive(); return SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0]; }
function readHeaders_(sheet) { return sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0].map(function (h) { return String(h).trim(); }); }
function rowToObject_(headers, values) { var o = {}; headers.forEach(function (h, i) { if (h) o[h] = values[i]; }); return o; }
function ensureSentColumn_(sheet, headers) {
  var idx = headers.indexOf(SENT_COLUMN);
  if (idx === -1) { idx = headers.length; sheet.getRange(1, idx + 1).setValue(SENT_COLUMN); headers.push(SENT_COLUMN); }
  return idx;
}
function nonEmpty_(v) { return String(v == null ? '' : v).trim() !== ''; }
```

### How it decides to send

- A row is sent only when your **conditions** match — by default `Status = approved`. Add more rules to `CONDITIONS` (for example, also `Budget` at least `20000`) and **all** of them must match.
- Each row is sent **once**. To send a row again, clear its **"Waplify Sent"** cell.
- When you first install it, your **existing** rows are marked as already-sent — so it won't message your whole list at once. Only rows added or approved *from now on* are sent.

## Tips & best practices

- **Put the phone number in international format** — for example `+14155551234`. Numbers without a country code may not reach.
- **Use the variables in your flow** — every column becomes available (like `{{Name}}` or `{{Status}}`), so your first message can be personal.
- **Only message the right rows** — set your `CONDITIONS` (for example `Status = approved`) so you don't message everyone in the sheet.
- **Rows added by another tool are covered** — the every-few-minutes check catches rows added by a Google Form, Zapier, or an import, not just ones you type by hand.
- **Respect opt-out** — if a contact has opted out, the flow won't start for them. That's by design and keeps you compliant.
- **Start small** — test with one or two rows before turning it loose on a big list.
- **Prefer Zapier or Make?** They have a ready-made "Webhooks" action — point it at the same URL with the same header and body, and add a filter (for example, only when Status is "approved").

## Frequently asked questions

### Do I need to know how to code?

No. For Google Sheets you paste the script above and fill in four blanks. For Zapier or Make, you use their visual builder.

### Where do I find the Webhook URL?

Open your flow, click the **Start** block, choose **Webhook**, and **Save**. The URL appears with a **Copy** button. (You must save the flow at least once so it has a URL.)

### Can I send the customer's name or other details?

Yes — anything you put in `variables` (or any column in your sheet) can be used in the flow's messages, like `{{name}}`.

### Will it message a row that a form or another tool added?

Yes. Typing a row sends it **instantly**; a row added by a Google Form, Zapier, your CRM, or an import is picked up by the **every-few-minutes check** — so it still sends, just within a few minutes.

### How do I make sure no one is messaged twice?

The script adds a **"Waplify Sent"** column and ticks off each row after sending, so a row is only ever sent once. To send a row again, clear its "Waplify Sent" cell.

### What if the contact isn't saved in Waplify yet?

The flow still runs using the details you sent. It's a great way to greet brand-new leads the moment they appear in your sheet.

### Will a big import send hundreds of messages at once?

Each call starts one flow, and there's a sending limit to protect your account. For large lists, add them in smaller batches.

### My flow didn't start — what should I check?

Make sure the flow is **published**, the **Webhook** trigger is on the Start block, your **API key** is correct, and the **phone number** includes the country code.
