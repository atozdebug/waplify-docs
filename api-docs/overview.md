---
title: API Overview
description: Introduction to the Waplify API — send WhatsApp messages, manage contacts, and receive webhooks programmatically
sidebar_position: 1
---

# Waplify API

An API (Application Programming Interface) lets your website, app, or software talk to Waplify automatically — without anyone logging into the dashboard. For example, your online store can send WhatsApp order confirmations the moment a customer places an order.

The Waplify API lets you send WhatsApp messages, manage contacts and groups, and receive real-time notifications — all from your own code or tools.

:::tip Use with AI tools
You can share this documentation (or the [Complete API Reference](./llm-reference.mdx) page) with AI tools like ChatGPT, Claude, or Cursor to help you write integration code automatically.
:::

## Base URL

```
https://server.waplify.io
```

All API endpoints are prefixed with `/api/v1/`. For example, to send a message, the full URL is:
```
https://server.waplify.io/api/v1/messages/send
```

## What you can do

| Feature | Description |
|---------|-------------|
| [**Send Messages**](./messages/send-template-message.md) | Send template messages and free-form messages via WhatsApp |
| [**Manage Contacts**](./contacts/list-contacts.md) | Create, list, get, and delete contacts |
| [**Manage Groups**](./groups/list-create-groups.md) | Create and manage contact groups |
| [**List Templates**](./templates.md) | Retrieve your approved WhatsApp message templates |
| [**Webhooks**](./webhooks/overview.md) | Receive real-time notifications for message events |

## Quick start

### 1. Get your API key

Go to **Developers > API** in your [Waplify dashboard](https://app.waplify.io) and create an API key. Copy it immediately — it is only shown once.

### 2. Send your first message

The examples below use `curl` (a command-line tool that comes with most computers). You can also use tools like [Postman](https://www.postman.com/), or any programming language — JavaScript, Python, PHP, etc.

**Using curl:**

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "hello_world",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "body_data": {}
  }'
```

**Using JavaScript (fetch):**

```javascript
const response = await fetch("https://server.waplify.io/api/v1/messages/send", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    template_name: "hello_world",
    contact_phone: "911234567890",
    contact_name: "John Doe",
    body_data: {},
  }),
});

const data = await response.json();
console.log(data);
```

**Using Python:**

```python
import requests

response = requests.post(
    "https://server.waplify.io/api/v1/messages/send",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "template_name": "hello_world",
        "contact_phone": "911234567890",
        "contact_name": "John Doe",
        "body_data": {},
    },
)

print(response.json())
```

### 3. Check the response

```json
{
  "status": "success",
  "message": "Message sent successfully",
  "message_id": "wamid.HBgNOTE4MDMxMjM0NTY3OA==",
  "contact_id": "507f1f77bcf86cd799439012",
  "template_name": "hello_world",
  "timestamp": "2024-06-15T10:00:00Z"
}
```

:::caution Important — "success" means accepted, not delivered
When you get `"status": "success"`, it means WhatsApp has **accepted** your message. It does **not** mean the message has been delivered to the contact's phone yet.

To know when a message is actually delivered or read, set up [webhooks](/api/webhooks/overview). You will receive events like `message.delivered` and `message.read` as the message progresses.
:::

## Phone number format

All phone numbers must include the **country code** without the `+` sign:

| Country | Format | Example |
|---------|--------|---------|
| India | `91` + number | `911234567890` |
| US | `1` + number | `12025550123` |
| UK | `44` + number | `447700900123` |

## Response format

All responses return JSON. Every response includes these headers:

| Header | Description |
|--------|-------------|
| `X-Request-ID` | Unique ID for this request (for debugging) |
| `API-Version` | `v1` |

**Success response:**
```json
{
  "status": "success",
  "message": "Description of what happened",
  ...
}
```

**Error response:**
```json
{
  "error": "bad_request",
  "message": "Human-readable error description",
  "request_id": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2024-06-15T10:00:00Z"
}
```

## Error codes

| HTTP Code | Error Code | What it means |
|-----------|-----------|---------------|
| 400 | `bad_request` | Something is wrong with your request — missing fields, invalid format, etc. |
| 401 | `unauthorized` | Your API key is missing, invalid, or expired |
| 403 | `forbidden` | Action not allowed — e.g., trying to send a free-form message outside the 24-hour window |
| 404 | `not_found` | The contact, group, or template you're looking for doesn't exist |
| 429 | `rate_limit_exceeded` | You're sending too many requests too fast — wait and retry |
| 500 | `internal_server_error` | Something went wrong on our end — try again or contact support |

## Need help?

- **Dashboard**: [app.waplify.io](https://app.waplify.io) — manage API keys, view logs
- **Email**: support@waplify.io
- **Guides**: Check the [Guides](/docs/intro) for step-by-step feature walkthroughs
