---
title: List Templates
description: Retrieve all WhatsApp message templates on your account with full component details
sidebar_position: 1
---

# List Templates

Retrieve every WhatsApp message template associated with your account — including body text, header format, buttons, variable shape, and Meta approval status. Use this before sending to confirm the template is `APPROVED` and to discover which variables it expects.

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
| `name` | string | Template name (pass to [Send Template Message](/api/messages/send-template-message) or [Create Campaign](/api/campaigns/create-campaign)) |
| `category` | string | `MARKETING`, `UTILITY`, or `AUTHENTICATION` |
| `language` | string | BCP-47 language code (e.g., `en_US`, `hi`) |
| `status` | string | Meta approval status — only `APPROVED` templates can be sent |
| `header_format` | string | `NONE`, `TEXT`, `IMAGE`, `VIDEO`, `DOCUMENT`, or `LOCATION` |
| `header` | string\|null | Header text (when `header_format` is `TEXT`) |
| `body` | string | Body text with variable placeholders like `{{1}}`, `{{name}}` |
| `footer` | string\|null | Footer text |
| `buttons` | array\|null | Button definitions (types: `QUICK_REPLY`, `URL`, `PHONE_NUMBER`, `COPY_CODE`, `FLOW`, `OTP`) |
| `requires_media` | boolean | `true` if you need to provide a `media_url` when sending |
| `variables` | array\|null | Variable names/types with examples |
| `requires_variables` | boolean | `true` if the template has variables to fill |
| `variable_count` | number | Number of variables across header and body |
| `parameter_format` | string | `POSITIONAL` (`{{1}}`, `{{2}}`) or `NAMED` (`{{name}}`) |
| `example_data` | object | Meta example payload, including sample header media URL |
| `sample_media_url` | string\|null | Preview media URL from Meta |
| `limited_time_offer` | object\|null | LTO component data if present |
| `offer_code` | string\|null | Stored offer/coupon code for LTO templates |
| `is_carousel` | boolean | `true` if this is a media card carousel template |
| `carousel_cards` | array\|null | Card definitions (carousel templates only) |
| `carousel_card_count` | number\|null | Number of cards in the carousel |
| `quality_score` | object\|null | Meta quality score object with `score` (`GREEN`, `YELLOW`, `RED`, or `UNKNOWN`) and `date` (unix timestamp) |
| `message_send_ttl_seconds` | number\|null | TTL for messages sent with this template |
| `api_payload_structure` | object\|null | Example request body for sending this template via the API |
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
      "variable_count": 3,
      "parameter_format": "POSITIONAL",
      "is_carousel": false,
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
      "variable_count": 1,
      "parameter_format": "POSITIONAL",
      "is_carousel": false,
      "created_at": "2024-06-10T08:00:00Z"
    }
  ],
  "total": 2
}
```

## How to use the response

When preparing to send a message or create a campaign, inspect these fields:

1. **`status`** — Only `APPROVED` templates can be sent. `PENDING` or `REJECTED` templates return an error.
2. **`body`** — Look for `{{1}}`, `{{2}}`, etc. (or named variables). These become the keys in `body_data`.
3. **`header_format`** — If `IMAGE`, `VIDEO`, or `DOCUMENT`, you must provide `media_url`.
4. **`requires_media`** — Fast check: if `true`, a media URL is required.
5. **`is_carousel`** — If `true`, use `carousel_data` to supply per-card media / button values.
6. **`limited_time_offer`** + **`offer_code`** — If present, you must pass `expiration_time_ms` when sending.

:::tip
Call this endpoint before sending messages to verify your template exists and is approved. This prevents sending errors.
:::
