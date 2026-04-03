// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waplify Help Center',
  tagline: 'Everything you need to get the most out of Waplify',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.waplify.com',
  baseUrl: '/',

  organizationName: 'waplify',
  projectName: 'waplify-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    // Google Fonts — Inter
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
      },
    },
    // JSON-LD — Organization structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Waplify',
        url: 'https://waplify.io',
        logo: 'https://docs.waplify.com/img/waplify-logo.png',
        description: 'WhatsApp marketing and automation platform for small businesses.',
        sameAs: [
          'https://www.facebook.com/waplify',
          'https://x.com/waplify',
          'https://www.linkedin.com/company/waplify',
          'https://www.youtube.com/@waplify',
          'https://www.instagram.com/waplify',
        ],
      }),
    },
    // JSON-LD — WebSite structured data (enables sitelinks search)
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Waplify Help Center',
        url: 'https://docs.waplify.com',
        publisher: {
          '@type': 'Organization',
          name: 'Waplify',
        },
      }),
    },
  ],

  plugins: [
    ['docusaurus-plugin-llms', {
      generateLLMsTxt: true,
      generateLLMsFullTxt: true,
    }],
    // Second docs instance for API Reference
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api-docs',
        routeBasePath: 'api',
        sidebarPath: './sidebarsApi.js',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Latest updates, new features, and improvements to Waplify',
          blogSidebarTitle: 'Recent Updates',
          blogSidebarCount: 10,
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        ...(process.env.NODE_ENV === 'production' && {
          gtag: {
            trackingID: 'G-34T6MZLM35',
            anonymizeIP: true,
          },
        }),
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/waplify-logo.png',
      metadata: [
        {name: 'description', content: 'Waplify Help Center — guides, tutorials, and documentation for WhatsApp marketing and automation for small businesses.'},
        {name: 'keywords', content: 'Waplify, WhatsApp marketing, WhatsApp automation, WhatsApp API, broadcast messages, WhatsApp chatbot, help center, documentation'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Waplify Help Center'},
        {property: 'og:image', content: 'https://docs.waplify.com/img/waplify-logo.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@waplify'},
      ],
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Waplify Logo',
          src: 'img/waplify-logo.png',
          srcDark: 'img/waplify-logo-light.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            docsPluginId: 'api',
            position: 'left',
            label: 'API Docs',
          },
          {
            to: '/changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://waplify.io',
            label: 'Website',
            position: 'right',
            className: 'navbar__link--website',
          },
          {
            href: 'https://app.waplify.io',
            label: 'Login',
            position: 'right',
            className: 'navbar__link--login',
          },
        ],
      },
      // Footer is handled by custom component: src/theme/Footer/index.js
      algolia: {
        appId: '569Z5F01ZF',
        apiKey: 'e9fb84068cac4c9a4920bd7c75954275',
        indexName: 'waplify-docs',
        contextualSearch: true,
        searchPagePath: 'search',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python', 'javascript'],
      },
    }),
};

export default config;
