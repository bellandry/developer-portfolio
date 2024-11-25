import { Project } from '@/types/project';
import { BlogPost } from '@/types/blog';

const API_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL!;
const API_TOKEN = process.env.HYGRAPH_API_TOKEN;

async function fetchAPI(query: string) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();

    if (json.errors) {
      console.error('Hygraph errors:', json.errors);
      throw new Error(json.errors[0].message);
    }

    // console.log('Hygraph response:', JSON.stringify(json.data, null, 2));
    return json.data;
  } catch (error) {
    console.error('Error fetching from Hygraph:', error);
    throw error;
  }
}

export async function getProjects(): Promise<{ projects: Project[] }> {
  const data = await fetchAPI(`
    {
      projects {
        id
        title
        description
        longDescription {
          raw
          text
          html
        }
        image {
          url
        }
        tags {
          title
        }
        liveUrl
        githubUrl
        features {
          title
        }
        technicalDetails
        createdAt
        updatedAt
      }
    }
  `);
  return data;
}

export async function getProjectById(id: string): Promise<{ project: Project }> {
  const data = await fetchAPI(`
    query ProjectById {
      project(where: { id: "${id}" }) {
        id
        title
        description
        longDescription {
          raw
          text
          html
        }
        image {
          url
        }
        tags {
          title
        }
        liveUrl
        githubUrl
        features
        technicalDetails
        createdAt
        updatedAt
      }
    }
  `);
  return data;
}

export async function getBlogPosts(): Promise<{ posts: BlogPost[] }> {
  const data = await fetchAPI(`
    query BlogPosts {
      posts(orderBy: publishedAt_DESC) {
        id
        title
        slug
        excerpt
        content {
          raw
          html
          text
        }
        coverImage {
          url
          width
          height
        }
        author {
          name
          picture {
            url
          }
        }
        tags {
          title
        }
        publishedAt
        updatedAt
      }
    }
  `);
  return data;
}

export async function getBlogPostBySlug(slug: string): Promise<{ post: BlogPost }> {
  const data = await fetchAPI(`
    query BlogPostBySlug {
      posts(where: { slug: "${slug}" }, first: 1) {
        id
        title
        slug
        excerpt
        content {
          raw
          html
          text
        }
        coverImage {
          url
          width
          height
        }
        author {
          name
          picture {
            url
          }
        }
        tags {
          title
        }
        publishedAt
        updatedAt
      }
    }
  `);
  
  if (!data.posts?.[0]) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  return { post: data.posts[0] };
}
