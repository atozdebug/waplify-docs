---
title: Logic & Branching
description: Send a WhatsApp conversation down the right path with conditions, switches, business hours, delays, and delivery checks in Waplify Flows V2
sidebar_position: 4
keywords: [WhatsApp bot logic, conditional flow, if then WhatsApp bot, business hours bot, flow branching]
---

## Logic & branching

Logic blocks decide **which way a conversation goes**. Use them to react to what a customer said, who they are, the time of day, or whether your last message was delivered.

## Condition

A **Condition** block checks one or more rules and sends the conversation down a **true** or **false** path.

You can combine several rules with **AND** / **OR**:

- **AND** — every rule must be true (e.g. *is a returning customer* **and** *order total is over 1000*)
- **OR** — any one rule is enough

Rules are checked left to right. Each rule compares a value (often a saved answer or contact detail) using one of these checks:

| Check | Meaning |
|-------|---------|
| **Equals / Does not equal** | Matches (or doesn't match) an exact value |
| **Greater than / Less than** | Compares numbers (with "or equal to" options) |
| **Contains / Does not contain** | The text includes (or doesn't include) something |
| **Starts with / Ends with** | The text begins or ends with something |
| **Is empty / Is not empty** | Whether there's any value at all |
| **Matches a pattern** | An advanced rule for flexible matching |

<!-- screenshot: Condition block with two rules joined by AND, and true/false outputs -->

## Switch

A **Switch** block is like a Condition with **many** paths instead of just two. You list the values you care about, and each gets its own output. Anything that doesn't match falls through to a **default** path.

Use a Switch when one value can lead to several different replies — for example, routing "Sales", "Support", and "Billing" each to their own branch.

## Business Hours

A **Business Hours** block checks the current time and branches into **open** or **closed**. Use it to reply instantly during the day and send an "we'll get back to you" message after hours.

<!-- screenshot: Business Hours block with open and closed outputs -->

## Delay

A **Delay** block pauses the conversation before the next step — wait a few minutes, hours, or days. Handy for spacing out follow-ups so they don't all arrive at once.

## Wait for Status

A **Wait for Status** block holds the flow until an earlier message is **delivered** or **read**, then branches:

- **Delivered/Read** — the message reached the customer, so carry on
- **Failed** — the message couldn't be delivered, so handle it differently
- **Timed out** — too much time passed, so the flow moves on safely instead of waiting forever

This lets you do things like: send an offer, wait until it's read, and only then send the follow-up.

:::note
Wait for Status always has a safe time limit, so a conversation can never get permanently stuck waiting for a status that never arrives.
:::

## Jump To (advanced)

A **Jump To** block sends the conversation to another block in the same flow. It's useful for loops ("ask again") or for reusing a shared section without rebuilding it. Waplify caps how many steps a flow can run so a loop can't go on forever.

## Tips & best practices

- **Name your branches in your head** — before connecting a Condition, know what "true" and "false" should each do
- **Always connect the `false`/`default` path** — don't leave a branch as a dead end
- **Prefer a Switch over many stacked Conditions** when one value has several outcomes — it's easier to read
- **Use Business Hours** so customers always get *some* reply, even after hours

## Frequently asked questions

### What can a Condition check?

Usually a **saved answer** (from an Ask block) or a **contact detail**. See [Ask questions & save answers](./asking-questions-and-saving-answers.md) for how values get saved.

### What's the difference between Condition and Switch?

A **Condition** has two outcomes (true/false). A **Switch** has many, plus a default — use it when a single value can lead to several different paths.

### Do I need a Condition to branch on a button choice?

Often not. **Ask Buttons** and **Ask List** blocks can branch directly — each option has its own output. Reach for a Condition or Switch when you need to branch on something else, like a number range or a contact detail. See [Branch on each button or list option](./asking-questions-and-saving-answers.md#branch-on-each-button-or-list-option).

### Can the flow wait for a real person, not just a status?

To bring a human in, use **Assign to Agent** — see [Hand off to a human](./handing-off-to-a-human.md). **Wait for Status** is only about whether your *message* was delivered or read.
