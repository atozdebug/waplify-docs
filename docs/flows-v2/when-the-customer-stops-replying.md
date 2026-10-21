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
2. Find **When the customer stops replying** and switch it on. The settings appear as a timeline you read from top to bottom, in the order things happen.
   <!-- screenshot: the When the customer stops replying timeline switched on -->
3. Under **Your bot asks a question**, choose how long the bot waits, for example **No answer for 2 hours**.
4. The **Send a reminder** card shows the message the bot sends. Click **Edit** to change it. The bot sends just this message. Your question, with its buttons, stays right above it in the chat, so the customer can still answer it.
5. To remind a second time, click **Add another reminder**. Each reminder has its own wait and its own message. To send no reminder at all, remove it with the bin icon.
6. Under the last reminder, choose how long to wait before closing, for example **Still no answer for 3 hours**.
7. The **Say goodbye and close** card shows the goodbye message. Click **Edit** to change it, or leave it empty to close without a message.
8. Under **Then**, choose what happens to the chat:
   - **Keep the chat open**: nothing changes in your inbox.
   - **Mark the chat as resolved**: the chat moves to Resolved.
   - **Assign the chat to someone**: a teammate gets it, using the same choices as [handing off to a human](./handing-off-to-a-human.md).
9. Optionally switch on **Tag the contact "No reply"**, so you can find these people later.
10. Check the sentence at the bottom. It sums up your choices in plain words, for example *"Reminder after 2 hours, chat closes after 5 hours."*
11. Click **Save Changes**.

### Add buttons to a reminder

Click **Edit** on a reminder, then **Add button** (up to 3 on each reminder). Give each button your own name, up to 20 characters, and choose what it does:

- **Ask the question again**: the bot sends its question once more.
- **Talk to a person**: the bot replies "Thanks! Someone from our team will reply soon." and gives the chat to your team. Right under the button, choose who gets the chat. If **Then** is set to **Assign the chat to someone**, the button uses that same choice.
- **End the chat**: the bot says goodbye and closes the chat.
- **Go to a step**: only in a flow's own settings. The bot carries on from the step you pick, so you can build anything there: an offer, a picture, more questions. The step does not need to be connected to Start.

For example, use **Yes** with "Ask the question again" and **No thanks** with "End the chat". Each reminder keeps its own buttons, so a second reminder can offer different choices from the first.

<!-- screenshot: reminder with two buttons on a phone -->

### Change it for one flow

1. Open the flow and click **Settings** at the top of the builder.
2. Pick **No reply** in the menu on the left, then choose one:
   - **Use the business setting** (the default). It shows what your business setting is, with a link to change it.
   - **Off for this flow**
   - **Custom for this flow**, which shows the same timeline as above, plus the **Go to a step** button action
   <!-- screenshot: Flow settings with the When the customer stops replying section -->
3. Save the flow.

### Choose what happens when a flow ends

In the same **Settings** window, **When it ends** decides what happens to the chat after the last step of the flow: keep it open, mark it as resolved, or assign it to someone.

### See it in action

Open a flow's activity (**View sessions**) and pick a conversation. You will see **Reminder sent** and **Closed after no reply** in its timeline, and **Ended: Customer did not reply** at the top.
<!-- screenshot: conversation timeline showing Reminder sent and Closed after no reply -->

## Good to know

- **Any reply resets the clock.** As soon as the customer answers, the reminders start again from zero at the next question.
- **Everything happens within 23 hours.** WhatsApp only lets a business send normal messages for 24 hours after the customer's last message, so all the waits in the timeline together can add up to 23 hours at most. Waplify keeps reminders and the goodbye inside that time. If the window has already closed, the bot closes the chat quietly without sending anything.
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

### What if the customer taps a reminder button after the chat closed?

**Talk to a person** still hands the chat to your team. The other buttons are treated like a normal message.

### Does the reminder cost anything extra?

Reminders and the goodbye are normal replies inside WhatsApp's 24-hour customer service window. Waplify never sends them after that window closes.
