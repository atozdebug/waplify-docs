import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
  columns,
  recentlyShipped,
  requestFeatureUrl,
  updated,
} from '@site/src/data/roadmap';
import styles from './roadmap.module.css';

const dotClass = {
  now: styles.dotNow,
  next: styles.dotNext,
  later: styles.dotLater,
};

function RoadmapColumn({column}) {
  const headingId = `roadmap-${column.id}`;
  return (
    <section aria-labelledby={headingId} className={styles.column}>
      <div className={styles.columnHead}>
        <span aria-hidden="true" className={clsx(styles.dot, dotClass[column.id])} />
        <h2 id={headingId} className={styles.columnTitle}>
          {column.title}
        </h2>
        <span className={styles.count}>{column.items.length}</span>
        <span className={styles.caption}>{column.caption}</span>
      </div>
      {column.items.map((item) => (
        <article key={item.title} className={styles.card}>
          <span className={styles.tag}>{item.tag}</span>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardText}>{item.text}</p>
        </article>
      ))}
      {column.id === 'later' && (
        <a href="#request" className={styles.idea}>
          <span className={styles.ideaTitle}>Have an idea?</span>
          <span className={styles.cardText}>
            Tell us what you need. Popular requests move up the list.
          </span>
        </a>
      )}
    </section>
  );
}

export default function Roadmap() {
  return (
    <Layout
      title="Roadmap"
      description="What's coming to Waplify: what we're building now, what's planned next, and what we're exploring.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.pill}>Roadmap</span>
          <h1 className={styles.title}>What's coming to Waplify</h1>
          <p className={styles.lead}>
            What we're building now, what's planned next, and what we're
            exploring. Your requests shape this list, so plans can change as we
            learn.
          </p>
          <span className={styles.updated}>Updated {updated}</span>
        </header>

        <div className={styles.board}>
          {columns.map((column) => (
            <RoadmapColumn key={column.id} column={column} />
          ))}
        </div>

        <section aria-labelledby="recently-shipped" className={styles.shipped}>
          <div className={styles.shippedHead}>
            <h2 id="recently-shipped" className={styles.sectionTitle}>
              Recently shipped
            </h2>
            <Link to="/changelog" className={styles.textLink}>
              See the full changelog
            </Link>
          </div>
          <div className={styles.shippedList}>
            {recentlyShipped.map((post) => (
              <Link key={post.to} to={post.to} className={styles.shippedRow}>
                <span className={styles.shippedDate}>{post.date}</span>
                <span className={styles.shippedName}>{post.title}</span>
                <span className={styles.tag}>{post.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="request" aria-labelledby="request-title" className={styles.request}>
          <div className={styles.requestText}>
            <h2 id="request-title" className={styles.sectionTitle}>
              Don't see what you need?
            </h2>
            <p className={styles.lead}>
              Tell us what would help your business. Customer requests decide
              what moves up this list.
            </p>
          </div>
          <Link to={requestFeatureUrl} className={styles.requestButton}>
            Request a feature
          </Link>
        </section>
      </main>
    </Layout>
  );
}
