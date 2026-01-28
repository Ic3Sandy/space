import StarField from './components/StarField';
import ParticleSystem from './components/ParticleSystem';
import Hero from './components/Hero';
import './styles/tailwind.css';
import './styles/global.css';

export default function App() {
  return (
    <>
      <StarField />
      <ParticleSystem />
      <main>
        <Hero />
      </main>
    </>
  );
}
