---
title: Flow Node Types
description: Guide to the building blocks of a Waplify conversational flow — the node types you use to design automated chats
sidebar_position: 3
keywords: [WhatsApp flow nodes, chatbot node types, flow builder actions, WhatsApp bot triggers]
---

## What are Flow Node Types?

Nodes are the building blocks of a conversational flow. Each node type does a different job — sending a message, offering buttons, or presenting a menu. You combine them to create the conversation experience you want.

Every flow begins with a **Start Node**, created automatically. You add the other nodes and connect them on the visual canvas — see the [Flow Builder Guide](./flow-builder-guide.md) for the how-to. The reference below explains what each node type does.

## How to use it

### Start Node

Every flow begins with a **Start Node**. It defines the entry point of your flow.

- **Trigger keywords** — the words a customer sends to start this flow (e.g., "hello", "menu")
- **Trigger patterns** — advanced matching rules for more flexible triggers (your developer can help set these up)
- The Start Node connects to the first node in your conversation

### Message Node

Sends a **text message** to the customer.

- Configure the message text
- Connect the output to the next node in the flow
- Use this for welcome messages, information, or instructions
<!-- screenshot: Message node configuration -->

### Text Button Node

Sends a message with **clickable button options**. The customer taps a button to proceed.

- Set the message text
- Add up to 3 buttons with labels (e.g., "View Menu", "Talk to Agent", "Business Hours")
- Each button connects to a different next node, creating branching paths
<!-- screenshot: Text Button node with multiple button options -->

### Media Button Node

Similar to Text Button, but includes a **media file** (image or video) above the message.

- Upload an image or video
- Add a caption/message
- Add buttons for navigation
- Great for showcasing products or sharing visual information

### List Node

Sends an **interactive list** with multiple sections and items. Customers tap to open the list and select an option.

- Add a message and a button label (e.g., "View Options")
- Create **sections** with multiple **items** (each item has a title and description)
- Each item connects to a different path in the flow
- Use lists when you have more than 3 options (buttons are limited to 3)
<!-- screenshot: List node configuration with sections and items -->

## Tips & best practices

- **Start simple** — a Start Node leading into a single Text Button node that answers one common question is a great first flow. See the [Flow Builder Guide](./flow-builder-guide.md) for a step-by-step walkthrough
- **Use Text Buttons for 2-3 options** and **Lists for 4+ options** — buttons are more visible, but lists scale better
- **Guide customers with buttons and lists** — giving people clear options to tap keeps them on a path your flow can handle, instead of typing something unexpected
- **Test each path** — use the simulation feature to walk through every possible conversation path
- **Label your nodes clearly** — when your flow gets complex, descriptive node names help you stay organized

## Frequently asked questions

### How many buttons can I add to a Text Button node?

WhatsApp allows up to **3 buttons** per message. If you need more options at a glance, use a **List Node** instead — a list can hold many more items.

### When should I use a List node instead of buttons?

Use **Text Button** or **Media Button** nodes when you have 2–3 choices — buttons are big and easy to tap. Switch to a **List Node** when you have 4 or more options, since a list keeps a long menu tidy.

### Do I have to add a Start Node?

No — every flow already has one. The Start Node is created automatically and defines the trigger keywords that launch the flow. You just connect it to your first node.

### Can I mix different node types in one flow?

Absolutely. Most flows combine Message, Text Button, Media Button, and List nodes. Use whatever combination makes sense for your conversation. For inspiration, see [Conversational Flows](./conversational-flows.md).
