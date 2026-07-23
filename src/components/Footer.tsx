export default function Footer() {
  return (
    <footer id="about" className="border-t border-stone-200 bg-stone-100/60 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-stone-50 font-serif text-lg">
                E
              </span>
              <span className="font-serif text-xl tracking-tight text-stone-900">Ember</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
              A journal on craft, curiosity, and the small work of paying attention.
              Printed quarterly. Published weekly. Read slowly.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Sections</p>
            <ul className="space-y-3 text-sm text-stone-700">
              <li><a href="#featured" className="hover:text-stone-900">Featured</a></li>
              <li><a href="#stories" className="hover:text-stone-900">Stories</a></li>
              <li><a href="#essays" className="hover:text-stone-900">Essays</a></li>
              <li><a href="#subscribe" className="hover:text-stone-900">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Elsewhere</p>
            <ul className="space-y-3 text-sm text-stone-700">
              <li><a href="#" className="hover:text-stone-900">Instagram</a></li>
              <li><a href="#" className="hover:text-stone-900">Substack</a></li>
              <li><a href="#" className="hover:text-stone-900">RSS</a></li>
              <li><a href="#" className="hover:text-stone-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Ember Journal. Set in Fraunces & Inter.
          </p>
          <p className="text-xs text-stone-500 italic font-serif">
            “The world is quiet here.”
          </p>
        </div>
      </div>
    </footer>
  );
}
