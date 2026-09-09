---
title: Work with Contacts by Phone Number, Plus Sending and Search Fixes
tags: [api, contacts, reliability]
---

You can now read, update and delete a contact using their **phone number** instead of a Waplify contact ID, and add or remove group members the same way. Alongside that, a batch of fixes to sending, search and delivery.

<!-- truncate -->

## No more storing our IDs

Until now, doing anything to a contact over the API meant knowing the Waplify contact ID, which meant storing our IDs in your system and looking them up first.

Now you can use the phone number you already have:

- `GET /api/v1/contacts/phone/{phone_number}` to fetch a contact
- `PUT /api/v1/contacts/phone/{phone_number}` to update one
- `DELETE /api/v1/contacts/phone/{phone_number}` to remove one

Group membership works the same way, so you can add or remove someone from a group without a lookup step:

- `POST /api/v1/groups/{group_id}/contacts/phone`
- `DELETE /api/v1/groups/{group_id}/contacts/phone`

For anyone syncing from a CRM or an order system, that removes an entire round trip and a whole class of "which ID was that again" bugs.

See [Contacts by Phone Number](/api/contacts/contact-by-phone).

## Show a typing indicator

`POST /api/v1/messages/typing-indicator` lets you show the customer that a reply is being written, which makes an automated conversation feel less abrupt.

See [Typing Indicator](/api/messages/typing-indicator).

## Sends no longer fail after you swap a number

If you disconnected a WhatsApp number and connected a new one, your account could end up holding two templates with the same name, one still pointing at the dead number. Sends that looked up the template by name picked the wrong one often enough to matter, and failed with an unhelpful "client not found".

Sending now prefers a template bound to a number that is actually connected, and disconnecting a number cleans up properly behind it. The API also refuses, clearly, to send from a number that is not in your account rather than attempting it.

## Faster contact search

Searching contacts by phone number now uses a proper search index. Partial numbers return results quickly on large contact lists instead of crawling.

## More reliable webhooks

Webhook deliveries now go through a queue with monitoring behind it, so a slow or briefly unavailable endpoint on your side is retried rather than dropped.

## Also in this release

- **Export your logs.** Long exports run in the background and are handed to you as a file when ready, instead of timing out.
- **Custom fields in contact exports.** Your own fields now come along in the export rather than being left behind.
- **Steadier sequence sending.** Drip sequences pace their sends, so a large enrolment no longer arrives as a burst.
