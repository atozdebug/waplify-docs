---
title: Campaign Stats
description: Fetch aggregate delivery stats for a campaign
sidebar_position: 3
---

# Campaign Stats

Return aggregate per-contact delivery stats for a campaign, covering every lifecycle state (sent, delivered, read, clicked, failed, replied).

**GET** `/api/v1/campaigns/{campaign_id}/stats`

Poll this endpoint after calling [Send Campaign](./send-campaign.md) to track rollout progress, or check stats on completed campaigns for reporting.

## Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `campaign_id` | string | Campaign ID returned from [Create Campaign](./create-campaign.md) |

## Example request

```bash
curl -X GET https://server.waplify.io/api/v1/campaigns/507f1f77bcf86cd799439060/stats \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Success response

```json
{
  "status": "success",
  "campaign_id": "507f1f77bcf86cd799439060",
  "name": "Summer Sale Blast",
  "campaign_status": "completed",
  "total_contacts": 2000,
  "sent_count": 1998,
  "delivered_count": 1932,
  "read_count": 1204,
  "clicked_count": 312,
  "failed_count": 2,
  "replied_count": 41,
  "success_count": 1998,
  "created_at": "2024-06-15T10:00:00Z",
  "scheduled_at": null,
  "started_at": "2024-06-15T10:05:00Z",
  "completed_at": "2024-06-15T10:45:00Z"
}
```

## Response fields

| Field | Type | Description |
|-------|------|-------------|
| `campaign_id` | string | Campaign ID |
| `name` | string | Campaign name |
| `campaign_status` | string | Lifecycle: `draft`, `scheduled`, `running`, `completed`, `cancelled`, `failed` |
| `total_contacts` | number | Total contacts targeted |
| `sent_count` | number | Contacts the message was sent to (WhatsApp accepted) |
| `delivered_count` | number | Contacts who received the message on their phone |
| `read_count` | number | Contacts who read the message |
| `clicked_count` | number | Contacts who clicked a CTA (URL / quick-reply button) |
| `failed_count` | number | Contacts for whom sending failed |
| `replied_count` | number | Contacts who replied |
| `success_count` | number | `total_contacts - failed_count` (shortcut for "reached the pipeline successfully") |
| `created_at` | string | When the campaign was created |
| `scheduled_at` | string\|null | Scheduled send time (if scheduled) |
| `started_at` | string\|null | Actual send start time |
| `completed_at` | string\|null | When the worker finished dispatching |

## Funnel interpretation

```
total_contacts
    ↓
sent_count        ← accepted by WhatsApp
    ↓
delivered_count   ← reached the phone
    ↓
read_count        ← contact opened the message
    ↓
clicked_count     ← contact clicked a button
```

`failed_count` counts contacts who dropped out at any point (send rejected, number unreachable, etc.). `replied_count` counts contacts who sent a reply back — use it with the `message.reply` webhook for real-time tracking.

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

:::tip Polling vs. webhooks
Stats update continuously as the background worker processes contacts. Poll every 30–60 seconds for coarse progress, but use [webhooks](/api/webhooks/overview) (`message.sent`, `message.delivered`, `message.read`, `message.failed`) to react to individual message events in real time.
:::
