interface AboutProps {
  path?: string;
}

export default function About(_props: AboutProps) {
  return (
    <section className="min-h-screen md:min-h-[90vh] flex items-center justify-center px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-4xl glass-card rounded-lg p-8 md:p-12 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-cosmic">About Me</h2>

        <div className="space-y-4 text-gray-light text-lg leading-relaxed">
          <p>
            Welcome to my cosmic corner of the web. I'm a passionate developer exploring the
            intersection of creativity and technology.
          </p>

          <p>
            With a focus on building beautiful, performant web experiences, I specialize in modern
            JavaScript frameworks and creating immersive user interfaces that push the boundaries of
            what's possible on the web.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open
            source, or stargazing into the vast expanse of possibilities that the digital universe
            offers.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/20">
          <h3 className="text-xl font-semibold text-gold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['Preact', 'TypeScript', 'Tailwind CSS', 'Vite', 'Docker'].map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-void-deep/50 border border-gold/30 rounded-full text-gray-light text-sm hover:border-amber transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
