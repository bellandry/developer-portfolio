const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(endpoint: string) {
  if (!API_URL) throw new Error('API_URL is not defined');
  
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  return json;
}

export async function getProjects() {
  const data = await fetchAPI('/api/projects?populate=*');
  return data;
}

export async function getProjectById(id: number) {
  const data = await fetchAPI(`/api/projects/${id}?populate=*`);
  return data;
}
