---
title: What is Flows V2?
description: Flows V2 is Waplify's upgraded WhatsApp chatbot builder — ask questions, save answers, branch on replies, hand off to your team, and connect to other tools
sidebar_position: 1
keywords: [WhatsApp chatbot builder, Flows V2, WhatsApp automation, conversational flow, WhatsApp bot]
---

## What is Flows V2?

**Flows V2** is Waplify's next-generation chatbot builder. Like the original [Flows](../automation/conversational-flows.md), you design an automated WhatsApp conversation on a visual canvas — but Flows V2 can do far more than show a few menu buttons. Your bot can now:

- **Ask customers questions** and save their answers (name, email, order number, a photo, a location, and more)
- **Make decisions** based on what someone says or who they are
- **Hand the chat to a real person** on your team at exactly the right moment
- **Connect to your other tools** — call an external service or read and write Google Sheets

:::note Flows V2 is in Beta
Flows V2 runs **alongside** your existing Flows, so nothing you've already built changes. You'll find it as **Flows V2** in the sidebar (marked **Beta**). The original builder stays under **Flows**.
:::

<!-- screenshot: Sidebar showing the "Flows V2" item with a Beta badge -->

## Flows V2 vs. the original Flows

| | Flows (original) | Flows V2 |
|---|---|---|
| **Send messages** | Yes | Yes — text, buttons, lists, media, location, templates, and interactive forms |
| **Ask & save answers** | No | Yes — capture text, numbers, email, phone, dates, files, and more |
| **Personalize with saved values** | Limited | Yes — reuse any saved answer or contact field |
| **Branching & logic** | Basic | Conditions (with AND/OR), Switch, Business Hours, delays |
| **Hand off to a human** | No | Yes — Assign to Agent, with the bot stepping aside automatically |
| **Connect to other tools** | No | Yes — call an API, read/write Google Sheets |
| **See every conversation** | Limited | Full Flow Sessions view with step-by-step replay |

## What you can build

Each capability has its own guide:

- [Build your first flow](./building-your-first-flow.md) — the builder, triggers, validating, and publishing
- [Ask questions & save answers](./asking-questions-and-saving-answers.md) — capture input and personalize messages
- [Logic & branching](./logic-and-branching.md) — send the conversation down the right path
- [Hand off to a human](./handing-off-to-a-human.md) — pass the chat to your team
- [Connect to other tools](./connecting-other-tools.md) — APIs and Google Sheets
- [Monitor your flows](./monitoring-your-flows.md) — see and replay every conversation

## The building blocks

You build a flow by dragging **blocks** onto the canvas and connecting them. Blocks come in four groups:

- **Send** — send a message (text, buttons, a list, media, a location, an approved template, or an interactive form)
- **Ask** — ask the customer for something and save their answer
- **Utility** — logic and timing: conditions, switches, business hours, delays, waiting for delivery, and handing off to an agent
- **Connectors** — talk to other tools: call an API or use Google Sheets

## Flow statuses

Every flow shows a status badge:

| Status | What it means |
|--------|----------------|
| **Draft** | Still being built — not responding to customers yet |
| **Active** | Published and live — responding to its triggers |
| **Archived** | Switched off and stored for reference |

## Frequently asked questions

### Do I need technical knowledge to use Flows V2?

No. Building, asking questions, branching, and handing off to your team are all visual — no code. The only advanced part is the [Connectors](./connecting-other-tools.md) (calling an API), which a developer can help set up.

### Will my existing Flows stop working?

No. Flows V2 is a separate, newer builder. Your original flows keep running exactly as before.

### Do I need approved templates?

Only for the **Send Template** block, which sends a pre-approved WhatsApp [template](../templates/message-templates.md). Most other blocks send normal messages that work inside an open conversation.

### Is it really a chatbot — does it run 24/7?

Yes. Once a flow is **Active**, it responds to its triggers automatically at any time, even when your team is offline.
