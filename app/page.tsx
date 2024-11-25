import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import Footer from '@/components/footer';
import { getProjects } from '@/lib/graphql';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  let projects;
  try {
    projects = await getProjects();
    
    if (!projects) {
      projects = { projects: [] };
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    projects = { projects: [] };
  }

  return (
    <>
      <Hero />
      <Experience />
      <Projects initialProjects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}