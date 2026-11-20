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
        tag: 'Calling',
        title: 'WhatsApp calling',
        text: 'Make and answer WhatsApp voice calls right from your team inbox.',
      },
      {
        tag: 'Mobile',
        title: 'Calls on Android, Waplify on iPhone',
        text: 'Answer WhatsApp calls in the Android app, and add Waplify to your iPhone home screen.',
      },
      {
        tag: 'Home',
        title: 'A new Home page',
        text: "Today's chats, campaigns and setup steps on one screen when you log in.",
      },
      {
        tag: 'Media',
        title: 'Media library',
        text: 'All your images, videos and documents in one place, ready to reuse in campaigns and chats.',
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
        text: "See why Meta rejected a template, add a Call on WhatsApp button, and use WhatsApp's newest template types.",
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
        text: "Match your file's columns when you import, and upload big lists in the background.",
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
    date: '23 Oct 2026',
    title: 'Waplify Android app: reply to customers from your phone',
    tag: 'Mobile',
    to: '/changelog/2026/10/23/android-app',
  },
  {
    date: '21 Oct 2026',
    title: 'Extra agents: add more team members to any plan',
    tag: 'Team inbox',
    to: '/changelog/2026/10/21/extra-agents',
  },
  {
    date: '20 Oct 2026',
    title: 'Shopify integration',
    tag: 'Integrations',
    to: '/changelog/2026/10/20/shopify-integration',
  },
  {
    date: '15 Oct 2026',
    title: 'Share chats between chosen agents',
    tag: 'Team inbox',
    to: '/changelog/2026/10/15/share-chats-between-chosen-agents',
  },
  {
    date: '17 Sep 2026',
    title: 'Your chatbot can send your product catalog',
    tag: 'Automation',
    to: '/changelog/2026/09/17/chatbot-sends-your-catalog',
  },
];

// Where "Request a feature" goes: the website's Contact Us page.
export const requestFeatureUrl = 'https://waplify.io/contact-us/';
