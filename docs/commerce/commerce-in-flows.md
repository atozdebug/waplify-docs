---
title: Commerce in Flows
description: Let your chatbot show products, request payment, wait for it to clear, and update the order status on its own
sidebar_position: 6
keywords: [WhatsApp commerce automation, request payment flow, wait for payment, order status flow, chatbot orders]
---

## What is Commerce in flows?

Everything you can do by hand in Commerce, a [flow](/docs/flows-v2/what-is-flows-v2) can do on its own - show products, ask for payment, wait for the money to arrive, and tell the customer what happened.

That means an order can be taken and paid for at two in the morning without anyone on your side being awake.

## The commerce blocks

Three blocks appear in the flow builder under **Ecommerce**, alongside the normal send blocks.

| Block | What it does |
|---|---|
| **Request Payment** | Sends the customer an itemised order with a pay button |
| **Wait for Payment** | Pauses the flow until the payment clears, fails, or runs out of time |
| **Update Order Status** | Tells the customer their order is confirmed, shipped, or cancelled |

You can also use a normal **Send Template** block to send a [product message](/docs/commerce/send-product-messages) - single product, multi-product, or full catalog.

<!-- screenshot: the Ecommerce blocks in the flow builder block list -->

:::note
These blocks need Commerce enabled on your account, and **Request Payment**, **Wait for Payment** and **Update Order Status** additionally need WhatsApp payments approved on your number by Meta. See [Payments & Order Status](/docs/commerce/payments-and-order-status).
:::

## How to use it

### Wait for Payment has three ways out

This is the block that makes automated selling safe, because it does not assume the payment worked.

- **Captured** - the money arrived. Carry on and confirm the order.
- **Failed** - the payment did not go through. Apologise and offer to try again.
- **Timeout** - nobody paid in time. Follow up, or hand the conversation to a person.

Wire all three. A flow that only handles *captured* leaves everyone else stuck mid-conversation.

<!-- screenshot: the Wait for Payment block showing its captured, failed and timeout outputs -->

The block also saves the **payment outcome** and a **payment reference** as variables, so a later block can include them in a message or send them to another system.

### A simple sell-and-collect flow

1. **Send Template** - a product message, so the customer can browse and pick.
2. **Request Payment** - once they have chosen, send the itemised order.
3. **Wait for Payment** - pause here.
4. On **captured** → **Update Order Status** set to confirmed, then a thank-you message.
5. On **failed** → a message offering to try again.
6. On **timeout** → [hand off to a human](/docs/flows-v2/handing-off-to-a-human) so someone can follow up.

<!-- screenshot: a finished flow with the three Wait for Payment branches wired to different endings -->

### Test before you publish

Run through it yourself with a real number before you let customers near it. Payment flows are the worst place to discover a missing branch. See [Monitor Your Flows](/docs/flows-v2/monitoring-your-flows) to watch what actually happened.

## Tips & best practices

- **Always wire timeout.** Most people who do not pay simply got distracted. A follow-up recovers a good share of them.
- **Do not leave someone waiting silently.** Send something before the pause so they know a pay request is coming.
- **Hand off when it gets complicated.** A refund question is a conversation, not a branch.
- **Keep the confirmation specific.** "Order confirmed, shipping Tuesday" is worth more than "Thank you".

## Frequently asked questions

### Do I need payments approved to use these blocks?

For **Request Payment**, **Wait for Payment** and **Update Order Status**, yes - Meta gates all three behind payments approval for your number. Sending product messages from a flow does not need it.

### How long does Wait for Payment wait?

Until the payment clears, fails, or the time limit you set runs out - whichever comes first. The timeout branch handles the last case.

### Can the flow read what the customer ordered?

Yes. The order that arrives from a cart carries its items, and the payment blocks save their outcome and reference as variables you can use later in the flow.

### What if the customer replies mid-payment?

The flow is still waiting. Wire the timeout branch to a [handover](/docs/flows-v2/handing-off-to-a-human) so a person can pick it up.

### Can I use these in a campaign instead of a flow?

Campaigns send one message to many people. Taking payment is a back-and-forth, so it belongs in a flow.
