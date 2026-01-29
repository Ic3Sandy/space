import Router from 'preact-router';
import Header from './components/Header';
import StarField from './components/StarField';
import ParticleSystem from './components/ParticleSystem';
import Home from './pages/Home';
import About from './pages/About';
import './styles/tailwind.css';
import './styles/global.css';

// TODO: [REFACTOR] Magic Numbers - Extract header height for main padding
export default function App() {
  return (
    <>
      <Header />
      <StarField />
      <ParticleSystem />
      <main className="pt-16">
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </main>
    </>
  );
}
