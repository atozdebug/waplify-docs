---
title: Developer Tools
description: API keys, webhooks and delivery logs — the Developers section of Waplify, explained for non-developers too
sidebar_position: 3
keywords: [Waplify API key, WhatsApp webhook, webhook logs, API logs, export logs, developer settings]
---

## What is the Developers section?

**Developers** is where Waplify connects to software rather than to people. It holds the keys other systems use to talk to Waplify, the webhooks Waplify uses to tell other systems what happened, and the logs that show whether any of it worked.

You don't need to be a developer to use parts of it — creating an API key is a normal step when setting up the [Google Sheets add-on](/docs/flows-v2/google-sheets-to-whatsapp) or connecting another tool. But the logs are there for whoever builds your integration.

Find it under **Developers** in the main menu. It has five tabs.

## API Keys

An **API key** is a long secret string that lets another system act on your Waplify account — create contacts, send campaigns, assign chats. Treat it exactly like a password.

**To create one:**

1. Go to **Developers → API Keys**.
2. Click **Generate New API Key**.
3. Give it a **name** describing where it will be used — `Google Sheet`, `Website form`, `Zapier`. Future you will want to know which is which.
4. Copy the key that appears.

<!-- screenshot: the API Keys tab with the generated key dialog -->

:::warning
Copy the key immediately. It's shown **once**, right after it's generated — Waplify can't show it to you again. Lose it and you'll need to delete that key and make a new one.
:::

**To revoke one:** click **Delete** next to it. Anything using that key stops working right away, so check what depends on it first.

For what you can do with a key, see the [API reference](/api/authentication).

## Webhooks

A **webhook** is the reverse of an API key. Instead of another system asking Waplify for information, Waplify pushes information *to* that system the moment something happens — a message was delivered, a customer tapped a button, a campaign finished.

**To add one:**

1. Go to **Developers → Webhooks** and add an endpoint.
2. Paste the **URL** that should receive the events — your server, or a tool like Zapier or Make.
3. Choose which **events** to send.
4. Set the **request timeout** if you need to, and make sure the endpoint is **enabled**.

<!-- screenshot: adding a webhook endpoint with event selection -->

You can disable an endpoint temporarily instead of deleting it — useful while your server is down for maintenance.

## Webhook Logs

Every event Waplify tried to deliver, and what came back.

Each entry shows the **event type**, the **endpoint**, the **status** (delivered, pending or failed), the **response code** your server returned, how many times Waplify **retried**, and the full **payload** that was sent.

Filter by endpoint, event type or status to find what you're after.

**This is the first place to look when an integration "isn't working."** It tells you whether Waplify sent the event at all, and if it did, what the other system said back. A failed status with an error message usually points straight at the problem.

## API Logs

The mirror image: every request another system made **to** Waplify using your API keys.

Each entry shows the **method** (POST, PATCH, DELETE), the **endpoint** called, the **status**, how long it took (**duration**), the **IP address** it came from, which **API key** was used, and the **request body** — plus an **error message** and **request ID** when something failed.

Use it when someone says "I sent it and nothing happened": if there's no log entry, the request never arrived, and the problem is on their side.

## Export Requests

Logs are only useful if you can get them out. **Export Requests** lets you export **API logs** or **webhook logs** to a file.

Set your **filters** — log type, date range, method, status, event type — then request the export. When the file is ready it appears in the list with its **file name**, when it was **created**, and a **Download** button.

Handy for sharing evidence with a developer, or keeping records outside Waplify.

## Tips & best practices

- **One key per integration.** If a key leaks or a tool is retired, you revoke just that one instead of breaking everything at once.
- **Name keys after where they live,** not after the person who made them. `Website contact form` beats `Rahul's key`.
- **Never paste a key into a group chat, screenshot or public document.** Anyone holding it can act as your account.
- **Check Webhook Logs before blaming Waplify** — and API Logs before blaming the other tool. Between them, the two tabs settle nearly every integration argument.
- **Rotate keys when someone leaves** the team or a contractor finishes.

## Frequently asked questions

### Do I need to be technical to use this?

Creating an API key: no, it's copy and paste. Webhooks and the logs are aimed at whoever builds your integration.

### I lost my API key. Can I see it again?

No. Keys are shown once. Delete the old one, generate a new one, and update wherever it was used.

### What's the difference between a webhook and an API key?

An API key lets another system **ask Waplify to do something**. A webhook lets Waplify **tell another system that something happened**. Many integrations use both.

### My webhook says "failed" — is that Waplify's fault?

Usually not. It means Waplify sent the event but your endpoint didn't accept it. Check the response code and error message in the log entry — a timeout means your server was too slow, a 404 means the URL is wrong.

### Who can see this section?

It's a workspace-level area limited by role. If you can't see it, ask an owner or admin — see [Roles & Permissions](/docs/team/roles-and-permissions).

### Can I start a flow from my own software?

Yes, and you don't need this section for it. See [Start a Flow from Another Tool](/docs/flows-v2/start-a-flow-from-another-tool).
