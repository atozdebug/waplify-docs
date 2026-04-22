---
title: Create Carousel Template
description: Create a media-card carousel template (MARKETING only, 2-10 cards)
sidebar_position: 3
---

# Create Carousel Template

Create a media-card carousel template on Meta. Each card has its own image or video header, an optional body, and 1–2 buttons. Carousel templates are always in the `MARKETING` category.

**POST** `/api/v1/templates/create-carousel`

Each card requires a public `media_url` — Waplify downloads the file and uploads it to Meta for you.

## Card rules

- Between **2 and 10** cards
- All cards must use the **same `header_format`** (`IMAGE` or `VIDEO`)
- All cards must have the **same button structure** (same number of buttons, same types in the same order)
- If any card has `body_text`, all cards must have `body_text`

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Template name — lowercase letters, numbers, underscores only |
| `language` | string | No | BCP-47 language code. Defaults to `en_US`. |
| `waba_phone_id` | string | No | WhatsApp Business Account phone ID. If omitted, Waplify uses the first WhatsApp number linked to your account. |
| `body` | object | Yes | Top-level message body — see [Create Template](./create-template.md#body-object) |
| `cards` | array | Yes | 2–10 card objects (see below) |
| `message_send_ttl_seconds` | number | No | TTL for messages sent with this template |

### `cards` array items

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `header_format` | string | Yes | `IMAGE` or `VIDEO` — must be the same across all cards |
| `media_url` | string | Yes | Public URL to the card's media (JPEG/PNG for image, MP4 for video) |
| `body_text` | string | No | Optional per-card body text (max 160 chars) |
| `buttons` | array | Yes | 1–2 buttons per card — see [Create Template / buttons](./create-template.md#buttons-array-items) |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/templates/create-carousel \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "product_showcase",
    "language": "en_US",
    "waba_phone_id": "123456789012345",
    "body": {
      "text": "Hi {{1}}, check out our top picks!",
      "examples": { "1": "John" }
    },
    "cards": [
      {
        "header_format": "IMAGE",
        "media_url": "https://example.com/product1.jpg",
        "body_text": "Product 1 - Amazing quality.",
        "buttons": [
          {
            "type": "URL",
            "text": "Shop",
            "url": "https://example.com/{{1}}",
            "url_example": "p1"
          },
          { "type": "QUICK_REPLY", "text": "More like this" }
        ]
      },
      {
        "header_format": "IMAGE",
        "media_url": "https://example.com/product2.jpg",
        "body_text": "Product 2 - Best seller.",
        "buttons": [
          {
            "type": "URL",
            "text": "Shop",
            "url": "https://example.com/{{1}}",
            "url_example": "p2"
          },
          { "type": "QUICK_REPLY", "text": "More like this" }
        ]
      }
    ]
  }'
```

## Success response (201 Created)

```json
{
  "status": "success",
  "message": "Template 'product_showcase' created and submitted for review",
  "template_id": "507f1f77bcf86cd799439099",
  "meta_template_id": "9876543210987654",
  "meta_status": "PENDING"
}
```

## Error responses

### Inconsistent card structure
```json
// 422 Unprocessable Entity
{
  "detail": "All cards must have the same button structure. Card 0 vs card 1 mismatch."
}
```

### Media download failed
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Failed to download media for card 1: HTTP 403"
}
```

### Only some cards have body text
```json
// 422 Unprocessable Entity
{
  "detail": "If any card includes body text, all cards must include body text"
}
```

## Sending a carousel campaign

Once the carousel template is `APPROVED`, send it to contacts via [Create Campaign](/api/campaigns/create-campaign) and pass one entry per card in `carousel_data`:

```json
{
  "template_name": "product_showcase",
  "body_data": { "1": "John" },
  "carousel_data": [
    { "media_url": "https://example.com/product1.jpg", "url_button_params": ["p1"], "button_payloads": ["more-like-this"] },
    { "media_url": "https://example.com/product2.jpg", "url_button_params": ["p2"], "button_payloads": ["more-like-this"] }
  ]
}
```

If `carousel_data` is omitted, each card falls back to the `media_url` stored on the template and the example button values.
