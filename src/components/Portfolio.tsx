import type { Project } from '../types/data';

const projects: Project[] = [
  {
    title: 'Cosmic Navigator',
    description:
      'An interactive space exploration app that visualizes celestial bodies and orbital mechanics using WebGL. Users can navigate through our solar system in real-time.',
    tech: ['Preact', 'Three.js', 'WebGL', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Quantum Dashboard',
    description:
      'A modern analytics dashboard with real-time data visualization and responsive design. Features custom charts and interactive metrics.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Nebula CMS',
    description:
      'A headless content management system built for speed and scalability. Supports markdown, custom fields, and multi-language content.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'AWS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Starlight CLI',
    description:
      'A command-line tool for automating development workflows. Features include project scaffolding, automated testing, and deployment scripts.',
    tech: ['Node.js', 'Commander.js', 'TypeScript', 'Jest'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Orbit Sync',
    description:
      'Real-time collaboration platform with live editing, presence indicators, and conflict resolution. Built for distributed teams.',
    tech: ['Vue.js', 'WebSockets', 'Redis', 'Docker'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Galactic API',
    description:
      'RESTful API service with authentication, rate limiting, and comprehensive documentation. Handles millions of requests daily.',
    tech: ['Express', 'JWT', 'Redis', 'Swagger'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 md:py-16 relative" id="portfolio">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl mb-6 text-gradient-cosmic">Featured Projects</h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Explore my journey through various technologies and domains. Each project represents a
            unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-1 gap-12 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 backdrop-blur-md rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(139,92,246,0.3)] hover:border-amber"
            >
              <h3 className="text-2xl mb-4 text-gray-light">{project.title}</h3>
              <p className="text-gray-medium mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-nebula-purple/20 border border-nebula-purple text-nebula-purple px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-amber text-amber rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber hover:text-space-black hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
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
                <a
                  href={project.repoUrl}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-amber text-amber rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber hover:text-space-black hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
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
