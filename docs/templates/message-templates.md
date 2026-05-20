---
title: Message Templates Overview
description: Learn how WhatsApp message templates work — create, sync, and manage approved templates in Waplify
sidebar_position: 1
keywords: [WhatsApp message templates, WhatsApp template approval, business message templates, WhatsApp API templates]
---

## What are Message Templates?

WhatsApp requires all business-initiated messages to use **pre-approved templates**. Templates are message formats that you create and submit to Meta (Facebook) for review. Once approved, you can use them to send campaigns and automated messages through Waplify.

## How to use it

### Viewing your templates

1. Go to **Templates** from the sidebar
<!-- screenshot: Templates page showing list of templates -->
2. You will see all your synced templates with their:
   - **Name** — the template identifier
   - **Category** — Marketing, Utility, or Authentication
   - **Language** — the language of the template
   - **Status** — whether it is synced and approved

### Creating a template

You can create templates two ways — both submit to Meta for approval:

- **Inside Waplify (recommended)** — click **Create Template** on the Templates page and build it with the visual editor. This is the easiest option, and it supports special types like [carousel templates](./carousel-templates.md).
- **On Meta's website** — click **Create on Meta** to open Meta's Template Manager in a new tab and build it there.
<!-- screenshot: Create Template button on the Templates page -->

Either way, choose a template **category** based on what you want to send:

- **Marketing** — promotions, discount offers, product announcements, newsletters, or seasonal greetings
- **Utility** — order confirmations, shipping updates, appointment reminders, or account notifications
- **Authentication** — one-time passwords or login verification codes

For a step-by-step walkthrough, see [Creating Templates](./creating-templates.md).

:::info
Template approval time varies. Verified businesses usually get approved within a few hours. New businesses may wait up to 24 hours.
:::

### Keeping templates in sync with Meta

Templates you create or change on Meta appear in Waplify **automatically** — there's no manual import step. The list also updates on its own as Meta approves, rejects, or pauses your templates.

If you want to refresh the list right away, click **Sync Templates** on the Templates page to pull the latest state straight from Meta.
<!-- screenshot: Sync Templates button on the Templates page -->

### Deleting a template

1. Find the template you want to remove in the list
2. Click the **delete** icon next to the template
3. Confirm the deletion — this removes the template from both Waplify and Meta

## Tips & best practices

- Use **lowercase names with underscores** for template names (e.g., `welcome_offer`, `order_update`)
- Include an **opt-out option** in marketing templates (e.g., "Reply STOP to unsubscribe") — this improves approval chances
- Keep your message clear and concise — WhatsApp may reject vague or misleading content
- Templates created or edited on Meta sync to Waplify automatically — use **Sync Templates** only when you want an immediate refresh
- You can create templates with **variables** (like customer name) that get filled in when you send a campaign — see [Template Variables & Media](./template-variables-and-media.md)

## Frequently asked questions

### Why do templates need to be approved?

WhatsApp requires approval to prevent spam and ensure businesses send useful, relevant messages. This protects both you and your customers.

### How long does template approval take?

For verified businesses, approval usually takes a few hours. For unverified businesses, it can take up to 24 hours. Some templates may be rejected if they violate WhatsApp's policies.

### What if my template is rejected?

Check the rejection reason in Meta's Template Manager. Common reasons include unclear messaging, missing opt-out for marketing, or policy violations. Fix the issue and resubmit.

### Can I edit an approved template?

Yes. Edit it from the **Templates** page — your changes are sent to Meta for a fresh review, and the template returns to **Pending** until it is re-approved. Carousel templates are the exception: they can't be edited, so create a new one instead. See [Creating Templates](./creating-templates.md).

### What is the difference between Marketing, Utility, and Authentication templates?

- **Marketing**: Promotional messages, offers, newsletters
- **Utility**: Transactional messages like order updates, appointment reminders
- **Authentication**: One-time passwords and verification codes

Each category has different pricing and approval criteria.
