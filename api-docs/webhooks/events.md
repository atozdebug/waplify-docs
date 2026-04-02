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
  "timestamp": "2024-06-15T10:05:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "status": "delivered",
    "previous_status": "sent",
    "status_timestamp": "2024-06-15T10:05:00"
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
  "timestamp": "2024-06-15T10:05:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "status": "failed",
    "previous_status": "sent",
    "status_timestamp": "2024-06-15T10:05:00",
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
  "timestamp": "2024-06-15T10:15:00",
  "message": {
    "message_id": "wamid.HBgNOTE4MDMxMjM0NTY3OQ==",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "content": "Hi, I have a question",
    "message_type": "text",
    "timestamp": "2024-06-15T10:15:00",
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
  "timestamp": "2024-06-15T10:10:00",
  "campaign_id": "507f1f77bcf86cd799439060",
  "campaign_name": "Summer Promo",
  "original_message": {
    "message_id": "507f1f77bcf86cd799439070",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "sent_at": "2024-06-15T10:00:00"
  },
  "reply": {
    "message_id": "507f1f77bcf86cd799439071",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "content": "Yes, I'd like to know more!",
    "message_type": "text",
    "timestamp": "2024-06-15T10:10:00"
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

## Test event

Sent when you click **Test** in the dashboard: `webhook.test`.

```json
{
  "event": "webhook.test",
  "timestamp": "2024-06-15T10:00:00",
  "message": "Test webhook message",
  "endpoint_id": "507f1f77bcf86cd799439080",
  "endpoint_name": "My Endpoint",
  "user_id": "507f1f77bcf86cd799439090"
}
```
