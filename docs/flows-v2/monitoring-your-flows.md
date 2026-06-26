---
title: Monitor Your Flows
description: See and replay every conversation your Waplify Flows V2 chatbot has handled, with statuses, filters, and step-by-step session history
sidebar_position: 7
keywords: [WhatsApp bot analytics, flow sessions, chatbot conversation history, flow monitoring, replay WhatsApp bot]
---

## Monitor your flows

Once a flow is live, you'll want to see how it's doing — who it talked to, where they ended up, and whether anything went wrong. The **Flow Sessions** view shows every conversation your flow has handled, step by step.

## Open Flow Sessions

1. Go to **Flows V2** in the sidebar
2. Find the flow you want to check
3. Open its menu and choose **View Sessions**

<!-- screenshot: Flows V2 list with a flow's menu open and "View Sessions" highlighted -->

A **session** is one customer's run through the flow — from the trigger that started it to wherever they finished.

## Session statuses

Each session shows where it ended up:

| Status | What it means |
|--------|----------------|
| **In progress** | The conversation is still running |
| **Completed** | The customer reached the end of the flow |
| **Failed** | Something went wrong and the flow couldn't continue |
| **Expired** | The customer stopped replying and the session timed out |
| **Partially failed** | The flow finished, but a step along the way had a problem |

## Filter and search

- **Filter by status** to focus on, say, only the **Failed** sessions while you're troubleshooting
- **Search by phone number** to find one specific customer's conversation

<!-- screenshot: Flow Sessions panel with status filter and phone search -->

## Replay a conversation

Open any session to **replay it step by step**. You'll see each block that ran, the path the conversation took at every choice, and where it ended. This is the fastest way to answer "why did this customer get *that* reply?" — and to spot a branch that needs fixing.

:::tip Troubleshooting tip
If customers aren't getting what you expect, filter to **Failed** or **Partially failed** sessions and replay a few. The step where things stop usually points straight at the block to fix.
:::

## Form responses

If your flow includes a **Send Form** block (an interactive WhatsApp form), you can review what customers submitted from the flow, all in one place.

## Tips & best practices

- **Check sessions after publishing** a new or changed flow, to confirm real conversations go the way you intended
- **Replay failures first** — they're where the quick wins are
- **Watch for lots of Expired sessions** — it can mean a question is confusing, or you're asking for too much

## Frequently asked questions

### What counts as a session?

One customer going through the flow once. If the same person triggers the flow again later, that's a new session.

### Why is a session marked "Expired"?

The customer didn't reply in time and the conversation timed out. You can adjust how long a flow waits in its **flow settings** ([session expiry](./building-your-first-flow.md#flow-settings)).

### A session failed — what do I do?

Open it and replay step by step. The point where it stops tells you which block to check — often a [Connector](./connecting-other-tools.md) whose failure path isn't handled, or a branch with a missing connection.

### Can I see overall numbers, not just individual chats?

The Flow Sessions view groups sessions by status so you can see the balance of completed, failed, and expired at a glance, and dig into any single conversation from there.
