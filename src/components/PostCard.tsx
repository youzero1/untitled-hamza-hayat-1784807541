import { Link } from 'react-router-dom';
import type { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-sm transition"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
          <span className="uppercase tracking-wider font-medium text-stone-700">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-stone-400" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-serif text-xl leading-snug text-stone-900 mb-3 group-hover:text-stone-600 transition">
          {post.title}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs text-stone-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
