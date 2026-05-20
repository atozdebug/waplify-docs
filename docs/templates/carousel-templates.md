---
title: Carousel Templates
description: How to create a WhatsApp carousel template in Waplify — show 2 to 10 swipeable product cards in a single message
sidebar_position: 4
keywords: [WhatsApp carousel template, media carousel, product cards WhatsApp, carousel message template]
---

## What is a Carousel Template?

A carousel template is a special **Marketing** message that shows **2 to 10 swipeable cards** in a single WhatsApp message. Each card has its own image or video, an optional line of text, and its own buttons.

Carousels are perfect for showing off several products, services, or offers at once — your customer simply swipes sideways to browse them, all without leaving the chat.

## How to use it

### Step 1: Start a new carousel template

1. Go to the **Templates** page in Waplify
2. Click **Create Template**
3. Under category, choose **Marketing**, then pick the **Media carousel** type
<!-- screenshot: template category screen with Media carousel selected -->
4. Enter a **template name** (lowercase letters, numbers, and underscores only — for example, `summer_collection`)
5. Choose the **language** for your template

### Step 2: Write the message body

The **message body** is the text that appears *above* the cards — it introduces the carousel.

- Keep it short and friendly
- You can add **variables** like `{{1}}` to personalize it (for example, the customer's name). You'll be asked for a sample value, which Meta uses during review.
<!-- screenshot: carousel message body field with a variable -->

### Step 3: Choose the card media type

Pick whether every card will use an **image** or a **video** as its header.

- All cards in one carousel must use the **same** media type — you can't mix images and videos
- Changing the media type after you've uploaded files will clear them

### Step 4: Add your cards

Click **Add Card** to build each card. A carousel needs **between 2 and 10 cards**.

For every card:

1. **Upload header media** — an image (JPG or PNG, up to 5 MB) or a video (MP4, up to 16 MB)
2. *(Optional)* Add **card body text** — a short description, up to 160 characters
3. Add **1 or 2 buttons**
<!-- screenshot: a single carousel card editor -->

You can reorder cards with the up and down arrows, or remove a card with the trash icon.

### Step 5: Set up your buttons

You set the button layout on **Card 1**, and Waplify applies the same layout to every other card. Your button choices are:

- **Quick Reply** — a tap-to-respond button
- **Visit Website** — opens a link
- **Call Phone** — dials a phone number

Each card can have its own button *text* and *link*, but every card must have the **same number and type** of buttons.

### Step 6: Submit for approval

Click **Submit**. Waplify sends the carousel to Meta for review. Once it shows as **Approved**, you can use it in a campaign like any other template.
<!-- screenshot: carousel template pending approval in the templates list -->

## Tips & best practices

- **Lead with your best card** — most people only swipe through the first two or three, so put your strongest product or offer first.
- **Keep images consistent** — use the same style, lighting, and shape across all cards so the carousel looks tidy.
- **Either all cards have body text, or none do** — WhatsApp requires this so the cards line up at the same height.
- **Write short card text** — 160 characters fills up fast. A product name and one benefit is usually enough.
- **Use the same button on every card** — for example, a "Shop now" link on each — so the carousel feels predictable to tap through.
- New to templates? Start with the [Message Templates Overview](./message-templates.md) and [Creating Templates](./creating-templates.md).

## Frequently asked questions

### How many cards can a carousel have?

Between **2 and 10**. You need at least 2 cards for it to be a carousel, and Meta allows a maximum of 10.

### Can I mix images and videos in one carousel?

No. Every card must use the same media type — all images, or all videos. You choose this once, before adding cards.

### Can I edit a carousel template after creating it?

No. Carousel templates **cannot be edited** once created — not even before approval. To make a change, create a new carousel template with the updates and submit that one.

### Why do all cards need the same buttons?

It's a WhatsApp requirement. Consistent buttons keep every card the same height so the carousel displays cleanly. You can still change each button's text and link from card to card.

### How do I send a carousel to my customers?

Once the template is **Approved**, create a campaign and select your carousel template, just like any other template. See [Creating Campaigns](../campaigns/creating-campaigns.md).

### What category can a carousel be?

Carousel templates are always in the **Marketing** category. They can't be used for Utility or Authentication messages.
