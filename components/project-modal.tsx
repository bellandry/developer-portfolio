"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { RichText } from "./rich-text";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          </div>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video mb-6">
          <Image
            src={project.image.url}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About the Project</h3>
            <RichText content={project.longDescription} />
          </div>

          {project.features && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature.title}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technicalDetails && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Details</h3>
              <p className="text-muted-foreground">
                {project.technicalDetails}
              </p>
            </div>
          )}

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

          <div className="flex gap-4">
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
