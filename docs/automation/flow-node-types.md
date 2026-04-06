---
title: Flow Node Types
description: Guide to all flow builder node types — send message, ask question, condition, delay, and more
sidebar_position: 3
keywords: [WhatsApp flow nodes, chatbot node types, flow builder actions, WhatsApp bot triggers]
---

## What are Flow Node Types?

Nodes are the building blocks of a conversational flow. Each node type performs a different action — from sending messages to making decisions. You combine them to create the conversation experience you want.

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

### Ask Node

**Asks the customer for input** — like their name, email, or order number.

- Set the question text (e.g., "What is your name?")
- The customer's reply is saved and can be inserted into later messages in the flow — for example, you can greet them by the name they just typed
- Connect to the next node that processes the response
- Use a **Condition Node** after an Ask Node to send different replies based on what the customer typed

### Condition Node

Creates **logic branches** based on conditions. The flow takes different paths depending on the customer's reply or other data.

- Set conditions (e.g., if the reply contains "yes", go to path A; otherwise, go to path B)
- Connect each condition output to a different node
- Use this to handle different customer responses intelligently
<!-- screenshot: Condition node with branching paths -->

### API Node

Connects to an **external system** (like your website, CRM, or order management tool) to fetch or send data automatically during a conversation.

**Example use cases:**
- A customer types their order number → the API Node looks it up in your system → the next message shows "Your order is out for delivery"
- A customer asks about pricing → the API Node fetches the latest price from your website

**How to set it up:**
- Enter the URL of the external system you want to connect to
- Choose the method: GET (to fetch data) or POST (to send data)
- The response from the external system can be shown to the customer in the next message

:::info
The API Node requires some technical knowledge. If you are not comfortable with APIs, ask your developer or tech-savvy team member to help configure this node. You can build the rest of the flow yourself and just have them set up the API connection.
:::

## Tips & best practices

- **Start simple** — begin with Start → Message → Text Button flows before adding complex nodes like Condition and API. See the [Flow Builder Guide](./flow-builder-guide.md) for a step-by-step walkthrough
- **Use Text Buttons for 2-3 options** and **Lists for 4+ options** — buttons are more visible, but lists scale better
- **Always provide a fallback path** — use Condition nodes to handle unexpected replies gracefully
- **Keep Ask Node responses in mind** — customers may type anything, so be prepared to handle unexpected input
- **Test each path** — use the simulation feature to walk through every possible conversation path
- **Label your nodes clearly** — when your flow gets complex, descriptive node names help you stay organized

## Frequently asked questions

### How many buttons can I add to a Text Button node?

WhatsApp allows up to **3 regular buttons** per message. For quick-reply buttons, you can add up to 10. If you need more visible options at a glance, use a **List Node** instead.

### Can I use data from an Ask Node in later messages?

Yes. The customer's reply to an Ask Node can be referenced in subsequent Message nodes, allowing you to personalize the conversation based on their input.

### What happens if the API Node call fails?

If the external API is unreachable or returns an error, the flow may stop at that node. Consider adding a Condition node after the API call to handle both success and failure scenarios.

### Can I mix different node types in one flow?

Absolutely. Most flows use a combination of Message, Text Button, and Condition nodes. Use whatever combination makes sense for your use case. For inspiration, check out [Conversational Flows](./conversational-flows.md) to see how complete flows come together.

### Is the API Node secure?

API calls are made from Waplify's servers. Make sure you only connect to trusted API endpoints and do not include sensitive data (like passwords) in the API configuration.
