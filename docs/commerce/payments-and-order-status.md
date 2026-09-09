---
title: Payments & Order Status
description: Ask for payment inside WhatsApp with an Order details message, and keep customers updated as their order moves
sidebar_position: 5
keywords: [WhatsApp payments, review and pay, order details template, order status template, WhatsApp Pay, pay in chat]
---

## What are order templates?

Two special message types handle the end of a sale:

- **Order details** - shows the customer an itemised order with a total and a pay button. They pay without leaving WhatsApp. The button itself reads **Review and Pay**; Meta sets that wording and renders it verbatim, so you cannot change it.
- **Order status** - tells the customer where their order is: confirmed, shipped, cancelled.

Those two names, **Order details** and **Order status**, are exactly what you pick in the template builder.

Both are templates, so they are approved once by Meta and reused.

<!-- screenshot: an Order details message with its Review and Pay button, and an Order status message, in a WhatsApp chat -->

## Before you can use them

:::important
Both message types need **WhatsApp payments enabled on your number by Meta**. This is not something Waplify can switch on, and it is not available in every country. Meta approves it per WhatsApp account.

If your number does not have it, **both options are hidden in the template builder**. That is deliberate - Meta rejects them outright, and the error it returns talks about titles and buttons rather than payments, which sends people looking for the wrong problem.
:::

This catches people out, so to be plain about it: **order status messages need payments approved too**, not just the pay message. They look like ordinary notifications, but Meta treats them as part of the same payments feature.

If payments are not available to you, everything else in Commerce still works. You can show products, take cart orders, and collect payment however you already do - a payment link, bank transfer, cash on delivery.

## How to use it

### Set up your order templates

1. Go to **Templates → Create Template**.
2. Choose the **Utility** category.
3. Under it, choose **Commerce** - *"Ask for payment on an order, or tell a customer their order has moved on."*
4. Pick **Order details** or **Order status**.
5. Write the message. Keep it short - the order itself carries the detail.
6. Submit for approval.

:::note
There are two things called **Commerce** in the template builder, and they do different jobs. The **Commerce message type** builds [product messages](/docs/commerce/send-product-messages) - catalog, single and multi-product. The **Commerce** option under the **Utility** category is the one that builds these two order templates.
:::

Then go to **Commerce → Settings** and pick which approved template to use for each purpose, so Waplify knows what to send.

<!-- screenshot: Commerce → Settings showing the order template pickers -->

### Asking for payment

Send an **Order details** message against an order. The customer sees the items, the total, and a **Review and Pay** button, and pays inside the chat.

When the payment goes through, it appears under **Commerce → Payments**, and the order updates.

### Keeping customers posted

Send an **Order status** message when something changes - confirmed, shipped, cancelled. It is the same idea as a shipping email, except it lands in the conversation they already have with you.

### Seeing what you have been paid

**Commerce → Payments** lists payments captured through WhatsApp, with the customer, the amount, and the order it belongs to.

<!-- screenshot: the Payments list -->

## Tips & best practices

- **Agree the order first.** Send the pay request once the customer has confirmed items, quantities and delivery - not before.
- **Send a status update even when nothing is wrong.** "Shipped today" prevents the "where is my order?" message.
- **Say what happens next.** A pay message that ends with "we'll confirm as soon as this goes through" gets fewer worried follow-ups.
- **Do not promise in-chat payment you cannot take.** If Meta has not approved payments for your number, tell customers how to pay instead.

## Frequently asked questions

### Why can't I see the order template options in the builder?

Your WhatsApp number does not have payments approved by Meta. The options are hidden rather than shown-and-broken, because Meta rejects them with an error that does not mention payments.

### Is this available in my country?

It depends. WhatsApp payments have rolled out to some countries and not others, and approval is per WhatsApp account. Check with Meta for your region.

### Can I use order status without taking payment in WhatsApp?

Not currently. Meta gates order status behind the same payments approval. If you do not have it, send a normal template as an update instead.

### Where does the money go?

Through whatever payment setup Meta has approved for your WhatsApp account. Waplify records that the payment happened and ties it to the order; it does not hold your money.

### What if a customer does not pay?

The order stays as it is. Follow up in the chat - the conversation is still there - or cancel it.

### Is this the same as Waplify's own billing?

No. This is your customers paying you. For your Waplify subscription see [Payments & Invoices](/docs/billing/payments-and-invoices).
