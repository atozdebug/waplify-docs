---
title: Authentication
description: How to authenticate with the Waplify API using API keys
sidebar_position: 2
---

# Authentication

All API requests require a valid API key. You send it in the `Authorization` header of every request.

## Getting your API key

1. Log in to [app.waplify.io](https://app.waplify.io)
2. Go to **Developers > API**
3. Click **Create API Key** and give it a name
4. Copy the key immediately — it is only shown once

API keys look like this: `wapl_abc123def456...` (always starts with `wapl_`).

## Using your API key

Add it to the `Authorization` header with the word `Bearer` in front:

```
Authorization: Bearer wapl_your_api_key_here
```

:::info What is "Bearer"?
`Bearer` is a standard keyword that tells the server "the next part is my access token." Type it exactly as shown — capital B, followed by a space, then your API key.
:::

**Example:**

```bash
curl -X GET https://server.waplify.io/api/v1/templates/ \
  -H "Authorization: Bearer wapl_your_api_key_here"
```

If the key is missing or invalid, you get a `401 Unauthorized` error:

```json
{
  "detail": "Invalid or expired API key"
}
```

## Rate limiting

Each API key is limited to **100 requests per minute** by default. This prevents accidental overuse.

Every API response includes these headers so you can track your usage:

| Header | Description | Example |
|--------|-------------|---------|
| `X-RateLimit-Limit` | Maximum requests allowed per minute | `100` |
| `X-RateLimit-Remaining` | Requests remaining in the current window | `95` |
| `X-RateLimit-Reset` | Unix timestamp when the window resets | `1718462460` |
| `Retry-After` | Seconds to wait before retrying (only on 429 errors) | `32` |

When you exceed the limit, you get a `429` response:

```json
{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Limit: 100 requests per minute",
  "request_id": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2024-06-15T10:00:32Z"
}
```

**How to handle it:** Wait for the number of seconds in the `Retry-After` header, then retry your request.

## Response headers

Every API response includes these standard headers:

| Header | Description |
|--------|-------------|
| `X-Request-ID` | Unique identifier for this request — useful for debugging |
| `API-Version` | API version (currently `v1`) |
| `X-RateLimit-Limit` | Your rate limit |
| `X-RateLimit-Remaining` | Requests remaining |
| `X-RateLimit-Reset` | When the rate limit window resets |

## Request tracking

You can send your own request ID (UUID v4 format) for tracing:

```bash
curl -X POST https://server.waplify.io/api/v1/messages/send \
  -H "Authorization: Bearer wapl_your_api_key_here" \
  -H "X-Request-ID: 550e8400-e29b-41d4-a716-446655440000" \
  -H "Content-Type: application/json" \
  -d '{ ... }'
```

If you don't send one, Waplify generates a UUID for you. The request ID always appears in the `X-Request-ID` response header and in your [API logs](https://app.waplify.io) in the dashboard.

## Security best practices

- **Never expose your API key** in client-side code (browser JavaScript), public repositories, or URLs
- **Store keys in environment variables** or a secrets manager — not hardcoded in your code
- **Use separate keys** for different integrations (e.g., one for your website, one for your customer management tool) so you can rotate them independently
- **Deactivate unused keys** from the Developers page in your dashboard
- **Monitor your API logs** regularly for unexpected activity
