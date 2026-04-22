---
title: Create Campaign
description: Create a WhatsApp campaign from a list of phone numbers using an approved template
sidebar_position: 1
---

# Create Campaign

Create a WhatsApp campaign that sends an approved template to a list of recipients. Phone numbers are normalized and upserted as contacts in your account automatically — you don't need to call [Create Contact](/api/contacts/create-contact) first.

**POST** `/api/v1/campaigns/`

After creating a campaign, call [Send Campaign](./send-campaign.md) to dispatch it, then [Campaign Stats](./campaign-stats.md) to track delivery.

:::info Scheduling vs. immediate send
If you pass `scheduled_at`, the campaign is created in `scheduled` state and runs automatically at that time. Otherwise it's created as a `draft` and you must explicitly [send it](./send-campaign.md).
:::

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Campaign name (max 255 chars) |
| `description` | string | No | Campaign description (max 1000 chars) |
| `template_name` | string | Yes | Name of an `APPROVED` template on your account |
| `contacts` | array | Yes | 1–10,000 recipient entries: `{ "phone": "...", "name": "..." }` |
| `body_data` | object | No | Template body variables applied to every contact — same format as [Send Template Message](/api/messages/send-template-message) |
| `header_data` | object | No | Header variables for templates with a variable TEXT header |
| `media_url` | string | Conditional | Public URL for header media — required if the template has an IMAGE/VIDEO/DOCUMENT header |
| `filename` | string | No | Filename for DOCUMENT media |
| `waba_phone_id` | string | No | WABA phone ID to use. Falls back to the template's, then your account's first. |
| `scheduled_at` | string | No | ISO 8601 send time. If omitted, the campaign is created as a draft. |
| `scheduled_timezone` | string | No | IANA timezone string (e.g., `Asia/Kolkata`) |
| `expiration_time_ms` | number | Conditional | Required when the template is a limited-time offer (milliseconds) |
| `carousel_data` | array | Conditional | Per-card data for carousel templates — see below |

### `contacts` array items

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | Yes | Phone number with country code, with or without `+` (e.g., `911234567890` or `+911234567890`) |
| `name` | string | No | Contact name. Only used when creating a new contact. |

Duplicate phone numbers (after normalization) are automatically deduplicated. Phone numbers that fail normalization are returned in the `invalid_phones` response field and skipped.

### `carousel_data` array items (carousel templates only)

One entry per card, in card order. Must match the template's card count.

| Field | Type | Description |
|-------|------|-------------|
| `media_url` | string | Public image/video URL for this card (falls back to template's stored media if omitted) |
| `body_data` | object | Per-card body variables (for carousel templates that use per-card bodies) |
| `button_payloads` | array | Payloads for `QUICK_REPLY` buttons, in button order |
| `url_button_params` | array | `{{1}}` substitutions for `URL` buttons, in button order |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Immediate draft campaign

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X POST https://server.waplify.io/api/v1/campaigns/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Summer Sale Blast",
    "description": "Announce the summer sale to loyalty members",
    "template_name": "summer_sale_promo",
    "contacts": [
      { "phone": "911234567890", "name": "John Doe" },
      { "phone": "919876543210", "name": "Priya Singh" }
    ],
    "body_data": { "1": "Loyalty member", "2": "40%" }
  }'
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const response = await fetch("https://server.waplify.io/api/v1/campaigns/", {
  method: "POST",
  headers: {
    "Authorization": "Bearer wapl_your_api_key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Summer Sale Blast",
    template_name: "summer_sale_promo",
    contacts: [
      { phone: "911234567890", name: "John Doe" },
      { phone: "919876543210", name: "Priya Singh" },
    ],
    body_data: { "1": "Loyalty member", "2": "40%" },
  }),
});

const data = await response.json();
console.log(data.campaign_id);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://server.waplify.io/api/v1/campaigns/",
    headers={"Authorization": "Bearer wapl_your_api_key"},
    json={
        "name": "Summer Sale Blast",
        "template_name": "summer_sale_promo",
        "contacts": [
            {"phone": "911234567890", "name": "John Doe"},
            {"phone": "919876543210", "name": "Priya Singh"},
        ],
        "body_data": {"1": "Loyalty member", "2": "40%"},
    },
)

data = response.json()
print(data["campaign_id"])
```

</TabItem>
</Tabs>

### Campaign with image header

```bash
curl -X POST https://server.waplify.io/api/v1/campaigns/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Diwali Promo",
    "template_name": "festive_banner",
    "contacts": [{ "phone": "911234567890", "name": "John" }],
    "body_data": { "1": "John", "2": "30%" },
    "media_url": "https://example.com/diwali-banner.jpg"
  }'
```

### Scheduled campaign

```bash
curl -X POST https://server.waplify.io/api/v1/campaigns/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Friday Digest",
    "template_name": "weekly_digest",
    "contacts": [{ "phone": "911234567890" }],
    "scheduled_at": "2026-05-15T09:30:00Z",
    "scheduled_timezone": "Asia/Kolkata"
  }'
```

Scheduled campaigns run automatically at `scheduled_at` — you do not need to call [Send Campaign](./send-campaign.md).

### Carousel campaign

```bash
curl -X POST https://server.waplify.io/api/v1/campaigns/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Product Showcase",
    "template_name": "product_showcase",
    "contacts": [{ "phone": "911234567890", "name": "John" }],
    "body_data": { "1": "John" },
    "carousel_data": [
      {
        "media_url": "https://example.com/product1.jpg",
        "url_button_params": ["p1"],
        "button_payloads": ["more-like-this"]
      },
      {
        "media_url": "https://example.com/product2.jpg",
        "url_button_params": ["p2"],
        "button_payloads": ["more-like-this"]
      }
    ]
  }'
```

## Success response

```json
{
  "status": "success",
  "message": "Campaign created successfully",
  "campaign_id": "507f1f77bcf86cd799439060",
  "name": "Summer Sale Blast",
  "status_value": "draft",
  "total_contacts": 2,
  "invalid_phones": [],
  "timestamp": "2024-06-15T10:00:00Z"
}
```

| Field | Description |
|-------|-------------|
| `campaign_id` | ID used for [Send Campaign](./send-campaign.md) and [Campaign Stats](./campaign-stats.md) |
| `status_value` | `draft` (needs manual send) or `scheduled` (auto-sends at `scheduled_at`) |
| `total_contacts` | Number of unique contacts resolved from your input |
| `invalid_phones` | Phone numbers that failed normalization and were skipped |

## Error responses

### Template not approved
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Template 'summer_sale_promo' is not approved. Status: PENDING"
}
```

### Template not found
```json
// 404 Not Found
{
  "error": "not_found",
  "message": "Template 'unknown_template' not found or does not belong to your account"
}
```

### Missing body variables
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Missing body variables in 'body_data': 2"
}
```

### Media required but not provided
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "media_url is required for this template"
}
```

### Media URL unreachable
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Media URL is not accessible: HTTP 403"
}
```

### All phones invalid
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "No valid contacts could be resolved from the provided phone numbers"
}
```

### Limited-time offer template missing expiration
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "expiration_time_ms is required for limited-time offer templates"
}
```

## Limitations

- `ORDER_DETAILS` and `FLOW` buttons are not supported via this endpoint. Use the dashboard for those templates.
- Per-contact variable overrides are not supported — `body_data` is applied to every recipient. For personalized variables per contact, use the dashboard's CSV import flow.
- Up to **10,000 contacts per request**.
