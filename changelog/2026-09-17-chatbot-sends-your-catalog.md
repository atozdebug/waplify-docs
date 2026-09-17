---
title: Your Chatbot Can Now Show Products, and a Cart Is Never Lost
tags: [commerce, automation, web]
---

Flows have a new **Send Catalog** block, so your chatbot can show the right products the moment a customer asks: your whole catalog, one product, a list you pick, or a collection you keep in Meta. When the customer sends a cart back, your **Order received** flow now always picks it up, even if the chatbot was still waiting on something else.

<!-- truncate -->

## Show products from a flow

Picture the most common shop chatbot: a customer says "hi", you ask "Bags or Tables?", and they tap one. Until now the only way to answer with products was a product template, which needs Meta approval and a fixed product list.

The **Send Catalog** block, under **Orders** in the flow builder, sends products straight into the conversation. Choose what to send:

- **Full catalog**: a card that opens everything you sell.
- **One product**: a single product card.
- **Product list**: up to 30 products you pick, grouped under headings.
- **Collection**: a set you keep in Meta Commerce Manager, sent as it is when the message goes out, in-stock products first.

You pick products from a searchable list with photos, prices and stock, and a preview shows the message as WhatsApp will. The block tells you when your products were last synced, lets you sync them on the spot, and warns you if the cart is switched off for one of your numbers.

It needs the Commerce app and a connected catalog. It does not need WhatsApp payments.

## Collections come from Meta

The sets you create in Meta Commerce Manager now come into Waplify with every product sync, as **collections**. Send one from a flow and it stays current: add a product to the set in Meta, sync, and every flow sending that collection shows it, with no flow edits.

## A cart is never swallowed

A customer who is sent products usually browses for a while, then sends a cart. If the chatbot was still waiting for them at that point, on a question or a delay, the cart used to get stuck there: treated as an answer, or quietly ignored, and your order flow never started.

Now the cart always wins. The waiting flow ends, your **Order received** flow starts, and the session history shows **Customer sent a cart**. A "Still looking?" reminder no longer goes out after someone has already ordered. A flow that is waiting for a payment, or a chat a teammate has taken over, is left alone.

## Confirm an order in one line

Flows started by a cart have a new **Order summary** variable, `{{order.items_summary}}`. It lists each product by name with its quantity and price, then the total, ready to drop into a confirmation message. That makes a proper order confirmation possible without WhatsApp payments.

**Order total** and **Number of items** also show as whole numbers now, instead of "2.0 items".

## Safer publishing

Publishing checks every Send Catalog block against your catalog and stops you if a product or collection is gone. If a product is removed after you publish, a product list sends the ones that are left instead of failing, and the reason shows in the session history.

See [Commerce in Flows](/docs/commerce/commerce-in-flows) for a complete two-flow shop example.
