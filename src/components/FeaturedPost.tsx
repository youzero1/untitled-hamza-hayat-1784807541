import { Link } from 'react-router-dom';
import { posts } from '@/lib/posts';

export default function FeaturedPost() {
  const post = posts[0];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-serif text-2xl text-stone-900">Featured essay</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Editor's pick
        </span>
      </div>

      <Link
        to={`/post/${post.slug}`}
        className="group grid md:grid-cols-2 gap-10 bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 transition"
      >
        <div className="relative h-72 md:h-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-50/90 backdrop-blur text-xs font-medium text-stone-700">
            {post.category}
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-stone-400" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-stone-900 mb-4 group-hover:text-stone-600 transition">
            {post.title}
          </h3>
          <p className="text-stone-600 leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center font-serif text-stone-800">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-medium text-stone-900">{post.author}</div>
              <div className="text-xs text-stone-500">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
