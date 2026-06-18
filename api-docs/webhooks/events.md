---
title: Webhook Events & Payloads
description: Detailed payload formats for each webhook event type
sidebar_position: 2
---

# Webhook Events & Payloads

This page shows the exact JSON payload format for each webhook event type.

## Message status events

These events fire when an outbound message changes status: `message.sent`, `message.delivered`, `message.read`, `message.failed`, `button.clicked`.

```json
{
  "event": "message.delivered",
  "timestamp": "2026-06-15T10:05:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "status": "delivered",
    "previous_status": "sent",
    "status_timestamp": "2026-06-15T10:05:00"
  }
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `event` | string | Event type (e.g., `message.delivered`) |
| `timestamp` | string | ISO 8601 timestamp of the event |
| `campaign_id` | string \| null | Campaign ID (null if sent via API or chat) |
| `campaign_name` | string \| null | Campaign name |
| `message.message_id` | string | Internal message ID |
| `message.contact_phone` | string | Recipient's phone number |
| `message.contact_name` | string \| null | Recipient's display name |
| `message.status` | string | New status |
| `message.previous_status` | string \| null | Previous status |
| `message.status_timestamp` | string | When the status changed |

### Additional fields for `message.failed`

When a message fails, the payload includes two extra fields:

| Field | Type | Description |
|-------|------|-------------|
| `message.error_message` | string | Human-readable error description |
| `message.error_code` | number | WhatsApp error code |

```json
{
  "event": "message.failed",
  "timestamp": "2026-06-15T10:05:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "status": "failed",
    "previous_status": "sent",
    "status_timestamp": "2026-06-15T10:05:00",
    "error_message": "Message undeliverable",
    "error_code": 131026
  }
}
```

---

## Inbound message event

Fires when a contact sends you a new message: `message.received`.

```json
{
  "event": "message.received",
  "timestamp": "2026-06-15T10:15:00",
  "message": {
    "message_id": "wamid.HBgNOTE4MDMxMjM0NTY3OQ==",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "content": "Hi, I have a question",
    "message_type": "text",
    "timestamp": "2026-06-15T10:15:00",
    "waba_phone_id": "123456789012345",
    "is_reply": false,
    "is_from_ad": false
  }
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `message.message_id` | string | WhatsApp message ID |
| `message.contact_phone` | string | Sender's phone number |
| `message.contact_name` | string \| null | Sender's display name |
| `message.content` | string | Message text content |
| `message.message_type` | string | `text`, `image`, `video`, `audio`, `document`, `sticker`, `location`, etc. |
| `message.timestamp` | string | When the message was received |
| `message.waba_phone_id` | string | Which WhatsApp number received the message |
| `message.is_reply` | boolean | Whether this is a reply to one of your messages |
| `message.original_message_id` | string | Original message ID (only when `is_reply` is true) |
| `message.media_url` | string | Media URL (only for media messages) |
| `message.is_from_ad` | boolean | Whether the message came from an ad click |
| `message.referral` | object | Ad referral data (only when `is_from_ad` is true) |

---

## Reply event

Fires when a contact replies to one of your outbound messages: `message.reply`.

```json
{
  "event": "message.reply",
  "timestamp": "2026-06-15T10:10:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "original_message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "sent_at": "2026-06-15T10:00:00"
  },
  "reply": {
    "message_id": "507f1f77bcf86cd799439071",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "content": "Yes, I'd like to know more!",
    "message_type": "text",
    "timestamp": "2026-06-15T10:10:00"
  }
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `original_message.message_id` | string | ID of the outbound message being replied to |
| `original_message.contact_phone` | string | Recipient's phone number |
| `original_message.contact_name` | string \| null | Recipient's display name |
| `original_message.sent_at` | string | When the original message was sent |
| `reply.message_id` | string | Reply message ID |
| `reply.contact_phone` | string | Replier's phone number |
| `reply.contact_name` | string \| null | Replier's display name |
| `reply.content` | string | Reply text content |
| `reply.message_type` | string | `text`, `image`, `video`, `audio`, `document` |
| `reply.timestamp` | string | When the reply was received |
| `reply.media_url` | string | Media URL (only for media replies) |

---

## Conversation assignment events

Fire when the ownership of a chat changes: `conversation.assigned`, `conversation.unassigned`, `conversation.resolved`, `conversation.reopened`. They share one payload shape (with an `actor` describing who or what made the change), so a CRM can keep its own "who's handling this lead" view in sync.

```json
{
  "event": "conversation.assigned",
  "timestamp": "2026-06-17T10:05:00.123456+00:00",
  "conversation": {
    "contact_phone": "911234567890",
    "waba_phone_id": "123456789012345",
    "status": "open",
    "assigned_to": "507f1f77bcf86cd799439011",
    "assigned_to_name": "Priya Sharma",
    "previous_assignee_id": "507f1f77bcf86cd799439022",
    "previous_assignee_name": "Rahul Verma",
    "is_reassignment": true,
    "note": "Escalated from tier 1",
    "reason": null,
    "actor": {
      "user_id": "507f1f77bcf86cd799439033",
      "name": "Anita Desai",
      "source": "manual"
    }
  }
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `event` | string | `conversation.assigned`, `conversation.unassigned`, `conversation.resolved`, or `conversation.reopened` |
| `timestamp` | string | ISO 8601 timestamp, UTC with a `+00:00` offset |
| `conversation.contact_phone` | string | The customer's phone number (digits only). Identifies the conversation. |
| `conversation.waba_phone_id` | string \| null | The WhatsApp number that owns this conversation |
| `conversation.status` | string \| null | Conversation status at the time of the event (`open` / `resolved`) |
| `conversation.assigned_to` | string \| null | `user_id` of the agent the chat is now assigned to (`null` for unassigned) |
| `conversation.assigned_to_name` | string \| null | Display name of the new assignee |
| `conversation.previous_assignee_id` | string \| null | `user_id` of the prior assignee (for reassignments / unassign) |
| `conversation.previous_assignee_name` | string \| null | Display name of the prior assignee |
| `conversation.is_reassignment` | boolean | `true` when an already-assigned chat moved to a different agent |
| `conversation.note` | string \| null | Free-text handoff note, when one was provided |
| `conversation.reason` | string \| null | Optional reason (e.g. on resolve) |
| `conversation.actor` | object | Who or what made the change — see below |

### The `actor` object

| Field | Type | Description |
|-------|------|-------------|
| `actor.user_id` | string \| null | The acting user's ID. For automatic changes this is literally the string `"system"`. |
| `actor.name` | string \| null | Human-readable actor name (e.g. the agent's name, or `System (round-robin)`) |
| `actor.source` | string | Where the change came from — use this to suppress echo loops |

`actor.source` values:

| Source | Meaning |
|--------|---------|
| `manual` | Someone changed it from the inbox |
| `api` | Changed via the [assignment API](/api/conversations/assign-conversation) |
| `auto_reply` | Auto-assigned to an agent when they sent the first reply |
| `auto_inbound` | Auto-assigned by round-robin routing on an inbound message |
| `auto_reopen` | A resolved chat was reopened automatically by a customer reply |

### When each event fires

| Event | Fires when |
|-------|------------|
| `conversation.assigned` | A chat is assigned or reassigned to an agent (manually, via the API, or by auto-routing) |
| `conversation.unassigned` | A chat is released back to the unassigned pool |
| `conversation.resolved` | A chat is marked resolved |
| `conversation.reopened` | A resolved chat is reopened — manually, via the API, or automatically when the customer replies |

:::note Timestamp format
`conversation.*` timestamps are timezone-aware and carry a `+00:00` offset. The `message.*` payloads above use a naive UTC timestamp with no offset — treat both as UTC.
:::

---

## Test event

Sent when you click **Test** in the dashboard: `webhook.test`.

```json
{
  "event": "webhook.test",
  "timestamp": "2026-06-15T10:00:00",
  "message": "Test webhook message",
  "endpoint_id": "507f1f77bcf86cd799439080",
  "endpoint_name": "My Endpoint",
  "user_id": "507f1f77bcf86cd799439090"
}
```
