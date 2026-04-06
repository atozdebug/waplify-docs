---
title: Template Variables & Media
description: How to use variables for personalized messages and add images, videos, or documents to WhatsApp templates
sidebar_position: 3
keywords: [WhatsApp template variables, personalized WhatsApp messages, WhatsApp template media, dynamic message templates]
---

## What are Template Variables & Media?

Variables let you personalize each message with details like the customer's name, order number, or any custom value. Media headers let you attach images, videos, or documents to make your templates more engaging.

## How to use it

### Using variables in templates

Variables are placeholders in your template that get replaced with real values when the message is sent. They look like `{{1}}`, `{{2}}`, etc.

**Example template body:**
> Hi `{{1}}`, your order `{{2}}` has been shipped! Track it here: `{{3}}`

When creating a campaign with this template:
1. You will see each variable listed
<!-- screenshot: Variable mapping section during campaign creation -->
2. For each variable, choose one of:
   - **Map to a contact field** — e.g., map `{{1}}` to "First Name" so each contact gets their own name
   - **Enter a fixed value** — e.g., set `{{3}}` to a tracking URL that is the same for everyone

### Adding media headers

Templates can include a media header that appears above the message body. Supported types:

| Media Type | Description | Common Uses |
|-----------|-------------|-------------|
| **Image** | JPG or PNG image | Product photos, promotional banners |
| **Video** | MP4 video | Product demos, tutorials |
| **Document** | PDF file | Invoices, catalogs, brochures |

When creating a template on Meta:
1. In the **Header** section, select the media type
2. Upload a sample file (Meta uses this for review purposes)

When creating a campaign:
1. If the template has a media header, you will see an **upload section**
<!-- screenshot: Media upload section in campaign creation -->
2. Upload the actual media file you want to send with this campaign
3. The file will be sent along with the message to all recipients

### Adding buttons

Templates can include interactive buttons at the bottom of the message:

- **Quick Reply** — pre-set reply buttons the contact can tap (e.g., "Yes", "No", "Learn More")
- **URL Button** — a button that opens a web link
- **Phone Button** — a button that starts a phone call
- **Copy Code** — a button that copies a code (useful for one-time passwords or discount codes)

Buttons are defined when creating the template on Meta and cannot be changed during campaign creation.

## Tips & best practices

- Use **variable `{{1}}`** for the contact's first name — it is the most common personalization and makes messages feel personal
- Keep the number of variables manageable — too many variables make campaign creation complex
- **Test with yourself first** — create a test campaign to see how variables and media look on an actual phone
- For media headers, use **high-quality images** but keep file sizes reasonable for quick loading
- Make sure your media file is ready before creating the campaign — you cannot send a template with a media header without uploading the file
- Need to create a new template first? See [Creating Templates](./creating-templates.md) for a step-by-step guide
- Once your template is ready, head to [Creating Campaigns](../campaigns/creating-campaigns.md) to send it to your contacts

## Frequently asked questions

### What happens if a variable is empty for a contact?

If a contact's mapped field is empty (e.g., no first name), the variable will be sent as empty. To avoid this, make sure required contact fields are filled in before sending.

### Can I use different images for different contacts?

No. When you upload a media file for a campaign, the same file is sent to all recipients. If you need different media for different audiences, create separate campaigns.

### What image size should I use?

WhatsApp recommends images under **5 MB**. For the best results, use images that are clear and legible on mobile screens. Square or landscape orientations work well.

### Can I add both media and buttons to the same template?

Yes! A template can have a media header, body text with variables, a footer, and buttons — all at the same time.

### How do I know what variables a template has?

When you select a template during campaign creation, Waplify automatically shows all the variables and lets you map or fill them in.
