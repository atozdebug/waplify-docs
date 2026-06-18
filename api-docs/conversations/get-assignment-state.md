---
title: Get Assignment State
description: Read the current owner and status of a contact's conversation
sidebar_position: 5
---

# Get Assignment State

Read who currently owns a contact's conversation and whether it's open or resolved. Use this for **read-before-write**: check the state, then decide whether to assign, reopen, or leave it alone.

```
GET /api/v1/conversations/{contact_phone}/assignment
```

`contact_phone` is the customer's number, **digits only, no `+`**.

:::info This endpoint never returns 404
If the contact has never started a chat (for example, a lead you created over the API who hasn't messaged yet), you still get `200` — with `has_conversation: false` and `null` owner/status. That's how you tell "no conversation yet" apart from "an unassigned conversation".
:::

## Query parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `waba_phone_id` | string | No | Which WhatsApp number's conversation to read, for multi-number accounts. Passed as a **query parameter** here (not in a body). |

## Example request

```bash
curl -X GET https://server.waplify.io/api/v1/conversations/12125551234/assignment \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "has_conversation": true,
    "status": "open",
    "assigned_to": "665f1c2e8a1b2c3d4e5f6a7b",
    "assigned_to_name": "Priya Sharma",
    "assigned_at": "2026-06-17T09:30:00.123456+00:00"
  }
}
```

When no chat thread exists yet:

```json
{
  "status": "success",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "has_conversation": false,
    "status": null,
    "assigned_to": null,
    "assigned_to_name": null,
    "assigned_at": null
  }
}
```

## Response fields

| Field | Type | Description |
|-------|------|-------------|
| `data.phone_number` | string | Normalised contact phone (digits only) |
| `data.waba_phone_id` | string \| null | The WhatsApp number the conversation belongs to |
| `data.has_conversation` | boolean | `false` when no chat thread exists yet for this contact |
| `data.status` | string \| null | `open` or `resolved` (`null` when there's no conversation) |
| `data.assigned_to` | string \| null | Current owner's `user_id` (`null` if unassigned) |
| `data.assigned_to_name` | string \| null | Current owner's display name |
| `data.assigned_at` | string \| null | ISO 8601 timestamp of the current assignment |

## Errors

| Status | When |
|--------|------|
| 400 | Invalid phone |
| 401 | Invalid or missing API key |
| 403 | The `waba_phone_id` you passed is not part of your organisation |
| 429 | Rate limit exceeded |
