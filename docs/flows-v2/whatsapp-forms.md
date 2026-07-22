---
title: WhatsApp Forms
description: Collect several answers at once in a single tidy form inside WhatsApp, instead of asking question by question
sidebar_position: 9
keywords: [WhatsApp forms, WhatsApp flows form, collect customer details WhatsApp, WhatsApp form builder, photo upload WhatsApp, form submissions]
---

## What is a WhatsApp Form?

A **WhatsApp Form** is a small form that opens inside the WhatsApp chat. The customer fills it in — name, choices, dates, even photos — taps **Submit**, and every answer comes back to you at once.

It's the difference between a bot asking six questions one at a time (and the customer wandering off after the third) and one clean form they finish in twenty seconds.

Use it for booking requests, order details, registrations, support tickets, quote requests, and anything where you need several details together.

## How to use it

### 1. Build the form

1. Go to **Flows V2 → Forms** and click **New form**.
2. Give it a name you'll recognise later.
3. Add the pieces you need from the builder, then arrange them in the order the customer should see them.

<!-- screenshot: the WhatsApp Forms builder with the component list and live preview -->

**Text you show them**

- **Heading**, **Subheading**, **Body**, **Caption** — explain what the form is for and guide them as they go.

**Answers you collect**

- **Short answer** — one line. Choose what it accepts: **Text**, **Number**, **Email**, **Phone**, **Password**, or **Passcode**.
- **Long answer** — a bigger box for messages, addresses or notes.
- **Dropdown** — pick one from a list.
- **Radio buttons** — pick one, all options visible.
- **Checkboxes** — pick several.
- **Chips** — tappable tags, good for short choices.
- **Date picker** — for appointments, delivery dates, birthdays.
- **Photo** — attach pictures. Choose **camera only**, **gallery only**, or **camera or gallery**.
- **Document** — attach PDFs and files, like receipts, ID copies or prescriptions.
- **Opt-in** — a tick box for consent, such as agreeing to your terms or to receive offers.
- **Image carousel** — show pictures they can swipe through, for example products to choose from.

For **Photo** and **Document**, set how many files they may attach and the maximum size, so nobody sends you forty images by accident.

### 2. Preview as you build

The **preview** on the right shows the form exactly as it will look on the customer's phone. Check it before you publish — a form that looks cramped on your screen looks worse on a phone.

### 3. Publish it

New forms are saved as a **draft** first. A draft is yours to edit freely; it can't be sent to customers yet.

When it's ready, click **Publish**. WhatsApp reviews published forms, so build and check it properly before publishing rather than publishing to test.

<!-- screenshot: the draft form with the Publish button -->

### 4. Send it from a flow

A form reaches customers through a [flow](/docs/flows-v2/what-is-flows-v2):

1. Open your flow in the builder.
2. Add a **Send Form** block where you want to ask.
3. Choose your published form.
4. Carry on building — the blocks after it run once the customer submits.

You can use their answers in later steps: send a confirmation that repeats their booking date, branch on what they chose, or save an answer onto the contact with the [Update Contact](/docs/flows-v2/updating-contacts) block.

### 5. Read the responses

Go to **Flows V2 → Forms**, open your form, and choose **Submissions**.

- Every submission is a row, with a column per question.
- **Photos appear as thumbnails** you can open full size.
- **Documents can be downloaded** in one click — no digging through the chat to find the attachment.

<!-- screenshot: the submissions table with a photo thumbnail and a document download -->

## Tips & best practices

- **Keep it short.** Every extra field costs you completions. Ask only what you'll actually act on.
- **Ask the hard things last.** Name and phone first, long message at the end — people who've started tend to finish.
- **Give choices instead of typing.** Dropdowns, radio buttons and chips are faster on a phone and give you clean, consistent data.
- **Say why you need a photo.** "Send a picture of the damaged item" gets far better results than a bare "Photo".
- **Send a confirmation after submit.** People want to know it went through. One message in the flow after the form does it.
- **Test with your own number** before you point a campaign at it.

## Frequently asked questions

### Is this the same as asking questions in a flow?

No, and both are useful. [Asking questions](/docs/flows-v2/asking-questions-and-saving-answers) sends one question at a time as chat messages — good for a natural conversation. A form collects everything in one screen — better when you need several details together.

### Can I edit a form after publishing it?

Editing a published form means it goes through review again. For a small wording fix that's fine; if you're experimenting, work on a draft copy instead.

### Do customers need to install anything?

No. The form opens inside WhatsApp itself. Nothing to download, no browser, no link to trust.

### Where do uploaded photos and documents go?

They're stored with the submission and shown in your submissions table. You can also attach them to an email using the [Send Email block](/docs/flows-v2/connecting-other-tools), so your team gets the file with the notification.

### Can I use a form outside a flow?

Forms are sent by flows. To send one from a campaign, start a flow from the campaign's button and put the form in that flow.

### Why was my form rejected?

Same rules as message templates: no misleading content, no asking for sensitive financial details, and the form must do what it says it does. Rewrite the part that was flagged and publish again.
