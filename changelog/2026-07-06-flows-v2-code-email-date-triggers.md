---
title: Flows V2 Gets Code, Email, Date Tools & Smarter Triggers
tags: [automation, chat, web]
---

Flows V2 just got a lot more capable. Your WhatsApp chatbot can now **run calculations, send email, work with dates, start itself from an ad or a contact change, and branch straight off a button tap** — all without leaving the flow builder.

<!-- truncate -->

## Three new building blocks

- **Code** — run a small piece of **JavaScript** to shape your data mid-conversation: score a lead from several answers, clean up text, or reshape a value before you use it. It runs in a safe sandbox, has a built-in **Test** button, and branches on **success** or **error**. For advanced users; everything else stays no-code. See [Code & Date Tools](/docs/flows-v2/code-and-date-blocks).
- **Date & Time** — a no-code helper to **get the current time, reformat a date, add or subtract days/weeks/months, or work out the gap between two dates**. Perfect for "we'll follow up in 3 days" or "only 2 days left on your offer." See [Code & Date Tools](/docs/flows-v2/code-and-date-blocks).
- **Send Email (SMTP)** — email your team about a new lead, or send the customer a confirmation, **right from the flow**. Connect your own email server once under **Settings → Connectors**, then drop a **Send Email** block anywhere. Subject and body support your saved variables. See [Connect to Other Tools](/docs/flows-v2/connecting-other-tools).

## Two new ways for a flow to start

- **Start from a WhatsApp ad (Click-to-WhatsApp)** — greet people the instant they message you from a Facebook or Instagram ad. Respond to **any** ad, or point **specific Ad IDs** at their own tailored flow so each campaign gets the right welcome.
- **Start when a contact is created or updated** — fire a flow the moment a contact changes in a way you care about (a new lead is added, or a status becomes "approved"). Add conditions so only the right people are messaged, and keep "start once per contact" on to avoid repeats.

Both are covered in [More Ways to Start a Flow](/docs/flows-v2/more-ways-to-start).

## Branch directly on a button or list choice

**Ask Buttons** and **Ask List** blocks now give each option its **own path** — so *Sales*, *Support*, and *Billing* can each go somewhere different without a separate Condition block. The customer's choice is still saved into your variable at the same time. Two catch-all outputs — **Any other answer** and **No valid answer** — keep things tidy, and flows you've already built are completely unaffected. See [Ask Questions & Save Answers](/docs/flows-v2/asking-questions-and-saving-answers#branch-on-each-button-or-list-option).

---

Open **Flows V2** in the sidebar to try the new blocks and triggers.
