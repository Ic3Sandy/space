export default function Hero() {
  return (
    <section
      className="min-h-screen md:min-h-[90vh] flex items-center justify-center text-center px-16 py-16 md:px-6 md:py-12 relative"
      id="home"
    >
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-6xl md:text-4xl font-bold mb-6 text-gradient-cosmic animate-glow-pulse">
          Ic3Sandy.Space
        </h1>
        <p className="text-2xl md:text-xl text-gray-medium mb-12 font-normal animate-fade-in [animation-delay:0.5s] [animation-fill-mode:backwards]">
          Journey Through the Cosmos of Code
        </p>
        <p className="text-lg md:text-base text-gray-light mb-16 leading-relaxed animate-fade-in [animation-delay:1s] [animation-fill-mode:backwards]">
          Welcome to my corner of the digital universe. I'm a developer, creator, and explorer
          navigating the infinite possibilities of technology. Like the vast expanse of space, every
          project is a new frontier waiting to be discovered.
        </p>
        <div className="flex gap-6 justify-center flex-wrap md:flex-col md:items-center animate-fade-in [animation-delay:1.5s] [animation-fill-mode:backwards]">
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 bg-gradient-amber text-space-black font-semibold border-none rounded-lg cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-amber text-amber font-semibold rounded-lg cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-amber hover:text-space-black hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-float">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-amber opacity-60"
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
