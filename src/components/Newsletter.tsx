export default function Newsletter() {
  return (
    <section id="subscribe" className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 border border-orange-100 px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="relative">
          <p className="text-xs tracking-[0.25em] uppercase text-orange-700 mb-6">The Sunday Letter</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-5 max-w-2xl mx-auto leading-tight">
            One thoughtful essay in your inbox, every Sunday morning.
          </h2>
          <p className="text-stone-600 max-w-lg mx-auto mb-10 leading-relaxed">
            No trackers, no clickbait, no “growth hacks.” Just something worth reading with your coffee.
            Nine thousand quiet subscribers already do.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-5">Free forever. Unsubscribe with one click.</p>
        </div>
      </div>
    </section>
  );
}
