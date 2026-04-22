// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['overview', 'authentication'],
    },
    {
      type: 'category',
      label: 'Messages',
      items: [
        'messages/send-template-message',
        'messages/send-free-form-message',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'templates/list-templates',
        'templates/create-template',
        'templates/create-carousel-template',
        'templates/sync-templates',
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      items: [
        'campaigns/create-campaign',
        'campaigns/send-campaign',
        'campaigns/campaign-stats',
      ],
    },
    {
      type: 'category',
      label: 'Contacts',
      items: [
        'contacts/list-contacts',
        'contacts/create-contact',
        'contacts/get-delete-contact',
      ],
    },
    {
      type: 'category',
      label: 'Contact Groups',
      items: [
        'groups/list-create-groups',
        'groups/get-delete-groups',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'webhooks/overview',
        'webhooks/events',
        'webhooks/signature-verification',
      ],
    },
    {
      type: 'doc',
      id: 'llm-reference',
      label: 'Complete API Reference',
    },
  ],
};

export default sidebars;
