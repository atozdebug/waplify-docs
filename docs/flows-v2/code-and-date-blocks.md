---
title: Code & Date Tools
description: Transform data mid-conversation in Waplify Flows V2 with the Code block (run JavaScript) and the Date & Time block (format, shift, and compare dates) — no external tools needed
sidebar_position: 6.5
keywords: [WhatsApp bot custom code, flow JavaScript block, WhatsApp date formatting, calculate dates in flow, WhatsApp automation logic, flow data transformation]
---

## What are the Code & Date tools?

Sometimes a flow needs to *work something out* before it can carry on — turn an answer into a score, reformat a date the way your customer reads it, or figure out how many days are left until a deadline. Two blocks handle this without sending anything to the customer:

- **Date & Time** — a no-code helper for anything involving dates and times.
- **Code** — for more advanced needs, run a small piece of JavaScript to shape your data exactly how you want.

Both run instantly, in the middle of a conversation, and save their result into a [variable](./asking-questions-and-saving-answers.md) you can use in later blocks.

## Date & Time block

The **Date & Time** block lets you create, reformat, shift, and compare dates — all without writing anything technical. Pick an operation, choose how you want the result to look, and save it to a variable.

### What it can do

| Operation | What it does | Example |
|-----------|--------------|---------|
| **Now** | Gets the current date and time in a timezone you choose | Stamp when a request came in |
| **Format** | Reformats a date, or converts it to another timezone | Turn `2026-07-06` into `Monday, 6 July 2026` |
| **Add / Subtract** | Shifts a date forward or back by seconds, minutes, hours, days, weeks, months, or years | Add 3 days to today for a follow-up date |
| **Difference** | Works out the gap between two dates in the unit you pick | How many days until an appointment |

<!-- screenshot: Date & Time block with the operation dropdown open -->

### How to set it up

1. Add a **Date & Time** block to your flow.
2. Choose an **operation** (Now, Format, Add/Subtract, or Difference).
3. Fill in the details for that operation — for example, the date to work from, how much to add, or the two dates to compare. You can type a fixed value or insert a saved answer with `/`.
4. Pick a **format** for the result from the friendly list (like *6 July 2026* or *06/07/2026*), and a **timezone** if it matters. Leave the timezone blank to use your business's timezone.
5. Choose the **variable** to save the result into.
6. Later blocks can then use it — for example `{{followup_date}}` in a message.

:::tip
Use **Add / Subtract** to build reminder dates ("we'll check back in 3 days") and **Difference** to personalize urgency ("only 2 days left on your offer").
:::

## Code block

The **Code** block runs a small snippet of **JavaScript** to transform the information in your flow. Use it when the built-in blocks can't quite do the calculation you need — like scoring a lead from several answers, cleaning up a piece of text, or reshaping data before you send it on.

:::note For developers
The Code block is the most technical block in Flows V2. If you're not comfortable with JavaScript, the [Condition](./logic-and-branching.md), [Switch](./logic-and-branching.md), and Date & Time blocks cover most needs without any code.
:::

### What your code can see

Your snippet receives a read-only snapshot of the conversation as `input`, including:

- `input.contact` — the contact you're chatting with (name, email, tags, custom fields…)
- `input.variables` — every answer and value you've saved so far in the flow
- `input.message` — the customer's most recent message
- `input.steps` — results from earlier blocks (like an API Executor response)

Your code simply **returns a value** (a number, a piece of text, or a small object). You then map that returned value into flow variables so later blocks can use it.

<!-- screenshot: Code block editor with the snippet and the response-mapping fields -->

### Two paths out

- **Success** — your code ran and returned a value.
- **Error** — something went wrong (a mistake in the code, it took too long, or the result was too large). The error message is saved so you can send a fallback or hand the chat to a person.

### Test before you publish

The block has a built-in **Test** button: run your snippet against sample data right in the builder and see the result and how long it took, before it ever touches a real conversation.

### Good to know

- The Code block is a **safe sandbox** — it can only work with the data in your flow. It **cannot** reach the internet, files, or your database. If you need to call an outside service, use the **[API Executor](./connecting-other-tools.md)** block instead.
- It's built for quick calculations: snippets run in a fraction of a second and work with a limited amount of data. Anything that runs too long or returns too much simply takes the **Error** path — it can never freeze a conversation.

## Tips & best practices

- **Reach for Date & Time first.** Most date needs — reminders, deadlines, "days left" — don't need the Code block at all.
- **Always wire the Error / failure path** on a Code block to something useful (a friendly message or a hand-off), so a bad calculation never leaves the customer stuck.
- **Save results to clearly named variables** (`lead_score`, `followup_date`) so later blocks and messages are easy to read.
- **Test as you build.** Use the Code block's Test button and the [Flow Sessions](./monitoring-your-flows.md) replay to confirm the numbers come out right.

## Frequently asked questions

### Do I need to know how to code to use Flows V2?

No. The Date & Time block and every other block are no-code. The **Code** block is the one advanced option for people who want to write a little JavaScript — it's completely optional.

### What language does the Code block use?

JavaScript. You write a short snippet that returns a value.

### Can the Code block call an API or read a file?

No — it runs in a secure sandbox with no internet or file access. To call an external service, use the [API Executor](./connecting-other-tools.md) block, which is built for exactly that.

### What timezone does the Date & Time block use?

Whatever you choose in the block. If you leave the timezone blank, it uses your business's timezone from your settings.

### Where do the results go?

Both blocks save their result into a variable you choose. You can then drop that value into any later message or decision — type `/` to insert it.
