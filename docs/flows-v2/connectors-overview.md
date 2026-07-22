---
title: Connectors Overview
description: Connect Waplify to the other tools your business already uses, from one place in Settings
sidebar_position: 10
keywords: [Waplify connectors, WhatsApp integrations, Google Sheets WhatsApp, IndiaMART WhatsApp, SMTP email flow, connect tools to WhatsApp]
---

## What are connectors?

**Connectors** link Waplify to the other tools you already work in — your spreadsheets, your marketplace, your email. Once connected, information moves between them on its own, so you're not copying details from one screen to another.

They all live in one place: **Settings → Connectors**.

<!-- screenshot: the Settings → Connectors page showing available connectors -->

## What you can connect

### Google Sheets

Send a WhatsApp message automatically whenever you **add or change a row** in a Google Sheet.

Keep working the way you already do — a sheet of orders, bookings, or leads — and let Waplify message the person on that row. Useful when your team lives in spreadsheets and you don't want to change how they work.

You can start from a ready-made sheet with the script already inside it, so there's no code to paste.

→ [Google Sheets to WhatsApp](/docs/flows-v2/google-sheets-to-whatsapp)

### IndiaMART

Turn every **IndiaMART buyer enquiry** into a Waplify contact automatically, with their name, phone, company and what they asked about already filled in — then reply on WhatsApp within seconds, automatically.

→ [IndiaMART Leads](/docs/contacts/indiamart-leads)

### Email (SMTP)

Connect your own mail server so your flows can **send email** as well as WhatsApp.

Email your team the moment a new lead arrives, or send the customer a confirmation, receipt or brochure. You can attach files too — including a document the customer uploaded in a [WhatsApp Form](/docs/flows-v2/whatsapp-forms).

Set it up under **Settings → Connectors → Your mail server**, then use the **Send Email** block in any flow.

→ [Connecting to Other Tools](/docs/flows-v2/connecting-other-tools)

## How to connect something

The steps differ slightly per tool, but the shape is the same:

1. Go to **Settings → Connectors**.
2. Find the tool you want and click **Connect**.
3. Follow the on-screen steps — usually copying a link from Waplify into the other tool, or entering your account details.
4. Once connected, it shows under **Connected Accounts** with its status.

You can disconnect at any time from the same screen.

## Tips & best practices

- **Connect one thing at a time** and test it end to end before adding the next. It's much easier to tell what broke.
- **Test with your own number first.** Send yourself a lead or add a test row before pointing real customers at it.
- **Anything that creates a contact can start a flow.** Both Google Sheets and IndiaMART end up creating or updating contacts, so a flow with a **contact created** trigger can greet them automatically. See [More Ways to Start a Flow](/docs/flows-v2/more-ways-to-start).
- **Treat keys like passwords.** API keys and mail server passwords give access to your account — don't share them in group chats or paste them into public documents.

## Frequently asked questions

### Who can set up connectors?

Connectors are a workspace-level setting, so they're limited to team members whose role allows it. If the Connectors page tells you that you have no access, ask an owner or admin. See [Roles & Permissions](/docs/team/roles-and-permissions).

### Does connecting a tool change anything in it?

No. Waplify reads information in and sends messages out. It doesn't edit or delete anything in your IndiaMART account or your Google Sheet.

### What if the tool I use isn't listed?

You can still connect it yourself. Any system that can call a web address can start a flow — see [Start a Flow from Another Tool](/docs/flows-v2/start-a-flow-from-another-tool) — and Waplify's [API](/api/authentication) covers contacts, campaigns and conversations.

### Will a connector message people twice?

No. Each connector tracks what it has already handled — the Google Sheets add-on marks rows as sent, and IndiaMART updates an existing contact instead of creating a duplicate.

### Do I need a connector to send campaigns?

No. Campaigns, sequences and the inbox all work on their own. Connectors are for pulling in information from, or pushing it out to, other tools.
