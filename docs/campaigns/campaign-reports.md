---
title: Campaign Reports
description: How to track WhatsApp campaign delivery, read rates, and reply metrics in Waplify campaign reports
sidebar_position: 4
keywords: [WhatsApp campaign analytics, campaign delivery report, WhatsApp broadcast metrics, message delivery tracking]
---

## What are Campaign Reports?

After sending a campaign, Waplify tracks how each message performs in real time. You can see exactly how many messages were sent, delivered, read, and failed — helping you understand your campaign's impact.

## How to use it

### Viewing campaign stats

1. Go to **Campaigns** from the sidebar
2. Click on any campaign to open its **details page**
<!-- screenshot: Campaign details page with delivery metrics -->
3. You will see the following metrics:
   - **Sent** — messages successfully sent to WhatsApp servers
   - **Delivered** — messages that reached the contact's phone
   - **Read** — messages that the contact opened and read
   - **Failed** — messages that could not be delivered

### Understanding message statuses

| Status | What it means |
|--------|--------------|
| **Sent** | The message left Waplify and was accepted by WhatsApp servers |
| **Delivered** | WhatsApp confirmed the message reached the contact's device |
| **Read** | The contact opened the message (only if they have read receipts on) |
| **Failed** | The message could not be delivered — check the failure reason |

### Viewing individual contact results

1. On the campaign details page, scroll down to the **contacts list**
<!-- screenshot: Campaign contacts list with per-contact delivery status -->
2. Each contact shows their individual delivery status
3. For failed messages, you can see the specific **failure reason**

### Exporting campaign results

1. On the campaign details page, click **Export**
2. A CSV file (a spreadsheet format that opens in Excel or Google Sheets) will be generated with all contacts and their delivery statuses
3. You can download this file for your records or further analysis
<!-- screenshot: Export button on campaign details page -->

## Tips & best practices

- Check campaign reports **within a few hours** of sending — most delivery and read statuses are updated within minutes
- Pay attention to **failed messages** — if many messages fail, it could indicate invalid numbers, billing issues, or quality problems. You may want to [create a new campaign](./creating-campaigns.md) targeting only those contacts
- A high **read rate** indicates your messaging time and content are working well
- If your **delivery rate** is low, check that your Meta payment method is active and your quality rating is healthy
- Export reports for your records, especially if you need to share results with your team

## Frequently asked questions

### Why do some messages show as "Sent" but not "Delivered"?

This can happen if the contact's phone is turned off, has no internet connection, or the number is not active on WhatsApp. The message may get delivered later when they come online.

### Why don't all delivered messages show as "Read"?

If a contact has **read receipts turned off** in their WhatsApp settings, the "Read" status will never appear — even if they actually read the message.

### Can I see which contacts clicked a link in my message?

Waplify tracks **Clicked** status for messages with URL buttons. This count appears in your campaign metrics when applicable.

### How long does it take for stats to update?

Stats update in **real time**. Sent and delivered statuses usually appear within seconds to minutes. Read status depends on when the contact opens the message.

### Can I resend to contacts whose messages failed?

Currently, you would need to create a new campaign targeting only the contacts whose messages failed. You can identify them from the campaign export. To send at a better time, try [scheduling the follow-up campaign](./scheduling-campaigns.md).
