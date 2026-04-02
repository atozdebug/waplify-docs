---
title: List Contacts
description: Retrieve a paginated list of contacts from your account
sidebar_position: 1
---

# List Contacts

Retrieve a paginated list of contacts in your Waplify account. You can search by name, phone number, or email.

```
GET /api/v1/contacts/
```

## Query parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | number | No | 1 | Page number (starts at 1) |
| `limit` | number | No | 20 | Contacts per page (max 100) |
| `search` | string | No | — | Search by name, phone, or email |

## Example request

```bash
curl -X GET "https://server.waplify.io/api/v1/contacts/?page=1&limit=20&search=john" \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "contacts": [
    {
      "id": "507f1f77bcf86cd799439012",
      "first_name": "John",
      "last_name": "Doe",
      "phone_number": "911234567890",
      "email": "john@example.com",
      "company": "Acme Corp",
      "tags": ["vip"],
      "opted_in": true,
      "source": "api",
      "created_at": "2024-06-15T10:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 20
}
```

## Contact fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique contact ID |
| `first_name` | string | First name |
| `last_name` | string | Last name (may be `null`) |
| `phone_number` | string | Phone with country code |
| `email` | string | Email address (may be `null`) |
| `company` | string | Company name (may be `null`) |
| `tags` | array | List of tags |
| `opted_in` | boolean | Whether contact has opted in |
| `source` | string | How the contact was created (`api`, `manual`, `import`, etc.) |
| `created_at` | string | ISO 8601 timestamp |
