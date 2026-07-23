import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-stone-50/80 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-serif text-lg">
            F
          </span>
          <span className="font-serif text-xl tracking-tight text-stone-900">
            Field Notes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-stone-900 transition ${isActive ? 'text-stone-900 font-medium' : ''}`
            }
          >
            Essays
          </NavLink>
          <a href="/#categories" className="hover:text-stone-900 transition">
            Categories
          </a>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-stone-900 transition ${isActive ? 'text-stone-900 font-medium' : ''}`
            }
          >
            About
          </NavLink>
          <a href="/#newsletter" className="hover:text-stone-900 transition">
            Newsletter
          </a>
        </nav>

        <a
          href="/#newsletter"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-stone-900 text-stone-50 text-sm hover:bg-stone-700 transition"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
