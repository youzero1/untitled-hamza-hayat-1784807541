export default function Hero() {
  return (
    <section id="featured" className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="h-px w-10 bg-stone-400" />
        <span className="text-xs tracking-[0.2em] uppercase text-stone-500">Issue No. 47 — November</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs tracking-widest uppercase text-orange-700 bg-orange-100 px-3 py-1 rounded-full mb-6">
            Featured Essay
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-stone-900 mb-6">
            The quiet art of doing one thing at a time.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
            On mornings without notifications, letters written by hand, and the small
            rebellions that make a life feel like your own again.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-stone-300 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">Iris Halden</p>
              <p className="text-xs text-stone-500">Nov 14 · 12 min read</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-orange-200 to-rose-300 shadow-2xl shadow-stone-300/40">
            <div className="w-full h-full relative">
              {/* soft abstract composition */}
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange-300/60 blur-2xl" />
              <div className="absolute bottom-16 right-8 w-48 h-48 rounded-full bg-rose-300/50 blur-3xl" />
              <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-200/70 blur-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl text-stone-50/80 italic">quiet.</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-stone-50 border border-stone-200 rounded-2xl p-4 shadow-lg shadow-stone-300/30 max-w-[220px]">
            <p className="font-serif text-sm text-stone-700 italic leading-snug">
              “Attention is the rarest and purest form of generosity.”
            </p>
            <p className="text-xs text-stone-500 mt-2">— Simone Weil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
