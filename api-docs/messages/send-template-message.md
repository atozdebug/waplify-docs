---
title: Send Template Message
description: Send a WhatsApp message using an approved template
sidebar_position: 1
---

# Send Template Message

Send a WhatsApp message to a contact using an approved message template. This is the primary way to reach contacts — template messages can be sent anytime, even outside the 24-hour customer service window.

**POST** `/api/v1/messages/send`

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template_name` | string | Yes | Name of your approved template (case-sensitive) |
| `contact_phone` | string | Yes | Phone number with country code, without `+` (e.g., `911234567890`) |
| `contact_name` | string | No | Contact's name. Defaults to `User #<random>` if omitted |
| `body_data` | object | No | Template body variables as key-value pairs. Defaults to empty `{}`. **Required if your template has variables** like `{{1}}`, `{{2}}` |
| `header_data` | object | No | Header variables — only needed for templates with a **text** header that contains variables |
| `media_url` | string | No | Publicly accessible URL for image, video, or document. **Required if template has a media header** |
| `filename` | string | No | Filename for document attachments (defaults to `untitled`) |
| `waba_phone_id` | string | No | Which WhatsApp number to send from (uses your default number if omitted) |

:::info Auto-created contacts
If the contact phone number doesn't exist in your Waplify account, the contact will be **created automatically** when you send the message. The `source` will be set to `api`.
:::

## Understanding template variables

Templates use placeholders like `{{1}}`, `{{2}}` for personalized content. You fill these in via `body_data` when sending.

**How to know which variables your template needs:**
1. Call the [List Templates](/api/templates) endpoint
2. Look at the `body` field — it shows the template text with placeholders
3. Look at `header_format` — if it's `IMAGE`, `VIDEO`, or `DOCUMENT`, you need a `media_url`
4. Look at `requires_media` — if `true`, a `media_url` is required

### Variable types

**Positional variables** (most common): `{{1}}`, `{{2}}`, `{{3}}`
Pass them as string keys:
```json
{
  "body_data": { "1": "John", "2": "Premium Plan", "3": "99" }
}
```

**Named variables**: `{{name}}`, `{{company}}`, `{{amount}}`
Pass them with the exact key name (case-sensitive):
```json
{
  "body_data": { "name": "John", "company": "Acme Corp", "amount": "99" }
}
```

## Examples

### Basic template (body variables only)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "order_confirmation",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "body_data": {
      "1": "John",
      "2": "Premium Plan",
      "3": "99"
    }
  }'
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const response = await fetch("https://server.waplify.io/api/v1/messages/send", {
  method: "POST",
  headers: {
    "Authorization": "Bearer wapl_your_api_key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    template_name: "order_confirmation",
    contact_phone: "911234567890",
    contact_name: "John Doe",
    body_data: { "1": "John", "2": "Premium Plan", "3": "99" },
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
    "https://server.waplify.io/api/v1/messages/send",
    headers={"Authorization": "Bearer wapl_your_api_key"},
    json={
        "template_name": "order_confirmation",
        "contact_phone": "911234567890",
        "contact_name": "John Doe",
        "body_data": {"1": "John", "2": "Premium Plan", "3": "99"},
    },
)

print(response.json())
```

</TabItem>
</Tabs>

### Template with text header variables

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "daily_report",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "header_data": {
      "1": "Daily Checkup"
    },
    "body_data": {
      "1": "Rahul"
    }
  }'
```

### Template with image header

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "promo_image",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "body_data": {
      "1": "John",
      "2": "50%"
    },
    "media_url": "https://example.com/promo-banner.png"
  }'
```

### Template with video header

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "product_video",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "body_data": {
      "1": "John"
    },
    "media_url": "https://example.com/product-demo.mp4"
  }'
```

### Template with document header

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "template_name": "invoice_template",
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "body_data": {
      "1": "John"
    },
    "media_url": "https://example.com/invoice-june.pdf",
    "filename": "Invoice June 2024.pdf"
  }'
```

## Success response

```json
{
  "status": "success",
  "message": "Message sent successfully",
  "message_id": "wamid.HBgNOTE4MDMxMjM0NTY3OA==",
  "contact_id": "507f1f77bcf86cd799439012",
  "template_name": "order_confirmation",
  "timestamp": "2024-06-15T10:00:00Z"
}
```

| Field | Description |
|-------|-------------|
| `message_id` | WhatsApp's message ID — use this to track delivery via [webhooks](/api/webhooks/overview) |
| `contact_id` | The contact's ID in Waplify (created automatically if new) |
| `timestamp` | When the message was accepted (ISO 8601 format) |

:::caution "Success" means accepted, not delivered
A `"status": "success"` response does **not** mean the message has been delivered to the contact's phone. It only means **WhatsApp has accepted your message** and will attempt to deliver it.

**What happens after a successful response:**

1. **API returns `success`** → WhatsApp accepted the message
2. **`message.sent`** webhook → WhatsApp started processing the message
3. **`message.delivered`** webhook → Message reached the contact's phone
4. **`message.read`** webhook → Contact opened and read the message

If delivery fails at any point, you receive a **`message.failed`** webhook with the error details.

**To track actual delivery**, set up [webhooks](/api/webhooks/overview) and listen for the `message.delivered` event. Do not assume a `success` API response means the message was delivered.
:::

## Error responses

### Missing template variables
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Missing body variables in 'body_data': 2, 3"
}
```

### Template not approved
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Template 'my_template' is not approved. Status: PENDING"
}
```

### Template not found
```json
// 404 Not Found
{
  "error": "not_found",
  "message": "Template 'nonexistent_template' not found"
}
```

### Media required but not provided
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Media URL is required for this template"
}
```

### Invalid phone number
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Invalid phone number format"
}
```

## Media file limits

| Type | Max Size | Accepted Formats |
|------|----------|------------------|
| Image | 5 MB | JPEG, PNG |
| Video | 16 MB | MP4 |
| Document | 100 MB | PDF, DOC, DOCX, PPT, PPTX, TXT |
