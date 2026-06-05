---
title: Send Window & Delivery Settings
description: Control when your WhatsApp drip sequence sends — quiet hours, waiting for delivery, and stopping when a customer replies
sidebar_position: 3
keywords: [WhatsApp sequence quiet hours, drip sequence send window, wait for delivery WhatsApp, stop on reply WhatsApp]
---

## What these settings do

When you build a sequence (in **Step 1 — Details & audience**), you control three things about *how* and *when* messages go out:

- **When messages are sent** — the days and times your messages are allowed to go out
- **Wait for delivery** — whether to confirm each message arrived before sending the next
- **Stop on reply** — whether a customer's reply ends their journey

You can set these while building the sequence and change them later from the sequence detail page (pause the sequence first to edit it).

## When messages are sent (send window)

The **send window** — sometimes called quiet hours — is the daily window your follow-up messages are allowed to go out in. It has two parts:

- **Days** — which days of the week messages can send (default: every day)
- **Time** — either **Any time** (24 hours) or a **specific time range**, like 9:00 am to 9:00 pm (the default)

<!-- screenshot: When messages are sent card with day chips and a time range -->

Times use your **workspace timezone**, which you can change in **Settings → General**.

:::caution
**Your first message ignores the send window.** Step 1 sends the moment a contact is enrolled, so they always get an immediate response. Only the **follow-up** steps respect the window — if a follow-up is due outside it, that message waits for the next allowed day and time.
:::

This means a sequence can take a little longer than the sum of its delays. For example, if a follow-up is due at 11:00 pm but your window ends at 9:00 pm, it sends the next morning instead.

## Wait for each message to be delivered

This toggle — **"Wait for each message to be delivered before sending the next"** — is **off by default**.

- **When on:** each message waits for WhatsApp to confirm it was **delivered** before the next one is sent. Customers receive your messages in order and don't miss one if their phone was briefly offline. Anyone whose phone can't receive a message within **48 hours** is removed from the sequence. While a contact is waiting for confirmation, they show as **Waiting** in your analytics.
- **When off:** messages send purely on schedule, whether or not the previous one was delivered. A sequence finishes in a predictable amount of time, but a customer who was offline might miss an earlier message and only see the later ones.

:::tip
Leave this **off** for time-sensitive sequences where finishing on schedule matters most. Turn it **on** when the messages build on each other and order really matters (like a step-by-step onboarding guide).
:::

## Stop the sequence if the customer replies

This toggle — **"Stop the sequence if the customer replies"** — is **on by default**.

- **When on:** as soon as a contact replies, they **leave the sequence** and the conversation is handed to your team in the [inbox](../chat/inbox-overview.md), so a real person can help. Recommended for support- and conversation-style sequences.
- **When off:** the sequence keeps running even after the customer replies. Best for purely transactional messages where no follow-up conversation is expected.

## Frequently asked questions

### Why did my first message go out at night, outside my window?

That's expected. The **first message always sends immediately** on enrollment. Only follow-up messages wait for your send window.

### Where do I set my workspace timezone?

In **Settings → General**. The send window and your scheduled launch time both use it, so it's worth setting correctly before you launch.

### What happens to someone who never gets a message delivered?

With **Wait for delivery** on, a contact whose message stays undelivered for **48 hours** is automatically removed from the sequence (shown as an "exit"). With it off, the sequence simply continues to the next scheduled message.

### If I turn off "stop on reply," can the customer still chat with us?

Yes. Their replies still appear in your [inbox](../chat/inbox-overview.md) as normal — the sequence just keeps sending its scheduled messages alongside the conversation.
