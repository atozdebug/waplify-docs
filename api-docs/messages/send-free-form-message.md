---
title: Send Free-Form Message
description: Send a text or media message outside of templates within the 24-hour window
sidebar_position: 2
---

# Send Free-Form Message

Send a WhatsApp message without using a template — you can type any text or attach any media. This only works within the **24-hour customer service window**, meaning the contact must have sent you a message in the last 24 hours.

**How the 24-hour window works:** When a customer sends you a WhatsApp message, a 24-hour window opens. During this time, you can reply with any content. After 24 hours, the window closes and you must use a [template message](./send-template-message.md) instead.

**POST** `/api/v1/messages/send-message`

:::info Auto-created contacts
If the contact phone number doesn't exist in your Waplify account, the contact will be **created automatically** when you send the message.
:::

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_phone` | string | Yes | Phone number with country code, without `+` |
| `contact_name` | string | No | Contact's name. Defaults to `User #<random>` if omitted |
| `message_type` | string | Yes | One of: `text`, `image`, `video`, `audio`, `document` |
| `message` | string | Required for `text` | Text message content (max 4,096 characters) |
| `media_url` | string | Required for media types | Publicly accessible URL for the media file |
| `caption` | string | No | Caption for image, video, or document (max 1,024 characters) |
| `filename` | string | No | Filename for document attachments |
| `waba_phone_id` | string | No | Which WhatsApp number to send from |

## Examples

### Text message

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send-message \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "911234567890",
    "contact_name": "John Doe",
    "message_type": "text",
    "message": "Hello! How can I help you today?"
  }'
```

### Image message

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send-message \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "911234567890",
    "message_type": "image",
    "media_url": "https://example.com/product-photo.png",
    "caption": "Here is the product you asked about"
  }'
```

### Video message

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send-message \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "911234567890",
    "message_type": "video",
    "media_url": "https://example.com/tutorial.mp4",
    "caption": "Watch this tutorial"
  }'
```

### Audio message

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send-message \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "911234567890",
    "message_type": "audio",
    "media_url": "https://example.com/voice-note.mp3"
  }'
```

### Document message

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send-message \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_phone": "911234567890",
    "message_type": "document",
    "media_url": "https://example.com/report.pdf",
    "caption": "Monthly report attached",
    "filename": "Monthly Report.pdf"
  }'
```

## Success response

```json
{
  "status": "success",
  "message": "Message sent successfully",
  "message_id": "wamid.HBgNOTE4MDMxMjM0NTY3OA==",
  "contact_id": "507f1f77bcf86cd799439012",
  "message_type": "text",
  "timestamp": "2024-06-15T10:00:00Z"
}
```

:::caution "Success" means accepted, not delivered
A `"status": "success"` response means WhatsApp has **accepted** your message — it does not mean the message has been delivered yet. Actual delivery, read, and failure statuses arrive later via [webhooks](/api/webhooks/overview). See [Send Template Message](./send-template-message.md#success-response) for a detailed explanation of the message lifecycle.
:::

## Error responses

:::info Error format note
This endpoint returns errors in a `detail` field (not the `error`/`message` format used by other endpoints). Check for both formats in your error handling code.
:::

### 24-hour window not open
```json
// 403 Forbidden
{
  "detail": "Cannot send free-form message: No inbound message found from this contact. The 24-hour customer service window is not open. Use the template-based /send endpoint instead."
}
```

**What this means:** The contact has never messaged you, or their last message was more than 24 hours ago. Use the [Send Template Message](./send-template-message.md) endpoint instead.

### 24-hour window expired
```json
// 403 Forbidden
{
  "detail": "Cannot send free-form message: The 24-hour customer service window has expired. Last inbound message was at 2024-06-14T08:00:00+00:00. Use the template-based /send endpoint instead."
}
```

**What this means:** The contact did message you, but more than 24 hours have passed since their last message. Use a template message to re-engage them.

### Invalid phone number
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Invalid phone number format"
}
```

### Missing required field
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "message is required when message_type is 'text'"
}
```

## Media file limits

| Type | Max Size | Accepted Formats |
|------|----------|------------------|
| Image | 5 MB | JPEG, PNG |
| Video | 16 MB | MP4 |
| Audio | 16 MB | AAC, MP3, M4A, AMR, OGG |
| Document | 100 MB | PDF, DOC, DOCX, PPT, PPTX, TXT |

:::caution
Free-form messages can only be sent within **24 hours** of the contact's last inbound message. If you need to message a contact who hasn't messaged you recently, use the [Send Template Message](./send-template-message.md) endpoint.
:::
