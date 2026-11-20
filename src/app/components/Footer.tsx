export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-stone-900">
            Style<span className="text-rose-400">Scout</span>
          </h2>

          <p className="mt-2 text-sm text-stone-500">
            Discover fashion. Find your style.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-stone-500">
          <a href="#" className="transition hover:text-rose-400">
            About
          </a>

          <a href="#" className="transition hover:text-rose-400">
            Contact
          </a>

          <a href="#" className="transition hover:text-rose-400">
            Privacy
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-stone-100 pt-6 text-xs text-stone-400">
        © 2026 StyleScout. All rights reserved.
      </div>
    </footer>
  );
}