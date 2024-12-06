"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "@/lib/helpers";
import { useState } from "react";

interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    image?: string;
  };
  createdAt: string;
  replies?: Comment[];
}

interface CommentProps {
  comment: Comment;
  onReply: (commentId: string, content: string) => Promise<void>;
}

function CommentComponent({ comment, onReply }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReply = async () => {
    if (!replyContent.trim()) return;

    setIsSubmitting(true);
    try {
      await onReply(comment.id, replyContent);
      setReplyContent("");
      setIsReplying(false);
    } catch (error) {
      console.error("Error posting reply:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-start gap-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={comment.author.image} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{comment.author.name}</span>
            <span className="text-sm text-muted-foreground">
              {formatDistanceToNow(comment.createdAt)}
            </span>
          </div>
          <p className="mt-1">{comment.content}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsReplying(!isReplying)}
            className="mt-2"
          >
            Reply
          </Button>
        </div>
      </div>

      {isReplying && (
        <div className="ml-11 mt-2">
          <Textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write a reply..."
            className="mb-2"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={handleReply} disabled={isSubmitting}>
              Post Reply
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsReplying(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-11 mt-4">
          {comment.replies.map((reply) => (
            <CommentComponent
              key={reply.id}
              comment={reply}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
  onAddComment: (content: string) => Promise<void>;
  onReply: (commentId: string, content: string) => Promise<void>;
}

export function CommentSection({
  postId,
  comments,
  onAddComment,
  onReply,
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      await onAddComment(newComment);
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <div className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="mb-2"
        />
        <Button onClick={handleAddComment} disabled={isSubmitting}>
          Post Comment
        </Button>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentComponent
            key={comment.id}
            comment={comment}
            onReply={onReply}
          />
        ))}
      </div>
    </div>
  );
}
