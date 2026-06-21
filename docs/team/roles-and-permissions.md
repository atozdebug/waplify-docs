---
title: Roles & Permissions
description: A detailed guide to Owner, Admin, Manager, and Agent roles in Waplify — what each can and cannot do, and how to pick the right one
sidebar_position: 2
keywords: [WhatsApp team roles, Waplify permissions, team access control, WhatsApp agent roles, role-based access, RBAC]
---

## What are Roles & Permissions?

Every team member in Waplify has a **role** that controls what they can see and do inside the workspace. Roles help you give each person exactly the access they need — nothing more, nothing less. Support agents can reply to chats, marketing managers can run campaigns, and only the Owner can touch billing.

Waplify offers four fixed roles:

- **Owner** — the person who created the workspace
- **Admin** — a trusted deputy who helps run the business
- **Manager** — runs campaigns, contacts, and templates day to day
- **Agent** — handles customer chats

If a role is not allowed to do something, the corresponding button is hidden in the app. If they somehow try to access it (e.g. via a direct link), Waplify shows a "Permission denied" message and nothing changes in the data.

## Quick-start: which role should I assign?

Pick the role that matches the person's job, not their seniority. Use this quick lookup:

| If the person will… | Assign |
|---------------------|--------|
| Reply to WhatsApp messages from customers | **Agent** |
| Build and send marketing campaigns | **Manager** |
| Run day-to-day operations, manage contacts and templates | **Manager** |
| Manage the whole team and all settings (but not billing) | **Admin** |
| Do everything, including pay the bill | **Owner** (you — not transferable yet) |

Not sure? Start with the **lowest** role that could plausibly do the job. You can always upgrade later — demoting later can feel awkward.

## The four roles in detail

### Owner

**Who it's for:** the person who signed up and pays for the account. There is exactly one Owner per workspace.

**Can do:**
- Everything an Admin can do (see below)
- View and change billing information
- See invoices and payment history
- Upgrade, downgrade, or cancel the plan
- Request refunds

**Cannot do:**
- Leave the workspace without transferring ownership (ownership transfer is on the roadmap)

**Typical person:** business founder, sole proprietor, or finance lead.

**Security note:** the Owner account has the most power. Use a strong password, enable 2FA, and **never share the credentials**. If multiple people need near-full access, promote them to Admin instead.

---

### Admin

**Who it's for:** a co-founder, senior manager, or trusted deputy who runs most of the business but isn't responsible for paying the bill.

**Can do:**
- Everything a Manager can do (see below)
- **Delete** contacts, broadcasts, and templates
- Connect, disconnect, and manage WhatsApp phone numbers
- Edit organisation details (name, logo, timezone, etc.)
- Manage the team — invite members, change roles, deactivate or remove
- Create and edit automation flows
- View API keys and webhook endpoints

**Cannot do:**
- View or change billing, plans, invoices, or payment methods

**Typical person:** co-founder, operations manager, head of marketing.

**Tip:** most workspaces have one or two Admins. Don't hand out Admin to anyone who only needs to do a specific job — use Manager or Agent instead.

---

### Manager

**Who it's for:** marketing, operations, or sales staff who run campaigns and keep the contact database healthy.

**Can do:**
- Reply to customer chats in the inbox
- View, create, and edit contacts
- Import contact lists (CSV)
- Export contact lists
- View broadcasts (past and upcoming)
- Create, schedule, and send broadcasts
- View and create message templates
- View automation flows
- View general settings (but not change them)
- View the team roster

**Cannot do:**
- Delete contacts, broadcasts, or templates (deletion is reserved for Owner/Admin)
- Edit or delete automation flows (view only)
- Connect or disconnect WhatsApp phone numbers
- Edit organisation details
- Invite, deactivate, or change the role of any team member
- View or change billing

**Typical person:** marketing specialist, operations lead, campaign coordinator.

**Tip:** if a Manager needs to remove a contact, either ask an Admin to do it or promote the Manager to Admin permanently.

---

### Agent

**Who it's for:** customer-support representatives who spend most of their day in the chat inbox.

**Can do:**
- View customer chats — how much they see depends on their **view scope**: all conversations, their assigned chats plus the unassigned queue, or only their assigned chats (see below)
- Reply to chats (send WhatsApp messages to customers)
- View the contact list
- Create a new contact (useful when a customer messages for the first time)
- Edit a contact's details
- View available message templates (to use while replying)

**Cannot do:**
- Delete contacts
- Import or export the contact list in bulk
- View, create, or send broadcasts
- Create or delete message templates
- Use or edit automation flows
- Access any settings page
- See the team roster or invite anyone
- See billing or plans

**Typical person:** front-line customer-support rep, helpdesk staff.

**Tip:** Agent is the safest role to hand out freely. Even if an Agent account is compromised, the attacker cannot delete data, send broadcasts to all your customers, or touch billing.

#### Agent view scope

Agents have one extra setting the other roles don't: a **view scope** that controls how much of the inbox they see. There are three options:

| View scope | What the agent sees |
|------------|---------------------|
| **All conversations** | Every conversation in the workspace, like the rest of the team |
| **Assigned + unassigned** (default) | Conversations assigned to them, plus the **Unassigned** queue so they can pick up new chats |
| **Only their assigned chats** | Just the conversations assigned to them — no unassigned queue, and nothing assigned to other agents |

Pick **Only their assigned chats** when you want an agent to focus strictly on their own customers and never see the rest of the team's conversations. With this scope the **Unassigned** tab is hidden, and the agent can't open, search, or reply to a chat that isn't theirs.

You choose the scope when inviting an agent, and you can change it any time from the **Team** page using the **View scope** dropdown on the agent's row. The agent picks up the change the next time they refresh or sign in. Owners, Admins, and Managers always see all conversations — view scope applies only to Agents. See [Working as a Team in the Inbox](../chat/team-inbox.md).

## Full capability matrix

"✓" means the role can do the action. "—" means it cannot. When a role cannot do an action, the button for that action is hidden from them in the app.

| Capability | Owner | Admin | Manager | Agent |
|------------|:-----:|:-----:|:-------:|:-----:|
| **Inbox** | | | | |
| View chats | ✓ | ✓ | ✓ | ✓ |
| Reply to chats | ✓ | ✓ | ✓ | ✓ |
| **Contacts** | | | | |
| View contacts | ✓ | ✓ | ✓ | ✓ |
| Create contacts | ✓ | ✓ | ✓ | ✓ |
| Edit contacts | ✓ | ✓ | ✓ | ✓ |
| Delete contacts | ✓ | ✓ | — | — |
| Import contacts (CSV) | ✓ | ✓ | ✓ | — |
| Export contacts (CSV) | ✓ | ✓ | ✓ | — |
| **Broadcasts (campaigns)** | | | | |
| View broadcasts | ✓ | ✓ | ✓ | — |
| Create broadcast | ✓ | ✓ | ✓ | — |
| Send broadcast | ✓ | ✓ | ✓ | — |
| Schedule broadcast | ✓ | ✓ | ✓ | — |
| Delete broadcast | ✓ | ✓ | — | — |
| **Templates** | | | | |
| View templates | ✓ | ✓ | ✓ | ✓ |
| Create template | ✓ | ✓ | ✓ | — |
| Delete template | ✓ | ✓ | — | — |
| **Automation (flows)** | | | | |
| View flows | ✓ | ✓ | ✓ | — |
| Create / edit flows | ✓ | ✓ | — | — |
| **Settings** | | | | |
| View general settings | ✓ | ✓ | ✓ | — |
| Edit organisation details | ✓ | ✓ | — | — |
| Inbox style & auto-assignment | ✓ | ✓ | — | — |
| Connect / manage WhatsApp numbers | ✓ | ✓ | — | — |
| Billing & plans | ✓ | — | — | — |
| **Team** | | | | |
| View team roster | ✓ | ✓ | ✓ | — |
| Invite members | ✓ | ✓ | — | — |
| Change member roles | ✓ | ✓ | — | — |
| Deactivate / remove members | ✓ | ✓ | — | — |

## Permission categories explained

Each row in the matrix falls into one of these categories:

- **Inbox** — the real-time chat screen where you read and reply to customer WhatsApp messages.
- **Contacts** — your customer database. Contacts can be created one at a time or imported in bulk from a CSV file.
- **Broadcasts (campaigns)** — bulk messages sent to many customers at once, either immediately or on a schedule. Also called "campaigns" in some menus.
- **Templates** — pre-approved message templates from Meta (WhatsApp Business). Required for any broadcast to reach customers outside the 24-hour window.
- **Automation (flows)** — rule-based chatbots and auto-replies. A "flow" listens for a keyword and responds with a sequence of messages.
- **Settings** — workspace-wide configuration: organisation name, timezone, connected phone numbers, API keys.
- **Team** — the people with access to this Waplify workspace, their roles, and invitation history.

## How to use it

### How to invite a team member and pick a role

1. Open **Team** from the sidebar.
2. Click **Invite Member** in the top-right.
3. Enter the person's email address.
4. Pick a role from the dropdown — Admin, Manager, or Agent. You'll see a short summary of that role's capabilities below the dropdown.
5. If you picked **Agent**, choose a **view scope** — *All conversations*, *Assigned + unassigned* (default), or *Only their assigned chats*. See [Agent view scope](#agent-view-scope) above.
6. Click **Send Invite**.

The invited person receives an email with a link. When they click it, they can either:
- sign up with a new password (if they don't have a Waplify account), or
- sign in to their existing Waplify account and join your workspace.

<!-- screenshot: Invite Member dialog with role dropdown open showing the three options -->

### How to change a team member's role

1. Open **Team** from the sidebar.
2. Find the member in the **Members** list.
3. Click the **⋯** (three dots) menu on their row.
4. Under "Change role", pick the new role.

The new role takes effect immediately. The member may need to refresh their browser to see the updated menus.

<!-- screenshot: Team page with the ⋯ dropdown menu open showing "Change role" section -->

### How to deactivate or remove a member

**Deactivate** keeps the account but blocks login. Their chat history and created data stay intact. Use this when someone is on leave or temporarily off the team.

**Remove** is permanent. The member loses access and can only be re-added via a fresh invitation.

1. Open **Team** from the sidebar.
2. Click the **⋯** menu on the member's row.
3. Under "Status", click **Deactivate** (or **Reactivate** if already deactivated).
4. Or under "Danger zone", click **Remove from team**.

Both actions ask for confirmation. Deactivated members are logged out within a few seconds.

### How to see what role you have

Look at the bottom of the sidebar. Your role badge is shown next to your name. If you belong to multiple organisations, the badge shows your role in the **current** organisation — switching orgs may change it.

## Common scenarios

**"I hired a customer-support rep. What role?"**
Agent. They can reply to chats, see and edit contacts, and view templates. They cannot send broadcasts or delete data.

**"My marketing manager needs to run WhatsApp campaigns."**
Manager. They can build, schedule, and send broadcasts, manage contacts and templates, and use imports/exports.

**"I have a trusted co-founder who should help run everything except billing."**
Admin. Admins can manage the team, delete data, and change settings — just not billing.

**"I want an accountant to only view invoices."**
Not possible today. Billing is Owner-only. Forward invoices to your accountant out-of-band.

**"I want a reports-only role for a stakeholder."**
Not available yet. Give them Agent for now; they can view the inbox but not send anything.

**"An employee left the team yesterday."**
Deactivate them immediately. If you're sure they won't return, follow up with Remove.

**"I want to promote an Agent to Manager after a week."**
Open the Team page, click the ⋯ menu on that Agent, and select "Change to Manager". Done.

## Tips & best practices

- **Use the principle of least privilege.** The smallest role that fits the job is usually the right one. You can always promote later.
- **One Owner, one or two Admins.** That's enough for most small businesses. Over-handing Admin defeats the point of having roles.
- **Agents are safe defaults.** Even if compromised, an Agent account cannot delete data, send broadcasts, or touch billing.
- **Review roles every quarter.** People change jobs; so should their access.
- **Deactivate first, remove later.** If in doubt, deactivate — you can reactivate later. Remove is permanent.
- **Protect the Owner account.** Strong password, 2FA enabled, recovery email up to date. It's the highest-risk account in the workspace.
- **Don't share accounts.** Each person gets their own account so chat history and actions are attributable.

## Frequently asked questions

### Can I create custom roles?

Not yet. Waplify offers four fixed roles: Owner, Admin, Manager, and Agent. Custom roles are on the roadmap — let us know what fine-grained role you need and we'll prioritise it.

### Can an Admin access billing?

No. Only the Owner sees billing and plan pages. This is intentional — billing is tied to the person legally responsible for the account.

### Can a Manager delete a contact, broadcast, or template?

No. Managers can create and edit, but only Owners and Admins can delete. Delete is irreversible, so Waplify reserves it for supervisory roles.

### Can an Agent send a broadcast?

No. Agents are focused on one-to-one chat. If someone needs to send broadcasts, assign them Manager or higher.

### Can an Agent import or export contacts?

No. Bulk imports and exports are a Manager-and-above action.

### Can I limit an agent to only their own chats?

Yes. Each agent has a **view scope** setting with three options:

- **All conversations** — they see everything, like the rest of the team.
- **Assigned + unassigned** (default) — they see their own chats plus the shared unassigned queue, so they can pick up new customers.
- **Only their assigned chats** — they see *only* the conversations assigned to them. No unassigned queue, and nothing belonging to other agents.

Pick **Only their assigned chats** for the strictest setting — the Unassigned tab is hidden and the agent can't open or reply to anyone else's chat. Set or change it from the Team page. Owners, admins, and managers always see everything.

### Does changing a role take effect immediately?

Yes. Permissions update within seconds. The member may need to refresh their browser for the sidebar and buttons to reflect their new role.

### What happens when I deactivate a member?

They are logged out immediately and cannot sign back in. Their data (messages they sent, contacts they created) stays intact — only their access is revoked. You can reactivate them later from the same menu.

### Can the Owner transfer ownership to someone else?

Not yet. Ownership transfer is planned for a future release. For now, the Owner seat is tied to the original account.

### Can one person be in multiple workspaces?

Yes. A single Waplify account can belong to multiple organisations, each with its own role. Use the org switcher in the sidebar footer to move between them.

### If I invite the same email as Admin in Org A and Agent in Org B, what do they see?

They see an org switcher in the sidebar. In Org A their badge shows Admin and they have Admin powers. In Org B their badge shows Agent. Permissions are per-organisation — they do not carry across.

### Can someone be both Agent and Manager in the same workspace?

No. A person has exactly one role per workspace. If someone needs a bit more than Agent but not full Manager, assign Manager and talk to them about responsibilities.

### A member says "I clicked delete and nothing happened."

Almost always a permission issue. Check their role — Managers and Agents cannot delete contacts, broadcasts, or templates. Either promote them or have an Owner/Admin do the deletion.

### Why can't I see the "Invite Member" button?

You are probably signed in as a Manager or Agent. Only Owners and Admins can invite. Ask an Owner or Admin to send the invite, or have them promote you first.

### What if the Owner account is lost (e.g. they leave the company)?

Contact Waplify support. We can help recover access or (in limited cases) transfer ownership after verifying business ownership.

---

Need something this page doesn't cover? Check [Managing Your Team](./managing-your-team.md) or email support@waplify.io.
