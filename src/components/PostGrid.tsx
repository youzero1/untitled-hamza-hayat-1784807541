type Post = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  gradient: string;
  accent: string;
};

const posts: Post[] = [
  {
    title: 'A letter to the reader who is tired.',
    excerpt: 'Rest is not a reward you earn after finishing. It is the ground everything else grows from.',
    category: 'Essays',
    author: 'Marion Vasquez',
    date: 'Nov 09',
    readTime: '7 min',
    gradient: 'from-emerald-100 via-teal-200 to-cyan-300',
    accent: 'bg-emerald-300/50',
  },
  {
    title: 'The kitchen table as a small kind of temple.',
    excerpt: 'Notes on cooking for one, cooking for many, and the strange grace of a shared meal.',
    category: 'Craft',
    author: 'Ivo Karel',
    date: 'Nov 06',
    readTime: '9 min',
    gradient: 'from-rose-100 via-orange-200 to-amber-300',
    accent: 'bg-rose-300/50',
  },
  {
    title: 'What the woodworker knows that the writer forgets.',
    excerpt: 'On patience with materials, on the honest hour, on letting the wood tell you where it wants to split.',
    category: 'Interviews',
    author: 'Sena Alaric',
    date: 'Oct 30',
    readTime: '14 min',
    gradient: 'from-indigo-100 via-blue-200 to-sky-300',
    accent: 'bg-indigo-300/50',
  },
  {
    title: 'Walking as a form of thinking (and forgetting).',
    excerpt: 'A defense of the aimless afternoon, the long way home, the phone left face-down on the counter.',
    category: 'Essays',
    author: 'Iris Halden',
    date: 'Oct 24',
    readTime: '6 min',
    gradient: 'from-lime-100 via-emerald-200 to-teal-300',
    accent: 'bg-lime-300/50',
  },
  {
    title: 'How to keep a notebook that will actually be read.',
    excerpt: 'Seventeen years of index cards, marginalia, and the argument for writing things down by hand.',
    category: 'Craft',
    author: 'Bram Ostenholt',
    date: 'Oct 18',
    readTime: '11 min',
    gradient: 'from-fuchsia-100 via-purple-200 to-indigo-300',
    accent: 'bg-fuchsia-300/50',
  },
  {
    title: 'On loving a small town that is not your own.',
    excerpt: 'A year spent in a place with one bakery, one bookstore, and more sky than seems reasonable.',
    category: 'Stories',
    author: 'Odile Frère',
    date: 'Oct 11',
    readTime: '8 min',
    gradient: 'from-amber-100 via-yellow-200 to-orange-300',
    accent: 'bg-amber-300/50',
  },
];

export default function PostGrid() {
  return (
    <section id="stories" className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-3">The Journal</p>
          <h2 className="font-serif text-4xl text-stone-900 tracking-tight">Recent stories</h2>
        </div>
        <a href="#essays" className="hidden md:inline-block text-sm text-stone-600 hover:text-stone-900 underline underline-offset-4">
          View archive →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className={`aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} mb-5 relative`}>
              <div className={`absolute top-8 left-8 w-24 h-24 rounded-full ${post.accent} blur-2xl`} />
              <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full ${post.accent} blur-3xl`} />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest uppercase bg-stone-50/90 text-stone-800 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl leading-snug text-stone-900 mb-3 group-hover:text-orange-700 transition">
              {post.title}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-medium text-stone-700">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
