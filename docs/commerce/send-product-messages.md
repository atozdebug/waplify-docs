---
title: Sending Products in a Message
description: Send one product, a hand-picked list, or your whole catalog inside a WhatsApp message
sidebar_position: 3
keywords: [WhatsApp product message, multi product message, single product message, catalog message, MPM, SPM]
---

## What are product messages?

A **product message** shows real products from your catalog inside a WhatsApp chat. The customer can tap one, see the details, and add it to a cart without leaving the conversation.

There are three kinds, and the difference is simply how much you choose for the customer.

| Kind | What the customer sees | Use it when |
|---|---|---|
| **Single product** | One product, shown large at the top of the message | You are recommending one specific thing |
| **Multi-product** | A short list you picked, grouped into sections | You are showing a small selection - a few offers, one range |
| **Full catalog** | A button that opens your whole catalog | You want them to browse everything |

<!-- screenshot: the three product message types side by side in a WhatsApp chat -->

## How to use it

Product messages are sent as **templates**, so they go through Meta approval once and can then be used again and again.

### Create the template

1. Go to **Templates → Create Template**.
2. Choose the **Commerce** message type.
3. Pick which kind you want - single product, multi-product, or full catalog.
4. Write your message body as normal. You can use [variables](/docs/templates/template-variables-and-media) like `{{1}}` for the customer's name.
5. Submit it for approval.

<!-- screenshot: choosing the Commerce type in the template builder -->

:::note
The **Commerce** option only appears if Commerce is enabled on your account and your catalog is connected. See [Connect Your Product Catalog](/docs/commerce/connect-your-catalog).
:::

### Choose the products

Which products appear is decided differently for each kind:

- **Single product** - you pick the exact product when you build the template.
- **Multi-product** - you pick the products and arrange them into sections when you build the template.
- **Full catalog** - you pick nothing. WhatsApp opens the catalog connected to your number.

### Send it

Once Meta approves the template you can send it:

- **From the inbox** - open a chat and send it to one person.
- **From a campaign** - send it to a group or a tag. See [Using Templates in Campaigns](/docs/campaigns/campaign-templates).
- **From a flow** - let your chatbot send it. See [Commerce in Flows](/docs/commerce/commerce-in-flows).

:::tip
Inside a chatbot conversation you usually do not need a template at all. The **Send Catalog** block sends products directly while the customer is chatting with you, with no approval step, and can send a whole collection. Templates are for reaching people who have not messaged you. See [Commerce in Flows](/docs/commerce/commerce-in-flows#show-products-with-send-catalog).
:::

## Tips & best practices

- **Send yourself the first one.** Product messages look quite different from normal templates, and one test send tells you more than any preview.
- **Keep multi-product lists short.** A wall of products is harder to act on than five good ones.
- **Lead with a reason.** The message body is what persuades - "Here's the size you asked about" beats "Our products".
- **Check the product still exists.** If you delete a product from your catalog, a template that points at it will stop working.

## Frequently asked questions

### Do product messages need Meta approval?

Yes, like any template. Approval is usually quick, but build them before you need them rather than on the day of a campaign.

### Can I change the products in an approved template?

For single and multi-product messages the products are part of the template, so changing them means a new template. A **full catalog** message always shows whatever is in your catalog right now, so it never needs rebuilding.

### The Commerce option is missing from the template builder

Either Commerce is not enabled on your account, or no catalog is linked. Check **Commerce → Settings**.

### What happens after the customer taps a product?

They can add it to a cart and keep browsing. When they send the cart, it arrives as an order - see [Receiving Orders](/docs/commerce/receiving-orders).

### Can I send a product message to someone who never messaged me?

Yes, as an approved template - the same rules as any other template apply.
