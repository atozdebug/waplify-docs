---
title: IndiaMART Leads
description: Automatically turn every IndiaMART enquiry into a Waplify contact you can message on WhatsApp
sidebar_position: 5
keywords: [IndiaMART WhatsApp integration, IndiaMART leads, IndiaMART CRM push API, auto reply to IndiaMART enquiry, lead capture WhatsApp, IndiaMART connector]
---

## What is the IndiaMART connector?

If you sell on **IndiaMART**, every buyer enquiry you receive can land in Waplify on its own — as a proper contact, with their name, phone, email and what they asked about already filled in.

No copying from the Lead Manager. No spreadsheets. The buyer submits an enquiry, and seconds later you can send them a WhatsApp message — or let a chatbot do it for you while you're busy.

## How to use it

### 1. Open the connector in Waplify

1. Go to **Settings → Connectors**.
2. Find the **IndiaMART** card and click **Connect**.
3. Waplify shows you a **webhook URL**. Click to copy it.

<!-- screenshot: Waplify Connectors page with the IndiaMART card and the copyable webhook URL -->

### 2. Paste the URL into IndiaMART

1. Sign in to your **IndiaMART seller account**.
2. Go to **Lead Manager → CRM Push API** (`https://seller.indiamart.com/leadmanager/crmpushapi`).
3. Paste the Waplify webhook URL as your **listener URL** and save.

<!-- screenshot: IndiaMART Lead Manager CRM Push API screen with the listener URL field -->

That's the connection done. IndiaMART now pushes every new lead to Waplify automatically.

### 3. Choose what extra details to keep

Some details are **always** saved on the contact, and you don't have to configure anything:

| Detail from IndiaMART | Where it lands in Waplify |
| --- | --- |
| Buyer name | First name and last name (split for you) |
| Mobile number | Phone |
| Email | Email |
| Company | Company |
| Address | Address (built from city, state and pincode if no full address is sent) |

Everything else is optional. Click **Capture extra lead fields** to pick what else you want kept, and Waplify stores each one in a [custom field](/docs/contacts/custom-fields):

- **Product Interest** — the product they enquired about
- **Enquiry Message** — their full message
- **Product Category**, **Enquiry Subject**, **Enquiry Type**, **Enquiry Time**
- **City**, **State**, **Pincode**, **Country**
- **Alternate Mobile**, **Landline Phone**, **Alternate Landline**, **Alternate Email**
- **IndiaMART Query ID**, **Call Duration**, **Receiver Mobile**

Each field shows a short description so you know what it holds. If the custom field doesn't exist yet, **Waplify creates it for you** while you connect.

<!-- screenshot: the Capture extra lead fields mapping screen -->

:::note
Your workspace can have up to **10 custom fields** in total. If mapping extra IndiaMART fields would push you past that, Waplify tells you before saving — pick the ones you'll actually use.
:::

### 4. Reply automatically

This is where it pays off. IndiaMART leads become normal contacts, so the rest of Waplify picks them up:

1. Build a [flow](/docs/flows-v2/what-is-flows-v2) and set its trigger to **contact created**.
2. Add a condition if you only want to greet certain enquiries — for example, only leads for a particular product.
3. Send a welcome message that mentions what they asked about, using the **Product Interest** field you mapped.

You can also enrol new leads in a [sequence](/docs/sequences/what-are-sequences) to follow up over the next few days without doing it by hand.

## Tips & best practices

- **Speed wins enquiries.** Buyers usually contact several suppliers at once. An automatic WhatsApp reply within a minute puts you first.
- **Map "Product Interest" and "Enquiry Message" first.** They're what make your reply feel personal instead of generic.
- **Find your leads fast.** Every contact from IndiaMART gets the tag `indiamart`, so you can filter your contact list to just these buyers, or target them in a campaign.
- **Repeat buyers don't create duplicates.** If someone enquires again, Waplify updates their existing contact instead of adding a second one.
- **Check the phone format.** IndiaMART sends Indian mobile numbers; Waplify stores them ready to message on WhatsApp.

## Frequently asked questions

### Does Waplify change anything on my IndiaMART account?

No. Leads flow **in** to Waplify only. Waplify never writes to, edits, or deletes anything on IndiaMART.

### Do I need a paid IndiaMART plan?

You need access to **Lead Manager → CRM Push API** in your seller account. If you can't see that screen, contact IndiaMART support to have it enabled.

### What happens to leads that came in before I connected?

Only new enquiries are pushed. Anything already in your Lead Manager stays there — export and [import it](/docs/contacts/import-contacts) if you want it in Waplify.

### Can I change which fields I capture later?

Yes. Go back to **Settings → Connectors → IndiaMART** and update the mapping at any time. It applies to leads arriving from then on.

### How do I stop it?

Disconnect from **Settings → Connectors**, or remove the listener URL in IndiaMART. Contacts already captured stay in your account.

### Can I message these leads straight away?

WhatsApp requires an approved [message template](/docs/templates/message-templates) to start a conversation with someone who hasn't messaged you first. Set one up for new enquiries and use it in your flow.
