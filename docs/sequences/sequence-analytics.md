---
title: Sequence Analytics
description: Understand how your WhatsApp drip sequence is performing — enrollment, delivery and read rates, per-step results, and the contact activity log
sidebar_position: 4
keywords: [WhatsApp sequence analytics, drip sequence reports, WhatsApp delivery rate, sequence performance, WhatsApp read rate]
---

## What is the sequence analytics page?

Open any sequence from the list to see its detail page. Everything about how it's doing lives here — overall performance, per-message results, and a log of every contact's journey. Use the **Refresh** button at the top right to pull the latest numbers at any time.

<!-- screenshot: Sequence detail page showing the Overall performance tiles -->

## Schedule progress

Next to the Refresh button you'll see a **percentage** with a small clock. This is **schedule progress** — how far through the sequence's *planned timeline* you are, based on how much time has passed since launch compared with the total length of the journey (the sum of every step's delay).

:::note
This number is about **time, not people**. It's not the share of contacts who finished. It only reaches **100%** once every contact has finished or left — so it stays just below 100% while any message is still waiting to go out.
:::

## Overall performance

These tiles summarize how the whole sequence is doing. The big number is a **percentage** so it reads the same no matter how many steps your sequence has; the smaller text shows the raw counts.

| Tile | What it means |
|------|----------------|
| **Enrolled** | Everyone who was ever added to this journey — the starting total. |
| **Sent** | Successfully handed to WhatsApp at least once (a share of enrolled). Not the same as delivered. |
| **Delivered** | Reached the contact's phone (a share of enrolled). |
| **Read** | Opened by the contact (a share of *delivered*). |
| **Replied** | Wrote back after a message (a share of *delivered*). |
| **Clicked** | Tapped a quick-reply button (a share of *delivered*). |
| **Failed** | Couldn't be delivered — bad number, opted out, or a template issue (a share of enrolled). |

:::note
**Clicked** counts taps on **quick-reply buttons** only. Link buttons (like "Visit website") aren't reported by WhatsApp, so taps on those don't show up here.
:::

Below the tiles you'll also see your **delivery settings** at a glance — whether "confirmed delivery" and "stop on reply" are on, and your send window.

## Delivery lag

If your sequence has **Wait for delivery** turned on, a **delivery lag** panel appears showing contacts whose latest message hasn't been confirmed delivered yet, grouped by how long they've been waiting. Contacts that stay undelivered for **48 hours** are removed automatically. If "wait for delivery" is off, this panel doesn't appear.

## Activity over time

The **Activity over time** chart plots engagement — sent, delivered, read, and more — across the life of the sequence, so you can see when messages went out and how contacts responded. It adjusts automatically between hourly, daily, and weekly views depending on how long the sequence has been running.

<!-- screenshot: Activity over time chart on the sequence detail page -->

## Step Analytics

The **Step Analytics** tab breaks results down **one row per message**, so you can see which step performs best.

For each step you'll see **Recipients** (the contacts that step was sent to) split into **Delivered**, **Failed**, and — if you're waiting for delivery — **Waiting**. **Read**, **Replied**, and **Clicked** are shown as a share of Delivered.

- **Tap a Failed count** to expand the exact reasons a step failed (for example, an invalid number or a rejected template), with WhatsApp's own explanation and how many contacts each reason affected.
- **Click any row** to preview that message's template exactly as the customer sees it.

<!-- screenshot: Step Analytics table with a Failed count expanded to show reasons -->

:::tip
"Recipients" can be a little higher than "Sent" on the overview tiles — the overview counts each *contact* once by their best outcome, while a step row counts the contacts that message reached. Both are correct; they're just answering slightly different questions.
:::

## Activity (the contact log)

The **Activity** tab lists every contact in the sequence and where they are in their journey. Columns include:

- **Contact** — name and phone number
- **Status** — where they are right now (see below)
- **Progress** — which message they've received, like "2 of 3"
- **Why they left** — the exit reason, for contacts who left early
- **Enrolled** and **Last message sent** — timestamps

You can **filter by status** (and by exit reason for contacts who left), **export the list to CSV**, and **click any contact** to open their full journey — every message they were sent, with delivery status and any failure reason.

<!-- screenshot: Activity tab contact log with status filter and Export CSV button -->

### Contact statuses

| Status | What it means |
|--------|----------------|
| **Active** | Waiting for their next message to be sent. |
| **Awaiting delivery** | Their last message was sent — waiting for WhatsApp to confirm delivery before the next one. |
| **Paused** | On hold because the whole sequence is paused. |
| **Completed** | Finished — they received every message in the journey. |
| **Exited** | Left the journey early (see the reason). |

### Why contacts leave early ("exit reasons")

| Reason | What happened |
|--------|----------------|
| **Customer replied** | They replied and "stop on reply" was on. |
| **STOP keyword** | They sent a stop/opt-out keyword. |
| **Opted out (Meta)** | WhatsApp recorded them as having blocked or opted out. |
| **Invalid number** | The number isn't a reachable WhatsApp account. |
| **Delivery timeout** | A message stayed undelivered for 48 hours (with "wait for delivery" on). |
| **Manually removed** | Someone on your team removed them from the sequence. |
| **24h window expired** | The window to send a follow-up closed before it could go out. |
| **Sequence deleted** | The whole sequence was deleted while they were still in it. |

## Frequently asked questions

### Why is Sent above zero but Delivered, Read, and Failed are all zero?

Delivery and read updates arrive from WhatsApp a moment after a message is sent — give it a little time and press **Refresh**. If they stay at zero for a long while, it usually points to a setup issue on the WhatsApp connection; reach out to support.

### Read shows lower than Delivered — is something wrong?

No. **Read** only counts when the recipient has read receipts (blue ticks) turned on. Plenty of people keep them off, so a read rate below the delivered rate is completely normal.

### Can I see exactly what one customer received?

Yes — open the **Activity** tab and click the contact. Their journey shows every message they were sent, when, whether it was delivered or read, and the reason for any failure.

### How do I get the data into a spreadsheet?

Use **Export CSV** on the Activity tab. It respects whatever status/exit-reason filter you've applied.
