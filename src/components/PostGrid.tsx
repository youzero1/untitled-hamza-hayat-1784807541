import { useState } from 'react';
import { posts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

const categories = ['All', 'Craft', 'Living', 'Places'];

export default function PostGrid() {
  const [active, setActive] = useState<string>('All');
  const rest = posts.slice(1); // exclude featured
  const filtered = active === 'All' ? rest : rest.filter((p) => p.category === active);

  return (
    <section id="categories" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h2 className="font-serif text-3xl text-stone-900 mb-2">Recent essays</h2>
          <p className="text-stone-600">
            A slow archive, updated monthly.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                active === cat
                  ? 'bg-stone-900 text-stone-50 border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-500">
          Nothing here yet. Check back next month.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
