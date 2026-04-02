---
title: Flow Builder Guide
description: Learn how to use the visual flow builder to create automated conversations
sidebar_position: 2
---

## What is the Flow Builder?

The Flow Builder is a visual, drag-and-drop tool for designing automated WhatsApp conversations. You build flows by placing **nodes** (message blocks) on a canvas and connecting them with lines to define the conversation path.

## How to use it

### Understanding the builder interface

When you open the Flow Builder, you will see:

- **Canvas** — the main area where you place and connect nodes
<!-- screenshot: Flow Builder canvas with nodes and connections -->
- **Sidebar** — on the left, showing available node types you can drag onto the canvas
- **Toolbar** — at the top, with save, publish, and simulation options

### Building a flow step by step

1. **Start with the Start Node** — every flow begins with a Start Node that is already on the canvas
2. **Add nodes** — drag node types from the sidebar onto the canvas:
   - **Message** — send a text message
   - **Text Button** — show a message with button options
   - **Media Button** — show an image/video with buttons
   - **List** — show an interactive list menu
   - **Ask** — ask the customer for input
   - **Condition** — branch based on the customer's reply
   - **API** — call an external API
   (See [Flow Node Types](./flow-node-types.md) for details on each)
<!-- screenshot: Sidebar showing all available node types -->
3. **Connect nodes** — drag a line from one node's output to another node's input to define the conversation flow
4. **Configure each node** — click on a node to set its message content, button labels, or other settings
<!-- screenshot: Node configuration panel -->
5. **Set trigger keywords** — define what words customers can send to start this flow
6. **Save** your work regularly

### Testing your flow with simulation

1. Click the **Simulate** button in the toolbar
<!-- screenshot: Simulation modal showing a test conversation -->
2. A test chat window opens where you can interact with your flow as if you were a customer
3. Type messages to test different paths and make sure the flow works as expected
4. Fix any issues, then close the simulation and save

### Publishing your flow

1. Make sure all nodes are connected and configured
2. Click **Publish** in the toolbar
3. Set your **trigger keywords** (e.g., "hello", "menu", "help")
4. The flow is now live and will respond to matching messages from customers

## Tips & best practices

- **Plan before building** — sketch your conversation flow on paper first to avoid confusion on the canvas
- **Keep it simple** — shorter flows with 5-10 nodes work better than complex ones with 30+ nodes
- **Always test** — use the simulation feature before publishing to catch errors
- **Use descriptive names** for your flows and nodes so they are easy to manage
- **Save frequently** — the builder warns you if you have unsaved changes, but save regularly just in case
- You can **zoom in and out** on the canvas and **pan** by dragging the background

## Frequently asked questions

### Can I edit a published flow?

Yes. You can open a published flow, make changes, and save. The updated version will take effect immediately.

### What if I make a mistake?

You can undo changes, delete nodes, or disconnect lines. If things get too messy, you can always start a new flow.

### Is there a limit on how many nodes a flow can have?

There is no strict limit, but keeping flows under 15-20 nodes is recommended for maintainability and good customer experience.

### Can I duplicate a flow?

Currently, you would need to create a new flow and rebuild it. Consider saving a draft as a template for similar flows.

### What happens if a customer sends a message that doesn't match any button?

The flow may end or the customer may see an error message, depending on how you designed the flow. Use the **Condition** node to handle unexpected inputs gracefully.
