import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const contributors = [
  {
    name: 'Elena Marsh',
    role: 'Editor & Founder',
    bio: 'Writes about craft and attention. Started Field Notes from a kitchen table in 2021.',
  },
  {
    name: 'Jonah Reeve',
    role: 'Contributor',
    bio: 'Essays on habit, place, and the slow parts of a life. Based in the north of England.',
  },
  {
    name: 'Priya Anand',
    role: 'Contributor',
    bio: 'Long walks, geology, and rivers. Writes twice a year, which is exactly enough.',
  },
  {
    name: 'Marcus Ehrlich',
    role: 'Contributor',
    bio: 'Reluctant hobbyist. Collects stamps and thinks about what markets cannot reach.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
          About the publication
        </div>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight mb-8">
          A small magazine, made slowly.
        </h1>
        <div className="space-y-6 text-lg leading-[1.8] text-stone-800">
          <p>
            Field Notes began in the winter of 2021 as a folder of drafts and a
            suspicion that the internet had gotten a little too loud. Four years later
            it is still, essentially, that — plus a mailing list, four regular writers,
            and one editor who insists on reading everything twice.
          </p>
          <p>
            We publish one essay a month. That is the pace. It will not change. We do
            not run advertising. We do not track you. If a piece takes six weeks to
            get right, it takes six weeks. If it takes six months, it takes six months.
          </p>
          <p>
            We are supported entirely by readers who like what we do and choose to pay
            for it. If that is you, thank you — genuinely. If it is not, that is also
            fine; everything on the site is free to read forever.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-3xl mb-10">The people</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {contributors.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-xl bg-white border border-stone-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center font-serif text-lg text-stone-800">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-stone-900">{c.name}</div>
                  <div className="text-xs text-stone-500">{c.role}</div>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{c.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="p-10 rounded-2xl bg-white border border-stone-200 text-center">
          <h3 className="font-serif text-2xl mb-3">Want to write for us?</h3>
          <p className="text-stone-600 mb-6 max-w-xl mx-auto">
            We commission two guest essays a year. Send a pitch — one paragraph is
            plenty — to the address below.
          </p>
          <div className="font-mono text-sm text-stone-800">
            pitches@fieldnotes.example
          </div>
          <Link
            to="/"
            className="inline-block mt-8 text-sm text-stone-500 hover:text-stone-900 transition"
          >
            ← Back to essays
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
