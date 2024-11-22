import { Project } from '@/types/project';

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
        tags
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
