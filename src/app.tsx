import StarField from './components/StarField';
import ParticleSystem from './components/ParticleSystem';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './styles/global.css';

export default function App() {
  return (
    <>
      <StarField />
      <ParticleSystem />
      <main>
        <Hero />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
