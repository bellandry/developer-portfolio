"use client";

import { RichTextContent } from "@/types/project";
import { RichText as HygraphRichText } from "@graphcms/rich-text-react-renderer";
import React from "react";
import { CodeBlock } from "./code-block";

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
            <ol className="list-decimal list-inside space-y-1 mb-4">
              {children}
            </ol>
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
          code_block: ({ children }) => {
            // Add type guard to check if children is a React element
            const isReactElement = (
              child: any
            ): child is React.ReactElement => {
              return child && typeof child === "object" && "props" in child;
            };

            // Try to get the raw text content
            let codeContent = "";

            if (typeof children === "string") {
              codeContent = children;
            } else if (Array.isArray(children)) {
              // Handle array of children
              const firstChild = children[0];
              if (isReactElement(firstChild)) {
                const text =
                  firstChild.props?.text ||
                  firstChild.props?.content ||
                  firstChild.props?.children;

                if (Array.isArray(text)) {
                  codeContent = text[0]?.children[0]?.text || "";
                } else {
                  codeContent =
                    typeof text === "string"
                      ? text
                      : JSON.stringify(text, null, 2);
                }
              }
            } else if (isReactElement(children)) {
              // Handle single React element
              const text =
                children.props?.text ||
                children.props?.content ||
                children.props?.children;

              if (Array.isArray(text)) {
                codeContent = text[0]?.children
                  ? text[0]?.children[0]?.text
                  : text[0]?.text;
              } else {
                codeContent =
                  typeof text === "string"
                    ? text
                    : JSON.stringify(text, null, 2);
              }
            }

            return (
              <pre className=" mb-4">
                <CodeBlock code={codeContent} />
              </pre>
            );
          },
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
