import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { getBlogPosts } from '@/lib/graphql';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Landry Bella',
  description: 'Technical articles and insights about React, Next.js, TypeScript, and modern web development.',
  openGraph: {
    title: 'Blog | Landry Bella',
    description: 'Technical articles and insights about React, Next.js, TypeScript, and modern web development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Landry Bella',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Landry Bella',
    description: 'Technical articles and insights about React, Next.js, TypeScript, and modern web development.',
  },
  alternates: {
    canonical: 'https://laclass.dev/blog',
  },
};

export default async function BlogPage() {
  const { posts } = await getBlogPosts();

  // Generate JSON-LD structured data for blog listing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Landry Bella\'s Blog',
    description: 'Technical articles and insights about React, Next.js, TypeScript, and modern web development.',
    url: 'https://laclass.dev/blog',
    author: {
      '@type': 'Person',
      name: 'Landry Bella',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage.url,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      url: `https://laclass.dev/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-xl">
              Welcome to my blog, where I share my thoughts and insights on the latest trends in web development.
            </p>
          </header>
          <section className="grid gap-8" aria-label="Blog posts">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                  <div className="aspect-video md:aspect-square w-full relative md:w-2/6">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                      itemProp="image"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors" itemProp="headline">
                      {post.title}
                    </h2>
                    <div className="flex gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag.title}
                          className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          itemProp="keywords"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground line-clamp-4 mb-4 md:line-clamp-2" itemProp="description">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative">
                          <Image
                            src={post.author.picture.url}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <time className="text-sm text-muted-foreground">
                        {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
