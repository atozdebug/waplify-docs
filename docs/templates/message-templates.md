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
![The Templates page with the Category and Status filters and a preview card for each template](/img/docs/templates/message-templates-page.png)
2. Each template shows as a card with a WhatsApp-style preview of the message, so you can see exactly what your customer will receive. Each card also shows:
   - **Name** and a green tick when the template is approved (other statuses, like Pending or Rejected, are written next to the name)
   - **Category, language and date**, for example "Marketing · English (US) · 22 Oct"
   - **Variables** as green tags in the message, like `first_name`
   - **Numbers that can send it**, at the bottom of the card, if your business has more than one WhatsApp number
3. Click any card to see the full template, its details and the **Edit** and **Delete** buttons.

### Finding a template

Use the filters at the top of the page:

- **Number**: the page opens on **All numbers**, so you see every template your numbers can send. Pick one number to see only its templates.
- **Category**: Marketing, Utility or Authentication (and Commerce, if your plan includes it). Each option shows how many templates it has.
- **Status**: Approved, Pending, Rejected, Paused or Drafts. **All statuses** shows every template except drafts. Pick **Drafts** to see templates you saved but haven't submitted yet.
- **Search templates**: type part of a template's name or message.
![The Category filter showing how many templates each category has](/img/docs/templates/message-templates-category.png)

### Creating a template

You can create templates two ways — both submit to Meta for approval:

- **Inside Waplify (recommended)** — click **Create Template** on the Templates page and build it with the visual editor. This is the easiest option, and it supports special types like [carousel templates](./carousel-templates.md).
- **On Meta's website**: click the small arrow next to **Create Template**, then **Create on Meta**. This opens Meta's Template Manager in a new tab, where you build it.
![The arrow next to Create Template, with Create on Meta](/img/docs/templates/message-templates-create-menu.png)

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

If you want to refresh the list right away, click the **Sync from Meta** button (the round arrows next to the search box) to pull the latest state straight from Meta. With **All numbers** picked, this refreshes the templates for every number at once.
![The Sync from Meta button next to the search box](/img/docs/templates/message-templates-sync.png)

### Deleting a template

1. Click the template's card to open it
2. Click **Delete**
3. Confirm the deletion. This removes the template from both Waplify and Meta.

## Tips & best practices

- Use **lowercase names with underscores** for template names (e.g., `welcome_offer`, `order_update`)
- Include an **opt-out option** in marketing templates (e.g., "Reply STOP to unsubscribe") — this improves approval chances
- Keep your message clear and concise — WhatsApp may reject vague or misleading content
- Templates created or edited on Meta sync to Waplify automatically. Use **Sync from Meta** only when you want an immediate refresh.
- With more than one WhatsApp number, look at the bottom of each card to see which numbers can send that template
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

### Why does a template show more than one number?

Templates belong to your WhatsApp Business account on Meta, not to a single number. If two of your numbers are on the same account, both can send the same template, so the card lists both.

### I'm a team member and I only see some numbers. Why?

Your admin can limit which WhatsApp numbers each team member can use. The Templates page only shows the numbers, and the templates, that you have access to.

### Where are my draft templates?

Pick **Drafts** in the **Status** filter. Drafts aren't linked to a number until you publish them, so their card says "Not linked to a number".

### What is the difference between Marketing, Utility, and Authentication templates?

- **Marketing**: Promotional messages, offers, newsletters
- **Utility**: Transactional messages like order updates, appointment reminders
- **Authentication**: One-time passwords and verification codes

Each category has different pricing and approval criteria.
