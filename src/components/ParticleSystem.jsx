import { useEffect, useState } from 'preact/hooks';
import './ParticleSystem.css';

export default function ParticleSystem() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particle-system" aria-hidden="true">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
}
