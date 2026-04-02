---
title: Create Contact
description: Create a new contact in your Waplify account
sidebar_position: 2
---

# Create Contact

Create a new contact. If a contact with the same phone number already exists, the request will return an error.

```
POST /api/v1/contacts/
```

## Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone_number` | string | Yes | Phone number with country code, without `+` (e.g., `911234567890`) |
| `first_name` | string | Yes | First name |
| `last_name` | string | No | Last name |
| `email` | string | No | Email address |
| `company` | string | No | Company name |
| `tags` | array | No | List of tag strings (e.g., `["vip", "newsletter"]`) |
| `waba_phone_id` | string | No | WhatsApp Business Account phone ID |

## Example request

```bash
curl -X POST https://server.waplify.io/api/v1/contacts/ \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "911234567890",
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane@example.com",
    "company": "Acme Corp",
    "tags": ["vip", "newsletter"]
  }'
```

## Success response (201 Created)

```json
{
  "status": "success",
  "message": "Contact created successfully",
  "contact": {
    "id": "507f1f77bcf86cd799439012",
    "first_name": "Jane",
    "last_name": "Smith",
    "phone_number": "911234567890",
    "email": "jane@example.com",
    "company": "Acme Corp",
    "tags": ["vip", "newsletter"],
    "opted_in": true,
    "source": "api",
    "created_at": "2024-06-15T10:00:00Z"
  }
}
```

:::info
Contacts created via the API have their `source` field set to `api` automatically.
:::
