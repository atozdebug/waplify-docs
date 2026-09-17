---
title: Commerce in Flows
description: Let your chatbot show products, pick up the cart the customer sends back, request payment, and update the order status on its own
sidebar_position: 6
keywords: [WhatsApp catalog chatbot, send catalog flow, WhatsApp commerce automation, order received flow, request payment flow, wait for payment, order summary]
---

## What is Commerce in flows?

Everything you can do by hand in Commerce, a [flow](/docs/flows-v2/what-is-flows-v2) can do on its own. It can show products, pick up the cart the customer sends back, ask for payment, wait for the money to arrive, and tell the customer what happened.

That means an order can be taken at two in the morning without anyone on your side being awake.

## The commerce blocks

These blocks appear in the flow builder under **Orders**, alongside the normal send blocks.

| Block | What it does |
|---|---|
| **Send Catalog** | Shows the customer your products: the full catalog, one product, a list you pick, or a collection |
| **Request Payment** | Sends the customer an itemised order with a pay button |
| **Wait for Payment** | Pauses the flow until the payment clears, fails, or runs out of time |
| **Update Order Status** | Tells the customer their order is confirmed, shipped, or cancelled |

Flows also have an **Order received** start, which runs a flow the moment a customer sends you a cart.

<!-- screenshot: the Orders group in the flow builder block list -->

:::note
All of these need the Commerce app installed and a [catalog connected](/docs/commerce/connect-your-catalog). **Request Payment**, **Wait for Payment** and **Update Order Status** also need WhatsApp payments approved on your number by Meta. See [Payments & Order Status](/docs/commerce/payments-and-order-status). **Send Catalog** and the **Order received** start do not.
:::

## How to use it

### Show products with Send Catalog

1. Add a **Send Catalog** block where you want the products to appear, for example after the customer taps "Bags".
2. Under **What to send**, pick one of the four options below.
3. Fill in the fields for that option. The preview shows the message as WhatsApp will.
4. Save, and publish the flow.

| Option | What the customer sees | What you fill in |
|---|---|---|
| **Full catalog** | A card with a **View catalog** button that opens everything you sell | A message, and a thumbnail product whose photo shows on the card |
| **One product** | A single product card | The product, and an optional message |
| **Product list** | A **View items** button that opens the products you picked, grouped under headings | A header, a message, and up to 10 sections with 30 products in total |
| **Collection** | The same list, filled from a set you keep in Meta Commerce Manager | The collection, a header, a message, and a section title |

<!-- screenshot: the Send Catalog block with the four What to send options -->

**Collection** is the one to use for a range that changes. You manage the set in Meta, and each message sends the products in it at that moment, in-stock products first, up to the 30 WhatsApp allows. See [Collections](/docs/commerce/connect-your-catalog#collections) for how sets reach Waplify.

The top of the block shows which catalog you are sending from, when its products were last synced, and a **Sync products** button. It also warns you when the cart is switched off for one of your numbers, because customers can then browse but cannot order.

:::important
**Send Catalog** sends a normal chat message, not a template, so it only goes out while the conversation is open: within 24 hours of the customer's last message. A flow that the customer started by messaging you is always inside that window. To reach someone who has not messaged you, use a [product template](/docs/commerce/send-product-messages) instead.
:::

### What happens when the customer sends a cart

**Send Catalog** does not wait. Customers often browse for a while, so the flow carries on straight away (or ends) instead of holding the conversation.

When the customer adds products and sends the cart, that cart starts a separate flow: the one whose start is **Order received**.

1. Create a new flow and open its **Start** block.
2. Under **Trigger type**, choose **Order received**.
3. Choose **Every order**, or **Only orders that match** to set an order value range or a minimum number of items.
4. Build what should happen next, then publish.

<!-- screenshot: the Order received start with Every order and Only orders that match -->

If the cart arrives while another flow is still waiting for this customer (on a question, or on a **Delay**), that flow ends and the **Order received** flow starts. The session history shows **Customer sent a cart**. So a "Still looking?" reminder never goes out after someone has already ordered.

Two waits are left alone: a flow that is **waiting for a payment**, and a chat a teammate has taken over.

If you have no **Order received** flow, nothing in your running flows changes. The cart still arrives in the inbox and under **Commerce → Orders**.

### Confirm the order with the order summary

Inside an **Order received** flow, the variable picker offers the order's details:

| Variable | What it holds |
|---|---|
| **Order summary** `{{order.items_summary}}` | Each product with its quantity and price, then the total |
| **Order total** `{{order.total_amount}}` | The cart value, before tax and shipping |
| **Currency** `{{order.currency}}` | For example INR |
| **Number of items** `{{order.item_count}}` | Total units in the cart |

A message like this:

```
Thanks for your order!
{{order.items_summary}}
```

reaches the customer as:

```
Thanks for your order!
2 x Canvas Tote Bag: 1,798.00 INR
1 x Gym Duffel Bag: 2,499.00 INR
Total: 4,297.00 INR
```

Product names come from your catalog. A very large cart lists as many products as fit, then "and 3 more products", and always ends with the total. Inside a template, where WhatsApp does not allow line breaks, the lines are joined with " | ".

This is how you confirm orders if you do not take payments on WhatsApp.

### Example: a shop menu

This is two flows working together.

**Flow A: Shop menu** (starts on the keyword "hi")

1. **Send Text**: "Thanks for messaging us!"
2. **Send Buttons**: "What are you looking for?" with the buttons **Bags** and **Tables**.
3. **Bags** leads to **Send Catalog** set to **Collection**, choosing your "Bags" set. Follow it with a **Delay** of 1 hour and a **Send Text**: "Still looking? Reply HELP to talk to us."
4. **Tables** leads to **Send Catalog** set to **One product**, choosing "Oak Study Table".

**Flow B: New order** (starts on **Order received**)

Without WhatsApp payments:

1. **Send Text** with the message `Thanks for your order! {{order.items_summary}} We will confirm delivery shortly.`
2. [**Assign to Agent**](/docs/flows-v2/handing-off-to-a-human) so someone arranges payment and delivery.

With WhatsApp payments approved:

1. **Request Payment**, billing **The customer's cart** (the default).
2. **Wait for Payment**.
3. On **captured**, **Update Order Status** set to confirmed, then a thank-you message.
4. On **failed**, a message offering to try again.
5. On **timeout**, [hand off to a human](/docs/flows-v2/handing-off-to-a-human) so someone can follow up.

<!-- screenshot: Flow A with the Bags and Tables branches, and Flow B with the three Wait for Payment branches -->

:::tip Why two flows?
Putting **Request Payment** straight after a product message does not work. The flow does not stop to let the customer choose, so it would bill for items you picked in advance before they have picked anything. The cart is what tells you what they want, and it starts Flow B.
:::

### Wait for Payment has three ways out

This is the block that makes automated selling safe, because it does not assume the payment worked.

- **Captured**: the money arrived. Carry on and confirm the order.
- **Failed**: the payment did not go through. Apologise and offer to try again.
- **Timeout**: nobody paid in time. Follow up, or hand the conversation to a person.

Wire all three. A flow that only handles *captured* leaves everyone else stuck mid-conversation.

<!-- screenshot: the Wait for Payment block showing its captured, failed and timeout outputs -->

The block also saves the **payment outcome** and a **payment reference** as variables, so a later block can include them in a message or send them to another system.

### Test before you publish

Publishing checks your **Send Catalog** blocks against your catalog, and stops you if a chosen product or collection is no longer in it.

Products can still change after you publish. If one is removed later, a product list sends the ones that are left, and a step with nothing left to show is skipped so the flow carries on. The reason appears in the session history. See [Monitor Your Flows](/docs/flows-v2/monitoring-your-flows).

Run through both flows yourself with a real number before you let customers near them. Payment flows are the worst place to discover a missing branch.

## Tips & best practices

- **Sync after you change your catalog in Meta.** Product details and collections in Waplify update when you press **Sync products**.
- **Use Collection for ranges that change.** Add a product to the set in Meta, sync, and every flow sending that collection shows it. No flow edits needed.
- **Always build an Order received flow** if you send products from a flow. Otherwise a cart gets no automatic reply.
- **Always wire timeout.** Most people who do not pay simply got distracted. A follow-up recovers a good share of them.
- **Keep the confirmation specific.** "Order confirmed, shipping Tuesday" is worth more than "Thank you".
- **Hand off when it gets complicated.** A refund question is a conversation, not a branch.

## Frequently asked questions

### Do I need WhatsApp payments approved to show products from a flow?

No. **Send Catalog** and the **Order received** start only need Commerce installed and a catalog connected. **Request Payment**, **Wait for Payment** and **Update Order Status** need payments approved.

### Does the chatbot wait while the customer picks products?

No. **Send Catalog** sends and moves on. When the customer sends a cart, it starts your **Order received** flow.

### What if the customer sends a cart while the bot is waiting for an answer?

The waiting flow ends and your **Order received** flow starts, so the order is never swallowed as an answer. A flow waiting for a payment, or a chat a teammate has taken over, is left as it is.

### I added products to a set in Meta, but the collection still shows the old ones

Press **Sync products**, in the Send Catalog block or on the **Commerce → Products** page. Waplify reads collections from the last sync.

### Can a collection send more than 30 products?

No. WhatsApp shows at most 30 products in one message. A bigger collection sends 30, in-stock products first.

### How long does Wait for Payment wait?

Until the payment clears, fails, or the time limit you set runs out, whichever comes first. The timeout branch handles the last case.

### Can I use these in a campaign instead of a flow?

Campaigns send one message to many people. Taking an order is a back-and-forth, so it belongs in a flow. To send products to many people, use a [product template](/docs/commerce/send-product-messages) in a campaign.
