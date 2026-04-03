import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// --- SVG Icon components ---
const Icons = {
  rocket: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  send: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  ),
  template: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8"/><path d="M16 17H8"/><path d="M16 13h-2"/>
    </svg>
  ),
  contacts: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  chat: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  ),
  automation: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
    </svg>
  ),
  team: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
    </svg>
  ),
  billing: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  verify: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
};

// --- Section 1: Hero ---
function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Waplify Help Center
        </Heading>
        <p className={styles.heroSubtitle}>
          Guides, API docs, and everything you need to grow your business with WhatsApp
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/getting-started/sign-up-and-login">
            Get Started
          </Link>
          <Link className={styles.btnSecondary} to="/api/overview">
            API Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- Section 2: Three main section cards ---
const SECTIONS = [
  {
    title: 'Guides',
    description: 'Step-by-step help for every feature — from signup to sending your first campaign.',
    link: '/docs/intro',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: 'API Docs',
    description: 'Integrate Waplify into your apps — send messages, manage contacts, and set up webhooks.',
    link: '/api/overview',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Changelog',
    description: 'Latest updates, new features, and improvements to the Waplify platform.',
    link: '/changelog',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

function SectionCards() {
  return (
    <section className={styles.sections}>
      <div className="container">
        <div className={styles.sectionGrid}>
          {SECTIONS.map((section, idx) => (
            <Link key={idx} className={styles.sectionCard} to={section.link}>
              <div className={styles.sectionIcon}>{section.icon}</div>
              <div>
                <Heading as="h3" className={styles.sectionTitle}>{section.title}</Heading>
                <p className={styles.sectionDesc}>{section.description}</p>
              </div>
              <span className={styles.sectionArrow}>&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Section 3: Guides — organized by tier ---
const GUIDE_TIERS = [
  {
    label: 'Start Here',
    guides: [
      { title: 'Getting Started', desc: 'Sign up and set up your account', link: '/docs/getting-started/sign-up-and-login', icon: Icons.rocket },
      { title: 'Connect WhatsApp', desc: 'Link your business number', link: '/docs/getting-started/connect-whatsapp', icon: Icons.whatsapp },
      { title: 'Verify Business', desc: 'Get your business verified', link: '/docs/getting-started/verify-your-business', icon: Icons.verify },
      { title: 'Your First Campaign', desc: 'End-to-end walkthrough', link: '/docs/getting-started/your-first-campaign', icon: Icons.send },
    ],
  },
  {
    label: 'Learn Features',
    guides: [
      { title: 'Message Templates', desc: 'Create approved templates', link: '/docs/templates/message-templates', icon: Icons.template },
      { title: 'Import Contacts', desc: 'Bulk upload from CSV or Excel', link: '/docs/contacts/import-contacts', icon: Icons.contacts },
      { title: 'Send Campaigns', desc: 'Create and send broadcasts', link: '/docs/campaigns/creating-campaigns', icon: Icons.send },
      { title: 'Chat & Inbox', desc: 'Real-time customer messaging', link: '/docs/chat/inbox-overview', icon: Icons.chat },
    ],
  },
  {
    label: 'Go Further',
    guides: [
      { title: 'Automation Flows', desc: 'Build visual chatbots', link: '/docs/automation/conversational-flows', icon: Icons.automation },
      { title: 'Team Management', desc: 'Invite members and set roles', link: '/docs/team/managing-your-team', icon: Icons.team },
      { title: 'Billing & Plans', desc: 'Subscriptions, payments, invoices', link: '/docs/billing/subscription-plans', icon: Icons.billing },
      { title: 'Account Settings', desc: 'Manage your profile and preferences', link: '/docs/account/account-settings', icon: Icons.settings },
    ],
  },
];

function GuideTiers() {
  return (
    <section className={styles.guides}>
      <div className="container">
        <div className={styles.guidesHeader}>
          <Heading as="h2">Browse Guides</Heading>
          <p>Find what you need — whether you are just getting started or exploring advanced features</p>
        </div>
        {GUIDE_TIERS.map((tier, tIdx) => (
          <div key={tIdx} className={styles.tier}>
            <p className={styles.tierLabel}>{tier.label}</p>
            <div className={styles.guidesGrid}>
              {tier.guides.map((guide, gIdx) => (
                <Link key={gIdx} className={styles.guideCard} to={guide.link}>
                  <span className={styles.guideIcon}>{guide.icon}</span>
                  <div>
                    <span className={styles.guideTitle}>{guide.title}</span>
                    <span className={styles.guideDesc}>{guide.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Section 4: Developer quick links ---
const DEV_LINKS = [
  { title: 'Send your first message', link: '/api/messages/send-template-message' },
  { title: 'Set up webhooks', link: '/api/webhooks/overview' },
  { title: 'Complete API Reference', link: '/api/llm-reference' },
];

function DeveloperLinks() {
  return (
    <section className={styles.devSection}>
      <div className="container">
        <div className={styles.devInner}>
          <div className={styles.devText}>
            <Heading as="h3" className={styles.devTitle}>For Developers</Heading>
            <p className={styles.devDesc}>Integrate WhatsApp messaging into your apps with the Waplify API</p>
          </div>
          <div className={styles.devLinks}>
            {DEV_LINKS.map((item, idx) => (
              <Link key={idx} className={styles.devLink} to={item.link}>
                {item.title}
                <span className={styles.devArrow}>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Page ---
export default function Home() {
  return (
    <Layout
      title="Help Center"
      description="Waplify Help Center �� guides, API docs, and everything you need for WhatsApp marketing and automation.">
      <Hero />
      <SectionCards />
      <GuideTiers />
      <DeveloperLinks />
    </Layout>
  );
}
