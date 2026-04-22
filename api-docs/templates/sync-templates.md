---
title: Sync Templates with Meta
description: Pull the latest template state from Meta into your Waplify account
sidebar_position: 4
---

# Sync Templates with Meta

Trigger a full template sync with Meta across every WhatsApp number linked to your account. Waplify fetches the latest template list from Meta, creates missing templates locally, updates changed ones (e.g., approval status transitions from `PENDING` → `APPROVED`), and removes templates that were deleted on Meta.

**POST** `/api/v1/templates/sync`

Use this after submitting a template via [Create Template](./create-template.md) or [Create Carousel Template](./create-carousel-template.md) to refresh the approval status, or any time you suspect local state is out of date with Meta.

## Request body

No body required.

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/templates/sync \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Success response

```json
{
  "status": "success",
  "message": "Template sync completed",
  "summary": {
    "total_meta_templates": 12,
    "synced": 12,
    "created": 1,
    "updated": 3,
    "skipped": 8,
    "deleted": 0
  }
}
```

| Field | Description |
|-------|-------------|
| `total_meta_templates` | Total templates currently on Meta across your linked WABA numbers |
| `synced` | Templates processed this run |
| `created` | New templates added locally (existed on Meta but not in Waplify) |
| `updated` | Existing templates whose status, body, or components changed |
| `skipped` | Templates with no changes |
| `deleted` | Templates removed locally (no longer on Meta) |

## Error responses

### No WhatsApp numbers linked
```json
// 400 Bad Request
{
  "error": "bad_request",
  "message": "No WhatsApp accounts linked to this user"
}
```

:::tip When to sync
- After you create a template and want to pick up Meta's `APPROVED`/`REJECTED` decision
- After editing a template in the Waplify dashboard (or directly on Meta's Business Manager)
- Periodically (e.g., once per hour) if you keep a local cache of templates
:::
