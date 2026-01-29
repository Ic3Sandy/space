import Hero from '../components/Hero';

interface HomeProps {
  path?: string;
}

export default function Home(_props: HomeProps) {
  return (
    <>
      <Hero />
    </>
  );
}
