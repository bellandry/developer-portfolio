export type RichTextContent = {
  raw: any;
  text: string;
  html: string;
};

interface Tag {
  title: string;
}

interface Feature {
  title: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: RichTextContent;
  image: {
    url: string;
  };
  tags: Tag[];
  liveUrl: string;
  githubUrl: string;
  features?: Feature[];
  technicalDetails?: string;
  createdAt: string;
  updatedAt: string;
}
