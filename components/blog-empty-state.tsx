"use client"

import { AlertCircle, RefreshCcw, RefreshCcwDot } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BlogEmptyStateProps {
  type: 'no-posts' | 'error';
  message?: string;
}

export function BlogEmptyState({ type, message }: BlogEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-screen">
      <div className="flex flex-col items-center text-center max-w-md">
        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">
          {type === 'no-posts' ? 'No Blog Posts Yet' : 'Unable to Load Blog Posts'}
        </h2>
        <p className="text-muted-foreground mb-6">
          {message || 
            (type === 'no-posts' 
              ? 'Check back soon for new articles about web development, technology, and more.'
              : 'There was an error loading the blog posts. Please try again later.'
            )
          }
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
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
