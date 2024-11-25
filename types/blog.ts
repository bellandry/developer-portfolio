export type RichTextContent = {
  raw: any;
  text: string;
  html: string;
};

interface Tag {
  title: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: RichTextContent;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  tags: Tag[];
  publishedAt: string;
  updatedAt: string;
}
