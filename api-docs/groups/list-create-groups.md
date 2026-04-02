---
title: List & Create Groups
description: List all contact groups or create a new group
sidebar_position: 1
---

# List Contact Groups

Retrieve a paginated list of contact groups in your account.

```
GET /api/v1/groups/
```

## Query parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | number | No | 1 | Page number |
| `limit` | number | No | 20 | Groups per page (max 100) |
| `search` | string | No | — | Search by group name or description |

## Example request

```bash
curl -X GET "https://server.waplify.io/api/v1/groups/?page=1&limit=20" \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "groups": [
    {
      "id": "507f1f77bcf86cd799439050",
      "name": "VIP Customers",
      "description": "High-value customers",
      "tags": ["vip"],
      "contact_count": 42,
      "created_at": "2024-06-15T10:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 20
}
```

---

# Create Contact Group

Create a new contact group. Group names must be unique within your account.

```
POST /api/v1/groups/
```

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Group name (must be unique) |
| `description` | string | No | Group description |
| `tags` | array | No | List of tags |
| `contact_ids` | array | No | Contact IDs to add to the group immediately |
| `waba_phone_id` | string | No | WhatsApp Business Account phone ID |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/groups/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "VIP Customers",
    "description": "High-value customers",
    "tags": ["vip"],
    "contact_ids": ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439013"]
  }'
```

## Success response (201 Created)

```json
{
  "status": "success",
  "message": "Contact group created successfully",
  "group": {
    "id": "507f1f77bcf86cd799439050",
    "name": "VIP Customers",
    "description": "High-value customers",
    "tags": ["vip"],
    "contact_count": 2,
    "created_at": "2024-06-15T10:00:00Z"
  }
}
```
