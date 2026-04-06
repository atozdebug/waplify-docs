---
title: Conversational Flows
description: Automate WhatsApp conversations with drag-and-drop message flows — welcome messages, FAQs, and more
sidebar_position: 1
keywords: [WhatsApp automation, WhatsApp chatbot, automated WhatsApp messages, WhatsApp conversation flow]
---

## What are Conversational Flows?

Conversational Flows let you automate WhatsApp conversations. You design a flow once — with messages, menus, and logic — and it runs automatically whenever a customer sends a trigger keyword. Think of it as a chatbot that handles common questions and tasks without you needing to be online.

## How to use it

### Viewing your flows

1. Go to **Flows** from the sidebar
<!-- screenshot: Flows page showing list of flows -->
2. You will see all your flows with their name, status, and creation date
3. Each flow has a status:
   - **Draft** — still being built, not active
   - **Active** — live and responding to trigger keywords
   - **Archived** — disabled and stored for reference

### Creating a new flow

1. Click **Create Flow** on the Flows page
2. Enter a **flow name** and optional description
3. You will be taken to the **Flow Builder** — a visual drag-and-drop canvas
4. Design your flow using nodes and connections (see [Flow Builder Guide](./flow-builder-guide.md))
5. Click **Save** to save as a draft

### Publishing a flow

1. Open a draft flow
2. Make sure all nodes are connected and configured
3. Set your **trigger keywords** — the words that activate this flow when a customer sends them
4. Click **Publish** to make the flow live
<!-- screenshot: Publish button with trigger keyword settings -->

### Archiving a flow

1. Open an active flow
2. Click **Archive** to deactivate it
3. Archived flows stop responding to messages but are saved for reference
4. You can reactivate an archived flow later

### Deleting a flow

1. On the Flows page, find the flow you want to delete
2. Click the **delete** icon
3. Confirm the deletion

:::caution
Deleting a flow is permanent. Archive flows instead if you might want to use them again later.
:::

## Tips & best practices

- Start with **simple flows** — a welcome message with a few menu options is a great first flow
- Use **specific trigger keywords** to avoid conflicts between flows (e.g., "menu" instead of "hi")
- Test your flow using the **simulation feature** before publishing (see [Flow Builder Guide](./flow-builder-guide.md))
- Keep flows focused on one task — a separate flow for "business hours", "pricing", and "order status" is better than one giant flow
- Review your active flows regularly and update them when your business information changes

## Frequently asked questions

### Can I have multiple active flows at the same time?

Yes. You can have multiple flows active simultaneously. Each flow responds to its own trigger keywords.

### What happens if two flows have the same trigger keyword?

If multiple flows share a trigger keyword, the system will activate one of them. To avoid confusion, make sure each flow has unique trigger keywords.

### Do flows work 24/7?

Yes. Active flows respond to messages automatically at any time, even when you and your team are offline.

### Can customers exit a flow?

Flows are designed to guide customers through a conversation. If a customer sends a message that does not match any expected reply, the flow may end or redirect them.

### Do I need technical knowledge to create flows?

No. The flow builder uses a visual drag-and-drop interface. You can create flows by connecting blocks — no coding required.
