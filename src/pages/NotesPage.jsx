import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const NotesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample notes data - Digital Garden style
  const notes = [
    {
      id: 1,
      title: "React useEffect Cleanup Pattern",
      category: "react",
      tags: ["react", "hooks", "cleanup"],
      date: "2024-01-15",
      content: `
## The Problem
Memory leaks in React components when async operations don't get cleaned up.

## The Solution
\`\`\`javascript
useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });
  
  return () => {
    isMounted = false;
  };
}, []);
\`\`\`

## Why This Works
The cleanup function sets \`isMounted\` to false, preventing state updates on unmounted components.
      `,
      type: "snippet"
    },
    {
      id: 2,
      title: "Docker Multi-stage Build for Node.js",
      category: "docker",
      tags: ["docker", "nodejs", "optimization"],
      date: "2024-01-12",
      content: `
## The Goal
Reduce Docker image size by ~70% using multi-stage builds.

\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Result
- Before: 1.2GB
- After: 340MB
- Build time: -40%
      `,
      type: "snippet"
    },
    {
      id: 3,
      title: "PostgreSQL Query Performance Debug",
      category: "database",
      tags: ["postgresql", "performance", "debugging"],
      date: "2024-01-10",
      content: `
## The Issue
Query taking 15+ seconds on production with 100k+ records.

## Investigation Steps
1. \`EXPLAIN ANALYZE\` showed sequential scan
2. Missing index on \`created_at\` column
3. Query was using \`LIKE '%pattern%'\` (can't use index)

## The Fix
\`\`\`sql
-- Added composite index
CREATE INDEX idx_posts_created_category 
ON posts(created_at DESC, category);

-- Rewrote query to use prefix matching
SELECT * FROM posts 
WHERE category = 'tech' 
AND created_at >= '2024-01-01'
ORDER BY created_at DESC;
\`\`\`

## Result
Query time: 15s → 45ms ⚡
      `,
      type: "debug"
    },
    {
      id: 4,
      title: "CSS Grid Auto-fit vs Auto-fill",
      category: "css",
      tags: ["css", "grid", "responsive"],
      date: "2024-01-08",
      content: `
## Always Confuse These Two

### auto-fit
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
\`\`\`
- Stretches items to fill available space
- Empty tracks collapse

### auto-fill
\`\`\`css
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
\`\`\`
- Maintains item size
- Creates empty tracks

## When to Use
- **auto-fit**: When you want items to grow
- **auto-fill**: When you want consistent sizing
      `,
      type: "note"
    },
    {
      id: 5,
      title: "Python List Comprehension Performance",
      category: "python",
      tags: ["python", "performance", "optimization"],
      date: "2024-01-05",
      lastUpdated: "2024-01-15",
      content: `
## Benchmark Results

Testing with 1M items:

\`\`\`python
# Method 1: List comprehension
result = [x*2 for x in range(1000000)]
# Time: 0.08s

# Method 2: map()
result = list(map(lambda x: x*2, range(1000000)))
# Time: 0.12s

# Method 3: for loop
result = []
for x in range(1000000):
    result.append(x*2)
# Time: 0.15s
\`\`\`

## Takeaway
List comprehensions are not just more readable, they're actually faster! 🚀

## Update (2024-01-15)
Tested with NumPy arrays - the performance gap becomes even more significant with larger datasets.
      `,
      type: "benchmark"
    },
    {
      id: 6,
      title: "TIL: Git Switch vs Checkout",
      category: "git",
      tags: ["git", "cli", "til"],
      date: "2024-01-20",
      content: `
## The Discovery
Found out that \`git switch\` is the new, cleaner way to change branches.

## Old Way
\`\`\`bash
git checkout feature-branch
git checkout -b new-feature
\`\`\`

## New Way
\`\`\`bash
git switch feature-branch
git switch -c new-feature
\`\`\`

## Why It's Better
- More intuitive: \`switch\` clearly means "change branches"
- Safer: Won't accidentally overwrite files like \`checkout\` might
- Cleaner: Separates branch operations from file operations

## Quick Reference
- \`git switch -\` → switch to previous branch (like \`cd -\`)
- \`git switch -c name\` → create and switch to new branch
- \`git switch --detach commit-hash\` → detached HEAD mode
      `,
      type: "til"
    },
    {
      id: 7,
      title: "Debugging: React Hydration Mismatch",
      category: "react",
      tags: ["react", "nextjs", "ssr", "debugging"],
      date: "2024-01-18",
      content: `
## The Problem
Getting "Hydration failed" errors in Next.js with seemingly identical server/client HTML.

## The Investigation Process
1. **First attempt**: Checked for obvious differences - none found
2. **Console inspection**: Error pointed to a \`<time>\` element
3. **Aha moment**: Date formatting was different on server vs client!

## The Root Cause
\`\`\`javascript
// This was the culprit
<time>{new Date().toLocaleString()}</time>
\`\`\`

Server renders in UTC, client renders in user's timezone.

## The Fix
\`\`\`javascript
// Solution 1: Use useEffect for client-only rendering
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

if (!mounted) return <time>Loading...</time>;
return <time>{new Date().toLocaleString()}</time>;

// Solution 2: Use consistent timezone
<time>{new Date().toISOString()}</time>
\`\`\`

## Lesson Learned
Always be suspicious of time-based content in SSR apps!
      `,
      type: "debug"
    },
    {
      id: 8,
      title: "CSS Trick: Perfect Center with Grid",
      category: "css",
      tags: ["css", "grid", "centering", "til"],
      date: "2024-01-22",
      content: `
## The Simplest Way to Center Anything

Forget flexbox complexity, this is the cleanest solution:

\`\`\`css
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
\`\`\`

## Why It's Amazing
- **One line**: \`place-items: center\` does both horizontal and vertical
- **No flex-direction confusion**: Just works
- **Responsive**: Automatically adapts to content size
- **Clean**: No need for multiple properties

## Before I Knew This
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

Three lines vs one. Grid wins! 🎯
      `,
      type: "til"
    }
  ];

  const categories = ['all', 'react', 'docker', 'database', 'css', 'python', 'git'];
  
  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'snippet': return '💻';
      case 'debug': return '🐛';
      case 'note': return '📝';
      case 'benchmark': return '⚡';
      case 'til': return '🌱';
      default: return '📄';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'snippet': return 'Code Snippet';
      case 'debug': return 'Debug Log';
      case 'note': return 'Note';
      case 'benchmark': return 'Performance';
      case 'til': return 'Today I Learned';
      default: return 'Note';
    }
  };

  return (
    <main className="page-container">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Digital Garden 🌱</h1>
          <p className="page-subtitle">
            A growing collection of thoughts, discoveries, and half-baked ideas.
            Unlike a blog, these notes evolve over time - they're living documents
            that capture my learning process, not polished final products.
          </p>
          <div className="garden-stats">
            <span className="stat-item">🌱 {notes.length} notes planted</span>
            <span className="stat-item">🏷️ {categories.length - 1} topics explored</span>
            <span className="stat-item">📅 Last tended: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="notes-controls">
          <div className="notes-search">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="notes-categories">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn ${selectedCategory === category ? 'category-btn--active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="notes-grid">
          {filteredNotes.map(note => (
            <article key={note.id} className="note-card">
              <div className="note-card__header">
                <div className="note-card__meta">
                  <span className="note-type" title={getTypeLabel(note.type)}>
                    {getTypeIcon(note.type)}
                  </span>
                  <div className="note-dates">
                    <span className="note-date">📅 {note.date}</span>
                    {note.lastUpdated && note.lastUpdated !== note.date && (
                      <span className="note-updated">🌱 Updated: {note.lastUpdated}</span>
                    )}
                  </div>
                </div>
                <h3 className="note-card__title">{note.title}</h3>
                <div className="note-card__tags">
                  {note.tags.map(tag => (
                    <span key={tag} className="note-tag">#{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="note-card__content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {note.content}
                </ReactMarkdown>
              </div>
            </article>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="notes-empty">
            <p>No notes found matching your criteria.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default NotesPage;
