---
title: Connect to Other Tools
description: Call an external API or read and write Google Sheets from inside a Waplify Flows V2 chatbot using connector blocks
sidebar_position: 6
keywords: [WhatsApp bot API, flow API call, WhatsApp Google Sheets, connector block, WhatsApp automation integration]
---

## Connect to other tools

**Connector** blocks let your flow talk to systems outside Waplify in the middle of a conversation — to look something up, save a record, or trigger an action elsewhere. There are two connectors: **API Executor** and **Google Sheets**.

:::note A bit more technical
Connectors are the most advanced blocks. The Google Sheets connector is friendly enough for most people, but the API Executor usually works best with a little help from a developer.
:::

## Call an API (API Executor)

The **API Executor** block calls an external web service (an "API") and can save part of the reply back into your flow.

You configure:

- **The request** — the method (such as GET or POST), the web address (URL), and any headers, query parameters, or authentication the service needs
- **The data you send** — a body that can include saved answers from the conversation, like the customer's email
- **What to keep** — map pieces of the response into [variables](./asking-questions-and-saving-answers.md) so later blocks can use them (for example, an order status you just looked up)

The block then branches:

- **Success** — the call worked; continue with whatever you saved
- **Failure** — something went wrong; the error is saved so you can send a fallback message or hand off to a person

<!-- screenshot: API Executor block settings with request, response mapping, and success/failure outputs -->

:::tip
You can test the call right from the block's settings before you publish, so you can confirm it returns what you expect.
:::

## Google Sheets

The **Google Sheets** block reads from or writes to a connected Google Sheet — no code required. Use it to log leads, look up an order, or update a record straight from a conversation.

It can:

- **Add a row** — append a new row (great for capturing leads or sign-ups)
- **Update a row** — change an existing row that matches a value
- **Find a row** — look up a single matching row and use its data later
- **Find multiple rows** — pull back several matching rows

The block branches into:

- **Success** — the action worked
- **Not found** — no matching row (for "update" or "find" actions)
- **Failure** — something went wrong connecting to the sheet

<!-- screenshot: Google Sheets block with an action chosen and success/not-found/failure outputs -->

## Tips & best practices

- **Always handle the failure path** — connectors depend on outside systems, so plan for the times they don't respond. A simple "Sorry, something went wrong — let me connect you to our team" message keeps the experience smooth.
- **Only keep what you need** — map just the response fields you'll actually use into variables.
- **Test before you publish** — try the call or sheet action from its settings first.
- **Combine with logic** — follow a connector with a [Condition](./logic-and-branching.md) to react to what came back (for example, branch on an order status).

## Frequently asked questions

### Do I need a developer to use connectors?

For **Google Sheets**, usually not. For the **API Executor**, a developer can quickly tell you the right address, authentication, and which response fields to keep.

### What happens if the other system is down?

The block follows its **Failure** path. Always connect that path to something helpful — a fallback message or a hand-off to your team.

### Can I send a customer's answers to my own system?

Yes. Use the API Executor to send saved [answers](./asking-questions-and-saving-answers.md) (like a name and email) to your CRM or backend, or the Google Sheets block to log them in a sheet.
