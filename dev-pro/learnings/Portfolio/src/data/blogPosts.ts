export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "React",
    content: `
# Getting Started with React Hooks

React Hooks have revolutionized how we write React components. Let's explore the basics!

## useState Hook

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

The useState hook lets you add state to functional components.

## useEffect Hook

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

useEffect handles side effects in your components.
    `
  },
  {
    id: '2',
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for building maintainable and scalable backend services using Node.js and Express.",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    category: "Backend",
    content: `
# Building Scalable APIs with Node.js

Learn how to build robust APIs that can handle growth.

## Project Structure

\`\`\`javascript
/src
  /controllers
  /models
  /routes
  /middleware
  /utils
\`\`\`

## Error Handling

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});
\`\`\`
    `
  },
  {
    id: '3',
    title: "Modern CSS Techniques",
    excerpt: "Exploring modern CSS features and techniques for building better user interfaces.",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    category: "CSS",
    content: `
# Modern CSS Techniques

Discover the power of modern CSS features.

## CSS Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties

\`\`\`css
:root {
  --primary-color: #007bff;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`
    `
  }
];