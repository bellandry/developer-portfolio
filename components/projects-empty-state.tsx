"use client"

import { Code2, RefreshCcwDot } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProjectsEmptyStateProps {
  type: 'no-projects' | 'error';
  message?: string;
}

export function ProjectsEmptyState({ type, message }: ProjectsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <Code2 className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">
          {type === 'no-projects' ? 'No Projects Yet' : 'Unable to Load Projects'}
        </h2>
        <p className="text-muted-foreground mb-6">
          {message || 
            (type === 'no-projects' 
              ? 'Check back soon to see my latest projects and contributions.'
              : 'There was an error loading the projects. Please try again later.'
            )
          }
        </p>
        <div className="flex gap-4">
          {type === 'error' && (
            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh
              <RefreshCcwDot className='size-3 ml-2' />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
