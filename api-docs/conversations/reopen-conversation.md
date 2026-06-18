---
title: Reopen Conversation
description: Reopen a resolved conversation so it can be worked and assigned again
sidebar_position: 4
---

# Reopen Conversation

Reopen a resolved conversation so it can be worked and assigned again. The account behind your API key becomes the new owner — the same "whoever reopens it takes it over" behaviour as the inbox.

```
POST /api/v1/conversations/{contact_phone}/reopen
```

`contact_phone` is the customer's number, **digits only, no `+`**. The request body is optional.

:::tip When do I need this?
You can't assign a **resolved** conversation directly — [Assign Conversation](./assign-conversation.md) returns a `400` telling you to reopen it first. Call this endpoint to reopen it, then assign it to whoever should handle it (or pass it straight to the assignee, since reopening already makes the API key's account the owner).
:::

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `waba_phone_id` | string | No | Which WhatsApp number's conversation to reopen, for multi-number accounts. |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/conversations/12125551234/reopen \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{}'
```

## Example response

```json
{
  "status": "success",
  "message": "Conversation reopened.",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "status": "open",
    "assigned_to": "701a2b3c4d5e6f7a8b9c0d1e",
    "assigned_to_name": "API Key Owner",
    "assigned_at": null,
    "is_reassignment": null,
    "previous_assignee_id": null,
    "previous_assignee_name": null,
    "note": null,
    "no_op": null
  }
}
```

`status` becomes `open` and `assigned_to` becomes the account that owns your API key. To hand the chat to a different agent afterwards, call [Assign Conversation](./assign-conversation.md).

## Behaviour notes

- **Idempotent.** Reopening a conversation that's already open is a no-op — it returns `200` with the current owner unchanged (it does not error).
- **Side effects match the inbox.** The inbox updates in real time, an audit-log row is written, and a [`conversation.reopened`](/api/webhooks/events) webhook fires with `actor.source: "api"`.

## Errors

| Status | When |
|--------|------|
| 400 | Invalid phone, or your account has no WhatsApp number configured |
| 401 | Invalid or missing API key |
| 403 | The `waba_phone_id` you passed doesn't belong to your organisation |
| 429 | Rate limit exceeded |
