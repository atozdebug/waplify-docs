---
title: Get, Delete & Manage Members
description: Get or delete a group, and add or remove contacts from groups
sidebar_position: 2
---

# Get Contact Group

Retrieve a single group by its ID.

```
GET /api/v1/groups/{group_id}
```

## Example response

```json
{
  "status": "success",
  "group": {
    "id": "507f1f77bcf86cd799439050",
    "name": "VIP Customers",
    "description": "High-value customers",
    "tags": ["vip"],
    "contact_count": 42,
    "created_at": "2024-06-15T10:00:00Z"
  }
}
```

---

# Delete Contact Group

Delete a group. The contacts inside the group are **not** deleted — they remain in your account.

```
DELETE /api/v1/groups/{group_id}
```

## Example response

```json
{
  "status": "success",
  "message": "Contact group deleted successfully",
  "group_id": "507f1f77bcf86cd799439050"
}
```

---

# Add Contacts to Group

Add one or more contacts to an existing group. Contacts already in the group are silently skipped.

```
POST /api/v1/groups/{group_id}/contacts
```

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_ids` | array | Yes | Array of contact IDs to add |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/groups/507f1f77bcf86cd799439050/contacts \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_ids": ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439013"]
  }'
```

## Example response

```json
{
  "status": "success",
  "message": "2 contact(s) added to group",
  "group_id": "507f1f77bcf86cd799439050",
  "contact_ids": ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439013"]
}
```

---

# Remove Contacts from Group

Remove one or more contacts from a group. The contacts are **not** deleted from your account — they are only removed from this group.

```
DELETE /api/v1/groups/{group_id}/contacts
```

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_ids` | array | Yes | Array of contact IDs to remove |

## Example request

```bash
curl -X DELETE https://server.waplify.io/api/v1/groups/507f1f77bcf86cd799439050/contacts \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_ids": ["507f1f77bcf86cd799439012"]
  }'
```

## Example response

```json
{
  "status": "success",
  "message": "1 contact(s) removed from group",
  "group_id": "507f1f77bcf86cd799439050",
  "contact_ids": ["507f1f77bcf86cd799439012"]
}
```
