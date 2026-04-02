---
title: Creating Campaigns
description: Create and send WhatsApp broadcast campaigns to your contacts
sidebar_position: 1
---

## What is a Campaign?

A campaign (also called a broadcast) lets you send a WhatsApp message to many contacts at once. You pick a message template, choose your audience, and Waplify handles the delivery — sending to each contact individually so it feels personal.

## How to use it

### What you need before creating a campaign

- At least one **approved message template** synced to Waplify (see [Message Templates](../templates/message-templates.md))
- At least one **contact** or **contact group** added to Waplify (see [Import Contacts](../contacts/import-contacts.md))
- A **payment method** set up on Meta (see [Add Payment Method](../getting-started/add-payment-method.md))

### Step-by-step campaign creation

1. Go to **Campaigns** from the sidebar and click **Create Campaign**
<!-- screenshot: Campaigns page with Create Campaign button -->
2. Enter a **campaign name** and an optional **description**
3. Select your connected **WhatsApp number** if you have more than one
4. Choose an **approved template** from the dropdown
<!-- screenshot: Template selection dropdown in campaign creation -->
5. If the template has **variables** (like customer name), you will see a mapping section:
   - **Map to a contact field** (e.g., first name, phone number) so each contact gets a personalized message
   - Or **enter a fixed value** that will be the same for all recipients
6. If the template has a **media header** (image, video, or document), upload your media file
<!-- screenshot: Variable mapping and media upload section -->
7. Choose your **recipients**:
   - **Select contacts** individually from your contact list
   - **Select contact groups** to send to everyone in those groups
8. Click **Create Campaign** to save it

### Sending the campaign

1. After creating, you will be taken to the **campaign details page**
2. Review the template, recipients, and media
3. Click **Send Campaign** to start sending immediately
<!-- screenshot: Campaign details page with Send Campaign button -->
4. Or click **Schedule** to set a date and time for automatic sending (see [Scheduling Campaigns](./scheduling-campaigns.md))

### Viewing campaign results

After sending, the campaign details page shows real-time delivery stats:
- **Sent** — messages sent to WhatsApp servers
- **Delivered** — messages that reached the contact's phone
- **Read** — messages that were opened and read
- **Failed** — messages that could not be delivered
<!-- screenshot: Campaign delivery statistics dashboard -->

You can also **export** the contact list with delivery status to a CSV file.

## Tips & best practices

- **Test first**: Send to a small group of 5-10 contacts before blasting your full list
- **Personalize**: Use template variables to include the contact's name — personalized messages get better engagement
- **Timing matters**: Schedule campaigns for when your audience is likely to check their phone (mornings and early evenings tend to work well)
- **Check your quality**: Keep an eye on your WhatsApp quality rating on the dashboard — low quality can reduce your messaging limits
- **No campaign limit**: There is no restriction on the number of campaigns you can create or send

## Frequently asked questions

### Can I send a campaign to contacts who are not saved in Waplify?

No. All recipients must be imported as contacts in Waplify before you can include them in a campaign. You can quickly [import contacts](../contacts/import-contacts.md) using a CSV file.

### What happens if a message fails?

Failed messages are tracked in the campaign report. Common reasons include invalid phone numbers, numbers not on WhatsApp, or billing issues on Meta. You can see the specific failure reason for each contact.

### Can I edit a campaign after creating it?

You can edit a campaign that is still in **draft** status. Once a campaign has been sent, it cannot be edited.

### How many contacts can I send to in one campaign?

There is no hard limit from Waplify's side. However, your daily sending limit depends on your Meta verification status and quality rating (250/day unverified, 2,000+/day verified).

### Can I send different messages to different contacts?

Each campaign uses one template, but you can personalize it using **template variables**. For completely different messages, create separate campaigns with different templates.
