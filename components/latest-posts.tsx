import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface LatestPostsProps {
  posts: BlogPost[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </p>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
