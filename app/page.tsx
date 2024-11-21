import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}