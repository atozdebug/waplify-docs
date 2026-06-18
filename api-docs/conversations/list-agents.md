---
title: List Agents
description: List the team members you can assign conversations to
sidebar_position: 1
---

# List Agents

List the agents (team members) in your organisation. Use this to discover who you can hand a conversation to — each agent's `user_id` is what you pass to [Assign Conversation](./assign-conversation.md).

```
GET /api/v1/agents/
```

:::caution Keep the trailing slash
The path is `/api/v1/agents/` **with a trailing slash**. Without it the server issues a redirect, and some HTTP clients drop the `Authorization` header when they follow a redirect — which looks like a `401`.
:::

## Query parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | number | No | 1 | Page number (starts at 1) |
| `limit` | number | No | 50 | Agents per page (max 100) |
| `role` | string | No | — | Filter by role: `owner`, `admin`, `manager`, or `agent` |
| `status` | string | No | `active` | Filter by membership status: `active` or `deactivated` |
| `search` | string | No | — | Case-insensitive match on name or email (max 100 chars) |

## Example request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X GET "https://server.waplify.io/api/v1/agents/?page=1&limit=50" \
  -H "Authorization: Bearer wapl_your_api_key"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const response = await fetch(
  "https://server.waplify.io/api/v1/agents/?page=1&limit=50",
  { headers: { Authorization: "Bearer wapl_your_api_key" } }
);

const data = await response.json();
console.log(data.agents);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.get(
    "https://server.waplify.io/api/v1/agents/",
    headers={"Authorization": "Bearer wapl_your_api_key"},
    params={"page": 1, "limit": 50},
)

print(response.json()["agents"])
```

</TabItem>
</Tabs>

## Example response

```json
{
  "status": "success",
  "agents": [
    {
      "user_id": "665f1c2e8a1b2c3d4e5f6a7b",
      "full_name": "Priya Sharma",
      "email": "priya@acme.com",
      "role": "agent",
      "status": "active"
    },
    {
      "user_id": "665f1c2e8a1b2c3d4e5f6a7c",
      "full_name": "Rahul Verma",
      "email": "rahul@acme.com",
      "role": "admin",
      "status": "active"
    }
  ],
  "total": 2,
  "page": 1,
  "limit": 50
}
```

## Agent fields

| Field | Type | Description |
|-------|------|-------------|
| `user_id` | string | The agent's user ID. **Pass this as `user_id` when assigning a conversation.** |
| `full_name` | string | Display name |
| `email` | string | Email address |
| `role` | string | `owner`, `admin`, `manager`, or `agent` |
| `status` | string | `active` or `deactivated` |

The `agents` array is filtered, then sorted by name, then paginated. `total` is the full count matching your filter (not just the current page).

## Errors

| Status | When |
|--------|------|
| 400 | Invalid `role` or `status` filter value, or the key has no organisation (a legacy solo account with no team) |
| 401 | Invalid or missing API key |
| 429 | Rate limit exceeded |
