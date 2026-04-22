---
title: Send Campaign
description: Dispatch a draft campaign — runs prechecks and queues the background sender
sidebar_position: 2
---

# Send Campaign

Run prechecks on a draft campaign and enqueue it for sending via the background worker. The worker sends messages to every contact targeted by the campaign; track progress with [Campaign Stats](./campaign-stats.md).

**POST** `/api/v1/campaigns/{campaign_id}/send`

This endpoint is **asynchronous** — it returns `202 Accepted` as soon as the campaign is queued. Actual delivery happens in the background. Use webhooks (`message.sent`, `message.delivered`, `message.read`, `message.failed`) to monitor individual messages.

:::info Scheduled campaigns
If the campaign was created with `scheduled_at`, it auto-sends at that time — you do **not** need to call this endpoint. Only call this for `draft` campaigns.
:::

## Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `campaign_id` | string | Campaign ID returned from [Create Campaign](./create-campaign.md) |

## Request body

No body required.

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/campaigns/507f1f77bcf86cd799439060/send \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Success response (202 Accepted)

```json
{
  "status": "accepted",
  "message": "Campaign send queued and will run in background",
  "campaign_id": "507f1f77bcf86cd799439060",
  "task_id": "f5a1f9d4-2c5c-4c9f-9d1b-3e2d1a1f9d4f",
  "timestamp": "2024-06-15T10:00:00Z"
}
```

| Field | Description |
|-------|-------------|
| `task_id` | Background worker task ID (for internal tracing) |
| `status` | `accepted` — the campaign has been queued, not delivered |

## Error responses

### Campaign not found
```json
// 404 Not Found
{
  "error": "not_found",
  "message": "Campaign not found"
}
```

### Invalid campaign ID
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Invalid campaign_id"
}
```

### Precheck failed
If the underlying template is no longer approved, media is missing, the WhatsApp account is inactive, or the user has insufficient wallet credits, the precheck returns a 400 with a descriptive message.

```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "Campaign cannot be sent: template is not APPROVED"
}
```

## What happens next

1. API returns `202` — your campaign is queued
2. The background worker starts sending messages
3. For each recipient, webhooks fire as WhatsApp processes the message: `message.sent` → `message.delivered` → `message.read`
4. [Campaign Stats](./campaign-stats.md) reflect real-time counts as messages move through the pipeline
5. When the worker finishes, the campaign's `status` becomes `completed`

:::tip Monitoring delivery
Set up [webhooks](/api/webhooks/overview) to get push notifications for every message. Polling [Campaign Stats](./campaign-stats.md) works for batch summaries but webhooks are the only way to react to individual message events in real time.
:::
