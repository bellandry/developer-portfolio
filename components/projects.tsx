'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Project } from '@/types/project';
import { ProjectModal } from './project-modal';
import { ProjectsEmptyState } from './projects-empty-state';
import { useState } from 'react';

interface ProjectsProps {
  initialProjects: {
    projects: Project[];
  };
}

export function Projects({ initialProjects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!initialProjects || !initialProjects.projects) {
    return <ProjectsEmptyState type="error" />;
  }

  if (initialProjects.projects.length === 0) {
    return <ProjectsEmptyState type="no-projects" />;
  }

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialProjects.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <Card className="h-full flex flex-col transition-shadow duration-200 group-hover:shadow-lg">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image.url}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.title}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}