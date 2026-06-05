---
title: What is a Drip Sequence?
description: Learn how Waplify drip sequences send automated, multi-step WhatsApp follow-ups to each contact over days or weeks
sidebar_position: 1
keywords: [WhatsApp drip sequence, WhatsApp automation, automated WhatsApp follow-up, WhatsApp drip campaign, welcome series WhatsApp]
---

## What is a Drip Sequence?

A **drip sequence** sends a series of WhatsApp messages to each contact automatically, spaced out over time — minutes, hours, or days apart. You set it up once, and Waplify "drips" the messages out on schedule without you sending each one by hand.

Think of it as a campaign that unfolds over days instead of going out all at once. It's perfect for:

- **Welcome series** — greet new customers, then follow up with tips over their first week
- **Cart or lead recovery** — nudge someone who didn't finish a purchase or reply
- **Onboarding** — walk a customer through your product step by step
- **Re-engagement** — win back quiet customers with a few gentle reminders

<!-- screenshot: Sequences list page with a few drip sequences and their statuses -->

## Sequences vs. Campaigns

Sequences and [campaigns](../campaigns/creating-campaigns.md) both send template messages to your contacts, but they work differently:

| | Campaign (broadcast) | Drip Sequence |
|---|---|---|
| **How many messages** | One message | Up to 7 messages, in order |
| **When they send** | All at once | One at a time, with delays between each |
| **Per contact** | Everyone gets the same one message | Each contact moves through the steps on their own timeline |
| **Stops on reply** | No | Yes (optional) — hand the chat to your team when someone replies |
| **Best for** | A one-time announcement, offer, or update | A planned follow-up journey over days or weeks |

:::tip
If you just want to send one message to a list right now, use a [campaign](../campaigns/creating-campaigns.md). If you want to follow up automatically over several days, use a drip sequence.
:::

## How it works

1. You **build the sequence** — give it a name, choose who receives it, and add your messages with a delay before each one.
2. You **launch it** (now, or scheduled for later).
3. Each contact is **enrolled** and gets the **first message right away**.
4. After that, each follow-up message sends once its delay passes — always inside your chosen [send window](./send-window-and-delivery.md).
5. A contact **leaves the sequence** when they finish all the messages, or earlier if they reply (when "stop on reply" is on), opt out, or can't be reached.

You can watch all of this happen on the sequence's [analytics page](./sequence-analytics.md).

## The sequence lifecycle

Every sequence has a status, shown as a colored badge in the list:

| Status | What it means |
|--------|----------------|
| **Draft** | Saved but not started yet. Drafts with an audience show a **Run** button so you can start them with one click. |
| **Scheduled** | Set to start automatically at a future date and time. |
| **Running** | Live — contacts are enrolled and messages are going out. |
| **Paused** | Temporarily stopped. No messages go out until you resume it. |
| **Completed** | Everyone who was enrolled has finished (or left) the journey. |

## Frequently asked questions

### How many messages can a sequence have?

Up to **7 steps** (messages). Each step uses one approved WhatsApp template.

### How long can a sequence run?

Each step can wait up to **30 days** before it sends, and a contact's whole journey can span up to **90 days** from when they're enrolled.

### Do I need approved templates?

Yes. Every message in a sequence uses a WhatsApp **template that Meta has approved**. See [Message Templates](../templates/message-templates.md) to create and submit one.

### Can the same contact be added twice?

No. Each contact is enrolled **at most once** per sequence.

### What happens if a customer replies?

By default, the contact **leaves the sequence** and the conversation is handed to your team in the [inbox](../chat/inbox-overview.md), so a real person can take over. You can turn this off for purely transactional sequences — see [Send Window & Delivery Settings](./send-window-and-delivery.md).
