export default function Newsletter() {
  return (
    <section id="newsletter" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-2xl bg-stone-900 text-stone-50 px-8 md:px-16 py-16">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-300 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-rose-400 blur-3xl" />
        </div>
        <div className="relative max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">
            The monthly letter
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            One essay, once a month. Nothing else.
          </h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            No tracking pixels, no drip funnels, no "quick check-ins." Just a single,
            considered piece of writing on the second Thursday of each month, delivered
            to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-full bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-stone-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-stone-50 text-stone-900 font-medium hover:bg-amber-100 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-4">
            4,800 readers. Unsubscribe with one click, whenever.
          </p>
        </div>
      </div>
    </section>
  );
}
