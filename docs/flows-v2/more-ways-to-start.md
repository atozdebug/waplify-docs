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
- When a customer **sends a cart** from your catalog.

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

### When two flows could answer the same ad

If one flow is set to **Any ad** and another flow is set to a **specific ad**, the specific one always answers a lead from that ad. The Any ad flow answers everyone else. If two flows are set to the same ad, the one higher in your flow order answers.

### Use the ad's details in your messages

In any message step, click the **{ }** button (or type **/**) and open **Start**. Flows started by an ad have these extra fields:

| Field | What it gives you |
|---|---|
| **Ad headline** | the headline people saw, e.g. "Diwali Offer" |
| **Ad text** | the main text of the ad |
| **Ad ID** | the ad's number in Meta Ads Manager |
| **Ad or post** | `ad`, or `post` for a Facebook / Instagram post |
| **Ad link** | a link to the ad or post |
| **Ad click ID** | advanced: for sending sales back to Meta |

For example: "Thanks for your interest in `{{ad.headline}}`! Here are the details."

:::tip
Run one flow for several ads. Add a **Condition** step that checks **Ad ID**, and send each ad's leads down their own branch.
:::

These fields stay available for the whole flow, even after the customer replies.

<!-- screenshot: variable picker showing the Ad fields under Start -->

### See which ad brought a contact

Waplify remembers the ad on the contact:

- **Inbox:** open the chat and look at **Conversation Context** in the customer panel. You'll see **Came from ad** (or **First ad** and **Latest ad** if they came from more than one), with the date and a link to the ad. Click **All ad taps** to see every ad this person has tapped, newest first.
- **Contacts and campaigns:** add the filter **Came from ad**, and type an Ad ID or the ad's headline. Use it to send a follow-up broadcast to everyone from one ad.
- **Export:** your contacts export adds columns for the first and latest ad (ID, headline and time in UTC) whenever at least one contact came from an ad.

<!-- screenshot: Conversation Context showing Came from ad -->

:::note
Ad details are available on the Growth and Business plans, on Lifetime Gold, Platinum and Diamond, and on plans bought before the current pricing. On other plans Waplify still records which ad brought each contact, so the history is there as soon as you upgrade.
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

## Start when a customer sends a cart

The **Order received** start runs a flow the moment a customer sends you a cart from your catalog. Use it to confirm the order with an order summary, request payment, or pass the order to your team. You can run it for every order, or only for orders in a value range or with a minimum number of items.

If the customer was still in another flow that was waiting on a question or a delay, that flow ends so the order is handled straight away. See [Commerce in Flows](../commerce/commerce-in-flows.md#what-happens-when-the-customer-sends-a-cart).

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
