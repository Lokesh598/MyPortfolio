import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost as BlogPostType } from '../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />
      <div className="flex items-center space-x-4 mb-6">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
          {post.category}
        </span>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Calendar size={16} className="mr-1" />
          <span className="mr-4">{post.date}</span>
          <Clock size={16} className="mr-1" />
          <span>{post.readTime}</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{post.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}