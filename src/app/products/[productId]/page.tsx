
const products = {
  "floral-summer-dress": {
    name: "Floral Summer Dress",
    price: "₹1,299",
    category: "Dresses",
    image: "https://m.media-amazon.com/images/I/71fJKbCU4xL._SY741_.jpg",
    description: "A beautiful floral summer dress for casual outings and brunches.",
    prices: [
      { name: "Amazon", price: 648 },
      { name: "Myntra", price: 899 },
      { name: "Meesho", price: null },
      { name: "Shopsy", price: null },
    ],
  },

  "elegant-white-top": {
    name: "Elegant White Top",
    price: "₹899",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "A clean and elegant white top for everyday styling.",
    prices: [
      { name: "Amazon", price: 899 },
      { name: "Myntra", price: 949 },
      { name: "Meesho", price: 699 },
      { name: "Shopsy", price: 799 },
    ],
  },

  "printed-ethnic-kurti": {
    name: "Printed Ethnic Kurti",
    price: "₹1,099",
    category: "Kurtis",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    description: "A stylish printed kurti for everyday ethnic wear.",
    prices: [
      { name: "Amazon", price: 1099 },
      { name: "Myntra", price: 1149 },
      { name: "Meesho", price: 799 },
      { name: "Shopsy", price: 899 },
    ],
  },

  "classic-party-dress": {
    name: "Classic Party Dress",
    price: "₹1,599",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    description: "A classic party dress for evening occasions.",
    prices: [
      { name: "Amazon", price: 1599 },
      { name: "Myntra", price: 1699 },
      { name: "Meesho", price: 1199 },
      { name: "Shopsy", price: 1399 },
    ],
  },

  "maroon-velvet-party-dress": {
    name: "Maroon Velvet Party Dress",
    price: "₹999",
    category: "Party Wear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    description: "A beautiful wine-maroon party dress with a bodycon fit, square neckline and elegant evening look.",
    prices: [
      { name: "Meesho", price: 365 },
      { name: "Myntra", price: 990 },
      { name: "Shopsy", price: 871 },
      { name: "Amazon", price: 579 },
    ],
  },
};


function getStoreUrl(store: string, productId: string) {
  // Maroon Velvet Party Dress
  if (productId === "maroon-velvet-party-dress") {
    const links: Record<string, string> = {
      Meesho:
        "https://www.meesho.com/womens-premium-maroon-ruched-bodycon-maxi-dress-square-neck-sleeveless-stretch-fit-party-wear-long-dress/p/h8j78b",
      Myntra:
        "https://www.myntra.com/Dresses/INFITROB/INFITROB-Velvet-Bodycon-Dress/46735231/buy",
    };

    return links[store] || null;
  }

  // Floral Summer Dress
  if (productId === "floral-summer-dress") {
    if (store === "Amazon") {
      return "https://www.amazon.in/GRECIILOOKS-Elegant-Dresses-Occasions-GL-WD1334-S-BLUE/dp/B0FPB7223G";
    }

    return null;
  }

  // Other Products
  const product = products[productId as keyof typeof products];
  if (!product) return null;

  const query = encodeURIComponent(product.name);

  const urls: Record<string, string> = {
    Amazon: `https://www.amazon.in/s?k=${query}`,
    Myntra: `https://www.myntra.com/search?q=${query}`,
    Meesho: `https://www.meesho.com/search?q=${query}`,
    Shopsy: `https://www.shopsy.in/search?q=${query}`,
  };

  return urls[store] || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf7f5]">
        <h1 className="text-2xl font-semibold text-stone-900">
          Product not found
        </h1>
      </main>
    );
  }

  const stores = product.prices
    .map((store) => ({
      ...store,
      url: getStoreUrl(store.name, productId),
    }))
    .sort(
      (a, b) =>
        (a.price ?? Infinity) - (b.price ?? Infinity)
    );

  const availableStores = stores.filter(
    (store) => store.url && store.price !== null
  );

  const lowestPrice = availableStores.length
    ? Math.min(...availableStores.map((store) => store.price!))
    : null;

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-sm text-stone-500 transition hover:text-rose-400"
        >
          ← Back to StyleScout
        </a>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-400">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-stone-900">
              {product.price}
            </p>

            <p className="mt-6 leading-7 text-stone-600">
              {product.description}
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-stone-900">
                Compare Prices
              </h2>

              <p className="mt-2 text-xs text-stone-500">
                Demo prices only. Prices and availability are not live.
                Verify product details before buying.
              </p>

              <div className="mt-5 space-y-3">
                {stores.map((store) => (
                  <div
                    key={store.name}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white p-4"
                  >
                    <div>
                      <p className="font-semibold text-stone-900">
                        {store.name}
                      </p>

                      <p className="mt-1 text-lg font-semibold text-stone-800">
                        {store.price !== null
                          ? `₹${store.price.toLocaleString("en-IN")}`
                          : "Not available"}
                      </p>

                      {store.url &&
                        store.price !== null &&
                        store.price === lowestPrice && (
                          <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            Lowest Demo Price
                          </span>
                        )}
                    </div>

                    {store.url && store.price !== null ? (
                      <a
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-rose-400"
                      >
                        Buy Now ↗
                      </a>
                    ) : (
                      <span className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-500">
                        Unavailable
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
