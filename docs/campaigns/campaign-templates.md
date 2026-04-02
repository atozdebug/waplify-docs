---
title: Using Templates in Campaigns
description: How to select a template, personalize it with contact details, and add media when creating a campaign
sidebar_position: 2
---

## What is Campaign Templates & Personalization?

When creating a campaign, you select a message template and personalize it for your audience. This page explains how to choose the right template, fill in variables with contact-specific data, and attach media files.

## How to use it

### Selecting a template for your campaign

1. During campaign creation, you will see a **template dropdown**
<!-- screenshot: Template selection dropdown showing available templates -->
2. Only **approved** templates appear in the list
3. Select the template you want to use
4. A **preview** of the template will be shown so you can see what the message will look like

### Mapping template variables

If your template has variables (like `{{1}}`, `{{2}}`), you need to tell Waplify what values to insert:

1. After selecting a template, the **variable mapping section** appears
<!-- screenshot: Variable mapping interface -->
2. For each variable, you have two options:
   - **Map to a contact field** — the value changes per contact (e.g., map `{{1}}` to "First Name")
   - **Fixed value** — the same value for every recipient (e.g., a promo code or URL)
3. Available contact fields for mapping include:
   - First Name
   - Last Name
   - Phone Number
   - Email
   - Company
4. Fill in all required variables before proceeding

**Example:**

| Variable | Mapping | Result |
|----------|---------|--------|
| `{{1}}` | Contact's First Name | "Hi Rahul, ..." / "Hi Priya, ..." |
| `{{2}}` | Fixed: "SUMMER20" | "Use code SUMMER20" for all contacts |

### Attaching media

If your selected template has a **media header** (image, video, or document):

1. An **upload area** will appear during campaign creation
<!-- screenshot: Media upload area for campaign template -->
2. Click to upload or drag your file
3. Supported formats:
   - **Images**: JPG, PNG (recommended under 5 MB)
   - **Videos**: MP4
   - **Documents**: PDF
4. The same media file will be sent to all recipients in the campaign

## Tips & best practices

- **Preview before sending** — always check the template preview to make sure your message looks right with the mapped variables
- **Use personalization** — messages with the contact's name feel more personal and get better engagement
- **Prepare media in advance** — have your image or document ready before creating the campaign
- **Keep media lightweight** — smaller files load faster on the recipient's phone, especially on slow connections
- If a variable mapping is wrong, messages might look odd — double-check each variable mapping

## Frequently asked questions

### What if I don't see my template in the dropdown?

Make sure the template is **approved** on Meta and that you have clicked **Sync Templates** on the Templates page. Only approved and synced templates appear in the campaign dropdown.

### Can I use the same template for multiple campaigns?

Yes! You can use the same template for as many campaigns as you want, with different variable values and media each time.

### What if a contact's first name is missing?

If the mapped field is empty for a contact, the variable will be sent blank. To avoid this, make sure your contacts have the required fields filled in before creating the campaign.

### Can I send a campaign without media if the template has a media header?

No. If the template requires a media header, you must upload a file. Choose a template without a media header if you don't want to include media.

### Can I change the template after creating the campaign?

You can change the template while the campaign is still in **draft** status. Once sent, it cannot be changed.
