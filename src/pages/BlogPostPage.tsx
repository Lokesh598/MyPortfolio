import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <BlogPost post={post} />
    </div>
  );
}