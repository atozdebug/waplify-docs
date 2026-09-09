---
title: Group Members by Phone Number
description: Add or remove contacts from a group using phone numbers instead of Waplify contact IDs
sidebar_position: 3
---

# Group Members by Phone Number

Add or remove people from a contact group using the phone numbers you already have, without looking up Waplify contact IDs first.

Both endpoints accept a **list**, so you can move many people in one call.

Each phone number must include the country code and be **8 to 15 digits**, for example `919066666666`.

---

## Add contacts to a group

```
POST /api/v1/groups/{group_id}/contacts/phone
```

### Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone_numbers` | array | Yes | One or more phone numbers with country code. At least one required |

### Example request

```bash
curl -X POST https://server.waplify.io/api/v1/groups/6a1f2c9e4b7d8a0c12345678/contacts/phone \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_numbers": ["919066666666", "919055555555", "919044444444"]
  }'
```

### Success response (200 OK)

```json
{
  "status": "success",
  "message": "2 contacts added to the group",
  "group_id": "6a1f2c9e4b7d8a0c12345678",
  "phone_numbers": ["919066666666", "919055555555", "919044444444"],
  "added": ["919066666666"],
  "already_in_group": ["919055555555"],
  "not_found": ["919044444444"],
  "removed": []
}
```

---

## Remove contacts from a group

```
DELETE /api/v1/groups/{group_id}/contacts/phone
```

Removes them from the group. **The contacts themselves are not deleted.**

### Example request

```bash
curl -X DELETE https://server.waplify.io/api/v1/groups/6a1f2c9e4b7d8a0c12345678/contacts/phone \
  -H "Authorization: Bearer wapl_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_numbers": ["919066666666"]
  }'
```

### Success response (200 OK)

```json
{
  "status": "success",
  "message": "1 contact removed from the group",
  "group_id": "6a1f2c9e4b7d8a0c12345678",
  "phone_numbers": ["919066666666"],
  "removed": ["919066666666"],
  "added": [],
  "already_in_group": [],
  "not_found": []
}
```

---

## Reading the response

The response tells you what happened to **each** number rather than failing the whole call:

| Field | Meaning |
|-------|---------|
| `added` | Newly added to the group |
| `removed` | Removed from the group |
| `already_in_group` | Was already a member, so nothing changed |
| `not_found` | No contact with that phone number in your account |

A number in `not_found` is the one to act on: create the contact first with [Create Contact](/api/contacts/create-contact), then add it.

## Errors

| Status | Meaning |
|--------|---------|
| `400` | `phone_numbers` empty, or a number is not 8 to 15 digits |
| `401` | Missing or invalid API key |
| `404` | Group not found in your account |
