---
title: Consent Controls, Email Attachments, and Sharper Flow Triggers
tags: [automation, contacts]
---

Four improvements for the people running automations: your bot can now **handle opt-outs properly**, **attach files to the emails it sends**, **tell one template's buttons from another's**, and show **contact dates in your own timezone**.

<!-- truncate -->

## Let your bot handle opt-outs — properly

The [Update Contact](/docs/flows-v2/updating-contacts) block has two new actions: **Opt the contact out** and **Opt the contact back in**.

Build a flow where someone taps "Stop messages" and they're opted out immediately — no agent involved, no missed request.

Opting out does more than flip a switch. It also **stops any sequences that contact is currently in**, so they don't keep receiving follow-ups you already promised to stop. That's the part people usually get wrong when they wire this up by hand, and it's now handled for you.

Opting someone back in is just as easy, for when a customer changes their mind.

## Attach files to emails sent from a flow

The **Send Email** block can now carry **attachments**.

- Send a **price list, brochure, invoice, or terms document** along with the email.
- Attach a **file the customer uploaded in a form** — so a claim photo or a signed document reaches your team's inbox with the notification, not separately.
- Waplify enforces a sensible **size and count limit** so your emails don't bounce for being too large.

Set it up in the Send Email block once you've connected your email server under **Settings → Connectors**. See [Connecting Other Tools](/docs/flows-v2/connecting-other-tools).

## Button triggers now know which template they came from

If you start flows when a customer taps a template button, you can now point the trigger at a **specific template**.

Before, a button labelled "Yes" fired the same flow no matter which template it came from — so a "Yes" on your appointment reminder and a "Yes" on your renewal offer were indistinguishable. Now each one can start its own flow.

Run several campaigns with similar button wording and each still gets exactly the right follow-up. See [More Ways to Start a Flow](/docs/flows-v2/more-ways-to-start).

## Contact dates in your workspace timezone

The **Created** column in [Contacts](/docs/contacts/managing-contacts) now shows dates in your **workspace timezone**, with the timezone shown next to it — and the date filter uses the same zone.

Previously a contact added at 9am could appear on the previous day, and filtering by "today" could quietly miss them. Now what you filter for is what you get.

Set your workspace timezone under **Settings**.

## Also in this release

- **Reactivated contacts re-enrol correctly.** If a contact comes back after being inactive, sequences that should start for them now do.
- **Nothing sends to Meta with empty gaps.** Templates with an unfilled variable are caught before sending instead of arriving with a blank hole in the text.
- **Disconnecting a WhatsApp number cleans up after itself,** so an old number can't linger and cause messages to be attributed to the wrong workspace.
