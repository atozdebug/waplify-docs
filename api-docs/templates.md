---
title: List Templates
description: Retrieve all approved WhatsApp message templates for your account
sidebar_position: 6
---

# List Templates

Retrieve all WhatsApp message templates associated with your account. Use this to see which templates are available, what variables they require, and whether they need a media attachment.

```
GET /api/v1/templates/
```

## Response fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | `"success"` |
| `templates` | array | Array of template objects |
| `total` | number | Total number of templates |

### Template object

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Template ID |
| `name` | string | Template name (use this in the [Send Template Message](/api/messages/send-template-message) endpoint) |
| `category` | string | `MARKETING`, `UTILITY`, or `AUTHENTICATION` |
| `language` | string | Language code (e.g., `en_US`, `hi`) |
| `status` | string | Approval status — only `APPROVED` templates can be used for sending |
| `header_format` | string | Header type: `NONE`, `TEXT`, `IMAGE`, `VIDEO`, or `DOCUMENT` |
| `body` | string | Template body text with variable placeholders like `{{1}}`, `{{2}}` |
| `requires_media` | boolean | `true` if you need to provide a `media_url` when sending |
| `created_at` | string | ISO 8601 timestamp |

## Example request

```bash
curl -X GET https://server.waplify.io/api/v1/templates/ \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "templates": [
    {
      "id": "507f1f77bcf86cd799439012",
      "name": "order_confirmation",
      "category": "UTILITY",
      "language": "en_US",
      "status": "APPROVED",
      "header_format": "IMAGE",
      "body": "Hello {{1}}, your order {{2}} is confirmed for {{3}}.",
      "requires_media": true,
      "created_at": "2024-06-15T10:00:00Z"
    },
    {
      "id": "507f1f77bcf86cd799439013",
      "name": "welcome_message",
      "category": "MARKETING",
      "language": "en_US",
      "status": "APPROVED",
      "header_format": "NONE",
      "body": "Welcome {{1}}! Thanks for joining us.",
      "requires_media": false,
      "created_at": "2024-06-10T08:00:00Z"
    }
  ],
  "total": 2
}
```

## How to use the response

When preparing to send a message, check these fields:

1. **`body`** — Look for `{{1}}`, `{{2}}`, etc. These are the variables you need to provide in `body_data`
2. **`header_format`** — If it is `IMAGE`, `VIDEO`, or `DOCUMENT`, you must provide a `media_url`
3. **`requires_media`** — Quick check: if `true`, a media URL is required
4. **`status`** — Only `APPROVED` templates can be sent. `PENDING` or `REJECTED` templates will return an error

:::tip
Call this endpoint before sending messages to verify your template exists and is approved. This prevents sending errors.
:::
