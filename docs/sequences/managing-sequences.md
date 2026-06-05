---
title: Managing Sequences
description: Manage your WhatsApp drip sequences in Waplify — run a draft, schedule it, pause and resume, edit messages, remove contacts, and delete safely
sidebar_position: 5
keywords: [run WhatsApp sequence, pause drip sequence, resume WhatsApp sequence, edit WhatsApp sequence, delete drip sequence]
---

## The Sequences list

The **Sequences** page lists everything you've built. You can **search by name**, **filter by status** (Drafts, Scheduled, Running, Completed, Paused), and see each sequence's status, when it was created, its send time, and how many contacts are enrolled. Click any row to open its [analytics](./sequence-analytics.md).

<!-- screenshot: Sequences list with status filter and Run button -->

## Running a sequence

When you finish the builder with **Run now**, the sequence is saved as a **draft** with its audience attached — but **nothing sends yet**. To start it, click the **Run** button on its row in the list and confirm.

:::caution
Starting a sequence **can't be undone** — it begins enrolling contacts and sending real WhatsApp messages right away. Afterwards you can only **pause** it, not "unsend" it. The confirmation dialog shows roughly how many contacts will be enrolled (an upper estimate — see below).
:::

## Scheduling a sequence

Instead of running now, you can **Schedule for later** in the final step of the builder. Pick a timezone, date, and time (up to 90 days ahead) and the sequence starts automatically when that moment arrives. Scheduled sequences show a **Scheduled** badge and their start time in the list.

### Why "Enrolled" shows a number before it starts

For a scheduled (or just-launched) sequence, the **Enrolled** count shows your **estimated audience size** until contacts are actually enrolled. This is an **upper estimate** — it doesn't yet remove duplicates or opted-out contacts — so the final enrolled number can be a bit lower. That's expected, not a bug.

## Pausing and resuming

While a sequence is **Running** or **Scheduled**, you can **Pause** it from the list (the actions menu) or the detail page. Pausing stops all new messages from going out.

When you **Resume**, the schedule picks up where it left off — each waiting contact's next message is pushed out by however long the sequence was paused, so nobody gets a burst of catch-up messages all at once. (A contact who would land beyond the 90-day journey limit leaves the sequence instead.)

:::note
A sequence can also be **paused automatically** if WhatsApp rejects one of its templates. When that happens, the paused badge explains why — fix or replace the template, then resume.
:::

## Editing a sequence

You can **edit** a sequence while it's a **draft** or **paused** (running sequences must be paused first). You can change the **name, messages, delays, and delivery settings**.

The **audience is locked** once a sequence has launched — those contacts keep moving through the messages. To remove someone mid-sequence, use the **Activity** tab on the detail page (see [Sequence Analytics](./sequence-analytics.md)); to add new people, create a new sequence.

## Removing a single contact

On the detail page's **Activity** tab, you can remove an individual contact who is still active. They **exit immediately** and any remaining steps won't send. The action is recorded in your audit log.

## Deleting a sequence

Use the actions menu (in the list or on the detail page) to **Delete** a sequence. Deleting **archives** it: any contacts still active **exit immediately** and stop receiving messages, but the **analytics history is preserved** so you can still review how it performed.

## Tips & best practices

- **Use Run now as a final check.** Because a "Run now" sequence waits as a draft until you press Run, you get one last chance to review everything before any message goes out.
- **Pause instead of delete** if you only want to stop temporarily — deleting exits everyone and ends the journey for good.
- **Schedule around your audience.** Pick a start time when people are likely to be on their phones; remember the first message goes out the moment the sequence launches.

## Frequently asked questions

### What's the difference between pausing and deleting?

**Pausing** is temporary — contacts stay in the sequence and resume where they left off. **Deleting** is permanent — it exits everyone and archives the sequence (though its analytics are kept).

### A contact's phone number looks different in the sequence than in Contacts. Why?

A sequence sends to the phone number captured **when the contact was enrolled**. If you edit that contact's number afterward, the sequence keeps using the original one for messages already in flight, while the Contacts page shows the new number. They can look out of sync, but it's working as intended.

### Can I duplicate a sequence?

There's no one-click duplicate, but you can rebuild a similar journey quickly in the builder — the steps, delays, and settings are all easy to re-enter.
