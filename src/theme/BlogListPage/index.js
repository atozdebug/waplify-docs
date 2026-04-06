import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import BlogListPaginator from '@theme/BlogListPaginator';
import styles from './styles.module.css';

function BlogListPageMetadata({metadata}) {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

/* Format date like "March 4, 2026" */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/* Tag badge component */
function TagBadge({label, permalink}) {
  return (
    <Link to={permalink} className={styles.tag}>
      {label}
    </Link>
  );
}

/* Single timeline entry */
function TimelineEntry({content: BlogPostContent}) {
  const {metadata} = BlogPostContent;
  const {title, permalink, date, tags, description} = metadata;

  return (
    <div className={styles.timelineEntry}>
      {/* Left side — date */}
      <div className={styles.timelineDate}>
        <time dateTime={date}>{formatDate(date)}</time>
      </div>

      {/* Center — dot and line */}
      <div className={styles.timelineLine}>
        <span className={styles.timelineDot}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2.5v7M2.5 6h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </div>

      {/* Right side — content */}
      <div className={styles.timelineContent}>
        <Link to={permalink} className={styles.timelineTitle}>
          <h2>{title}</h2>
        </Link>
        <p className={styles.timelineDescription}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.timelineTags}>
            {tags.map((tag) => (
              <TagBadge key={tag.permalink} {...tag} />
            ))}
          </div>
        )}
        <Link to={permalink} className={styles.readMore}>
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}

function BlogListPageContent({metadata, items}) {
  return (
    <Layout>
      {/* Hero header */}
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <span className={styles.headerBadge}>Changelog</span>
            <h1 className={styles.headerTitle}>What's New in Waplify</h1>
            <p className={styles.headerSubtitle}>
              Latest updates, new features, and improvements to the platform
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timeline}>
            {items.map(({content: BlogPostContent}) => (
              <TimelineEntry
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              />
            ))}
          </div>
          <BlogListPaginator metadata={metadata} />
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
