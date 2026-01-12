import styles from '../styles/Portfolio.module.css';

const projects = [
  {
    title: 'Cosmic Navigator',
    description: 'An interactive space exploration app that visualizes celestial bodies and orbital mechanics using WebGL. Users can navigate through our solar system in real-time.',
    tech: ['Preact', 'Three.js', 'WebGL', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Quantum Dashboard',
    description: 'A modern analytics dashboard with real-time data visualization and responsive design. Features custom charts and interactive metrics.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Nebula CMS',
    description: 'A headless content management system built for speed and scalability. Supports markdown, custom fields, and multi-language content.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'AWS'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Starlight CLI',
    description: 'A command-line tool for automating development workflows. Features include project scaffolding, automated testing, and deployment scripts.',
    tech: ['Node.js', 'Commander.js', 'TypeScript', 'Jest'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Orbit Sync',
    description: 'Real-time collaboration platform with live editing, presence indicators, and conflict resolution. Built for distributed teams.',
    tech: ['Vue.js', 'WebSockets', 'Redis', 'Docker'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Galactic API',
    description: 'RESTful API service with authentication, rate limiting, and comprehensive documentation. Handles millions of requests daily.',
    tech: ['Express', 'JWT', 'Redis', 'Swagger'],
    liveUrl: '#',
    repoUrl: '#'
  }
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore my journey through various technologies and domains.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.liveUrl} className={styles.projectLink}>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
                <a href={project.repoUrl} className={styles.projectLink}>
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
