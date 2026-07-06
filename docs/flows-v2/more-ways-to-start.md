---
title: More Ways to Start a Flow
description: Start a Waplify Flows V2 chatbot automatically — from a Click-to-WhatsApp ad, or whenever a contact is created or updated — so the right message goes out at exactly the right moment
sidebar_position: 7.3
keywords: [Click to WhatsApp ad automation, WhatsApp ad auto reply, start flow on contact change, WhatsApp lead automation, CTWA flow trigger, WhatsApp welcome message ad]
---

## More ways to start a flow

Most flows start when a customer sends a **keyword** or taps a **button**. But a flow can also start on its own, at exactly the right moment:

- When someone messages you after clicking a **WhatsApp ad**.
- When a **contact is created or updated** in Waplify.

You choose the starter on the **Start** block of your flow, under **Trigger type**. (You can also start a flow from an outside tool — see [Start a Flow from Another Tool](./start-a-flow-from-another-tool.md).)

## Start from a WhatsApp ad (Click-to-WhatsApp)

When you run a **Click-to-WhatsApp** ad on Facebook or Instagram — or a post with a **"Send message"** button — tapping it opens a chat with your business. The **Ad click** trigger lets a flow greet those people instantly with the right message, instead of a generic welcome.

### How to set it up

1. Open your flow and click the **Start** block.
2. Under **Trigger type**, choose **Ad click (Click-to-WhatsApp)**.
3. Decide which ads it should respond to:
   - **Any ad** — the flow greets everyone who arrives from any of your ads or "Send message" posts.
   - **Specific ad(s)** — enter one or more **Ad IDs** so each ad can run its own tailored flow.
4. **Save** and **publish** the flow.

<!-- screenshot: Start block with the Ad click trigger selected, showing Any ad vs Specific ads -->

### Finding an Ad ID

Open the ad in **Meta Ads Manager**. In your browser's address bar you'll see part of the link that reads `selected_ad_ids=` followed by a number — that number is the Ad ID. Copy it into Waplify.

:::tip
Run different flows for different campaigns. A "Summer Sale" ad can open a flow about the sale, while a "Book a demo" ad opens a booking flow — just point each ad's ID at its own flow.
:::

## Start when a contact is created or updated

The **Contact created or updated** trigger starts a flow the moment a contact's record changes in a way you care about — for example, when a new lead is added, or when someone's status becomes `approved`. It's a powerful way to message people based on what you know about them, not just what they type.

### How to set it up

1. Open your flow and click the **Start** block.
2. Under **Trigger type**, choose **Contact created or updated**.
3. Choose **when** it should fire:
   - **When a contact is created** — for brand-new contacts.
   - **When a contact is updated** — when an existing contact changes.
   - **Either** — both of the above.
4. Add **conditions** so it only fires for the right people — for example, *Tag is `lead`* and *City is `Dubai`*. All conditions must match.
5. Turn on **Start only once per contact** (recommended) so the same person is never messaged twice by this flow.
6. **Save** and **publish**.

<!-- screenshot: Contact created or updated trigger with mode radios and a condition builder -->

### Where contact changes come from

A contact can be created or updated in many ways — added by hand, imported from a CSV, updated by a teammate, or changed by another flow's [Update Contact](./updating-contacts.md) block. Any of these can start the flow, as long as your conditions match.

:::tip
Pair this with the [Update Contact](./updating-contacts.md) block and tags: one flow can tag a customer `vip`, and a separate flow that starts on *Tag is `vip`* can send them a thank-you — automatically.
:::

## Tips & best practices

- **Always keep "Start only once per contact" on** for the contact trigger unless you truly want to re-message people every time their record changes.
- **Use tight conditions.** A contact trigger with no conditions will fire for *every* contact change — narrow it down so only the right people get the message.
- **Respect opt-outs.** If a contact has opted out, these flows won't start for them — that's by design and keeps you compliant.
- **Publish the flow.** Automatic triggers only work on a **published** flow. A draft won't fire.
- **Make your first message count.** For ad clicks, the customer just showed interest — open with something that matches the ad they tapped.

## Frequently asked questions

### What's the difference between the ad trigger and a keyword trigger?

A keyword trigger waits for the customer to *type* something. The **Ad click** trigger fires automatically on the very first message after they tap your ad — so you can greet them before they say a word.

### Can two flows respond to different ads?

Yes. Give each flow an **Ad click** trigger set to a **specific Ad ID**, and each ad will run its own flow.

### Does the contact trigger fire for existing contacts when I first set it up?

It fires going forward, when a contact is created or updated after the trigger is live. With **Start only once per contact** on, each contact can only ever start the flow one time.

### Is there a birthday or renewal-date trigger?

Not yet. Today you can start a flow on a **contact change** (created or updated) or from an **[outside tool](./start-a-flow-from-another-tool.md)** such as Google Sheets. A per-contact date trigger (like a birthday reminder) is not available yet.

### Can I schedule a flow to run at a set time?

Not from the Start block yet. To send on a schedule today, use [Drip Sequences](/docs/sequences/what-are-sequences) or a [scheduled campaign](/docs/campaigns/scheduling-campaigns), or trigger the flow from an outside tool on your own schedule.
