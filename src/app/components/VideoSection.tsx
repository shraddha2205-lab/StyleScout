const videos = [
  {
    title: "Soft Feminine Look",
    category: "Everyday Style",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Weekend Outfit",
    category: "Casual Style",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Elegant Evening",
    category: "Party Wear",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Minimal Chic",
    category: "Trending Style",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=85",
  },
];

export default function VideoSection() {
  return (
    <section className="bg-stone-950 px-6 py-20 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
            Fashion inspiration
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            See it. Love it. Style it.
          </h2>

          <p className="mt-4 text-stone-400">
            Explore short fashion videos and discover new outfit ideas,
            styling inspiration and trending looks.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group relative h-[430px] overflow-hidden rounded-3xl"
            >
              <img
                src={video.image}
                alt={video.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <button
                aria-label={`Play ${video.title}`}
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-stone-900 shadow-lg transition hover:scale-110"
              >
                ▶
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-widest text-rose-200">
                  {video.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 rounded-full bg-white px-7 py-3 font-medium text-stone-900 transition hover:bg-rose-300">
          Explore Videos
        </button>
      </div>
    </section>
  );
}