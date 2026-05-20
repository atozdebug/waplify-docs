---
title: Creating Templates
description: How to create WhatsApp message templates in Waplify — choose a category, write content, and submit for approval
sidebar_position: 2
keywords: [create WhatsApp template, WhatsApp template builder, design message template, WhatsApp approved templates]
---

## What is Creating Templates?

Message templates are the foundation of WhatsApp business messaging. Every campaign or automated message you send must use an approved template. You have two ways to create them — both end up on Meta for approval.

## How to use it

### Option 1: Create directly in Waplify (recommended)

This is the easiest way — you fill in the template details right inside Waplify, and it submits everything to Meta for you.

1. Go to the **Templates** page in Waplify
2. Click **Create Template**
<!-- screenshot: Templates page with Create Template button -->
3. Choose your **template category**:
   - **Marketing** — promotions, offers, updates, newsletters
   - **Utility** — order confirmations, shipping updates, reminders
   - **Authentication** — one-time passwords (OTP), login verification
<!-- screenshot: template category selection -->
4. Enter a **template name** (use lowercase with underscores, e.g., `welcome_offer`)
5. Select the **language** for your template
6. Write your **message body** — this is the main content of your message
7. Optionally add:
   - A **header** (text, image, video, or document)
   - A **footer** (small text at the bottom)
   - **Buttons** (quick reply, URL, phone number, or copy code)
<!-- screenshot: Waplify template builder with body, header, footer, and buttons -->
8. Add **sample content** if your template uses variables — Meta uses this to review your template
9. Click **Submit** — Waplify will send your template to Meta for approval

### Special Marketing template types

When you choose the **Marketing** category, you can build more than a standard message:

- **Media carousel** — a set of 2 to 10 swipeable cards, each with its own image or video and buttons. Ideal for showcasing several products at once. See [Carousel Templates](./carousel-templates.md) for a full walkthrough.
- **Limited-time offer** — adds a live countdown timer and a tappable coupon-code button, so customers can see exactly how long a deal lasts.

### Message validity period (optional)

While building a template, you can set a **message validity period** — sometimes called "time to live". This controls how long WhatsApp keeps trying to deliver a message sent with this template before it gives up.

1. In the template builder, find the **Message validity period** section
2. Turn on **Set custom validity for your message**
3. Choose a duration from the dropdown
<!-- screenshot: Message validity period setting in the template builder -->

The available durations depend on the template category:

- **Marketing** — from 12 hours up to 30 days
- **Utility** — from 30 seconds up to 12 hours
- **Authentication** — from 30 seconds up to 15 minutes

If you leave this turned off, WhatsApp uses its default of about 10 minutes. Choose a **shorter** period when timing matters — you'll find out quickly if a message failed — and a **longer** period when delivery can wait, so WhatsApp has more chances to retry.

### Option 2: Create on Meta's website

If you prefer, you can also create templates directly on Meta's website and then import them into Waplify.

1. From the Templates page, click **Create on Meta** — this opens Meta's Template Manager in a new tab
2. Create your template directly on Meta's platform
3. The template appears in Waplify automatically once Meta processes it — there's no manual import step

### Keeping templates in sync with Meta

Templates you create or change on Meta's website appear in Waplify **automatically** — you don't need to import them by hand.

If you want to refresh the list immediately, go to the **Templates** page and click **Sync Templates**. This pulls the latest status and content for every template straight from Meta.
<!-- screenshot: Templates list with the Sync Templates button -->

## Tips & best practices

- **Name templates clearly** — use descriptive names like `order_confirmation` or `monthly_newsletter` so your team can find them easily
- **Keep messages concise** — WhatsApp is a messaging platform, not email. Short, clear messages work best
- **Include opt-out text** in marketing templates (e.g., "Reply STOP to unsubscribe") — this is recommended by Meta and improves approval chances
- **Test your template** by creating a small campaign to yourself before sending it to customers
- **Sync is automatic** — templates created or edited on Meta show up in Waplify on their own. Use the **Sync Templates** button only when you want an immediate refresh.
- New to templates? Read the [Message Templates Overview](./message-templates.md) to understand how templates and approvals work
- Want to add personalization or images? See [Template Variables & Media](./template-variables-and-media.md) to learn about variables and media headers

## Frequently asked questions

### How long does template approval take?

For verified businesses, approval usually takes a few hours. For new or unverified businesses, it can take up to 24 hours.

### Why was my template rejected?

Common reasons include: unclear purpose, missing opt-out for marketing messages, misleading content, or policy violations. Check Meta's rejection reason and resubmit with corrections.

### Can I create templates directly in Waplify?

Yes! Waplify lets you create templates directly from the Templates page. When you submit, Waplify sends it to Meta for approval on your behalf. You can also create templates on Meta's website and sync them back.

### Can I edit a template after it's created?

Yes. Open the template from the **Templates** page and click **Edit**. If the template is already **Approved**, your changes are sent to Meta for a fresh review and the template returns to **Pending** until it's re-approved — so it can't be used for sending in the meantime.

**Carousel templates are the exception** — they can't be edited at all. To change a carousel, create a new one. See [Carousel Templates](./carousel-templates.md).

### How many templates can I create?

There is no strict limit on the number of templates you can create. However, Meta may have quality-based limits for new accounts.
