---
title: Send WhatsApp from Google Sheets
description: Connect a Google Sheet to Waplify so a WhatsApp flow starts automatically when a row is added or changed — set up with a friendly popup, no coding
sidebar_position: 7.5
keywords: [Google Sheets WhatsApp, send WhatsApp from spreadsheet, Google Sheets automation WhatsApp, Waplify Google Sheets add-on, WhatsApp on new row]
---

<!-- Source files live in the repo at google-apps-script/waplify-sheets/ (Code.gs + Settings.html). If you change them there, update the two code blocks at the bottom of this page too. -->

## What this does

Connect a Google Sheet to Waplify and a WhatsApp flow starts **on its own** whenever a row is added or changed — for example, a new lead lands in your sheet, or a row's **Status** turns to "approved", and the customer gets a WhatsApp message automatically.

Once it's set up, you never touch the code again. All the settings — which tab, which column has the phone number, when to send — live in a simple **popup form** inside your sheet (**⚡ Waplify → Settings**).

:::tip Two ways to set up
**Easiest:** make a copy of a ready-made sheet — the script is already inside it, nothing to paste (see **Fastest setup** just below). Prefer to build it yourself? The **manual** steps are further down. Either way, you finish in a friendly popup — no code editing.
:::

## Before you start

You need two things from Waplify. Both take a minute:

1. **A Webhook URL** — open your flow, click the **Start** block, choose **Webhook**, and **Save**. A link appears with a **Copy** button. (See [Start a Flow from Another Tool](./start-a-flow-from-another-tool.md) for the full trigger setup.)
2. **An API key** — go to **Developers → API keys**, create one, and copy it. Keep it private, like a password.

Also make sure your sheet's **row 1 has headers**, and one of those columns holds the **phone number** in international format (for example `+14155551234`).

## Fastest setup: make a copy

The quickest way — the script is already built into a ready-made sheet, so there's **nothing to paste**.

1. Open this link: **[Make a copy of the Waplify sheet »](https://docs.google.com/spreadsheets/d/1TZwR4CsER8DlczE9I0dLaslMEUU2QDd4qS1F3yZfZ-g/copy)**
2. Click the blue **Make a copy** button. You now have your own sheet with the **⚡ Waplify** menu built in.
3. Continue to **Configure it** below — paste your Webhook URL and API key, pick your tab and phone column, then Save.

<!-- screenshot: Google's "Copy document?" prompt with the Make a copy button -->

That's it — you can **skip the manual steps** below. (Use them only if you'd rather paste the code into your own existing sheet.)

## Set it up manually (paste the code)

*Skip this if you used **Make a copy** above.* To build it into your own existing sheet, paste the two files by hand:

### 1. Open the script editor

In your Google Sheet, click **Extensions → Apps Script**. A new tab opens.

<!-- screenshot: Google Sheets Extensions menu with Apps Script highlighted -->

### 2. Add the two files

1. In the editor, there's already a file called **`Code.gs`**. Delete anything inside it and paste the **Code.gs** file from the bottom of this page.
2. Click the **+** next to "Files" and choose **HTML**. Name it **`Settings`** (Apps Script adds the `.html` for you). Paste the **Settings.html** file from the bottom of this page into it.
3. Click **Save** (the disk icon).

<!-- screenshot: Apps Script editor showing Code.gs and Settings.html files -->

### 3. Reload your sheet

Go back to your spreadsheet tab and **refresh the page**. After a few seconds a new **⚡ Waplify** menu appears at the top, next to **Help**.

<!-- screenshot: Google Sheets menu bar showing the ⚡ Waplify menu -->

That's the one-time part done. Everything else happens in the popup.

## Configure it (the ⚡ Waplify menu)

Click **⚡ Waplify → Settings**. The first time, Google will ask you to **allow the script** — this is the normal "unverified app" screen, because the script runs privately inside your own account and isn't published to the Google store. Click through **Advanced → Go to (your project) → Allow**.

The popup has four short sections:

| Section | What to fill in |
| --- | --- |
| **1 · Connect to Waplify** | Paste your **Webhook URL** and **API key**. |
| **2 · Your sheet** | Choose **which tab** to watch and **which column** holds the phone number. Both are dropdowns — or type the name if it's not listed. |
| **3 · When to send** | Turn on one or both: **When someone edits the sheet** (sends instantly) and **Automatically, on a timer** (also catches rows added by a Form, Zapier, or an import). |
| **4 · Rules** | Optional. Send only when a column matches — for example **Status** *is* `approved`. Add more rules and **all** of them must match. |

Click **Save & turn on**. Waplify starts watching your sheet right away.

<!-- screenshot: The Waplify settings popup with the four sections filled in -->

### The other menu items

- **Send test** — checks your Webhook URL and API key are correct **and** sends Waplify a sample built from your **real columns** (Full name, Email, Status…), so you can pick those fields in your flow's messages. It uses a fake phone number, so nothing is actually delivered.
- **Turn on / Turn off** — pause or resume sending without losing your settings. "Turn off" stops all sending; "Turn on" starts it again from your saved settings.
- **Setup guide** — opens this page.
- **Open Waplify dashboard** — jumps to [app.waplify.io](https://app.waplify.io).
- **Help & contact us** — opens the [Waplify contact page](https://waplify.io/contact).

## How it decides to send

- A row is sent only when your **Rules** match (for example `Status = approved`). No rules means every row with a phone number is sent.
- Each row is sent **once**. Waplify adds a **"Waplify Sent"** column and ticks off rows it has handled, so **no one is messaged twice**. You don't need to create this column — it appears automatically.
- On first setup, your **existing** rows are marked as already-sent, so it won't message your whole list at once. Only rows added or changed *from now on* are sent. (To re-send a row, clear its "Waplify Sent" cell.)
- Every column becomes a variable in your flow — use `{{Name}}`, `{{Status}}`, and so on in your messages to make them personal.

## Troubleshooting

### "This is a Google sign-in issue" when opening Settings

If the popup shows a red note about **PERMISSION_DENIED** or *"reading from storage"*, this is a **Google sign-in / browser issue — not a Waplify problem**. Google is blocking the popup from reading your sheet. Try any one of these:

- Open the sheet in a window signed into **only one** Google account.
- Allow third-party cookies (or turn off strict tracking protection) for Google.
- Try Google Chrome, or an Incognito window with just this account.

Your settings are safe — you can also just **type the tab and column names by hand** in the popup and Save.

### The ⚡ Waplify menu didn't appear

Refresh the spreadsheet page and wait a few seconds. If it still doesn't show, re-open **Extensions → Apps Script** and confirm both files (`Code.gs` and `Settings`) are saved.

### Messages aren't sending

- Click **⚡ Waplify → Send test**. If it shows **HTTP 200**, your URL and key are correct.
- Make sure the flow is **published** and the **Webhook** trigger is on the Start block.
- Check the phone number includes the **country code**.
- Confirm your **Rules** actually match the row (for example, the Status is exactly `approved`).

## Frequently asked questions

### Do I need to know how to code?

No. You paste two files once, then everything is done from the popup form. You never edit the code again.

### Why is there an "unverified app" warning?

Because the script runs **privately inside your own Google account** and isn't published to the Google Workspace store. It's safe to allow — it only does what you set up in the popup.

### Can I change the settings later?

Yes — open **⚡ Waplify → Settings** anytime, change what you need, and **Save**. There's no need to touch the code.

### Will it message rows added by a Google Form or an import?

Yes, if you turn on **Automatically, on a timer**. Rows you type by hand send **instantly**; rows added by a Form, Zapier, or an import are picked up on the next timer check.

### How do I make sure no one is messaged twice?

The **"Waplify Sent"** column tracks every row that's been sent, so each row only goes once. To send a row again, clear its "Waplify Sent" cell.

### How do I pause it?

**⚡ Waplify → Turn off** stops all sending and keeps your settings. **Turn on** resumes.

## The two files (copy these once)

Paste these into the Apps Script editor as described in **Set it up** above.

### File 1 — `Code.gs`

```javascript
/**
 * Waplify → WhatsApp: start a flow when a Google Sheet row is added or changed.
 *
 * Settings live in a popup (⚡ Waplify → Settings) — no code editing needed.
 * Nothing is published to the Google Workspace Marketplace; this runs entirely
 * inside the user's own Apps Script. The only one-time step is authorising the
 * script (the normal "unverified app" screen).
 */

var STORE_KEY = 'WAPLIFY_CONFIG';

// Links used by the menu. Change here if the pages ever move.
var SETUP_GUIDE_URL = 'https://docs.waplify.io/docs/flows-v2/google-sheets-to-whatsapp';
var DASHBOARD_URL   = 'https://app.waplify.io';
var CONTACT_URL     = 'https://waplify.io/contact';

/* ---------- menu + popup ---------- */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ Waplify')
    .addItem('Settings', 'showWaplifySettings')
    .addItem('Send test', 'sendWaplifyTest')
    .addSeparator()
    .addItem('Turn on', 'enableWaplify')
    .addItem('Turn off', 'disableWaplify')
    .addSeparator()
    .addItem('Setup guide', 'openWaplifySetupGuide')
    .addItem('Open Waplify dashboard', 'openWaplifyDashboard')
    .addItem('Help & contact us', 'openWaplifyContact')
    .addToUi();
}
function onInstall() { onOpen(); }

function openWaplifySetupGuide() { openUrl_(SETUP_GUIDE_URL, 'Waplify setup guide'); }
function openWaplifyDashboard()  { openUrl_(DASHBOARD_URL, 'Open Waplify'); }
function openWaplifyContact()    { openUrl_(CONTACT_URL, 'Help & contact Waplify'); }

function openUrl_(url, title) {
  var safe = url.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  var html = HtmlService.createHtmlOutput(
    '<!DOCTYPE html><html><head><base target="_blank">' +
    '<style>' +
      'body{margin:0;font-family:-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#0f172a;padding:18px;font-size:13px}' +
      'p{margin:0 0 14px;line-height:1.5}' +
      'a.btn{display:block;text-align:center;background:#1ecc5e;color:#fff;text-decoration:none;font-weight:700;padding:12px;border-radius:9px}' +
      'a.btn:hover{background:#16a34a}' +
      '.u{margin-top:12px;font-size:11px;color:#64748b;word-break:break-all}' +
    '</style></head><body>' +
      '<p>Click below to open this page in a new tab:</p>' +
      '<a class="btn" href="' + safe + '" target="_blank" rel="noopener">Open ↗</a>' +
      '<div class="u">' + safe + '</div>' +
    '</body></html>'
  ).setWidth(340).setHeight(170);
  SpreadsheetApp.getUi().showModalDialog(html, title || 'Waplify');
}

function showWaplifySettings() {
  var html = HtmlService.createHtmlOutputFromFile('Settings').setWidth(470).setHeight(640);
  SpreadsheetApp.getUi().showModalDialog(html, 'Waplify settings');
}

/* ---------- config (stored on the spreadsheet, not in code) ---------- */

function getWaplifyConfig() {
  var raw = PropertiesService.getDocumentProperties().getProperty(STORE_KEY);
  return raw ? JSON.parse(raw) : defaultConfig_();
}
function defaultConfig_() {
  return {
    webhookUrl: '', apiKey: '', sheetName: '', phoneHeader: 'Phone',
    watchColumn: '', sentColumn: 'Waplify Sent',
    onEdit: true, schedule: true, pollMinutes: 1, maxPerRun: 50,
    conditions: [{ column: 'Status', op: 'equals', value: 'approved' }]
  };
}

function getWaplifyInit() {
  return { config: getWaplifyConfig(), meta: getSheetMeta() };
}
function getSheetMeta() {
  var ss = SpreadsheetApp.getActive();
  var tabs = [], headersByTab = {};
  ss.getSheets().forEach(function (s) {
    var name = s.getName();
    tabs.push(name);
    var lastCol = s.getLastColumn();
    headersByTab[name] = lastCol
      ? s.getRange(1, 1, 1, lastCol).getValues()[0]
          .map(function (h) { return String(h).trim(); })
          .filter(function (h) { return h; })
      : [];
  });
  return { tabs: tabs, headersByTab: headersByTab };
}

function saveWaplifyConfig(cfg) {
  if (!cfg.webhookUrl || !cfg.apiKey) throw new Error('Webhook URL and API key are required.');
  var props = PropertiesService.getDocumentProperties();
  var firstTime = !props.getProperty(STORE_KEY);
  props.setProperty(STORE_KEY, JSON.stringify(cfg));
  installTriggers_(cfg);
  var sheet = getSheet_(cfg);
  if (sheet) ensureSentColumn_(sheet, readHeaders_(sheet), cfg);
  if (firstTime) markExistingReadyRowsAsSent_(cfg);
  var col = cfg.sentColumn || 'Waplify Sent';
  return firstTime
    ? 'Saved. A “' + col + '” column was added to remember what\'s been sent, and your existing rows are marked as already-sent — so only new or changed rows will send from now on.'
    : 'Saved. Waplify is watching your sheet.';
}

function enableWaplify() {
  var cfg = getWaplifyConfig();
  if (!cfg.webhookUrl || !cfg.apiKey) {
    SpreadsheetApp.getUi().alert('Add your details first — open ⚡ Waplify → Settings, fill it in, and Save.');
    return;
  }
  installTriggers_(cfg);
  SpreadsheetApp.getActive().toast('Waplify is on — it will send messages again.');
}

function disableWaplify() {
  removeTriggers_();
  SpreadsheetApp.getActive().toast('Waplify is turned off — no messages will be sent.');
}

function installTriggers_(cfg) {
  removeTriggers_();
  if (cfg.onEdit)
    ScriptApp.newTrigger('waplifyOnEdit').forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
  if (cfg.schedule)
    ScriptApp.newTrigger('waplifyPoll').timeBased().everyMinutes(Number(cfg.pollMinutes) || 5).create();
}
function removeTriggers_() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    var fn = t.getHandlerFunction();
    if (fn === 'waplifyOnEdit' || fn === 'waplifyPoll') ScriptApp.deleteTrigger(t);
  });
}

/* ---------- triggers ---------- */

function waplifyOnEdit(e) {
  var cfg = getWaplifyConfig();
  var sheet = e.range.getSheet();
  if (cfg.sheetName && sheet.getName() !== cfg.sheetName) return;
  var row = e.range.getRow();
  if (row === 1) return;
  var headers = readHeaders_(sheet);
  if (cfg.watchColumn) {
    var wi = headers.indexOf(cfg.watchColumn);
    if (wi === -1 || e.range.getColumn() !== wi + 1) return;
  }
  var sentIdx = ensureSentColumn_(sheet, headers, cfg);
  var rowData = rowToObject_(headers, sheet.getRange(row, 1, 1, headers.length).getValues()[0]);
  if (!shouldSend_(rowData, cfg)) return;
  if (postRow_(rowData, cfg)) sheet.getRange(row, sentIdx + 1).setValue(new Date());
}

function waplifyPoll() {
  var cfg = getWaplifyConfig();
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    var sheet = getSheet_(cfg);
    if (!sheet || sheet.getLastRow() < 2) return;
    var headers = readHeaders_(sheet);
    var sentIdx = ensureSentColumn_(sheet, headers, cfg);
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    var max = Number(cfg.maxPerRun) || 50, sent = 0;
    for (var i = 0; i < data.length && sent < max; i++) {
      var rowData = rowToObject_(headers, data[i]);
      if (!shouldSend_(rowData, cfg)) continue;
      if (postRow_(rowData, cfg)) { sheet.getRange(2 + i, sentIdx + 1).setValue(new Date()); sent++; }
    }
  } finally { lock.releaseLock(); }
}

/* ---------- engine ---------- */

function shouldSend_(rowData, cfg) {
  if (rowData[cfg.sentColumn]) return false;      // already sent
  if (!rowData[cfg.phoneHeader]) return false;    // no phone
  return (cfg.conditions || []).every(function (c) { return conditionMatches_(rowData, c); });
}

function conditionMatches_(rowData, c) {
  var s = String(rowData[c.column] == null ? '' : rowData[c.column]).trim();
  var num = Number(s.replace(/,/g, ''));
  var val = String(c.value == null ? '' : c.value).trim();
  switch (c.op) {
    case 'atLeast':  return !isNaN(num) && num >= Number(val);
    case 'atMost':   return !isNaN(num) && num <= Number(val);
    case 'contains': return s.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    case 'filled':   return s !== '';
    case 'equals':
    default:
      if (!isNaN(num) && val !== '' && !isNaN(Number(val))) return num === Number(val);
      return s.toLowerCase() === val.toLowerCase();
  }
}

function postRow_(rowData, cfg) {
  var res = UrlFetchApp.fetch(cfg.webhookUrl, {
    method: 'post', contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + cfg.apiKey },
    muteHttpExceptions: true,
    payload: JSON.stringify({ phone: String(rowData[cfg.phoneHeader]), variables: rowVariables_(rowData, cfg) })
  });
  var code = res.getResponseCode();
  var body = {};
  try { body = JSON.parse(res.getContentText() || '{}'); } catch (err) { body = {}; }
  if (code >= 200 && code < 300 && body.started === true) return true;
  Logger.log('Waplify: "' + String(rowData[cfg.phoneHeader]) + '" NOT sent (HTTP ' + code + ') — '
    + (body.message || res.getContentText() || 'no response'));
  return false;
}

function rowVariables_(rowData, cfg) {
  var sent = cfg.sentColumn || 'Waplify Sent';
  var out = {};
  Object.keys(rowData).forEach(function (k) { if (k !== sent) out[k] = rowData[k]; });
  return out;
}

function sampleVariables_(cfg) {
  var sheet = getSheet_(cfg);
  if (!sheet) return null;
  var headers = readHeaders_(sheet).filter(function (h) { return h; });
  var sentName = cfg.sentColumn || 'Waplify Sent';
  var dataHeaders = headers.filter(function (h) { return h !== sentName; });
  if (!dataHeaders.length) return null;
  var row = sheet.getLastRow() >= 2
    ? rowToObject_(readHeaders_(sheet), sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0])
    : {};
  var out = {};
  dataHeaders.forEach(function (h) {
    var v = row[h];
    out[h] = (v === '' || v == null) ? ('Sample ' + h) : v;
  });
  return out;
}

function sendWaplifyTest() {
  var cfg = getWaplifyConfig();
  var ui = SpreadsheetApp.getUi();
  if (!cfg.webhookUrl || !cfg.apiKey) { ui.alert('Open ⚡ Waplify → Settings first.'); return; }
  var variables = sampleVariables_(cfg) || { name: 'Test', note: 'Waplify connection test' };
  var res = UrlFetchApp.fetch(cfg.webhookUrl, {
    method: 'post', contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + cfg.apiKey }, muteHttpExceptions: true,
    payload: JSON.stringify({ phone: '+10000000000', variables: variables })
  });
  var fields = Object.keys(variables);
  ui.alert('Sample sent — HTTP ' + res.getResponseCode() + '\n\n'
    + 'Waplify captured these fields from your sheet:\n• ' + fields.join('\n• ')
    + '\n\nOpen your flow in Waplify — you can now pick them (like {{' + fields[0] + '}}) in your messages.'
    + '\n\n(200 = your URL + API key work. The fake phone number won\'t deliver — that\'s expected.)');
}

function markExistingReadyRowsAsSent_(cfg) {
  var sheet = getSheet_(cfg);
  if (!sheet || sheet.getLastRow() < 2) return;
  var headers = readHeaders_(sheet);
  var sentIdx = ensureSentColumn_(sheet, headers, cfg);
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  for (var i = 0; i < data.length; i++) {
    var rowData = rowToObject_(headers, data[i]);
    var matches = rowData[cfg.phoneHeader] &&
      (cfg.conditions || []).every(function (c) { return conditionMatches_(rowData, c); });
    if (!rowData[cfg.sentColumn] && matches)
      sheet.getRange(2 + i, sentIdx + 1).setValue('(existing — not sent)');
  }
}

/* ---------- helpers ---------- */

function getSheet_(cfg) { var ss = SpreadsheetApp.getActive(); return cfg.sheetName ? ss.getSheetByName(cfg.sheetName) : ss.getSheets()[0]; }
function readHeaders_(sheet) { return sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0].map(function (h) { return String(h).trim(); }); }
function rowToObject_(headers, values) { var o = {}; headers.forEach(function (h, i) { if (h) o[h] = values[i]; }); return o; }
function ensureSentColumn_(sheet, headers, cfg) {
  var name = cfg.sentColumn || 'Waplify Sent';
  var idx = headers.indexOf(name);
  if (idx === -1) { idx = headers.length; sheet.getRange(1, idx + 1).setValue(name); headers.push(name); }
  return idx;
}
function nonEmpty_(v) { return String(v == null ? '' : v).trim() !== ''; }
```

### File 2 — `Settings` (an HTML file)

```html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<style>
  :root { --brand:#1ecc5e; --brand-dark:#16a34a; --ink:#0f172a; --muted:#64748b; --line:#e2e8f0; }
  * { box-sizing:border-box; font-family:-apple-system,"Segoe UI",Roboto,Arial,sans-serif; }
  body { margin:0; color:var(--ink); font-size:13px; background:#fff; }
  .head { display:flex; align-items:center; gap:11px; padding:16px 18px 14px; border-bottom:1px solid var(--line); }
  .head .logo { flex:none; width:32px; height:32px; display:flex; align-items:center; justify-content:center;
    background:rgba(30,204,94,.12); color:var(--brand-dark); border-radius:9px; font-size:17px; }
  .head h3 { margin:0; font-size:15px; font-weight:700; color:var(--ink); }
  .head p { margin:2px 0 0; font-size:12px; color:var(--muted); }
  .body { padding:14px 18px 18px; }
  .sec { font-size:11px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; color:var(--muted); margin:18px 0 8px; }
  .sec:first-child { margin-top:0; }
  label { display:block; font-weight:600; margin:10px 0 4px; font-size:12.5px; }
  .hint { font-weight:400; color:#94a3b8; font-size:11px; }
  .req { color:#dc2626; font-weight:700; margin-left:1px; }
  .desc { color:var(--muted); font-size:11.5px; margin:0 0 6px; line-height:1.45; }
  .secdesc { color:var(--muted); font-size:11.5px; margin:-4px 0 8px; line-height:1.45; }
  .note { color:var(--muted); font-size:11.5px; line-height:1.45; margin-top:16px; background:#f8fafc; border:1px solid var(--line); border-radius:8px; padding:9px 11px; }
  input[type=text], input[type=password], select {
    width:100%; padding:8px 10px; border:1px solid var(--line); border-radius:8px; font-size:13px; background:#fff; color:var(--ink);
  }
  input:focus, select:focus { outline:none; border-color:var(--brand); box-shadow:0 0 0 3px rgba(30,204,94,.15); }
  .combo { display:block; width:100%; }
  .combo-inp { margin-top:6px; }
  .opt { border:1px solid var(--line); border-radius:10px; padding:11px 12px; margin-top:8px; transition:.15s; }
  .opt.on { border-color:var(--brand); background:rgba(30,204,94,.05); }
  .toggle { display:flex; align-items:flex-start; gap:9px; cursor:pointer; }
  .toggle input { margin-top:2px; width:16px; height:16px; accent-color:var(--brand); flex:none; }
  .toggle .t { font-weight:600; display:block; } .toggle .d { color:var(--muted); font-size:11.5px; display:block; margin-top:1px; }
  .sub { margin-top:12px; display:none; }
  .opt.on .sub { display:block; }
  .cond { display:flex; gap:6px; margin-bottom:8px; align-items:flex-start; }
  .cond .combo { flex:1.3; min-width:0; } .cond .c-op { flex:1.2; min-width:0; } .cond .c-val { flex:1; min-width:0; }
  .cond .x { border:none; background:#f1f5f9; border-radius:8px; padding:9px 11px; cursor:pointer; color:var(--muted); font-size:14px; flex:none; }
  .add { background:#fff; border:1px dashed var(--line); border-radius:8px; padding:8px; width:100%; cursor:pointer; color:#475569; font-weight:600; margin-top:2px; }
  .add:hover { border-color:var(--brand); color:var(--brand-dark); }
  .actions { display:flex; gap:10px; margin-top:20px; }
  .btn { flex:1; padding:11px; border:none; border-radius:9px; font-weight:700; cursor:pointer; font-size:13px; }
  .primary { background:var(--brand); color:#fff; } .primary:hover { background:var(--brand-dark); } .primary:disabled { opacity:.6; cursor:default; }
  .ghost { background:#f1f5f9; color:#334155; }
  #status { margin-top:10px; font-size:12px; min-height:16px; }
  .ok { color:var(--brand-dark); } .err { color:#dc2626; }
</style>
</head>
<body>
  <div class="head">
    <span class="logo">⚡</span>
    <div>
      <h3>Waplify → WhatsApp</h3>
      <p>Send a WhatsApp message when a row is added or changed.</p>
    </div>
  </div>
  <div id="err" style="display:none;background:#fef2f2;color:#b91c1c;padding:10px 18px;font-size:12px;line-height:1.45;"></div>
  <div class="body">

    <div class="sec">1 · Connect to Waplify</div>
    <label>Webhook URL <span class="req">*</span></label>
    <p class="desc">In Waplify: your flow → <b>Start</b> block → <b>Webhook</b> → copy the link.</p>
    <input type="text" id="webhookUrl" placeholder="https://app.waplify.io/api/v1/flows/…/trigger">
    <label>Waplify API key <span class="req">*</span></label>
    <p class="desc">In Waplify: <b>Developers → API keys</b>. Keep it private.</p>
    <input type="password" id="apiKey" placeholder="wapl_…">

    <div class="sec">2 · Your sheet</div>
    <label>Which tab? <span class="req">*</span></label>
    <div id="sheetNameSlot"></div>
    <label>Phone number column <span class="req">*</span></label>
    <p class="desc">The column with the WhatsApp number, e.g. <b>+9198…</b></p>
    <div id="phoneHeaderSlot"></div>

    <div class="sec">3 · When to send</div>
    <p class="secdesc">Turn on one or both.</p>
    <div class="opt" id="editOpt">
      <label class="toggle"><input type="checkbox" id="onEdit">
        <span><span class="t">When someone edits the sheet</span>
        <span class="d">Sends instantly when a person fills in or changes a row.</span></span></label>
      <div class="sub">
        <label>Only when this column changes <span class="hint">(optional)</span></label>
        <div id="watchColumnSlot"></div>
      </div>
    </div>
    <div class="opt" id="schedOpt">
      <label class="toggle"><input type="checkbox" id="schedule">
        <span><span class="t">Automatically, on a timer</span>
        <span class="d">Also catches rows added by a Form, Zapier, or an import.</span></span></label>
      <div class="sub">
        <label>Check for new rows every</label>
        <select id="pollMinutes">
          <option value="1">1 minute</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
        </select>
      </div>
    </div>

    <div class="sec">4 · Rules <span class="hint" style="text-transform:none;font-weight:400;letter-spacing:0">— send only when all match</span></div>
    <div id="conds"></div>
    <button class="add" onclick="addCond()">+ Add a rule</button>

    <p class="note">ℹ️ Waplify adds a “Waplify Sent” column to your sheet so no one is messaged twice — you don't need to create it.</p>

    <div class="actions">
      <button class="btn ghost" onclick="google.script.host.close()">Cancel</button>
      <button class="btn primary" id="saveBtn" onclick="save()">Save &amp; turn on</button>
    </div>
    <div id="status"></div>
  </div>

<script>
  var META = { tabs: [], headersByTab: {} };
  var OPS = [['equals','is'], ['contains','contains'], ['atLeast','is at least'], ['atMost','is at most'], ['filled','is filled in']];
  var TYPE = '__type__';

  function makeCombo(placeholder, anyLabel, onChange) {
    var wrap = document.createElement('span'); wrap.className = 'combo';
    var sel = document.createElement('select'); sel.className = 'combo-sel';
    var inp = document.createElement('input'); inp.type = 'text'; inp.className = 'combo-inp'; inp.placeholder = placeholder; inp.style.display = 'none';
    wrap.appendChild(sel); wrap.appendChild(inp);
    function sync() { inp.style.display = (sel.value === TYPE) ? 'block' : 'none'; }
    function render(cols, value) {
      cols = cols || [];
      sel.innerHTML = '';
      if (anyLabel) sel.add(new Option(anyLabel, ''));
      cols.forEach(function (c) { sel.add(new Option(c, c)); });
      sel.add(new Option('✏️ Type a name…', TYPE));
      var known = (value === '' && anyLabel) || cols.indexOf(value) !== -1;
      if (cols.length && known) { sel.value = value || ''; }
      else if (!value && anyLabel) { sel.value = ''; }
      else { sel.value = TYPE; inp.value = value || ''; }
      sync();
    }
    sel.addEventListener('change', function () { sync(); if (sel.value === TYPE) inp.focus(); if (onChange) onChange(); });
    inp.addEventListener('input', function () { if (onChange) onChange(); });
    return { el: wrap, render: render, get: function () { return sel.value === TYPE ? inp.value.trim() : sel.value; } };
  }

  var tabCombo, phoneCombo, watchCombo;

  function currentCols() { return META.headersByTab[tabCombo.get()] || []; }
  function condDivs() { return [].slice.call(document.querySelectorAll('#conds .cond')); }
  function refreshCols() {
    var cols = currentCols();
    phoneCombo.render(cols, phoneCombo.get());
    watchCombo.render(cols, watchCombo.get());
    condDivs().forEach(function (d) { d._combo.render(cols, d._combo.get()); });
  }

  function condRow(c) {
    c = c || { column: '', op: 'equals', value: '' };
    var d = document.createElement('div'); d.className = 'cond';
    var combo = makeCombo('Type column', null);
    combo.render(currentCols(), c.column);
    d._combo = combo;
    var op = document.createElement('select'); op.className = 'c-op';
    OPS.forEach(function (o) { op.add(new Option(o[1], o[0], false, o[0] === c.op)); });
    var val = document.createElement('input'); val.type = 'text'; val.placeholder = 'Value'; val.value = c.value; val.className = 'c-val';
    var x = document.createElement('button'); x.className = 'x'; x.textContent = '✕'; x.title = 'Remove'; x.onclick = function () { d.remove(); };
    d.appendChild(combo.el); d.appendChild(op); d.appendChild(val); d.appendChild(x);
    return d;
  }
  function addCond(c) { document.getElementById('conds').appendChild(condRow(c)); }

  function init(data) {
    META = data.meta || META;
    var cfg = data.config || {};
    document.getElementById('webhookUrl').value = cfg.webhookUrl || '';
    document.getElementById('apiKey').value = cfg.apiKey || '';

    tabCombo = makeCombo('Type tab name', null, refreshCols);
    document.getElementById('sheetNameSlot').appendChild(tabCombo.el);
    tabCombo.render(META.tabs, cfg.sheetName || META.tabs[0] || '');

    phoneCombo = makeCombo('Type column name', null);
    document.getElementById('phoneHeaderSlot').appendChild(phoneCombo.el);
    phoneCombo.render(currentCols(), cfg.phoneHeader || 'Phone');

    watchCombo = makeCombo('Type column name', 'Any column');
    document.getElementById('watchColumnSlot').appendChild(watchCombo.el);
    watchCombo.render(currentCols(), cfg.watchColumn || '');

    document.getElementById('onEdit').checked = cfg.onEdit !== false;
    document.getElementById('schedule').checked = cfg.schedule !== false;
    document.getElementById('pollMinutes').value = String(cfg.pollMinutes || 1);

    var conds = (cfg.conditions && cfg.conditions.length) ? cfg.conditions : [{ column: '', op: 'equals', value: '' }];
    conds.forEach(addCond);
    syncOpt();
  }

  function syncOpt() {
    document.getElementById('editOpt').classList.toggle('on', document.getElementById('onEdit').checked);
    document.getElementById('schedOpt').classList.toggle('on', document.getElementById('schedule').checked);
  }
  document.addEventListener('change', function (e) { if (e.target.id === 'onEdit' || e.target.id === 'schedule') syncOpt(); });

  function v(id) { return document.getElementById(id).value.trim(); }
  function collect() {
    var conds = condDivs().map(function (d) {
      return { column: d._combo.get(), op: d.querySelector('.c-op').value, value: d.querySelector('.c-val').value.trim() };
    }).filter(function (c) { return c.column; });
    return {
      webhookUrl: v('webhookUrl'), apiKey: v('apiKey'),
      sheetName: tabCombo.get(), phoneHeader: phoneCombo.get(),
      watchColumn: watchCombo.get(), sentColumn: 'Waplify Sent',
      onEdit: document.getElementById('onEdit').checked,
      schedule: document.getElementById('schedule').checked,
      pollMinutes: Number(document.getElementById('pollMinutes').value),
      maxPerRun: 50, conditions: conds
    };
  }

  function setStatus(t, c) { var s = document.getElementById('status'); s.textContent = t; s.className = c || ''; }
  function save() {
    var cfg = collect();
    if (!cfg.webhookUrl || !cfg.apiKey) { setStatus('Add your Webhook URL and API key first.', 'err'); return; }
    if (!cfg.sheetName) { setStatus('Choose or type which tab to use.', 'err'); return; }
    if (!cfg.phoneHeader) { setStatus('Choose or type the phone number column.', 'err'); return; }
    var btn = document.getElementById('saveBtn'); btn.disabled = true; setStatus('Saving…', '');
    google.script.run
      .withSuccessHandler(function (msg) { setStatus(msg, 'ok'); setTimeout(google.script.host.close, 1400); })
      .withFailureHandler(function (e) { setStatus(e.message || 'Something went wrong.', 'err'); btn.disabled = false; })
      .saveWaplifyConfig(cfg);
  }

  google.script.run
    .withSuccessHandler(init)
    .withFailureHandler(function (e) {
      var msg = (e && e.message) ? e.message : String(e);
      var isGoogleStorage = /PERMISSION_DENIED|reading from storage/i.test(msg);
      var b = document.getElementById('err');
      b.style.display = 'block';
      if (isGoogleStorage) {
        b.innerHTML =
          '<b>Heads up — this is a Google sign-in issue, not a Waplify problem.</b> Waplify is working fine. ' +
          'Google blocked this popup from reading your sheet’s tabs and columns — usually because you’re signed into ' +
          'more than one Google account at once, or your browser is blocking Google’s cookies.' +
          '<div style="margin-top:7px"><b>How to fix it</b> (try any one):</div>' +
          '<ul style="margin:4px 0 0 18px;padding:0">' +
            '<li>Open this sheet in a browser signed into <b>only one</b> Google account</li>' +
            '<li>Allow third-party cookies (or turn off strict tracking protection) for Google</li>' +
            '<li>Or use Google Chrome / an Incognito window with just this account</li>' +
          '</ul>' +
          '<div style="margin-top:7px;opacity:.85">Nothing is broken — you can also just type your tab and column names by hand below and hit <b>Save</b>.</div>' +
          '<div style="margin-top:7px;opacity:.55;font-size:11px">Technical detail (for support): ' + msg + '</div>';
      } else {
        b.innerHTML =
          'Couldn’t auto-load your tabs &amp; columns from Google — no problem, just type the names by hand below and Save.' +
          '<div style="margin-top:6px;opacity:.6;font-size:11px">Technical detail: ' + msg + '</div>';
      }
      init({ config: {}, meta: { tabs: [], headersByTab: {} } });
    })
    .getWaplifyInit();
</script>
</body>
</html>
```
