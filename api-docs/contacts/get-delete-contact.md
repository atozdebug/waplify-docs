---
title: Get & Delete Contact
description: Retrieve or delete a single contact by ID
sidebar_position: 3
---

# Get Contact

Retrieve a single contact by their ID.

```
GET /api/v1/contacts/{contact_id}
```

## Example request

```bash
curl -X GET https://server.waplify.io/api/v1/contacts/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "contact": {
    "id": "507f1f77bcf86cd799439012",
    "first_name": "Jane",
    "last_name": "Smith",
    "phone_number": "911234567890",
    "email": "jane@example.com",
    "company": "Acme Corp",
    "tags": ["vip"],
    "opted_in": true,
    "source": "api",
    "created_at": "2026-06-15T10:00:00Z"
  }
}
```

---

# Delete Contact

Delete a contact by their ID. This is a soft delete — the contact is deactivated but not permanently removed.

```
DELETE /api/v1/contacts/{contact_id}
```

## Example request

```bash
curl -X DELETE https://server.waplify.io/api/v1/contacts/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer wapl_your_api_key"
```

## Example response

```json
{
  "status": "success",
  "message": "Contact deleted successfully",
  "contact_id": "507f1f77bcf86cd799439012"
}
```

## Errors

These apply to both the Get and Delete operations above.

| Status | When |
|--------|------|
| 401 | Invalid or missing API key |
| 404 | No contact exists with the given ID |
| 429 | Rate limit exceeded |
