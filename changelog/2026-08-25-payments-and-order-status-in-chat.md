---
title: Take Payment and Send Order Updates Inside WhatsApp
tags: [commerce, automation, templates]
---

Two new message types close the loop on a sale: **Review and pay**, which lets a customer pay without leaving the chat, and **Order status**, which tells them when their order is confirmed, shipped or cancelled. Your chatbot can run the whole thing.

<!-- truncate -->

## Review and pay

Send a customer an itemised order with a total and a pay button. They pay inside WhatsApp, the payment lands under **Commerce → Payments**, and the order updates.

## Order status

Send a proper status update when something changes. Same idea as a shipping email, except it arrives in the conversation the customer is already having with you.

## Your chatbot can do it unattended

Three blocks appear in the flow builder under **Ecommerce**:

- **Request Payment** sends the itemised order with its pay button.
- **Wait for Payment** pauses the flow until the money clears, fails, or runs out of time. It has three separate ways out: **captured**, **failed** and **timeout**. Wire all three, or the people who do not pay are left stuck mid-conversation.
- **Update Order Status** confirms, ships or cancels.

Wait for Payment also saves the outcome and the payment reference as variables, so a later block can quote them in a message or pass them to another system.

See [Commerce in Flows](/docs/commerce/commerce-in-flows).

## What you need first

Both message types need **WhatsApp payments enabled on your number by Meta**. That is not something Waplify can switch on, and it is not available in every country.

If your number does not have it, **both options are now hidden in the template builder** rather than shown and broken. That is a deliberate change: Meta rejects them with an error about titles and buttons that never mentions payments, which sent people looking for a problem in their template that was not there.

One thing worth stating plainly, because it surprises people: **order status messages need payments approved too**, not just the pay message. They look like ordinary notifications, but Meta treats them as part of the same payments feature.

## If payments are not available to you

Everything else in Commerce still works. Show products, take cart orders, and collect payment however you already do. Only these two message types are gated.

See [Payments & Order Status](/docs/commerce/payments-and-order-status).
