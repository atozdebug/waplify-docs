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

- **Specific agents:** pick one person to always get the chat, or pick several (for example, your sales team) and they take turns
- **Round-robin:** shared out one by one across your team, using the members chosen in [Inbox & routing settings](../team/inbox-setup.md) (or everyone, if no one is chosen there)
- **Whoever helped them last:** back to the agent who handled this contact before, for continuity
- **The Unassigned queue:** left in the shared queue for anyone to pick up

You can also set a **fallback** in case your first choice isn't available (for example, the chosen teammate has left the team), so a customer is never left in limbo.

### Sharing chats between a few teammates

When you pick more than one person under **Specific agents**, new chats go to them in turn: the first chat to the first person, the next chat to the next person, and so on. This is handy when different teams handle different requests. A "Sales" branch of your flow can share leads between your sales agents, while a "Support" branch shares chats between your support agents.

<!-- screenshot: Assign to Agent block with "Send to specific agents" and two agents picked -->

- **A returning customer keeps their person.** If the chat is already with one of the agents you picked, it stays with them instead of moving to the next one in line.
- **People who leave are skipped.** If someone you picked is deactivated or removed from your team, they're skipped. If none of them is available, the fallback applies.
- **One line per group of people.** If you pick the same people in several places (in two flows, or in a flow and in **Talk to a human** below), they share one turn order, so the work stays even.

### Let the customer know

Optionally add a short **confirmation message** that sends when the hand-off happens — something like *"Thanks! Connecting you with a member of our team now."* — so the customer knows a person is on the way.

## What your team sees

- While a bot is handling a conversation, the [inbox](../chat/inbox-overview.md) shows a clear **bot badge**, so your team knows it's automated and can leave it alone.
- After **Assign to Agent** gives a chat to a teammate, the bot stays out of that chat until someone hands it back.
- On other chats the bot is still handling, your team can click **Take over** to pause the bot and reply. Whether the bot also pauses on its own when a teammate replies or is assigned depends on the [Pause bot when a human replies](../chat/pause-bot-when-a-human-replies.md) setting.

:::tip
Place the hand-off **after** the bot has gathered the basics (name, reason, order number). Your team starts the conversation already knowing the context, instead of asking from scratch.
:::

## Let customers ask for a person at any time

Sometimes a customer wants a person in the middle of a flow, before the bot reaches its hand-off. **Talk to a human** lets them type a word like **AGENT** to get straight through to your team.

1. Go to **Settings → General** and find **Talk to a human**.
2. Turn it on.
3. Check the words customers can type. Waplify suggests AGENT, TALK TO AGENT, HUMAN, REPRESENTATIVE and SUPPORT, and you can add your own. A message only counts when it is exactly one of these words (capital or small letters both work).
4. Choose **Who should handle this chat?** The options are the same as in the Assign to Agent block, including picking several agents who take turns.
5. Optionally edit the **confirmation message** the customer gets, then click **Save Changes**.

<!-- screenshot: Settings > General, Talk to a human card with Send to specific agents selected -->

When a customer types one of the words while they are in a flow, the bot pauses and the chat is handed to your team right away. Messages outside a flow are not affected.

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

### What's the difference between Round-robin and picking several agents?

**Round-robin** shares chats across your whole team, or the members you chose in [Inbox & routing settings](../team/inbox-setup.md). Picking several people under **Specific agents** shares chats only between those people, so you can send sales chats to your sales team and support chats to your support team.

### Can I change who is in the group later?

Yes. Open the block (or the **Talk to a human** setting), add or remove people, and save. Chats already assigned stay where they are, and new chats follow the updated group.

### What if no one is available?

Set a **fallback** (such as the Unassigned queue) so the conversation still lands somewhere a person can pick it up.

### Can the bot take back over later?

Yes. When your team is done, click **Hand to bot** at the top of the chat, or unassign it. The bot starts fresh on the customer's next message. See [Pause bot when a human replies](../chat/pause-bot-when-a-human-replies.md#give-a-chat-back-to-the-bot) for all the ways to give a chat back.
