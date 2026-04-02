---
title: Webhooks Overview
description: Receive real-time HTTP notifications when message events happen in your Waplify account
sidebar_position: 1
---

# Webhooks

Webhooks let you receive real-time HTTP notifications on your server whenever something happens in your Waplify account — a message gets delivered, a customer replies, a campaign completes, etc.

## How webhooks work

1. You register a **webhook endpoint** (a URL on your server) in the Waplify dashboard
2. You choose which **events** to subscribe to
3. When an event occurs, Waplify sends a `POST` request to your URL with the event data
4. Your server processes the data and responds with a `200` status code

## Setting up webhooks

1. Go to **Developers > Webhooks** in your Waplify dashboard
2. Click **Create Endpoint**
3. Enter your endpoint details:

| Setting | Description | Default |
|---------|-------------|---------|
| **Name** | A label for this endpoint | — |
| **URL** | Your server URL (HTTPS required in production) | — |
| **Secret** | Optional signing secret for payload verification | — |
| **Events** | Which event types to receive | All events |
| **Retry count** | Max retry attempts on failure (0–10) | 3 |
| **Timeout** | Request timeout in seconds (1–30) | 5 |

## Available events

| Event | Description |
|-------|-------------|
| `message.sent` | Message was accepted by WhatsApp |
| `message.delivered` | Message was delivered to the recipient's device |
| `message.read` | Recipient read the message |
| `message.failed` | Message delivery failed |
| `button.clicked` | Recipient clicked a quick-reply or call-to-action button |
| `message.received` | New inbound message from a contact |
| `message.reply` | Contact replied to one of your outbound messages |

## Delivery behavior

All webhook payloads are sent as `POST` requests with:
- `Content-Type: application/json`
- `User-Agent: Waplify-Webhook/1.0`

### Retry policy

| Scenario | Behavior |
|----------|----------|
| **2xx response** | Success — no retry |
| **4xx error** (except 429) | Not retried — fix your endpoint |
| **429 Too Many Requests** | Retried up to `retry_count` times |
| **5xx error** | Retried up to `retry_count` times |
| **Timeout** | Retried up to `retry_count` times |

Retries use **exponential backoff** — each retry waits longer than the last: 1 second, then 2 seconds, then 4 seconds, then 8 seconds, and so on. This gives your server time to recover if it's temporarily overloaded.

## Request headers

Every webhook request includes these headers:

| Header | Description |
|--------|-------------|
| `Content-Type` | `application/json` |
| `User-Agent` | `Waplify-Webhook/1.0` |
| `X-Webhook-Signature` | HMAC-SHA256 signature (only if you configured a secret) |

## Status flow

Message statuses follow a strict order. Only forward transitions trigger webhooks:

```
pending → accepted → sent → delivered → read → clicked
                  ↘ failed (can happen at any point after accepted)
```

If a message jumps from `accepted` to `delivered`, you will receive both `message.sent` and `message.delivered` events.
