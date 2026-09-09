---
title: Contact by Phone Number
description: Get, update, or delete a contact using their phone number instead of a Waplify contact ID
sidebar_position: 4
---

# Contact by Phone Number

Work with a contact using the phone number you already have, without first looking up a Waplify contact ID.

These are the same operations as [Get & Delete Contact](/api/contacts/get-delete-contact), addressed differently.

## Phone number format

The phone number must include the country code and be **8 to 15 digits**, for example `919066666666`. A leading `+` is accepted and stripped.

---

## Get a contact

```
GET /api/v1/contacts/phone/{phone_number}
```

### Example request

```bash
curl https://server.waplify.io/api/v1/contacts/phone/919066666666 \
  -H "Authorization: Bearer wapl_your_api_key"
```

### Success response (200 OK)

```json
{
  "status": "success",
  "message": "Contact retrieved successfully",
  "contact": {
    "id": "6a1f2c9e4b7d8a0c12345678",
    "first_name": "Jane",
    "last_name": "Smith",
    "phone_number": "919066666666",
    "email": "jane@example.com",
    "company": "Acme Corp",
    "website": null,
    "industry": null,
    "address": null,
    "tags": ["vip", "newsletter"],
    "opted_in": true,
    "source": "api",
    "custom_fields": { "location": "Mumbai" },
    "created_at": "2026-08-01T09:15:00"
  }
}
```

---

## Update a contact

```
PUT /api/v1/contacts/phone/{phone_number}
```

Only the fields you send are changed.

| Field | Type | Description |
|-------|------|-------------|
| `phone_number` | string | New phone number. Must not already belong to another contact |
| `first_name` | string | First name |
| `last_name` | string | Last name |
| `email` | string | Email address |
| `company` | string | Company name |
| `website` | string | Website URL |
| `industry` | string | Industry |
| `address` | string | Address |
| `tags` | array | **Replaces** the existing tags entirely |
| `opted_in` | boolean | Opt-in status |
| `custom_fields` | object | **Replaces** the existing custom fields entirely |

:::caution
`tags` and `custom_fields` **replace** rather than merge. Send the complete list you want the contact to end up with, or you will drop values that are already there.

Omit a field (or send `null`) to leave it unchanged. Send an empty string to clear a text field.
:::

### Example request

```bash
curl -X PUT https://server.waplify.io/api/v1/contacts/phone/919066666666 \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "company": "Acme Ltd",
    "tags": ["vip", "newsletter", "renewed"],
    "custom_fields": { "location": "Pune" }
  }'
```

### Success response (200 OK)

Returns the updated contact in the same shape as the GET above.

---

## Delete a contact

```
DELETE /api/v1/contacts/phone/{phone_number}
```

This is a **soft delete**. The contact is removed from your lists; message history is retained.

### Example request

```bash
curl -X DELETE https://server.waplify.io/api/v1/contacts/phone/919066666666 \
  -H "Authorization: Bearer wapl_your_api_key"
```

### Success response (200 OK)

```json
{
  "status": "success",
  "message": "Contact deleted successfully",
  "contact_id": "6a1f2c9e4b7d8a0c12345678",
  "phone_number": "919066666666"
}
```

---

## Errors

| Status | Meaning |
|--------|---------|
| `400` | Phone number is not 8 to 15 digits, or the body failed validation |
| `401` | Missing or invalid API key |
| `404` | No contact with that phone number in your account |
| `409` | On update: the new `phone_number` already belongs to another contact |

## Notes

- `custom_fields` keys are matched against your organisation's custom field definitions. Unknown keys are ignored rather than rejected. See [Custom Fields](/docs/contacts/custom-fields).
- Timestamps are UTC.
