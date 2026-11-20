// Public roadmap content for docs.waplify.io/roadmap.
//
// How to update (once a month):
// - Now: being built or in testing. Next: decided, starts after Now.
//   Later: exploring, may change or never ship.
// - No dates on Now / Next / Later items. Dates read as promises.
// - When an item ships, delete its card here, publish a Changelog post, and
//   add the post to `recentlyShipped` (keep the latest 5).
// - Group small items into one card per area so each column stays short.
// - Change `updated` every time you edit this file.

export const updated = '20 Nov 2026';

export const columns = [
  {
    id: 'now',
    title: 'Now',
    caption: "We're building it",
    items: [
      {
        tag: 'Inbox',
        title: 'Multiple WhatsApp numbers',
        text: 'Run several WhatsApp numbers from one account. When a customer writes to two of them, you see both chats together.',
      },
      {
        tag: 'Account',
        title: 'Each business on its own plan',
        text: 'Running more than one business? Give each one its own plan, and switch between them in one click.',
      },
      {
        tag: 'Home',
        title: 'A new Home page',
        text: "Today's chats, campaigns and setup steps on one screen when you log in.",
      },
      {
        tag: 'Integrations',
        title: 'More integrations',
        text: 'Connect Waplify to more of the apps you already use, after Shopify and IndiaMART.',
      },
    ],
  },
  {
    id: 'next',
    title: 'Next',
    caption: 'Planned',
    items: [
      {
        tag: 'AI',
        title: 'AI auto-replies',
        text: "AI answers your customers' common questions from your own business info, day and night, and hands the chat to your team when it should.",
      },
      {
        tag: 'AI',
        title: 'AI agents with a goal',
        text: 'Give an AI agent a job, like booking a demo or qualifying a lead, and it carries the conversation until the job is done.',
      },
      {
        tag: 'Automation',
        title: 'Business hours replies',
        text: 'Switch on an automatic reply for messages that arrive after your working hours.',
      },
      {
        tag: 'Automation',
        title: 'Follow-ups when customers go quiet',
        text: "If a customer doesn't reply within the time you set, Waplify follows up for you.",
      },
      {
        tag: 'Team inbox',
        title: 'Inbox upgrades',
        text: "Typing indicator, private notes, sending a form in chat, shortcut commands for quick replies, and the sender's name on every message.",
      },
      {
        tag: 'Team inbox',
        title: 'Away status, ratings and reminders',
        text: 'Mark yourself away, ask customers to rate a chat, and get a nudge when someone is kept waiting.',
      },
      {
        tag: 'Campaigns',
        title: 'Campaign upgrades',
        text: "Retry failed messages, see your daily sending limit and what's left, plus bulk actions, export and delete.",
      },
      {
        tag: 'Templates',
        title: 'Template upgrades',
        text: "See why Meta rejected a template, and use WhatsApp's newest template types.",
      },
      {
        tag: 'Notifications',
        title: 'Notifications',
        text: 'Alerts in the dashboard and on your phone for new chats and chats assigned to you.',
      },
    ],
  },
  {
    id: 'later',
    title: 'Later',
    caption: 'Exploring',
    items: [
      {
        tag: 'AI',
        title: 'AI copilot and translation',
        text: 'Reply suggestions for your team, and one-click translation inside chats.',
      },
      {
        tag: 'AI',
        title: 'Connect AI assistants',
        text: 'Let AI tools like ChatGPT and Claude work with your Waplify account, through MCP.',
      },
      {
        tag: 'Channels',
        title: 'More channels in one inbox',
        text: 'Bring Instagram, Facebook Messenger and more into the same inbox as WhatsApp.',
      },
      {
        tag: 'Automation',
        title: 'Chatbot builder upgrades',
        text: 'More ways to start a chatbot, a step to stop it, and WhatsApp Pay inside your flows.',
      },
      {
        tag: 'Commerce',
        title: 'Razorpay and Cashfree payments',
        text: "Collect payments through Razorpay and Cashfree, and see each customer's orders in their profile.",
      },
      {
        tag: 'Campaigns',
        title: 'Smart sending',
        text: "Send to your most engaged contacts first, then reach the rest over the next few days, to protect your number's quality.",
      },
      {
        tag: 'Contacts',
        title: 'Faster contact imports',
        text: 'Upload big contact lists in the background while you keep working.',
      },
      {
        tag: 'API',
        title: 'Developer tools',
        text: 'Signed webhooks, interactive API docs, and adding contacts to sequences or assigning chats through the API.',
      },
    ],
  },
];

// The latest 5 Changelog posts. `to` is the post's page under /changelog.
export const recentlyShipped = [
  {
    date: '20 Nov 2026',
    title: 'Media library: all your files in one place',
    tag: 'Media',
    to: '/changelog/2026/11/20/media-library',
  },
  {
    date: '19 Nov 2026',
    title: 'A cleaner Templates page with message previews',
    tag: 'Templates',
    to: '/changelog/2026/11/19/new-templates-page',
  },
  {
    date: '13 Nov 2026',
    title: 'Change your WhatsApp profile photo from Waplify',
    tag: 'Account',
    to: '/changelog/2026/11/13/whatsapp-profile-photo',
  },
  {
    date: '12 Nov 2026',
    title: 'A new way to import contacts',
    tag: 'Contacts',
    to: '/changelog/2026/11/12/new-contact-import',
  },
  {
    date: '11 Nov 2026',
    title: 'WhatsApp calling: take and make customer calls',
    tag: 'Calling',
    to: '/changelog/2026/11/11/whatsapp-calling',
  },
];

// Where "Request a feature" goes: the website's Contact Us page.
export const requestFeatureUrl = 'https://waplify.io/contact-us/';
