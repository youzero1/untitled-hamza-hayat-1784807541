export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-stone-500">
          <span className="w-8 h-px bg-stone-400" />
          Issue 07 — Spring 2025
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-stone-900 mb-6">
          Slow essays on
          <br />
          <span className="italic text-stone-600">writing, place, and</span>
          <br />
          paying attention.
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
          Field Notes is a quiet corner of the internet for long-form writing about
          craft, small places, and the habits that hold a life together. New pieces
          arrive on the second Thursday of every month.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-stone-500">
          <span>Since 2021</span>
          <span className="w-1 h-1 rounded-full bg-stone-400" />
          <span>42 essays</span>
          <span className="w-1 h-1 rounded-full bg-stone-400" />
          <span>4,800 subscribers</span>
        </div>
      </div>
    </section>
  );
}
