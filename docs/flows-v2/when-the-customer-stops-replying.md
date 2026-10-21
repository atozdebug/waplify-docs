---
title: When the Customer Stops Replying
description: Let your chatbot remind a customer who goes quiet, then close the chat on its own, with one setting for every flow
sidebar_position:
keywords: [WhatsApp chatbot reminder, chatbot follow up no reply, close chatbot conversation, WhatsApp bot timeout, inactive customer]
---

## What is "When the customer stops replying"?

Sometimes a customer starts chatting with your bot, gets a question, and then goes quiet. Instead of waiting forever, your bot can send a friendly reminder, and if there is still no answer, say goodbye and close the chat.

You set this up **once** for your whole business. It works on every question your chatbots ask, so you never have to add anything to each step. A flow can still use its own settings when it needs to.

## How to use it

### Turn it on for your business

1. Go to **Settings > Inbox & routing**.
2. Find **When the customer stops replying** and switch it on.
   <!-- screenshot: the When the customer stops replying card switched on -->
3. Choose how many **Reminders** to send: none, once or twice.
4. Choose **Remind after**: how long the bot waits before reminding.
5. Edit the **Reminder message** if you like. The bot sends just this message. Your question, with its buttons, stays right above it in the chat, so the customer can still answer it.
6. Choose **Close if still no reply after**: how long the bot waits after the last reminder.
7. Edit the **Goodbye message**, or leave it empty to close without a message.
8. Under **Then**, choose what happens to the chat:
   - **Keep the chat open**: nothing changes in your inbox.
   - **Mark the chat as resolved**: the chat moves to Resolved.
   - **Assign the chat to someone**: a teammate gets it, using the same choices as [handing off to a human](./handing-off-to-a-human.md).
9. Optionally switch on **Tag the contact "No reply"**, so you can find these people later.
10. Click **Save Changes**.

### Change it for one flow

1. Open the flow and click **Settings** at the top of the builder.
2. Under **When the customer stops replying**, pick one:
   - **Use the business setting** (the default)
   - **Off for this flow**
   - **Custom for this flow**, which shows the same options as above
   <!-- screenshot: Flow settings with the When the customer stops replying section -->
3. Save the flow.

### Choose what happens when a flow ends

In the same **Settings** window, **When this flow ends** decides what happens to the chat after the last step of the flow: keep it open, mark it as resolved, or assign it to someone.

### See it in action

Open a flow's activity (**View sessions**) and pick a conversation. You will see **Reminder sent** and **Closed after no reply** in its timeline, and **Ended: Customer did not reply** at the top.
<!-- screenshot: conversation timeline showing Reminder sent and Closed after no reply -->

## Good to know

- **Any reply resets the clock.** As soon as the customer answers, the reminders start again from zero at the next question.
- **Everything happens within 23 hours.** WhatsApp only lets a business send normal messages for 24 hours after the customer's last message. Waplify keeps reminders and the goodbye inside that time. If the window has already closed, the bot closes the chat quietly without sending anything.
- **Your team comes first.** If someone on your team takes over the chat, or it is resolved, the reminders stop.
- **Closing frees the customer.** After the chat is closed, the customer can start any of your flows again with their next message.

## Tips & best practices

- Keep the reminder short and friendly, for example *"Just checking in. Are you still there?"*
- One reminder is usually enough. Two reminders close together can feel pushy.
- Use **Assign the chat to someone** for sales flows, so a person can follow up on a warm lead.
- Use the **"No reply"** tag to send these contacts a campaign later.

## Frequently asked questions

### Do I need to set this up on every question?

No. One setting covers every question in every flow. You only touch a flow if you want it to work differently.

### Which plans include it?

It is available on the Growth and Business plans, on Lifetime plans, and on plans bought before the current pricing. It is not included on Starter.

### Will the bot message someone who already replied?

No. The bot only reminds a customer who has not answered the current question. If they reply, the reminder is cancelled.

### What if the customer replies after the chat was closed?

Their message is handled like any new message: it can start a flow again, or go to your team, depending on your other settings.

### Does the reminder cost anything extra?

Reminders and the goodbye are normal replies inside WhatsApp's 24-hour customer service window. Waplify never sends them after that window closes.
