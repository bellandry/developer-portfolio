'use client';

import { RichTextContent } from '@/types/project';
import { RichText as HygraphRichText } from '@graphcms/rich-text-react-renderer';

interface RichTextProps {
  content: RichTextContent;
}

export function RichText({ content }: RichTextProps) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <HygraphRichText
        content={content.raw}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground">{children}</li>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="bg-secondary px-1.5 py-0.5 rounded text-sm">
              {children}
            </code>
          ),
          code_block: ({ children }) => (
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm">{children}</code>
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/20 pl-4 italic mb-4">
              {children}
            </blockquote>
          ),
        }}
      />
    </div>
  );
}
