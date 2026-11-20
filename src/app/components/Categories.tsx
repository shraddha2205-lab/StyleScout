const categories = [
  "Dresses",
  "Tops",
  "Kurtis",
  "Sarees",
  "Western Wear",
];

export default function Categories() {
  return (
    <section className="bg-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
          Explore
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">
          Shop by category
        </h2>

        <p className="mt-3 max-w-xl text-stone-500">
          Find pieces that match your mood, style and personality.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`/?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-stone-300 bg-[#fffaf8] px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}