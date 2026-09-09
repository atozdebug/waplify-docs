---
title: Typing Indicator
description: Show a WhatsApp typing indicator while your system prepares a reply
sidebar_position: 3
---

# Typing Indicator

Show the customer that a reply is being written. Useful when your system takes a few seconds to respond, so an automated conversation feels less abrupt.

Sending the indicator also marks the contact's most recent inbound message as **read**.

```
POST /api/v1/messages/typing-indicator
```

## How it works

- You pass **only the phone number**. The message to acknowledge is resolved automatically from the contact's most recent inbound message.
- WhatsApp dismisses the indicator on its own after roughly **25 seconds**, or as soon as you send a message.
- The call is **best effort**. If there is nothing to acknowledge (the contact has never messaged you), it does not fail your request.

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_phone` | string | Yes | Phone number with country code (e.g. `+1234567890`) |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/messages/typing-indicator \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "+1234567890"
  }'
```

## Success response (200 OK)

```json
{
  "status": "success",
  "message": "Typing indicator sent"
}
```

## Errors

| Status | Meaning |
|--------|---------|
| `400` | `contact_phone` missing or malformed |
| `401` | Missing or invalid API key |

## Notes

- There is a **24-hour service window** in WhatsApp. If the contact has not messaged you recently there may be no inbound message to acknowledge, and the indicator is skipped.
- Show the indicator immediately before doing slow work, not long in advance. It expires on its own after about 25 seconds.
- Use it alongside [Send Free-Form Message](/api/messages/send-free-form-message) for a natural reply sequence.
