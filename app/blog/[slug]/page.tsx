import { BlogEmptyState } from "@/components/blog-empty-state";
import { LatestPosts } from "@/components/latest-posts";
import { RichText } from "@/components/rich-text";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/graphql";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const { posts } = await getBlogPosts();

    if (!posts || !Array.isArray(posts)) {
      console.error("Invalid posts data received");
      return [];
    }

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    throw error;
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://laclass.dev";

  try {
    const { post } = await getBlogPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Post Not Found | Landry Bella",
        description: `The blog post "${params.slug}" could not be found.`,
        robots: {
          index: false,
          follow: true,
        },
      };
    }

    const publishedTime = new Date(post.publishedAt).toISOString();
    const modifiedTime = new Date(post.updatedAt).toISOString();

    return {
      title: `${post.title} | Landry Bella`,
      description: post.excerpt,
      authors: [{ name: post.author.name }],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime,
        modifiedTime,
        authors: [post.author.name],
        images: [
          {
            url: post.coverImage.url,
            width: post.coverImage.width,
            height: post.coverImage.height,
            alt: post.title,
          },
        ],
        url: `${baseUrl}/blog/${params.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage.url],
      },
      alternates: {
        canonical: `${baseUrl}/blog/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | Landry Bella",
      description: "There was an error loading this blog post.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://laclass.dev";

  let post;
  let posts: BlogPost[] = [];
  try {
    const [postData, postsData] = await Promise.all([
      getBlogPostBySlug(params.slug),
      getBlogPosts(),
    ]);

    post = postData?.post || {};
    posts = postsData?.posts || [];
    if (!post) {
      return (
        <BlogEmptyState
          type="no-posts"
          message={`The blog post "${params.slug}" could not be found. It may have been moved or deleted.`}
        />
      );
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage.url,
      datePublished: new Date(post.publishedAt).toISOString(),
      dateModified: new Date(post.updatedAt).toISOString(),
      author: {
        "@type": "Person",
        name: post.author.name,
        image: post.author.picture.url,
      },
      publisher: {
        "@type": "Person",
        name: "Landry Bella",
        url: baseUrl,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${params.slug}`,
      },
      url: `${baseUrl}/blog/${params.slug}`,
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article
          className="py-20 px-4"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <div className="container mx-auto max-w-4xl">
            <header className="mb-8">
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                itemProp="headline"
              >
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src={post.author.picture.url}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      itemProp="image"
                    />
                  </div>
                  <span
                    className="text-sm font-medium"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{post.author.name}</span>
                  </span>
                </div>
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={new Date(post.publishedAt).toISOString()}
                  itemProp="datePublished"
                >
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
              </div>
              <div className="flex gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag.title}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    itemProp="keywords"
                  >
                    {tag.title}
                  </span>
                ))}
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
              </div>
            </header>
            <div
              className="prose prose-lg max-w-none dark:prose-invert"
              itemProp="articleBody"
            >
              <RichText content={post.content} />
            </div>
          </div>
        </article>
        <LatestPosts posts={posts} />
      </>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    return (
      <BlogEmptyState
        type="error"
        message="There was an error loading this blog post. Please try again later or check out our other posts."
      />
    );
  }
}
