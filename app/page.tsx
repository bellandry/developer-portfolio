import { Experience } from "@/components/experience";
import { FloatingContact } from "@/components/floating-contact";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/latest-posts";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { getBlogPosts, getProjects } from "@/lib/graphql";
import { BlogPost } from "@/types/blog";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  let projects;
  let posts: BlogPost[] = [];
  try {
    const [projectsData, postsData] = await Promise.all([
      getProjects(),
      getBlogPosts(),
    ]);

    projects = projectsData || { projects: [] };
    posts = postsData?.posts || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    projects = { projects: [] };
    posts = [];
  }

  return (
    <>
      <Hero />
      <Experience />
      <Projects initialProjects={projects} />
      <Skills />
      <LatestPosts posts={posts} />
      <FloatingContact />
      <Footer />
    </>
  );
}
