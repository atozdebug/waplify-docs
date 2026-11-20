---
title: Send Your First Campaign
description: Step-by-step guide to creating and sending your first WhatsApp broadcast campaign with Waplify
sidebar_position: 5
keywords: [first WhatsApp campaign, WhatsApp broadcast tutorial, send bulk WhatsApp messages, WhatsApp campaign guide]
---

## What is Your First Campaign?

This is a step-by-step guide to help you go from zero to your first successful WhatsApp broadcast. By the end, you will have sent a real campaign to your contacts using Waplify.

## How to use it

### Prerequisites

Before you can send a campaign, make sure you have completed these steps:

- [x] [Connected your WhatsApp number](./connect-whatsapp.md)
- [x] [Added a payment method on Meta](./add-payment-method.md)
- [x] At least one **approved message template** (see below)
- [x] At least one **contact** imported into Waplify (see below)

:::caution
Without a payment method on Meta, your messages will **fail to deliver** even if everything else is set up correctly.
:::

### Step 1: Create a message template

1. Go to the **Templates** page in Waplify and click **Create Template**
![The Create Template button on the Templates page](/img/docs/getting-started/your-first-campaign-templates.png)
2. Choose the template type — **Marketing**, **Utility**, or **Authentication** — based on your use case
3. Write your message content, add any media or buttons, and submit for review
4. Wait for approval — for verified businesses this takes a few hours; for new businesses it can take up to 24 hours
5. Once approved, the template appears on your Templates page automatically, ready to use

For more detail — including special types like carousels — see [Creating Templates](../templates/creating-templates.md).

:::tip
Use lowercase names with underscores for your template names (e.g., `welcome_offer`). Include an opt-out option in marketing templates.
:::

### Step 2: Import your contacts

1. Go to the **Contacts** page from the sidebar
2. Click **Add Contact** to add contacts one by one, or click **Bulk Upload** to import from a file
![The Bulk Upload and Add Contact buttons on the Contacts page](/img/docs/getting-started/your-first-campaign-contacts.png)
3. For bulk upload, download the **sample CSV** or **Excel template**, fill it in, and upload
4. Each contact needs at least a **First Name** and **Mobile Number** (with country code, without the "+" sign — e.g., 919876543210)
5. You can upload up to **10,000 contacts per batch**, but there is no limit on total contacts

### Step 3: Create and send the campaign

1. Go to the **Campaigns** page and click **New Campaign**
![The New Campaign button on the Campaigns page](/img/docs/getting-started/your-first-campaign-new.png)
2. Enter a **campaign name** and optional description
3. Click **Select a template** and pick an **approved template**
4. If your template has variables (like customer name), fill them in under **Variable Configuration**: type `$` to pick a contact field such as `$first_name`, or type a fixed value
![Variable Configuration: $first_name fills in each contact's first name](/img/docs/getting-started/your-first-campaign-variables.png)
5. Choose recipients — select **individual contacts**, **contact groups**, or paste numbers directly
6. Under **Scheduling**, choose **Send Manually** (or **Schedule for a specific time**), then click **Create Campaign**
7. Your campaign is saved on the Campaigns page as a **Draft**. Click **Send** next to it, then confirm with **Send Campaign**
![A draft campaign on the Campaigns page, with the Send button](/img/docs/getting-started/your-first-campaign-send.png)

:::tip
For your very first campaign, start with a **small test group** of 5-10 contacts to make sure everything works as expected.
:::

### Step 4: Track your results

1. After sending, go to your campaign's **details page**
2. You will see real-time delivery metrics:
   - **Sent** — message was sent to WhatsApp servers
   - **Delivered** — message reached the contact's phone
   - **Read** — contact opened and read the message
   - **Failed** — message could not be delivered
![Campaign results: Sent, Delivered, Read, Replied, Clicked and Failed](/img/docs/getting-started/your-first-campaign-results.png)

## Tips & best practices

- Always test with a small group before sending to your full contact list
- Make sure your template is approved before creating a campaign — you cannot use pending templates
- Schedule campaigns for times when your audience is most likely to read messages (mornings or early evenings work well)
- Keep an eye on your WhatsApp quality rating in the dashboard — it affects your messaging limits
- There is no limit on the number of campaigns you can send

## Frequently asked questions

### What if my messages fail to deliver?

Common reasons include: payment method not added on Meta, template not approved, or contact number is invalid. Check the failed message details in the campaign report for specific reasons.

### Can I schedule a campaign instead of sending immediately?

Yes! When creating a campaign, you can set a **scheduled date and time** with your preferred timezone. The campaign will be sent automatically at that time.

### Can I cancel a campaign after sending?

Once a campaign has started sending, it cannot be stopped. That is why we recommend testing with a small group first.

### How many messages can I send per day?

Your daily limit depends on your Meta verification status and quality rating. Unverified businesses can message up to 250 customers per day. Verified businesses start at 1,000 per day, and the limit increases automatically through 10,000, 100,000, and beyond as you maintain a good quality rating. See [WhatsApp Account Info](../account/whatsapp-account-info.md).

### Can I send media (images, videos) with my campaign?

Yes! If your template includes a media header (image, video, or document), you can attach media when creating the campaign.
