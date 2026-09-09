---
title: Only Approved Templates Send, and the Error Finally Says Why
tags: [templates, automation, reliability]
---

Every place that sends a template now checks it is approved first, including chatbot flows, which previously only checked when the flow was published. When something is wrong you get a sentence you can act on instead of an error from Meta about a title you never wrote.

<!-- truncate -->

## Flows check at send time, not just at publish

A flow's Send Template block stores the template **by name**. Approval was checked when you published the flow, which is a snapshot of one moment in something that then runs for months.

So a flow published in June could still be sending a template that had since been paused, rejected, or drafted because its number was disconnected. WhatsApp refused it and the customer got nothing, with an error nobody saw.

Flows now check the template every time they send. If it is not approved, the flow records a plain reason on the session timeline: which template, what state it is in, and to point the step at an approved one.

## The right template, when two share a name

A draft and a live template are allowed to share a name, since a draft has no WhatsApp number attached. That is deliberate: it is what lets you park a rewrite of a template that is already live.

The problem was that looking up a template by name had no rule about which one to return. Sending could pick the draft and refuse, saying the template was a draft, while a perfectly good approved version sat right beside it.

Every lookup now **prefers the approved one**. If nothing is approved, you still get the real status back rather than an unhelpful "not found".

The same rule fixes a related case: after you disconnect one number and connect another, an account can hold two templates with the same name. Sending now prefers the one on a number that is actually connected.

## Clearer errors around payments

If your WhatsApp number is not approved for payments, the **Order details** and **Order status** template types are hidden in the builder rather than shown and broken.

Meta rejects them with a message about titles and buttons that never mentions payments, which sent people rewriting a template that was fine. Where that error can still surface, Waplify now translates it into what is actually wrong.

## Good to know

- Nothing changes for a template that is approved and working. This only affects sends that were already going to fail.
- The check adds a single indexed lookup per send.
- Campaigns, sequences, the inbox and the API already enforced this. Flows were the gap.
