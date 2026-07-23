import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-serif text-lg">
                F
              </span>
              <span className="font-serif text-xl tracking-tight text-stone-900">
                Field Notes
              </span>
            </div>
            <p className="text-stone-600 max-w-md leading-relaxed">
              Slow essays on writing, place, and paying attention. Independent since
              2021, reader-supported, and quietly proud of both.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-4">Read</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <Link to="/" className="hover:text-stone-900 transition">
                  All essays
                </Link>
              </li>
              <li>
                <a href="/#categories" className="hover:text-stone-900 transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="/#newsletter" className="hover:text-stone-900 transition">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-4">About</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <Link to="/about" className="hover:text-stone-900 transition">
                  The publication
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-900 transition">
                  Contributors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-900 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>© 2025 Field Notes. Set in Iowan Old Style and Inter.</div>
          <div>Made slowly, in a room with a window.</div>
        </div>
      </div>
    </footer>
  );
}
