---
title: WhatsApp Calling Overview
description: What WhatsApp Calling in Waplify can and cannot do, what WhatsApp requires from your number, what it costs, and which plans include it
sidebar_position: 1
keywords: [WhatsApp calling, WhatsApp business calls, WhatsApp voice call, WhatsApp Cloud API calling, WhatsApp calling requirements]
---

## What is WhatsApp Calling?

Your customers can call your business on WhatsApp, the same way they call a friend: they tap the call button in your chat. With WhatsApp Calling switched on, those calls ring in Waplify for your team, in the browser and in the Waplify Android app. You answer, talk, and the call is saved in the customer's chat so the whole team can see it happened.

Your team can also call customers from Waplify, once the customer has said yes to calls.

Calls are voice only.

## What you can do

- **Take calls from customers** in the Waplify website or the Waplify Android app. The app rings like a normal phone call, even when it is closed or the phone is locked.
- **Ring the right person.** A call rings first for the team member who already handles that customer's chat. If they don't pick up within about 10 seconds, everyone available rings.
- **Call a customer** from their chat, after they allow calls from you.
- **Ask a customer to allow calls**, with a short message they answer with one tap. When the 24-hour chat window is closed, you ask with an approved template instead.
- **Send a "Call us" button**, so the customer calls you (free for both of you).
- **Voicemail:** when nobody can answer, the caller hears your greeting and can leave a voice message. It arrives in the chat. *(Some plans, see below.)*
- **Record calls** and play them back from the chat. *(Some plans, see below.)*
- **See every call** in the customer's chat and on the **Calls** page: who called, who answered, how long, missed, declined or voicemail.

## What WhatsApp requires from your number

These rules are WhatsApp's (Meta's), not Waplify's. Waplify checks them for you and tells you in plain words what is missing.

| Requirement | What it means |
|---|---|
| **Cloud API only** | The number must be connected to Waplify through the WhatsApp Cloud API only. A number that also runs on the **WhatsApp Business app** on a phone (often called coexistence) **cannot use calling in Waplify**. Its calls keep ringing on that phone, and WhatsApp does not share them with Waplify, so we cannot show, ring, log or record them. |
| **Messaging limit of 2,000 or more** | Your WhatsApp business must be allowed to message at least 2,000 customers a day. To raise your limit, verify your business with Meta, or keep messaging more customers with good quality. |
| **A payment method on your WhatsApp account** | Even though calls from customers are free, WhatsApp needs a payment method on your WhatsApp Business account in Meta Business Settings. Without it, calls fail. |

Good to know before you switch a number over:

- **Moving a number to Cloud API only means you stop using the WhatsApp Business app on that number for good.** All chats and calls then happen in Waplify. Think about this before you move the number your team answers on a phone today.
- **Customers call from the WhatsApp app on their phone** (Android or iPhone). WhatsApp Web and the WhatsApp desktop app cannot call businesses.
- **The call button can take up to 7 days** to appear for all your customers after you switch calling on.

## What you cannot do (WhatsApp limits)

- **No video calls,** group calls, call transfer, hold or keypad menus. Calls are one customer, one team member, voice only.
- **You cannot call a customer who has not allowed calls from you.** WhatsApp asks the customer and gives them three choices: **Allow calls** (always), **Temporarily allow calls** (7 days) or **Not now**. You cannot change these choices or their wording; you can only write the message above them.
- **Asking is limited:** one request to the same customer a day, and two a week.
- **Four unanswered calls in a row** to the same customer remove their permission. You have to ask again before you can call them. Waplify warns you after two.
- **WhatsApp limits how many calls you can make to the same customer in a day.**
- **Unanswered and declined calls count against your number.** If your calling quality is low (for example, many calls to or from your number go unanswered), WhatsApp can pause calling on that number for 7 days. Voicemail helps: a call that reaches voicemail counts as picked up.
- **Calls on a WhatsApp Business app number (coexistence) are invisible to Waplify,** as explained above.
- **The Waplify iPhone app does not take calls yet.** On an iPhone, take calls in the browser.

## What it costs

| | Cost |
|---|---|
| **A customer calls you** | Free. WhatsApp does not charge for calls customers make. |
| **You call a customer** | WhatsApp charges your WhatsApp Business account per minute, only for the time the customer is on the call, in 6-second steps. In India it is about ₹0.39 a minute today. See Meta's WhatsApp pricing page for your country. |
| **Asking a customer to allow calls** | Charged like any other WhatsApp message (a template when the 24-hour window is closed). |
| **Call recording** | Free from WhatsApp today. WhatsApp says it may charge for recording in future, with notice. |

Waplify does not add a charge per call. Calling comes with your plan.

## Which plans include it

| Feature | Plans |
|---|---|
| **WhatsApp calling** (take calls, call customers, Calls page) | All paid plans |
| **Call recording** | Growth, Business, Lifetime Platinum and Diamond, and older plans |
| **Voicemail** | Business, Lifetime Platinum and Diamond, and older plans |

When your plan does not include a feature, you see it with a lock and an **Upgrade** button. If your plan ends, Waplify pauses calling on your number, and it comes back on by itself when you renew.

## How to use it

1. **Check your number** meets WhatsApp's requirements above.
2. **Switch calling on** for the number: see [Take WhatsApp calls](./take-whatsapp-calls.md).
3. **Make your team available** for calls, in the browser or the Android app.
4. Optionally, **set up voicemail and recording**: see [Voicemail and call recording](./voicemail-and-call-recording.md).
5. To phone customers yourself, see [Call your customers](./call-your-customers.md).

<!-- screenshot: a call bubble in a chat, and the Calls page -->

## Tips & best practices

- Before moving a number off the WhatsApp Business app, make sure your whole team is ready to work in Waplify: there is no going back on that number.
- Keep at least one person available during business hours, or switch voicemail on. Calls nobody answers hurt your number with WhatsApp.
- Use the **Call us** button when you want to talk: the call is free for both of you and rings you first.
- Ask customers to allow calls at a natural moment, for example after they ask a question that is easier to answer by voice.

## Frequently asked questions

**Why can't I switch calling on for my number?**
Go to **Settings > WhatsApp** and look under **WhatsApp calling** on that number: it tells you why. Most often the number also runs on the WhatsApp Business app, or your business can't yet message 2,000 customers a day.

**Can I use calling and keep the WhatsApp Business app on my phone?**
No. That is a WhatsApp rule: numbers that also run on the WhatsApp Business app cannot use calling through the Cloud API. Calls to such a number ring only on the phone, and Waplify never sees them.

**Do customers pay to call me?**
No. Calls from customers are free for them and for you. They only use their mobile data or Wi-Fi.

**Can my team take calls on their phones?**
Yes, with the Waplify Android app. It rings like a normal phone call even when the app is closed. iPhone users take calls in the browser for now.

**Who can see our calls?**
Team members who can see all chats see every call on the **Calls** page. Everyone else sees the calls inside the chats they can open.
