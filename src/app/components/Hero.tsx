export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
          Discover • Style • Shop
        </p>

        <h2 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl">
          Find your next
          <span className="block text-rose-400">
            favourite look.
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
          Discover trending dresses, explore fashion inspiration and
          find your favourite looks across popular shopping platforms.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-stone-900 px-7 py-3 font-medium text-white transition hover:bg-rose-400">
            Explore Fashion
          </button>

          <button className="rounded-full border border-stone-300 bg-white px-7 py-3 font-medium text-stone-800 transition hover:border-rose-400 hover:text-rose-400">
            Watch Videos
          </button>
        </div>
      </div>

      <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"
          alt="Fashion collection"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}