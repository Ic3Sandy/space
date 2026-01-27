import type { Article } from '../types/data';
import styles from '../styles/Blog.module.css';

const articles: Article[] = [
  {
    title: 'Navigating the Quantum Realm of Modern Web Development',
    excerpt:
      'Exploring the intersection of quantum computing concepts and web performance optimization. How thinking in parallel can transform your application architecture.',
    date: '2026-01-10',
    tags: ['Performance', 'Architecture', 'Web Dev'],
    url: '#',
  },
  {
    title: 'Building Stellar User Experiences with Preact',
    excerpt:
      'A deep dive into why Preact is the perfect choice for performance-critical applications. Learn how to leverage its lightweight nature without sacrificing features.',
    date: '2026-01-05',
    tags: ['Preact', 'JavaScript', 'Performance'],
    url: '#',
  },
  {
    title: 'The Art of Cosmic Code: Writing Maintainable Software',
    excerpt:
      'Like the ordered chaos of the universe, great code balances structure with flexibility. Discover principles that stand the test of time.',
    date: '2025-12-28',
    tags: ['Best Practices', 'Clean Code', 'Philosophy'],
    url: '#',
  },
  {
    title: 'TypeScript: Your Warp Drive to Type Safety',
    excerpt:
      'How TypeScript acts as a navigation system through the vast expanse of JavaScript development, preventing runtime errors before they happen.',
    date: '2025-12-20',
    tags: ['TypeScript', 'JavaScript', 'Tools'],
    url: '#',
  },
  {
    title: 'Interstellar CSS: Animations That Transcend Dimensions',
    excerpt:
      'Creating smooth, performant animations that capture the wonder of space. From subtle parallax to complex particle systems.',
    date: '2025-12-15',
    tags: ['CSS', 'Animation', 'Design'],
    url: '#',
  },
  {
    title: 'Docker and the Container Cosmos',
    excerpt:
      'Understanding containerization as isolated universes for your applications. A practical guide to Docker in modern development workflows.',
    date: '2025-12-10',
    tags: ['Docker', 'DevOps', 'Containers'],
    url: '#',
  },
];

export default function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cosmic Chronicles</h2>
          <p className={styles.description}>
            Thoughts, tutorials, and explorations from the frontiers of technology. Join me on this
            journey through code and creativity.
          </p>
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <article key={index} className={styles.articleCard}>
              <div className={styles.date}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>

              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>

              <div className={styles.tags}>
                {article.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href={article.url} className={styles.readMore}>
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
