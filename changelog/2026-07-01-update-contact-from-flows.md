---
title: Flows V2 Can Now Update Your Contacts
tags: [automation, contacts, chat]
---

Your WhatsApp bot can now **save what it learns**. The new **Update Contact** block in Flows V2 writes information straight back to the contact you're chatting with — no exports, no manual clean-up.

<!-- truncate -->

Add an **Update Contact** block anywhere in a flow and pick one action:

- **Set or clear a custom field** — save an answer (like a city or a lead score) onto the contact
- **Add or remove tags** — label people as the conversation reveals intent
- **Add to or remove from a group** — move contacts between your groups automatically
- **Update a detail** — first name, last name, email, company, website, or industry

A value can be a fixed word or a **variable** you captured earlier (press `/` to insert one), so a customer's reply can flow straight onto their record.

## Works with the rest of Waplify

Because the bot updates contacts the same way you would by hand, your **automations react automatically** — tag someone `vip` in a flow and any sequence set to auto-enroll `vip` contacts simply starts. And if a contact already has that value or tag, the block quietly does nothing, so there are no duplicate tags or repeat triggers.

One thing stays locked on purpose: the **phone number** can't be changed from a flow, since it's what identifies the contact.

You'll find **Update Contact** in the block list when building a Flow V2. See [Update Contact Details](/docs/flows-v2/updating-contacts) for a full walkthrough.
