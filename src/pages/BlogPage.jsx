import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      title: "Getting Started with React Hooks",
      date: "2024-01-15",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      title: "Building RESTful APIs with Node.js",
      date: "2024-01-10",
      excerpt: "A comprehensive guide to creating robust and scalable APIs using Node.js and Express.",
      tags: ["Node.js", "API", "Backend"]
    },
    {
      title: "Database Design Best Practices",
      date: "2024-01-05",
      excerpt: "Essential principles for designing efficient and maintainable database schemas.",
      tags: ["Database", "PostgreSQL", "Design"]
    }
  ];

  return (
    <main className="container" style={{ paddingTop: 'var(--header-height)' }}>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)' }}>
          Blog
        </h1>
        <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>
          Thoughts and insights about technology and development.
        </p>

        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          {posts.map((post, index) => (
            <article key={index} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-lg)' }}>
              <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-light)', marginBottom: 'var(--space-sm)' }}>
                {post.date}
              </p>
              <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-sm)' }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-light)',
                    padding: '4px 8px',
                    border: '1px solid var(--color-border)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
