---
title: Create Template
description: Create a WhatsApp message template and submit it to Meta for approval
sidebar_position: 2
---

# Create Template

Create a new WhatsApp message template on Meta and store it locally. Templates are submitted to Meta for review and typically reach `APPROVED` status within minutes to 24 hours.

**POST** `/api/v1/templates/create`

For media-card carousel templates (multiple cards, each with an image/video), use [Create Carousel Template](./create-carousel-template.md) instead.

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Template name — lowercase letters, numbers, underscores only (e.g., `order_update`). Max 512 chars. |
| `category` | string | Yes | `MARKETING`, `UTILITY`, or `AUTHENTICATION` |
| `language` | string | No | BCP-47 language code. Defaults to `en_US`. |
| `waba_phone_id` | string | No | WhatsApp Business Account phone ID to create the template under. If omitted, Waplify uses the first WhatsApp number linked to your account. |
| `header` | object | No | Header component — see below |
| `media_url` | string | Conditional | Public URL for header media. Required when `header.format` is `IMAGE`, `VIDEO`, or `DOCUMENT`. We download it and upload to Meta on your behalf. |
| `body` | object | Conditional | Body component — required for `MARKETING` and `UTILITY` |
| `footer` | object | No | Footer component (max 60 chars, no variables) |
| `buttons` | array | No | Up to 10 interactive buttons — see below |
| `limited_time_offer` | object | No | LTO component (MARKETING only) — see below |
| `offer_code` | string | No | Offer/coupon code (max 15 chars). Required if `limited_time_offer` is set. |
| `add_security_recommendation` | boolean | No | Include security text in auth template body |
| `code_expiration_minutes` | number | No | Code expiry (1–90 minutes) for AUTHENTICATION templates |
| `message_send_ttl_seconds` | number | No | TTL for messages sent using this template |

### `header` object

| Field | Type | Description |
|-------|------|-------------|
| `format` | string | `TEXT`, `IMAGE`, `VIDEO`, `DOCUMENT`, or `LOCATION` |
| `text` | string | Header text (required when `format` is `TEXT`, max 60 chars). Supports `{{1}}` or `{{Name}}` variables. |
| `text_example` | object | Example values for header variables, e.g. `{"1": "John"}` |

### `body` object

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Body text (max 1024 chars). Supports `{{1}}`/`{{Name}}` variables. |
| `examples` | object | Example values for each variable, e.g. `{"1": "John", "2": "Order123"}` |

### `footer` object

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Footer text (max 60 chars, no variables) |

### `buttons` array items

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | `QUICK_REPLY`, `URL`, `PHONE_NUMBER`, `COPY_CODE`, or `FLOW` |
| `text` | string | Button label (max 25 chars) |
| `url` | string | URL for `URL` buttons. Supports `{{1}}` suffix. WhatsApp domains are not allowed. |
| `url_example` | string | Example value used when `url` contains `{{1}}` |
| `phone_number` | string | Phone number for `PHONE_NUMBER` buttons |
| `copy_code_example` | string | Example coupon code for `COPY_CODE` buttons |
| `flow_id` | string | Flow ID for `FLOW` buttons |
| `flow_action` | string | Flow action (default `navigate`) |
| `navigate_screen` | string | Target screen for `FLOW` buttons |

**Button limits:** max 10 `QUICK_REPLY`, 2 `URL`, 1 `PHONE_NUMBER`, 1 `COPY_CODE`.

### `limited_time_offer` object

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Offer heading (max 16 chars) |
| `has_expiration` | boolean | Show the countdown timer (default `true`) |

LTO templates must be `MARKETING`, have no footer, body ≤ 600 chars, `offer_code` set, and a `COPY_CODE` button at index 0.

:::info Variable style
You cannot mix numbered (`{{1}}`) and named (`{{name}}`) variables in the same template — pick one style and use it consistently across header and body.
:::

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Text-only template

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X POST https://server.waplify.io/api/v1/templates/create \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "order_update",
    "category": "UTILITY",
    "language": "en_US",
    "waba_phone_id": "123456789012345",
    "header": {
      "format": "TEXT",
      "text": "Order Update"
    },
    "body": {
      "text": "Hello {{1}}, your order {{2}} has been shipped!",
      "examples": { "1": "John", "2": "ORD-12345" }
    },
    "footer": { "text": "Thank you for shopping with us" },
    "buttons": [
      {
        "type": "URL",
        "text": "Track Order",
        "url": "https://example.com/track/{{1}}",
        "url_example": "ORD-12345"
      }
    ]
  }'
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const response = await fetch("https://server.waplify.io/api/v1/templates/create", {
  method: "POST",
  headers: {
    "Authorization": "Bearer wapl_your_api_key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "order_update",
    category: "UTILITY",
    language: "en_US",
    waba_phone_id: "123456789012345",
    header: { format: "TEXT", text: "Order Update" },
    body: {
      text: "Hello {{1}}, your order {{2}} has been shipped!",
      examples: { "1": "John", "2": "ORD-12345" },
    },
    footer: { text: "Thank you for shopping with us" },
    buttons: [
      {
        type: "URL",
        text: "Track Order",
        url: "https://example.com/track/{{1}}",
        url_example: "ORD-12345",
      },
    ],
  }),
});

const data = await response.json();
console.log(data);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://server.waplify.io/api/v1/templates/create",
    headers={"Authorization": "Bearer wapl_your_api_key"},
    json={
        "name": "order_update",
        "category": "UTILITY",
        "language": "en_US",
        "waba_phone_id": "123456789012345",
        "header": {"format": "TEXT", "text": "Order Update"},
        "body": {
            "text": "Hello {{1}}, your order {{2}} has been shipped!",
            "examples": {"1": "John", "2": "ORD-12345"},
        },
        "footer": {"text": "Thank you for shopping with us"},
        "buttons": [
            {
                "type": "URL",
                "text": "Track Order",
                "url": "https://example.com/track/{{1}}",
                "url_example": "ORD-12345",
            }
        ],
    },
)

print(response.json())
```

</TabItem>
</Tabs>

### Template with image header

The `media_url` must point to a publicly accessible JPEG or PNG (max 5 MB). Waplify downloads it and uploads the sample to Meta.

```bash
curl -X POST https://server.waplify.io/api/v1/templates/create \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "promo_banner",
    "category": "MARKETING",
    "language": "en_US",
    "waba_phone_id": "123456789012345",
    "header": { "format": "IMAGE" },
    "media_url": "https://example.com/banner.jpg",
    "body": {
      "text": "Hi {{1}}, enjoy {{2}} off this weekend!",
      "examples": { "1": "Priya", "2": "30%" }
    },
    "buttons": [
      { "type": "QUICK_REPLY", "text": "Shop now" },
      { "type": "QUICK_REPLY", "text": "No thanks" }
    ]
  }'
```

### Named variables

```bash
curl -X POST https://server.waplify.io/api/v1/templates/create \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "appointment_reminder",
    "category": "UTILITY",
    "language": "en_US",
    "waba_phone_id": "123456789012345",
    "body": {
      "text": "Hi {{name}}, reminder: your appointment with {{doctor}} is on {{date}}.",
      "examples": { "name": "John", "doctor": "Dr. Patel", "date": "June 15 at 10 AM" }
    }
  }'
```

### Limited-time offer

```bash
curl -X POST https://server.waplify.io/api/v1/templates/create \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "flash_sale",
    "category": "MARKETING",
    "language": "en_US",
    "waba_phone_id": "123456789012345",
    "body": {
      "text": "Hi {{1}}, use your exclusive code before it expires!",
      "examples": { "1": "Priya" }
    },
    "limited_time_offer": { "text": "Limited offer", "has_expiration": true },
    "offer_code": "FLASH40",
    "buttons": [
      { "type": "COPY_CODE", "text": "Copy code", "copy_code_example": "FLASH40" }
    ]
  }'
```

## Success response (201 Created)

```json
{
  "status": "success",
  "message": "Template 'order_update' created and submitted for review",
  "template_id": "507f1f77bcf86cd799439012",
  "meta_template_id": "1234567890123456",
  "meta_status": "PENDING"
}
```

| Field | Description |
|-------|-------------|
| `template_id` | Waplify's internal template ID |
| `meta_template_id` | Meta's template ID |
| `meta_status` | Initial status — usually `PENDING`. Poll [List Templates](./list-templates.md) (or run [Sync Templates](./sync-templates.md)) to see when it becomes `APPROVED`. |

## Error responses

### Invalid template name
```json
// 422 Unprocessable Entity
{
  "detail": "Template name must contain only lowercase letters, numbers, and underscores"
}
```

### Mixed variable styles
```json
// 422 Unprocessable Entity
{
  "detail": "Cannot mix numbered ({{1}}) and named ({{name}}) variables. Use one style only."
}
```

### Media download failed
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Failed to download media from URL: HTTP 404"
}
```

### Duplicate name
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "A template with this name already exists for this phone number"
}
```

## Media file limits (for headers)

| Header format | Max Size | Accepted Formats |
|---------------|----------|------------------|
| `IMAGE` | 5 MB | JPEG, PNG |
| `VIDEO` | 16 MB | MP4 |
| `DOCUMENT` | 100 MB | PDF |

:::tip After creating a template
A newly created template starts in `PENDING` status. Call [Sync Templates](./sync-templates.md) or [List Templates](./list-templates.md) periodically to pick up the final `APPROVED` / `REJECTED` decision from Meta.
:::
