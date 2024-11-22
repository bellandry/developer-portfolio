import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import Footer from '@/components/footer';
import { getProjects } from '@/lib/graphql';

export const revalidate = 0; // Disable cache during development

export default async function Home() {
  try {
    const projects = await getProjects();
    console.log('Projects data:', projects);

    if (!projects || !projects.projects || !Array.isArray(projects.projects)) {
      console.error('Invalid projects data:', projects);
      return (
        <>
          <Hero />
          <Experience />
          <div className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
              <p className="text-center text-muted-foreground">
                Loading projects...
              </p>
            </div>
          </div>
          <Skills />
          <Contact />
          <Footer />
        </>
      );
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
  } catch (error) {
    console.error('Error in Home component:', error);
    return (
      <>
        <Hero />
        <Experience />
        <div className="py-20 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <p className="text-center text-muted-foreground">
              Error loading projects. Please try again later.
            </p>
          </div>
        </div>
        <Skills />
        <Contact />
        <Footer />
      </>
    );
  }
}