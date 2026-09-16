---
title: Hand Off to a Human
description: Pass a WhatsApp conversation from your bot to a teammate at the right moment with the Assign to Agent block in Waplify Flows V2
sidebar_position: 5
keywords: [WhatsApp bot to human handover, assign chat to agent, WhatsApp live agent, bot handoff, team inbox]
---

## Hand off to a human

A bot is great for the first steps — greeting, qualifying, answering common questions. But sometimes a customer needs a real person. The **Assign to Agent** block hands the conversation to your team at exactly the right moment, and gets the bot out of the way.

## Assign to Agent

Drop an **Assign to Agent** block wherever the bot should step back — for example, after it has collected a name and reason for contact. When the flow reaches it, the bot **stops** and the conversation moves into your [team inbox](../chat/team-inbox.md) for a person to take over.

<!-- screenshot: Assign to Agent block in a flow, after a few Ask blocks -->

### Who gets the chat

Choose how the conversation is routed:

- **A specific teammate** — always goes to the person you pick
- **Round-robin** — shared out evenly across your available team
- **Whoever helped them last** — back to the agent who handled this contact before, for continuity
- **The Unassigned queue** — left in the shared queue for anyone to pick up

You can also set a **fallback** in case your first choice isn't available (for example, the chosen teammate has left the team), so a customer is never left in limbo.

### Let the customer know

Optionally add a short **confirmation message** that sends when the hand-off happens — something like *"Thanks! Connecting you with a member of our team now."* — so the customer knows a person is on the way.

## What your team sees

- While a bot is handling a conversation, the [inbox](../chat/inbox-overview.md) shows a clear **bot badge**, so your team knows it's automated and can leave it alone.
- After **Assign to Agent** gives a chat to a teammate, the bot stays out of that chat until someone hands it back.
- On other chats the bot is still handling, your team can click **Take over** to pause the bot and reply. Whether the bot also pauses on its own when a teammate replies or is assigned depends on the [Pause bot when a human replies](../chat/pause-bot-when-a-human-replies.md) setting.

:::tip
Place the hand-off **after** the bot has gathered the basics (name, reason, order number). Your team starts the conversation already knowing the context, instead of asking from scratch.
:::

## Tips & best practices

- **Always give an escape hatch** — offer a "Talk to a person" button somewhere so customers aren't trapped in the bot
- **Collect context first** — use [Ask blocks](./asking-questions-and-saving-answers.md) before the hand-off so your team has what they need
- **Set a fallback** so a chat is never stuck waiting for an unavailable agent
- **Mind your hours** — pair the hand-off with a [Business Hours](./logic-and-branching.md) check so after-hours chats get an "we'll reply soon" message instead of waiting for an offline team

## Frequently asked questions

### Does the bot keep running after the hand-off?

No. Once **Assign to Agent** gives the chat to a teammate, the bot stays out of that conversation until someone hands it back. If you route the chat to the Unassigned queue instead, the bot can answer again when the customer next messages, so pick those chats up quickly or use **Take over**.

### Who can the chat be assigned to?

Any member of your team, based on the routing option you choose. See [Managing your team](../team/managing-your-team.md) and [Roles & permissions](../team/roles-and-permissions.md).

### What if no one is available?

Set a **fallback** (such as the Unassigned queue) so the conversation still lands somewhere a person can pick it up.

### Can the bot take back over later?

Yes. When your team is done, click **Hand to bot** at the top of the chat, or unassign it. The bot starts fresh on the customer's next message. See [Pause bot when a human replies](../chat/pause-bot-when-a-human-replies.md#give-a-chat-back-to-the-bot) for all the ways to give a chat back.
