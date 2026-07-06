---
title: Update Contact Details
description: Save answers back to a contact from inside your WhatsApp bot — set custom fields, add or remove tags, manage groups, and update details with the Update Contact block in Waplify Flows V2
sidebar_position: 8
keywords: [WhatsApp bot update contact, save custom field from chatbot, add tag automatically, contact group automation, WhatsApp CRM automation]
---

## Update a contact from your flow

Your bot doesn't just talk — it can **remember**. The **Update Contact** block writes information back to the person you're chatting with: save a custom field, add a tag, drop them into a group, or update a detail like their name or email. That way what a customer tells the bot is saved to their contact record and ready to use everywhere else in Waplify.

<!-- screenshot: Update Contact block in a flow, after an Ask block that captured an answer -->

## What it can do

Add an **Update Contact** block and pick **one action**:

- **Set a custom field** — save a value into one of your custom fields (for example, save the answer to "What's your city?" into a *City* field).
- **Clear a custom field** — empty a field you no longer need.
- **Add tags** / **Remove tags** — label the contact (for example, tag `interested` when they pick "Yes, tell me more").
- **Add to a group** / **Remove from a group** — move the contact in or out of one of your [groups](../contacts/contact-groups.md).
- **Update a contact detail** — change their first name, last name, email, company, website, or industry.

## How to use it

1. Add an **Update Contact** block after the step that collected the information (usually right after an **Ask** block).
2. Choose **what should happen** from the dropdown.
3. Fill in the details for that action — pick the field, tag, or group, and type the value.
4. For a value, you can type a fixed value **or insert a variable** (press `/`) — for example, save the customer's reply straight into a field with `{{answer}}`.

<!-- screenshot: Update Contact block showing the action dropdown expanded -->

### Success and error paths

The block has two exits:

- **Success** — the update was saved. Connect your next step here.
- **Error** — the update couldn't be applied (for example, there's no saved contact for a brand-new number yet). You can branch here to handle it, or just leave it — the flow simply ends on that path.

## Tips & best practices

- **Tag as you qualify.** Add tags like `hot-lead` or `wants-callback` as the conversation reveals intent — then build broadcasts or [drip sequences](../sequences/what-are-sequences.md) around those tags.
- **Save answers, don't just read them.** An **Ask** block captures a reply for the rest of the flow; pair it with **Update Contact** to keep that answer permanently on the contact.
- **Your automations react automatically.** If you have a sequence set to auto-enroll anyone tagged `vip`, tagging them from a flow will start it — the same as if you'd added the tag by hand. Handy, but keep it in mind so a flow doesn't kick off something unexpected.
- **Nothing changes, nothing happens.** If the contact already has that value or tag, the block quietly does nothing — no duplicate tags, no repeat triggers.

## Frequently asked questions

**Can I change a contact's phone number with this block?**
No — the phone number identifies the contact and is the key your whole conversation runs on, so it's intentionally locked. You can update every other detail, but not the number.

**Where do custom fields and groups come from?**
You create them under **Contacts** first — custom fields and [groups](../contacts/contact-groups.md). The block only lets you pick from ones that already exist, so the bot can't create messy new fields on the fly.

**What happens if the contact is brand new?**
If a message comes from a number that isn't saved as a contact yet, there's nothing to update, and the block takes its **Error** exit. Add a step there if you want to handle that case.

**Will a tag added by the bot start my sequences?**
Yes. A tag added by the bot behaves exactly like one you add yourself, so any auto-enroll rule watching for that tag will run.

**Can one block do several things at once?**
Each block does one action. To make several changes, chain a few **Update Contact** blocks in a row.
