---
title: Take WhatsApp Calls
description: Switch WhatsApp calling on, make your team available, and answer customer calls in the Waplify website or the Android app
sidebar_position: 2
keywords: [answer WhatsApp calls, WhatsApp call in browser, WhatsApp business call app, receive WhatsApp calls team, WhatsApp call routing]
---

## What is it?

When a customer taps the call button in their WhatsApp chat with your business, the call rings in Waplify for your team members who are available. Anyone available can answer it in the Waplify website or the Waplify Android app. After the call, it shows up in the customer's chat and on the **Calls** page.

Before you start, check that your number meets WhatsApp's requirements: see [WhatsApp Calling overview](./whatsapp-calling-overview.md).

## How to use it

### 1. Switch calling on for your number

An owner or admin does this once per number.

1. Go to **Settings > WhatsApp**.
2. Find your number and switch **WhatsApp calling** on.
<!-- screenshot: Settings > WhatsApp number card with the WhatsApp calling switch -->
3. You see "Calling is on. The call button can take up to 7 days to show on WhatsApp." The button appears for customers gradually over those days.

If the switch can't be turned on, the line under **WhatsApp calling** tells you why, for example that the number also runs on the WhatsApp Business app, or that your business can't yet message 2,000 customers a day.

### 2. Be available for calls

Calls ring only for team members who are **available**, who have access to that WhatsApp number, and who are not already on a call.

**On the website**

1. Click your status at the top of the page, next to the notification bell. It shows **Available** or **Away**.
<!-- screenshot: the header status with Available and Away -->
2. Choose **Available**. The first time, your browser asks to use your microphone. Click **Allow**.
3. A green dot means calls ring for you. Choose **Away** when you step away: the dot becomes a grey ring and calls stop ringing for you.

Keep a Waplify tab open while you are available. If you close the browser or your computer goes to sleep, calls stop ringing for you within about a minute. Your choice is remembered in that browser.

If your status shows **Calls off** with a lock, your admin has turned off calls for you (see below).

**In the Android app**

1. Open the Waplify app and go to **Settings > Notifications**.
2. Switch on **Available for WhatsApp calls**.
3. Allow the **microphone**. On Android 14 and newer, also allow Waplify to show **full-screen** call alerts when the phone asks.
<!-- screenshot: the app's Notifications settings with Available for WhatsApp calls -->

Now calls ring on your phone like a normal call, even when the app is closed or the phone is locked. The switch appears only when your company has a number with calling on.

**Turn calls off for a team member (owners and admins)**

Some team members shouldn't take calls at all, for example someone who only handles chats.

1. Go to **Settings > Team**.
2. In the **Calls** column, switch the member off.
<!-- screenshot: Settings > Team with the Calls column -->

Calls never ring for them and they can't call customers, whatever their own status says. Their status shows **Calls off** with a lock, and in the app their **Available for WhatsApp calls** switch is locked. You can switch it back on at any time. Everyone has calls on until an admin turns them off, and only the owner can change the owner's switch.

If every team member has calls off, the Team page warns you: calls then go to voicemail or ring out.

### 3. Answer a call

**On the website**, a card appears at the bottom centre of any page with the caller's name and "WhatsApp call", and a ringtone plays. If Waplify is in a background tab, you also get a desktop notification.

1. Click **Answer**, or **Decline** if you can't take it.
<!-- screenshot: the incoming call card with Decline and Answer -->
2. During the call, the card shows "On call" and the time, with **Open chat**, **Mute** and **Hang up**.
3. You can move around Waplify during the call. Don't close or reload the tab: that ends the call.

**In the Android app**, the full-screen call screen shows the caller's name with **Answer** and **Decline**.

1. Tap **Answer**. The call screen shows the time, with **Speaker**, **Mute** and **End**.
2. Tap the **back arrow** to use the app during the call. A green "Tap to return to call" bar stays at the top; tap it to go back.
3. Tap the **chat icon** at the top right to open this customer's chat.
<!-- screenshot: the app's call screen with Speaker, Mute and End -->

If you're available on the website and in the app, both ring. Whichever you answer first takes the call, and the other stops ringing. The same goes for teammates: the first person to answer gets the call.

### Who rings, and what happens when nobody answers

- **The customer's own agent rings first.** If the chat is assigned to someone who is available, only they ring. After about 10 seconds, everyone available rings.
- **If you decline,** the call moves on to anyone else available. When there's nobody left, the caller goes to voicemail if it's on; otherwise the call ends.
- **If nobody answers** and voicemail is on, the caller goes to voicemail after about 25 seconds. Without voicemail, it keeps ringing until the caller hangs up or WhatsApp stops it, about a minute after it started.
- **If nobody is available at all,** the caller goes straight to voicemail if it's on. Otherwise the customer sees the call declined.

### 4. After the call

- The customer's chat shows the call: "Voice call" with how long it lasted and who answered, or "Missed voice call", "Declined", "No answer" or "Voicemail left".
- **A missed call** moves the chat to the top of your chat list as unread, with "Missed voice call". The people who take calls get a "Missed WhatsApp call" alert on the website and on their phone, as soon as the call stops ringing.
- **Call back** from the missed call in the chat, on the website or in the app. The customer's call lets you call them back for 7 days without asking again.
- If the chat had no owner, it is now assigned to the person who answered: "Chat is now assigned to (name) after a call".
- The **Calls** page in the left menu lists calls. Each team member sees the calls in the chats they can see. You can filter by **All calls**, **Missed**, **Voicemail**, **Answered**, **Declined** and **Not connected**, for the last 7, 30 or 90 days.
<!-- screenshot: the Calls page -->
- A red number on **Calls** counts the missed calls you haven't looked at yet. Opening the page clears it.
- In the Android app, tap the **phone icon** at the top of your chats for recent calls: missed calls in red, with a call-back button.

## Tips & best practices

- Set yourself **Available** only when you can really take calls. Calls that ring with nobody answering count against your number with WhatsApp.
- Use a headset on the website for clearer sound and no echo.
- On Android, if calls don't ring when the app is closed: check that Waplify notifications are allowed, that battery saving isn't restricting Waplify, and that you haven't used **Force stop** on the app (Android then blocks its alerts until you open it again).
- If your microphone doesn't work on the website, check the browser's permission for Waplify (the icon next to the web address).

## Frequently asked questions

**Do I need to keep Waplify open to get calls?**
On the website, yes: keep a tab open and stay available. In the Android app, no: it rings even when the app is closed.

**Can I take calls on an iPhone?**
Not in the iPhone app yet. Open Waplify in the browser on a computer to take calls.

**A call rang but I couldn't answer in time. Will the customer try again?**
They may. You don't have to wait: tap **Call back** on the missed call in their chat. Their call lets you call them back for 7 days. See [Call your customers](./call-your-customers.md).

**Why didn't a call ring for me?**
Check that your status is **Available** (or the app switch is on), that your admin hasn't turned off your calls, that you have access to that WhatsApp number, and that you weren't already on a call. If the chat is assigned to a teammate, they ring first for about 10 seconds.

**Can I transfer a call to a teammate?**
Not during the call. WhatsApp doesn't support call transfer. You can assign the chat to a teammate afterwards.
