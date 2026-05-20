---
title: Inbox Style & Auto-Assignment
description: Set up how your team's WhatsApp inbox works in Waplify — choose a layout and automatically share new conversations across your team
sidebar_position: 3
keywords: [WhatsApp inbox setup, auto-assign conversations, round-robin routing, team inbox settings]
---

## What are Inbox Style & Auto-Assignment?

These settings control how your team's shared WhatsApp inbox behaves. **Inbox Style** decides the *layout* everyone sees, and **Auto-Assignment** decides how new conversations are *shared* across your team.

Both are workspace-wide settings — only an **Owner** or **Admin** can change them, and the choice applies to everyone in the organization. You'll find them under **Settings → Inbox & routing**.

<!-- screenshot: Settings page with Inbox & routing selected -->

## How to use it

### Choosing your inbox style

There are two layouts:

| Style | Tabs your team sees | Best for |
|-------|--------------------|----------|
| **Team** | Mine, Unassigned, Open, Resolved | Customer service and sales teams that hand off conversations between agents |
| **Simple** | Inbox, Resolved | Businesses that mostly broadcast and only reply to customers occasionally |

To change it:

1. Go to **Settings → Inbox & routing**
2. Under **Inbox style**, choose **Team** or **Simple**
<!-- screenshot: Inbox style picker with Team and Simple options -->

The change takes effect for everyone right away. With the **Team** layout, see [Working as a Team in the Inbox](../chat/team-inbox.md) for how the tabs and assignments work day to day.

### Turning on auto-assignment

Auto-assignment shares brand-new conversations across your team automatically, so nobody has to grab them from the **Unassigned** tab manually.

1. On the **Inbox & routing** page, switch on **Auto-assign new conversations**
<!-- screenshot: Auto-assign toggle turned on -->

New conversations are then handed out using **round-robin** — one by one, in turn — so the workload is shared evenly. A customer always stays with the same teammate for their follow-up messages, and conversations already in someone's inbox don't move.

### Setting the assignment pool

The **assignment pool** is the group of teammates who receive auto-assigned conversations.

- Click the **Assignment pool** selector and choose the members who should be included
- **Leave it empty to include everyone** — all active team members will share new conversations
<!-- screenshot: assignment pool member selector -->

Any active member — Owner, Admin, Manager, or Agent — can be added to the pool.

### Reopen behavior

When a customer replies to a conversation you've already resolved, it reopens. The **Reopen behavior** setting decides who gets it:

- **On** — the conversation returns to the agent who originally handled it. If that agent has since been removed or deactivated, it goes to **Unassigned** instead.
- **Off** — the reopened conversation goes straight to **Unassigned** for anyone to pick up.

This only applies when a *customer* reopens a chat by replying. When *you* manually reopen a resolved conversation, it's always assigned to you.

Remember to click **Save Changes** after adjusting auto-assignment or reopen behavior.

## Tips & best practices

- **Most teams should use the Team style** — it prevents two people replying to the same customer. Switch to Simple only if you rarely chat one-to-one.
- **Turn on auto-assignment once you have two or more agents** — it removes the "who's taking this one?" guesswork.
- **Keep the assignment pool to people who actually reply** — leave out teammates who only build campaigns or manage contacts, so conversations don't land with someone who won't see them.
- **Leave Reopen behavior on** — returning customers usually want the person who already knows their issue.
- Changing the inbox style affects everyone instantly, so let your team know before you switch it.

## Frequently asked questions

### Who can change these settings?

Only **Owners** and **Admins**. Managers and Agents can see the page, but the controls are read-only for them.

### What's the difference between the Team and Simple inbox styles?

**Team** splits conversations into Mine, Unassigned, Open, and Resolved tabs so a group can divide the work. **Simple** shows one combined Inbox plus Resolved — better when one person handles replies. Both layouts can still resolve and reopen conversations.

### How does round-robin assignment work?

Waplify gives each new conversation to the next teammate in the pool, in turn. Over time everyone gets a roughly equal share. Once a customer is assigned to someone, their future messages stay with that same teammate.

### Will auto-assignment move conversations already in my inbox?

No. Auto-assignment only applies to **new** conversations. Anything already assigned stays where it is.

### What happens if my assignment pool is empty?

Every active team member is included automatically. Auto-assignment never runs out of people to assign to, as long as you have active members.

### A teammate left — what happens to their conversations?

Their open conversations stay assigned to them until someone reassigns them. If a *customer* reopens one of their resolved conversations and Reopen behavior can't reach them, it falls back to **Unassigned**.
