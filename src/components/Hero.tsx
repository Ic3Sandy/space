import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Ic3Sandy.Space</h1>
        <p className={styles.subtitle}>Journey Through the Cosmos of Code</p>
        <p className={styles.description}>
          Welcome to my corner of the digital universe. I'm a developer, creator, and explorer
          navigating the infinite possibilities of technology. Like the vast expanse of space, every
          project is a new frontier waiting to be discovered.
        </p>
        <div className={styles.cta}>
          <a href="#portfolio" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
