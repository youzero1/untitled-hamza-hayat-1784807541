import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { getPostBySlug, posts } from '@/lib/posts';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl mb-4">Essay not found</h1>
          <p className="text-stone-600 mb-8">
            We could not locate that piece. It may have been moved to the archive.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-700 transition"
          >
            Back to essays
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition mb-10"
        >
          <span>←</span> All essays
        </Link>

        <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
          {post.category}
        </div>

        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-stone-900 mb-8">
          {post.title}
        </h1>

        <p className="text-xl text-stone-600 leading-relaxed mb-10 font-serif italic">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 pb-10 mb-10 border-b border-stone-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center font-serif text-lg text-stone-800">
            {post.author.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-stone-900">{post.author}</div>
            <div className="text-xs text-stone-500">{post.authorRole}</div>
          </div>
          <div className="text-right text-xs text-stone-500">
            <div>{post.date}</div>
            <div>{post.readTime}</div>
          </div>
        </div>

        <div className="prose-content space-y-6">
          {post.content.map((para, i) => (
            <p
              key={i}
              className={`text-lg leading-[1.8] text-stone-800 ${
                i === 0 ? 'first-letter:font-serif first-letter:text-6xl first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]' : ''
              }`}
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-stone-100 text-xs text-stone-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-2xl text-stone-900 mb-8">Keep reading</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
