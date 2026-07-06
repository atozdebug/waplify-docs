---
title: Custom Fields
description: Add your own fields to WhatsApp contacts in Waplify — store extra details like city, plan, or lead score, then use them to filter, personalize messages, and power automations
sidebar_position: 4
keywords: [WhatsApp contact custom fields, custom contact data, personalize WhatsApp messages, segment WhatsApp contacts, contact attributes, WhatsApp CRM fields]
---

## What are Custom Fields?

Every contact already has standard details like name, phone number, and email. **Custom Fields** let you store the *extra* information that matters to your business — a customer's city, their plan, a lead score, a preferred language, or anything else. Once you've added a field, it appears on every contact so you can fill it in, filter by it, and use it in your messages and automations.

Custom Fields are set up once for your whole organization, and then available everywhere you work with contacts.

## How to use it

### Creating a custom field

1. Go to **Settings > Custom Fields**.
2. Click **Add Custom Field**.
<!-- screenshot: Custom Fields settings with the Add Custom Field dialog -->
3. Fill in:
   - **Label** — the name you'll see, like *City* or *Lead Score*.
   - **Type** — choose how the value should behave (see the table below).
   - **Options** — for a *Choice* field, list the options a person can pick from.
   - **Required** — turn on if this field must be filled in when adding a new contact.
4. Click **Save**. The field now appears on every contact.

You can create up to **10** custom fields. The counter at the top of the page shows how many you've used.

### The field types

| Type | Best for | Example |
|------|----------|---------|
| **Text** | Short free text | Preferred language |
| **Number** | Numeric values you might sort or compare | Lead score, order count |
| **Date** | A calendar date | Sign-up date |
| **Choice** | Picking one option from a fixed list | Plan: Basic / Pro / Enterprise |
| **Yes / No** | A simple true-or-false | Newsletter opt-in |
| **Email** | An email address | Secondary email |
| **Website** | A web address | Company website |

### Filling in a field on a contact

1. Open **Contacts** and add or edit a contact.
2. Below the standard details you'll see your **custom fields**.
<!-- screenshot: Contact form showing custom fields below the standard details -->
3. Fill in the values and click **Save**.

Your custom fields also appear in the contacts table and in **CSV import**, so you can bring these values in in bulk — just add a column that matches the field's label.

### Using custom fields to filter and segment

On the **Contacts** page, use **Filters** to narrow your list by any custom field — for example, everyone whose *City* is `Dubai` or whose *Lead Score* is above `50`. You can save these as segments and target them in campaigns and sequences.

### Using custom fields in messages and flows

Custom fields aren't just for storage — they personalize your messaging:

- **In templates and messages** — drop a field's value into the text so each customer sees their own detail.
- **In [Flows V2](/docs/flows-v2/what-is-flows-v2)** — read a custom field to make decisions, and write to one with the [Update Contact](/docs/flows-v2/updating-contacts) block so your bot can save what it learns straight onto the contact.

## Tips & best practices

- **Start with what you'll actually use.** You have 10 fields — spend them on details you'll filter, personalize, or automate on, not "nice to know" data.
- **Use the right type.** A *Number* field lets you filter with "greater than"; a *Choice* field keeps values tidy and consistent so filters always match.
- **Choice fields beat free text** for anything with a fixed set of answers (plan, status, source) — no typos, no `Pro` vs `pro` mismatches.
- **Turn on Required carefully.** Making a field required only affects **new** contacts added from that point on — it won't retroactively flag contacts you already have.
- **Keep labels short and clear** — they show up on every contact form and in your filters.

## Frequently asked questions

### Who can create or edit custom fields?

Only **Owners** and **Admins** can add, edit, or delete custom fields in **Settings > Custom Fields**. Everyone with contact access can then fill in the values on contacts.

### How many custom fields can I create?

Up to **10** per organization. Deleting one frees up a slot.

### Can I change a field after creating it?

You can rename its **label**, adjust a Choice field's **options**, and toggle **Required**. The field's underlying key (used in imports and automations) is fixed once created, so if you need a completely different field, create a new one.

### What happens to my data if I delete a field?

The field is removed from your forms and filters, but the values already stored on contacts aren't wiped — so nothing is lost if you delete a field by mistake and recreate it.

### Can I import custom field values from a spreadsheet?

Yes. When you [import contacts](./import-contacts.md), add a column whose header matches the field's label, and the values map straight in.

### Why don't I see any custom fields on my contacts?

Because none have been created yet. Custom fields only appear once an Owner or Admin adds them in **Settings > Custom Fields**.
