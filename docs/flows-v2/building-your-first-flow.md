---
title: Build Your First Flow
description: How to build, trigger, validate, and publish a WhatsApp chatbot in the Waplify Flows V2 builder
sidebar_position: 2
keywords: [WhatsApp flow builder, build WhatsApp chatbot, publish WhatsApp flow, flow triggers, flow validation]
---

## Build your first flow

This guide walks you through the Flows V2 builder — adding blocks, choosing how the flow starts, checking it for problems, and publishing it.

### Create a flow

1. Go to **Flows V2** in the sidebar
2. Click **Create flow**
3. Give it a name at the top of the builder, then start adding blocks

<!-- screenshot: Flows V2 list page with the Create flow button -->

### Get to know the builder

When you open a flow you'll see:

- **The canvas** — the open space where you place and connect blocks
- **The blocks panel** — your library of blocks, grouped into **Send**, **Ask**, **Utility**, and **Connectors**
- **The toolbar** (top) — your flow name and status, plus **Save**, **Validate**, and **Publish**, and buttons for **triggers** (⚡), **flow settings** (⚙), and **validation issues** (⚠)

<!-- screenshot: Flow Builder V2 canvas with the blocks panel and toolbar labeled -->

### Add and connect blocks

1. **Start from the Start block** — every flow begins with a Start block that's already on the canvas. It defines how the flow begins (see [How your flow starts](#how-your-flow-starts) below).
2. **Drag a block** from the panel onto the canvas.
3. **Connect blocks** — drag a line from one block's output dot to the next block's input. This sets the order the conversation follows.
4. Blocks that offer choices (buttons, lists, conditions) have **multiple outputs**, so each option can lead somewhere different.

### Configure a block

Click any block to open its settings. As you edit a message, a **live preview** on the side shows roughly what the customer will receive in WhatsApp — so you can see your message take shape as you type.

<!-- screenshot: A Send Text block open, with the live WhatsApp preview on the right -->

To personalize a message, **type `/`** in any text field (or click the `{}` button) to drop in a saved answer or a contact detail like `{{contact.first_name}}`. See [Ask questions & save answers](./asking-questions-and-saving-answers.md) for the full picture.

## How your flow starts

A flow only runs when something **triggers** it. Open the **triggers** panel (the ⚡ button in the toolbar) to set this up. The most common triggers are:

- **Keyword** — the customer sends a word or phrase you choose (for example, "menu" or "pricing")
- **Button tap** — the customer taps a button in a message
- **Fallback** — a catch-all that runs when a message doesn't match anything else
- **Ad click (Click-to-WhatsApp)** — someone taps a Facebook or Instagram ad that opens WhatsApp — see [More ways to start a flow](./more-ways-to-start.md)

More advanced triggers are also available:

- **Template reply** — the customer taps a button on one of your template messages
- **Contact created or updated** — the flow starts when a contact changes in a way you choose (see [More ways to start a flow](./more-ways-to-start.md))
- **Webhook** — another system starts the flow by calling Waplify (see [Start a Flow from Another Tool](./start-a-flow-from-another-tool.md))
- **Pattern match** — an advanced text-matching rule, available as an option inside the Keyword trigger

:::tip Use specific keywords
Give each flow its own clear trigger words (like "menu" or "support") so two flows don't compete for the same message.
:::

## Check it before you go live

Click **Validate** to have Waplify scan your flow and flag anything incomplete — a missing message, an unconfigured option, or a trigger that can't fire. Issues appear in the **validation issues** panel (⚠) with a clickable link straight to the block that needs attention.

<!-- screenshot: Validation panel listing issues with clickable links -->

:::caution
You can't publish a flow that still has errors. Validate first, fix what's listed, then publish.
:::

## Publish your flow

1. Make sure every block is connected and configured
2. Set up at least one **trigger** so the flow knows when to run
3. Click **Validate** and clear any issues
4. Click **Publish**

Your flow's status changes to **Active** and it starts responding to customers right away. Need to take it offline? You can unpublish or archive it any time.

## Build with AI

Don't want to start from a blank canvas? Click **Build with AI** in the toolbar. It opens a free AI assistant (in your own ChatGPT account) that turns a plain-English description into a ready-made flow:

1. Click **Build with AI**, then **Open AI Flow Builder**
2. Describe the flow you want — for example: *"When someone messages 'hi', greet them, ask for their name and email, then send our price list."*
3. The assistant gives you back a **flow file** (a `.json` file) — save it to your computer
4. Back in Waplify, click **Import a flow file** (or the ⋯ menu → **Import JSON**) and choose the file
5. The flow appears on the canvas — review it, **Validate**, and **Publish**

<!-- screenshot: Build with AI dialog showing the describe → download → import steps -->

## Import, export, and reuse

From the **⋯ menu** in the toolbar you can:

- **Export JSON** — download your flow as a file (a handy backup, or to share with someone)
- **Import JSON** — load a flow file onto the canvas
- **Clear canvas** — start over

## Flow settings

Open **flow settings** (⚙) to adjust:

- **Flow name**
- **Session expiry** — how long a customer's place in the flow is remembered before it times out
- **Maximum steps per run** — a safety limit that stops a flow from looping forever

## Tips & best practices

- **Plan on paper first** — sketch the conversation before you build it
- **Keep flows focused** — a separate flow for "pricing", "support", and "order status" is easier to manage than one giant flow
- **Save often** — the toolbar shows an **Unsaved** indicator when you have changes waiting
- **Always Validate before Publish** — it catches the small mistakes that break a live bot

## Frequently asked questions

### Can I edit a flow after publishing it?

Yes. Open it, make your changes, Validate, and Save/Publish again. Updates take effect for new conversations.

### What happens if a customer types something unexpected?

It depends on how you built the flow. Guiding people with **buttons and lists** — instead of relying on free typing — keeps them on a path your flow can handle. You can also use a **Fallback** trigger to catch anything that doesn't match.

### How do I test a flow?

Publish it (or use a test keyword) and message your own WhatsApp number to walk through it. While building, the **live preview** shows how each message will look. You can also test [Connectors](./connecting-other-tools.md) from within their settings.

### Where do I see the conversations my flow handled?

On the **Flows V2** list, open a flow's menu and choose **View Sessions**. See [Monitor your flows](./monitoring-your-flows.md).
