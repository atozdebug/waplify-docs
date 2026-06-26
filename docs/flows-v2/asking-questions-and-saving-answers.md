---
title: Ask Questions & Save Answers
description: Capture customer input with validation and reuse it anywhere in your flow using variables and personalization in Waplify Flows V2
sidebar_position: 3
keywords: [WhatsApp bot ask question, capture WhatsApp input, WhatsApp form bot, flow variables, personalize WhatsApp message]
---

## Ask questions and save answers

The biggest upgrade in Flows V2 is that your bot can **ask** for information and **save** what the customer sends. Every answer is checked automatically, so you only collect clean data — and you can reuse it later to personalize messages or make decisions.

## Ask blocks

Add an **Ask** block whenever you need something from the customer. There's one for each kind of answer:

| Ask block | What it captures |
|-----------|------------------|
| **Ask Text** | Any typed reply (a name, a message, a note) |
| **Ask Number** | A number — with an optional minimum and maximum |
| **Ask Email** | A valid email address |
| **Ask Phone** | A phone number |
| **Ask URL** | A website address |
| **Ask Date** | A date |
| **Ask File** | An uploaded photo, video, or document |
| **Ask Location** | The customer's shared location |
| **Ask Buttons** | A choice from up to 3 buttons |
| **Ask List** | A choice from a list of options |
| **Ask Keyword** | A reply that you route based on matching words |

<!-- screenshot: The Ask blocks group in the blocks panel -->

## What happens with a good or bad answer

Every Ask block checks the reply:

- **If the answer is valid**, the flow continues down the **success** path and the answer is saved.
- **If the answer isn't valid** (for example, "abc" when you asked for an email), the bot can politely **ask again**. After a few tries, it follows the **invalid** path — so you can send a helpful message or hand the chat to a person instead of getting stuck.

:::tip
Always connect the **invalid** path to something useful — a friendly retry message, or a hand-off to your team. Don't leave it as a dead end.
:::

## Saving answers as variables

When a customer answers, the value is stored in a **variable** — a labeled box you can reuse later. You can also create variables yourself in **flow settings** to hold values you set along the way.

Each variable has a **scope** that decides how long it's remembered:

- **For this conversation** — the value lasts only for the current chat (great for "what did they just pick?")
- **Saved to the contact** — the value sticks to that contact and is remembered the next time they message you (great for things like a name or a preference)

Variables can hold text, numbers, yes/no values, dates, and lists.

## Using a saved value

To drop a saved answer or a contact detail into any message:

- **Type `/`** in the text field — a picker opens with everything you can insert, or
- Click the **`{}`** button next to the field

Pick a value and it's inserted for you, like `{{contact.first_name}}` or the email a customer just gave you. When the message sends, Waplify swaps in the real value.

<!-- screenshot: The variable picker opening after typing "/" in a message field -->

You can insert:

- **Answers** the customer gave earlier in this flow
- **Contact details** you already have, like `{{contact.first_name}}` or `{{contact.phone}}`

:::note
Use the picker (or `/`) rather than typing the `{{ }}` by hand — it inserts the value in the exact format the flow needs, so it always fills in correctly.
:::

## A simple example

1. **Send Text** — "Hi! What's your name?"
2. **Ask Text** — save the reply as a name, scoped to the contact
3. **Send Text** — "Thanks, `{{contact.first_name}}`! What's your email?"
4. **Ask Email** — save the email (the bot re-asks if it's not a valid address)
5. **Send Text** — "All set — we'll send your guide to that address shortly."

## Tips & best practices

- **Ask one thing at a time** — short, single questions get better answers than a wall of text
- **Pick the right Ask block** — using **Ask Email** instead of **Ask Text** means WhatsApp-side mistakes get caught for you
- **Save to the contact** for anything you'll want next time (name, preferences); keep one-off answers scoped to the conversation
- **Personalize sparingly but warmly** — a first name in the greeting goes a long way

## Frequently asked questions

### Where are saved answers stored?

In the flow's variables. Answers scoped **to the contact** also show up against that contact, so they're remembered across conversations.

### Can I use an answer in a decision later?

Yes. Saved values can be used by a **Condition** or **Switch** block to branch the conversation. See [Logic & branching](./logic-and-branching.md).

### What if the customer never replies?

A flow waits at an Ask block until the customer answers or the flow's **session expiry** passes (set in flow settings). After that, the conversation times out.

### Can I send a saved answer to another system?

Yes — a [Connector](./connecting-other-tools.md) can send saved values to an API or write them into a Google Sheet.
