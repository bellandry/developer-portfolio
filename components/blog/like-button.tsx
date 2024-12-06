'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  initialLikes: number;
  postId: string;
  onLike?: (postId: string) => Promise<void>;
}

export function LikeButton({ initialLikes, postId, onLike }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);
    try {
      if (onLike) {
        await onLike(postId);
      }
      setLikes(prev => isLiked ? prev - 1 : prev + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error liking post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLike}
        disabled={isLoading}
        className={cn(
          'hover:bg-primary/10',
          isLiked && 'text-red-500 hover:text-red-600'
        )}
      >
        <Heart
          className={cn(
            'w-5 h-5 mr-1',
            isLiked && 'fill-current'
          )}
        />
        <span>{likes}</span>
      </Button>
    </div>
  );
}
