import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TypesOfWork from '@/components/TypesOfWork';
import Projects from '@/components/Projects';
import AskAndres from '@/components/AskAndres';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TypesOfWork />
      <Projects />
      <AskAndres />
      <Footer />
    </main>
  );
}
