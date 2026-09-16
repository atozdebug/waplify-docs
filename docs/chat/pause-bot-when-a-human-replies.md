---
title: Pause Bot When a Human Replies
description: Decide whether your chatbot goes quiet or keeps replying once a teammate is handling a WhatsApp chat, including replies you send from your phone
keywords: [pause WhatsApp chatbot, bot to human handover, stop bot when agent replies, WhatsApp Business app coexistence, take over chat, chatbot and live agent]
---

## What is Pause Bot When a Human Replies?

When your chatbot is talking to a customer and someone from your team steps in, somebody has to decide who answers: the bot, the person, or both. This setting makes that choice for your whole workspace.

- **On:** one owner per chat. Once a chat is assigned to a teammate, or a teammate replies to it from the inbox, the bot stops replying on that chat.
- **Off (the default):** the bot keeps replying, even on chats that are assigned to a teammate. Anyone can still stop the bot on a single chat with **Take over**.

If you also answer customers from the **WhatsApp Business app on your phone**, you can choose whether those replies pause the bot too.

You'll find it under **Settings → Inbox & routing**. Only Owners and Admins can change it.

<!-- screenshot: Settings → Inbox & routing, the "Pause bot when a human replies" card -->

## How to use it

### Turn it on

1. Go to **Settings → Inbox & routing**.
2. Find **Pause bot when a human replies** and switch it on.
3. Click **Save Changes**.

<!-- screenshot: "Pause bot when a human replies" switched on -->

With the setting on:

- The bot doesn't reply on chats that are assigned to someone.
- If you assign a chat to a teammate while the bot is talking, the bot pauses.
- If you reply to a chat from the inbox, the bot pauses, and the chat is assigned to you if nobody had it yet.

### Pause the bot when you reply from your phone

If your WhatsApp number is connected to both Waplify and the WhatsApp Business app, you can reply to customers from your phone, and Waplify sees those replies too.

1. With **Pause bot when a human replies** on, look just below it for **Also pause when you reply from your phone**. It turns on automatically when you switch on the main setting.
2. Leave it on to pause the bot for **24 hours** each time you reply from your phone. Switch it off if you'd rather the bot keep replying alongside you.
3. Click **Save Changes**.

<!-- screenshot: "Also pause when you reply from your phone" with "Pause length: 24 hours (fixed)" -->

How the 24 hours work:

- **Each new reply from your phone starts the 24 hours again**, so the bot never jumps back in while you're still chatting.
- **After 24 hours with no reply from your phone**, the bot takes the chat back the next time the customer messages. It starts fresh, rather than continuing where it stopped.
- The pause length is always 24 hours. It can't be changed.

While a chat is paused this way, your team sees a note above the message box, for example: *"Bot paused after a reply from the WhatsApp Business app. It comes back in 23 hours if nobody replies."* Click **Keep paused** to assign the chat to yourself. The bot then stays paused until someone gives the chat back to it.

<!-- screenshot: the phone pause note with the Keep paused button -->

### What your team sees in a chat

- **The bot is handling the chat:** the message box is locked and shows a **Take over** button. Click it to pause the bot and reply yourself. This works whether the setting is on or off.
- **The bot is paused:** the message box works normally, and the chat history shows why. For example: *"Bot paused - chat assigned to a teammate"* or *"Bot paused - business replied from WhatsApp"*.

<!-- screenshot: a locked message box with the Take over button -->

### Give a chat back to the bot

When your team is done with a chat, you can hand it back to the bot in any of these ways:

- Click **Hand to bot** at the top of the chat, then **Resolve & hand to bot**. The chat moves to **Resolved**, and the bot answers the next time the customer messages.
- **Unassign** the chat.
- Switch on **Let the bot take over if no one replies**, on the same settings page, so chats nobody has answered for a while go back to the bot automatically.

When the bot takes a chat back, **it starts fresh**. If the customer's next message matches one of your flow's keywords, that flow starts from the beginning. The one exception: if the customer taps a button from an older bot message, the bot carries on from that button.

### Always true, whatever the setting

- **Take over** always pauses the bot on that chat.
- When one of your own flows assigns a chat to a teammate with the [Assign to Agent](../flows-v2/handing-off-to-a-human.md) block, the bot stays out of that chat until someone hands it back.
- Sending a campaign or a scheduled message to a customer never pauses the bot.

## Tips & best practices

- **Leave it off** if your bot answers most questions and your team only steps in now and then. Use **Take over** on the chats that need a person.
- **Turn it on** if your team works assigned chats all day, so a customer never gets a reply from the bot and a person at the same time.
- **Using auto-assign with this setting on?** New chats are assigned to a teammate as soon as they arrive, so the bot won't greet them. If you want the bot to answer new chats first, turn off [auto-assign](../team/inbox-setup.md) or leave this setting off.
- **Answering long conversations from your phone?** Click **Keep paused** in Waplify so the bot doesn't come back after 24 hours.
- **Tell your team which mode you picked**, so nobody is surprised when the bot does or doesn't reply.

## Frequently asked questions

### If the setting is off, will the bot reply on a chat assigned to me?

Yes. With the setting off, the bot keeps replying on assigned chats. You'll see a **Take over** button whenever the bot is active; click it to pause the bot on that chat. Chats your own flow handed to a person with **Assign to Agent** are the exception: the bot stays out of those.

### I replied from my phone, but the bot didn't pause. Why?

Check three things:

1. **Pause bot when a human replies** is on.
2. **Also pause when you reply from your phone** is on.
3. Your number is connected to both Waplify and the WhatsApp Business app. Replies from your phone only reach Waplify when the number is set up to work with both.

### I clicked Hand to bot, but a teammate got the chat instead of the bot. Why?

If auto-assign is on, a customer's reply can assign the chat to a teammate before the bot sees it, and with this setting on the bot then stays quiet. To send these chats to the bot instead, go to **When a customer reopens a resolved chat** on the same settings page and choose **Hand to the chatbot**. Keep in mind this applies to every resolved chat a customer reopens, not just the ones you handed to the bot.

### Does the bot continue where it stopped?

No. Once a chat goes back to the bot, the bot starts fresh on the customer's next message. This avoids sending a question or reminder that's hours or days out of date. The only exception is when the customer taps a button from an older bot message.

### Does sending a campaign or template pause the bot?

No. Campaigns, drip sequences, and messages sent by your flows never pause the bot. A template a teammate sends from the inbox counts as a teammate replying, so it follows the setting like any other inbox reply.
