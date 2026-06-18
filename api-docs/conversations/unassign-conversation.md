---
title: Unassign Conversation
description: Release a conversation back to the unassigned pool
sidebar_position: 3
---

# Unassign Conversation

Release a contact's conversation back to the unassigned pool, clearing its current owner. The same action as removing the assignee in the inbox.

```
POST /api/v1/conversations/{contact_phone}/unassign
```

`contact_phone` is the customer's number, **digits only, no `+`**. The request body is optional — send it only to disambiguate which WhatsApp number's conversation you mean.

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `waba_phone_id` | string | No | Which WhatsApp number's conversation to unassign, for multi-number accounts. |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/conversations/12125551234/unassign \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{}'
```

## Example response

```json
{
  "status": "success",
  "message": "Conversation unassigned.",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "status": null,
    "assigned_to": null,
    "assigned_to_name": null,
    "assigned_at": null,
    "is_reassignment": null,
    "previous_assignee_id": null,
    "previous_assignee_name": null,
    "note": null,
    "no_op": null
  }
}
```

After a successful unassign, `assigned_to` is `null`.

## Behaviour notes

- **Idempotent.** Unassigning an already-unassigned conversation returns `200` — safe to retry.
- **Side effects match the inbox.** The inbox updates in real time, an audit-log row is written, and a [`conversation.unassigned`](/api/webhooks/events) webhook fires with `actor.source: "api"`.

## Errors

| Status | When |
|--------|------|
| 400 | Invalid phone, or your account has no WhatsApp number configured |
| 401 | Invalid or missing API key |
| 403 | The `waba_phone_id` you passed doesn't belong to your organisation |
| 429 | Rate limit exceeded |
