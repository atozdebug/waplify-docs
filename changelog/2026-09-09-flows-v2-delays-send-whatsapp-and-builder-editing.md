---
title: Smarter Delays, a Send WhatsApp Block, and Real Editing in the Flow Builder
tags: [automation, web]
---

The Delay block can now wait until a date, a weekday, or a time of day instead of just counting hours. A new **Send WhatsApp** block messages your own team from inside a flow. And the builder finally has copy, paste, duplicate and undo.

<!-- truncate -->

## Delays that understand your week

**Delay** used to do one thing: wait for a fixed stretch of time. Now it has four modes:

- **Wait for** a set amount of time - seconds, minutes, hours or days, as before.
- **Wait until a date and time** - a specific moment.
- **Wait until a time of day** - "9am tomorrow", so a follow-up never lands at 3 in the morning.
- **Wait until a weekday** - and you can pick several, so "resume on Monday, Wednesday or Friday" is one block instead of a branch.

The length can also be **driven by a variable**, so a flow can wait for however long the customer's answer says.

Two real bugs went with this: a delay set to wait until a timestamp ignored the timezone, and picking "until a time of day" opened the wrong editor.

The **session monitor** now tells you when a paused flow is due to wake up, so a long delay no longer looks like a stuck conversation.

## Tell your team, from inside the flow

The new **Send WhatsApp** block sends a message to a number you choose - yours, a colleague's, a shared ops number - rather than to the customer.

It sends either **free text** or an approved **template**, and it can carry attachments. Use it to alert a salesperson the moment a lead qualifies, or to push an order through to whoever packs it.

## The builder edits like an editor

Building anything long used to mean rebuilding blocks by hand. The canvas now supports:

- **Copy and paste**, including between flows
- **Duplicate** a block
- **Undo and redo**

Node panels also stopped dropping fast edits. If you typed quickly and clicked away, the last thing you typed could be lost - two separate bugs, both fixed.

## Smaller things that were annoying

- The **template picker** in a Send Template block is searchable and shows a preview of the message body, so you can tell two similar templates apart without leaving the builder.
- **Form responses** are only offered as a trigger on flows that actually send a form.
- Switching a field to a variable is no longer a **one-way door** - you can switch it back.
- The flow card footer stays on one row at every screen width.

See [Build Your First Flow](/docs/flows-v2/building-your-first-flow).
