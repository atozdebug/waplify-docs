---
title: Tags
description: Label your WhatsApp contacts with tags, then clean them up in one place by renaming, merging, or deleting them
sidebar_position: 6
keywords: [WhatsApp contact tags, tag contacts, merge tags, rename tag, organize WhatsApp contacts, segment customers]
---

## What are tags?

**Tags** are simple labels you stick on a contact — `vip`, `interested`, `paid`, `follow-up`, `mumbai`. Add as many as you like to anyone.

Unlike [custom fields](/docs/contacts/custom-fields), tags don't hold a value. A contact either has the tag or doesn't. That makes them perfect for the quick judgements your team makes every day: *this one's hot*, *this one's a repeat buyer*, *this one needs a callback*.

Once contacts are tagged, you can filter by tag, target a campaign at a tag, and let your chatbot add or remove tags on its own.

## How to use it

### Adding a tag to someone

You can tag a contact from wherever you happen to be:

- **In the inbox** — open a chat, and use the contact panel on the right to add a tag while you're talking to them.
- **In Contacts** — open any contact and add tags to their profile.
- **In bulk** — select several contacts in your list and tag them all at once.
- **Automatically** — use the [Update Contact](/docs/flows-v2/updating-contacts) block in a flow so your chatbot tags people based on what they say.

Typing a new tag name creates it. There's no need to set tags up in advance.

<!-- screenshot: adding a tag to a contact from the inbox contact panel -->

### Using tags to find people

- **Filter your contact list** by one or more tags to see just that group.
- **Filter the inbox** to show only chats with a certain tag.
- **Target a campaign** at everyone carrying a tag, instead of building a group by hand.

### Managing your tags

Over time, tags get messy — someone types `vip`, someone else types `VIP customer`. Tidy them under **Settings → Tags**.

The page lists every tag in your workspace with **how many contacts use it**, and a search box to find one quickly.

<!-- screenshot: Settings → Tags list showing tags with usage counts -->

For each tag you can:

- **Rename** — give it a clearer name. Every contact carrying it updates automatically.
- **Merge into** — pick another tag to keep. Everyone tagged with this one gets the tag you're keeping, then the original is removed. This is how you fix duplicates like `vip` and `VIP customer`.
- **Delete** — remove the tag from every contact who has it.

:::note
Renaming, merging and deleting tags is limited to **owners and admins**, because it changes data for the whole workspace. Any team member can still add or remove tags on individual contacts. See [Roles & Permissions](/docs/team/roles-and-permissions).
:::

## Tips & best practices

- **Agree on names with your team before you start.** Tags are free text — `follow up`, `follow-up` and `Follow Up` are three different tags, and they'll split your lists three ways.
- **Lowercase everything.** It's the easiest rule for a team to follow and it prevents most duplicates.
- **Tag intent, not facts.** Things like city, plan or lead score belong in [custom fields](/docs/contacts/custom-fields), where you can filter on more than yes/no. Tags are best for states: `interested`, `waiting-on-quote`, `churned`.
- **Merge instead of deleting** when you're cleaning up. Merging keeps the contacts labelled; deleting loses that information.
- **Check the usage count before deleting.** A tag on 400 contacts is probably load-bearing for someone's campaign.
- **Let your bot do the tagging.** A flow that tags people by what they picked keeps your data current without anyone remembering to do it.

## Frequently asked questions

### How many tags can a contact have?

There's no practical limit — add as many as are useful. In practice, more than five or six per contact tends to mean some of them should be custom fields.

### Does deleting a tag delete the contacts?

No. It only removes the label. The contacts stay exactly as they were.

### Can I undo a merge?

No. Merging moves everyone onto the tag you're keeping and removes the original, and there's no history to roll back to. Check the usage counts first if you're unsure.

### Why do I see two tags that look the same?

Tags are stored exactly as they were typed, so `vip` and `VIP` are separate. Use **Merge into** to combine them.

### Can I tag someone automatically when they message a keyword?

Yes. Build a [flow](/docs/flows-v2/what-is-flows-v2) and use the **Update Contact** block to add a tag when they say or tap something.

### Do tags show up in messages?

No. Tags are internal — customers never see them.
