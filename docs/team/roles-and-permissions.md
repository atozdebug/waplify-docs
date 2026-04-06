---
title: Roles & Permissions
description: Learn the difference between Owner, Admin, and Agent roles and what each can access in Waplify
sidebar_position: 2
keywords: [WhatsApp team roles, Waplify permissions, team access control, WhatsApp agent roles]
---

## What are Roles & Permissions?

Every team member in Waplify has a role that determines what they can see and do. This helps you control access — for example, support agents can reply to chats but cannot delete campaigns or manage billing.

## How to use it

### Available roles

| Role | Description |
|------|-------------|
| **Owner** | The person who created the workspace. Full access to everything, including billing and team management. Cannot be removed. |
| **Admin** | Full access to all features, similar to the Owner. Can manage team members, campaigns, contacts, settings, and billing. |
| **Manager** | Can create and manage campaigns, contacts, templates, and chat. Cannot manage team members or billing. |
| **Agent** | Focused on chat and customer support. Can view campaigns and contacts but has limited editing access. |

### Permission matrix

| Feature | Owner | Admin | Manager | Agent |
|---------|-------|-------|---------|-------|
| Dashboard | Full | Full | Full | View |
| Campaigns — create & send | Full | Full | Full | View only |
| Contacts — add & edit | Full | Full | Full | View only |
| Templates — manage | Full | Full | Full | View only |
| Chat — send messages | Full | Full | Full | Full |
| Flows — create & manage | Full | Full | Full | View only |
| Team — invite & manage | Full | Full | No | No |
| Settings — account | Full | Full | View | No |
| Billing & subscription | Full | Full | No | No |
| Developer tools ([API/webhooks](/api/overview)) | Full | Full | View | No |

### Assigning roles

Roles are assigned when you invite a team member. You can change a member's role at any time from the **Team** page (see [Managing Your Team](./managing-your-team.md)).

## Tips & best practices

- **Use the principle of least privilege** — give each person only the access they need for their job
- **Agents** are ideal for customer support staff who primarily use the chat inbox
- **Managers** work well for marketing team members who create campaigns and manage contacts
- **Admins** should be trusted team members who need full control
- Review roles quarterly to make sure they still match each person's responsibilities

## Frequently asked questions

### Can I create custom roles?

Currently, Waplify offers four predefined roles (Owner, Admin, Manager, Agent). Custom roles are not available yet.

### Can an Agent create campaigns?

No. Agents can view existing campaigns but cannot create, edit, or send them. If someone needs campaign access, assign them the Manager or Admin role.

### What if I need someone to handle only billing?

The Admin role includes billing access along with other features. There is no billing-only role. Consider assigning the Admin role with a note about their specific responsibilities.

### Can a Manager invite team members?

No. Only Owners and Admins can invite new team members or manage existing ones.

### Does changing a role take effect immediately?

Yes. When you change a member's role, the new permissions apply immediately. The member may need to refresh their browser to see the updated access.
