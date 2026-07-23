export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-stone-50 font-serif text-lg">
            E
          </span>
          <span className="font-serif text-xl tracking-tight text-stone-900">Ember</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <a href="#featured" className="hover:text-stone-900 transition">Featured</a>
          <a href="#stories" className="hover:text-stone-900 transition">Stories</a>
          <a href="#essays" className="hover:text-stone-900 transition">Essays</a>
          <a href="#about" className="hover:text-stone-900 transition">About</a>
        </nav>

        <a
          href="#subscribe"
          className="text-sm px-4 py-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-700 transition"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
