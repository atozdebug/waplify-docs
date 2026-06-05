---
title: Creating a Sequence
description: Step-by-step guide to building a WhatsApp drip sequence in Waplify — choose your audience, add messages with delays, and launch
sidebar_position: 2
keywords: [create WhatsApp drip sequence, build automated WhatsApp follow-up, WhatsApp sequence wizard, schedule WhatsApp sequence]
---

## What you need first

Before building a sequence, make sure you have:

- One or more **approved message templates** (see [Message Templates](../templates/message-templates.md)) — sequences only use templates Meta has already approved
- At least one **contact** or **contact group** (see [Import Contacts](../contacts/import-contacts.md))
- A **payment method** set up on Meta (see [Add Payment Method](../getting-started/add-payment-method.md))

## How to create a sequence

Go to **Sequences** from the sidebar and click **New Drip Sequence**. The builder has three steps: **Details & Audience → Messages → Launch**.

<!-- screenshot: New Drip Sequence button on the Sequences list page -->

### Step 1 — Details & audience

**Name your sequence.**

- **Drip sequence name** (required) — shown in your list and analytics. Use something you'll recognize, like "Welcome series" or "Cart recovery".
- **Description** (optional) — a private note for your team. Customers never see it.

**Choose who receives it.** Under **Who receives this sequence**, pick **Send to a fixed list**, then build your audience:

- **Select contacts** individually
- **Select groups** to enroll everyone in those groups
- **Paste phone numbers**, one per line
- **All contacts**, optionally narrowed with a filter (name, company, tags, and more)

Leave **Send only to opted-in contacts** on (recommended) so you only message people who agreed to hear from you.

<!-- screenshot: Step 1 audience picker with contacts and groups options -->

:::note
**Auto-enroll on event** (automatically adding contacts as they're tagged or added to a group) is marked *Coming soon* and isn't available yet.
:::

**Set your delivery settings and send window.** Step 1 also includes two delivery toggles and a "When messages are sent" window. These have their own page — see [Send Window & Delivery Settings](./send-window-and-delivery.md).

Click **Continue** when you're ready.

### Step 2 — Messages

This is where you build the actual journey. Each step is one approved template, and you choose how long to wait before it sends.

1. Click **Add step** and **Pick a template**. Only **approved** templates appear, grouped into **All / Marketing / Utility** tabs. (One-time-passcode "Authentication" templates and carousel templates aren't available in sequences.)
2. If the template has **variables** (like a customer's name), fill in the **Variable Configuration**: type your text and type **`$`** to insert a contact field — for example, `$first_name, welcome!`. Add a **fallback** for any field in case a contact is missing it (without one, WhatsApp may block the message).
3. If the template has an **image, video, or document header**, upload the media file. It's sent as the header to every contact on that step.
4. Set the **delay** before the step sends:
   - **Step 1 always sends immediately** when a contact is enrolled — it has no delay.
   - For every later step, choose a number and a unit (**Minutes / Hours / Days**), measured from the previous message. The maximum is **30 days per step**.
5. Repeat until your journey is complete (up to **7 steps**). You can **reorder**, **duplicate**, or **delete** steps, and the live **Message Preview** shows how each one looks in WhatsApp.

<!-- screenshot: Step 2 message builder showing steps, delays, and the WhatsApp preview -->

:::tip
A common welcome pattern: **Step 1** right away, **Step 2** after 1 day, **Step 3** after 3 days. Short, spaced-out messages tend to feel helpful rather than pushy.
:::

Click **Continue**. Waplify checks that every step has a template, all variables are filled, and any required media is uploaded before moving on.

### Step 3 — Review & launch

Review the summary — sequence name, audience, number of steps and how long the journey takes, your send window, and your delivery settings — and check the **Message timeline** on the right, which shows exactly what each contact receives and when.

Then choose **when to start**:

- **Run now** — saves the sequence and takes you back to the list. Nothing sends until you click the **Run** button on that row (just like sending a campaign). This gives you a final chance to confirm.
- **Schedule for later** — pick a **timezone, date, and time** and the sequence starts automatically when that moment arrives. You can schedule up to **90 days** ahead.

<!-- screenshot: Step 3 launch screen with Run now and Schedule for later options -->

Click **Create Sequence** (or **Schedule Sequence**) to finish. To actually start a "Run now" sequence, head to the list and press **Run** — see [Managing Sequences](./managing-sequences.md).

## Tips & best practices

- **Start small.** Try a 2–3 message sequence on a small group before rolling it out to your whole list.
- **Personalize with variables.** A message that opens with `$first_name` feels far more personal and tends to get better engagement.
- **Mind the gaps.** Delays are measured from the previous message, so they stack up — three "3 day" steps means the last message lands about 6 days after enrollment.
- **Keep opted-in only on.** Messaging people who opted out can hurt your WhatsApp quality rating.

## Frequently asked questions

### Can I edit the audience after launching?

No. The audience is **locked once the sequence starts** — contacts are enrolled at launch and continue through the messages. You can still edit the messages and delivery settings (pause it first), and you can remove individual contacts from the [Activity tab](./sequence-analytics.md). See [Managing Sequences](./managing-sequences.md).

### Why does the first message ignore my send window?

By design — **Step 1 always sends right away** so contacts get an immediate response. Only the follow-up steps wait for your [send window](./send-window-and-delivery.md).

### Is there a test send?

Not yet. Use the live **Message Preview** in Step 2 and the **Message timeline** in Step 3 to check each message, and consider running a short version against a small group first.

### Which templates can't I use?

**Authentication** (one-time passcode) templates and **carousel** templates aren't supported in sequences. Image, video, and document templates are — just upload the media when you add the step.
