---
title: Connect Your Product Catalog
description: Link the product catalog you keep on Meta to your WhatsApp number, so Waplify can show your products in a chat
sidebar_position: 2
keywords: [WhatsApp catalog, Meta Commerce Manager, connect catalog, WhatsApp product catalog, link catalog]
---

## What is the catalog?

Your **catalog** is the list of products you keep on Meta - names, prices, images, stock. It lives in **Meta Commerce Manager**, not in Waplify.

Waplify does not store your products. It reads the catalog you connect, so it can show products inside a WhatsApp message and match the items on an incoming order back to real products.

This means you carry on managing products where you already do. Change a price in Meta and Waplify shows the new price.

## How to use it

Connecting a catalog is three steps, and **two of them happen on Meta's side**. Waplify walks you through them in order.

Go to **Commerce → Settings** and choose **Link catalog**.

<!-- screenshot: Commerce → Settings with the Link catalog button -->

### Step 1 - Create a catalog in Commerce Manager

If you already have one, skip this. Otherwise create a catalog in Meta Commerce Manager and add your products to it.

The catalog must sit in the **same Meta Business account** as your WhatsApp number, or your number will not be able to see it.

### Step 2 - Connect that catalog to this WhatsApp number

This is the step people miss, and nothing works without it.

In **WhatsApp Manager**, open your number and go to **Account tools › Catalog**, then connect your catalog there.

:::important
This connection can only be made on Meta's side. Meta does not let Waplify - or any other tool - make it for you. If you skip this step, products will not appear in your messages even though the catalog looks connected in Waplify.
:::

### Step 3 - Pick that same catalog here

Come back to Waplify and choose the same catalog from the list. Waplify then knows which catalog to read products from.

Pick carefully: if you choose a different catalog here than the one you connected in step 2, Waplify will show products from one catalog while WhatsApp serves a different one, and orders will not match up.

<!-- screenshot: the three-step Link catalog dialog with the catalog picker on the last step -->

### Checking it worked

Open **Commerce → Products**. If your products are listed, Waplify can read the catalog.

To confirm step 2 actually took, send yourself a product message - see [Sending Products in a Message](/docs/commerce/send-product-messages). If the product appears in WhatsApp, the number is properly connected.

## Tips & best practices

- **Do step 2 before step 3.** Picking the catalog in Waplify does not connect it to your number - only WhatsApp Manager does that.
- **One catalog per number.** WhatsApp serves a single catalog for a number. If you sell several ranges, keep them as sets inside one catalog.
- **Give every product an image and a clear title.** That is exactly what the customer sees in the chat.
- **Keep availability accurate.** Out-of-stock products can still be shown, and customers will still try to order them.

## Frequently asked questions

### Can Waplify connect the catalog to my number for me?

No. Meta does not expose that connection to outside tools - the request is rejected. It has to be done in WhatsApp Manager under **Account tools › Catalog**.

### Why can't Waplify tell me which catalog my number is connected to?

Meta does not publish that either. There is no way for Waplify to read which catalog WhatsApp is actually serving, which is why step 2 asks you to confirm you have done it rather than checking for you.

### I connected it, but no products show in Waplify

Check that the catalog is in the same Business account as your WhatsApp number, and that you picked the same catalog in step 3 that you connected in step 2. If products exist in Meta but not in Waplify, try the sync on the **Products** page.

### Can I change the catalog later?

Yes. Link a different one the same way - update it in WhatsApp Manager first, then change your selection in Waplify so the two agree.

### Do I add products in Waplify?

No. Products are created and edited in Meta Commerce Manager. The **Products** page in Waplify is read-only.
