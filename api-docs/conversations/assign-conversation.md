---
title: Assign Conversation
description: Assign or reassign a contact's conversation to an agent
sidebar_position: 2
---

# Assign Conversation

Assign (or reassign) the conversation behind a contact to one of your agents — the same action as the **Assign to** control in the inbox. This is the call a CRM uses to route an incoming lead to the right person automatically.

```
POST /api/v1/conversations/{contact_phone}/assign
```

`contact_phone` is the customer's number, **digits only, no `+`** (e.g. `12125551234`). Get the agent's `user_id` from [List Agents](./list-agents.md).

:::info Assignment belongs to the conversation, not the contact
A conversation is identified by your WhatsApp number + the contact's phone. If the same contact has messaged two of your WhatsApp numbers, pass `waba_phone_id` to say which conversation you mean. If you omit it, Waplify resolves it from the contact's most recent message, then your account's first number.
:::

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_id` | string | Yes | The agent to assign to (a `user_id` from [List Agents](./list-agents.md)). Must be an active member of your organisation. |
| `note` | string | No | Handoff note (max 2000 chars). Recorded on the transfer history when this is a reassignment. |
| `waba_phone_id` | string | No | Which WhatsApp number's conversation to assign, for multi-number accounts. |

## Example request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X POST https://server.waplify.io/api/v1/conversations/12125551234/assign \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "665f1c2e8a1b2c3d4e5f6a7b",
    "note": "VIP lead from the website form"
  }'
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const response = await fetch(
  "https://server.waplify.io/api/v1/conversations/12125551234/assign",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer wapl_your_api_key",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "665f1c2e8a1b2c3d4e5f6a7b",
      note: "VIP lead from the website form",
    }),
  }
);

const data = await response.json();
console.log(data.data.assigned_to_name);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://server.waplify.io/api/v1/conversations/12125551234/assign",
    headers={"Authorization": "Bearer wapl_your_api_key"},
    json={
        "user_id": "665f1c2e8a1b2c3d4e5f6a7b",
        "note": "VIP lead from the website form",
    },
)

print(response.json()["data"]["assigned_to_name"])
```

</TabItem>
</Tabs>

## Example response

A first-time assignment:

```json
{
  "status": "success",
  "message": "Conversation assigned to Priya Sharma.",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "status": null,
    "assigned_to": "665f1c2e8a1b2c3d4e5f6a7b",
    "assigned_to_name": "Priya Sharma",
    "assigned_at": "2026-06-17T09:30:00.123456+00:00",
    "is_reassignment": false,
    "previous_assignee_id": null,
    "previous_assignee_name": null,
    "note": null,
    "no_op": null
  }
}
```

When you reassign a chat that already had an owner, `is_reassignment` is `true`, the previous owner is reported, and your `note` is echoed:

```json
{
  "status": "success",
  "message": "Conversation assigned to Rahul Verma.",
  "data": {
    "phone_number": "12125551234",
    "waba_phone_id": "123456789012345",
    "status": null,
    "assigned_to": "665f1c2e8a1b2c3d4e5f6a7c",
    "assigned_to_name": "Rahul Verma",
    "assigned_at": "2026-06-17T09:45:00.000000+00:00",
    "is_reassignment": true,
    "previous_assignee_id": "665f1c2e8a1b2c3d4e5f6a7b",
    "previous_assignee_name": "Priya Sharma",
    "note": "Escalating to billing specialist",
    "no_op": null
  }
}
```

## Response fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | string | `Conversation assigned to <name>.`, or `Conversation is already assigned to this agent.` on a no-op |
| `data.phone_number` | string | Normalised contact phone (digits only) |
| `data.waba_phone_id` | string \| null | The WhatsApp number the conversation belongs to |
| `data.assigned_to` | string \| null | `user_id` of the new assignee |
| `data.assigned_to_name` | string \| null | Display name of the new assignee |
| `data.assigned_at` | string \| null | ISO 8601 timestamp of the assignment |
| `data.is_reassignment` | boolean \| null | `true` when this replaced a previous assignee |
| `data.previous_assignee_id` | string \| null | Previous assignee's `user_id` (reassignments only) |
| `data.previous_assignee_name` | string \| null | Previous assignee's name (reassignments only) |
| `data.note` | string \| null | The handoff note recorded (reassignments only) |
| `data.no_op` | boolean \| null | `true` when the chat was already assigned to this exact agent — nothing changed |
| `data.status` | string \| null | Not populated on this endpoint — call [Get Assignment State](./get-assignment-state.md) for the live `open`/`resolved` status |

## Behaviour notes

- **Assigning the same agent again is a no-op.** You get `200` with `data.no_op: true` and no history is written. Safe to retry.
- **Resolved chats can't be assigned.** If the conversation is resolved you get a `400` (`Cannot reassign a resolved conversation. Reopen it first.`) — call [Reopen Conversation](./reopen-conversation.md) first.
- **Side effects match the inbox.** Assigning over the API updates the live inbox in real time, writes a transfer-history entry (on reassignment) and an audit-log row, and fires a [`conversation.assigned`](/api/webhooks/events) webhook with `actor.source: "api"`.

## Errors

| Status | When |
|--------|------|
| 400 | Conversation is resolved (reopen first), invalid phone, invalid `user_id`, or your account has no WhatsApp number configured |
| 401 | Invalid or missing API key |
| 403 | The `waba_phone_id` you passed doesn't belong to your organisation |
| 404 | The `user_id` is not an active member of your organisation |
| 422 | `user_id` missing, or `note` longer than 2000 characters |
| 429 | Rate limit exceeded |
