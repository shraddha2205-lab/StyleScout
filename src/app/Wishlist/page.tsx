
"use client";

import { useShop } from "../components/ShopContext";

const products = [
  {
    name: "Floral Summer Dress",
    price: "₹1,299",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elegant White Top",
    price: "₹899",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Printed Ethnic Kurti",
    price: "₹1,099",
    category: "Kurtis",
    image: "https://laxmipati.com/cdn/shop/products/K21-1-A.jpg?v=1664269342&width=2048",
  },
  {
    name: "Classic Party Dress",
    price: "₹1,599",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
  },
];

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.name)
  );

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-stone-500 hover:text-rose-400">
          ← Back to StyleScout
        </a>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
            Your favourites
          </p>

          <h1 className="mt-2 text-4xl font-semibold text-stone-900">
            My Wishlist ♡
          </h1>

          <p className="mt-3 text-stone-500">
            Your saved fashion pieces, all in one place.
          </p>
        </div>

        {wishlistProducts.length > 0 ? (
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {wishlistProducts.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                  <button
                    onClick={() => toggleWishlist(product.name)}
                    className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white text-xl text-rose-500 shadow-sm"
                  >
                    ♥
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-stone-400">
                    {product.category}
                  </p>

                  <h2 className="mt-2 font-semibold text-stone-900">
                    {product.name}
                  </h2>

                  <p className="mt-3 font-semibold text-stone-900">
                    {product.price}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 rounded-full bg-rose-400 px-4 py-2 text-sm text-white hover:bg-rose-500"
                    >
                      🛒 Add to Cart
                    </button>

                    <button
                      onClick={() => toggleWishlist(product.name)}
                      className="rounded-full border border-stone-200 px-4 py-2 text-sm hover:border-rose-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
            <p className="text-5xl">♡</p>

            <h2 className="mt-5 text-2xl font-semibold text-stone-900">
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-stone-500">
              Save your favourite styles and find them here later.
            </p>

            <a
              href="/"
              className="mt-7 inline-block rounded-full bg-stone-900 px-7 py-3 text-sm text-white hover:bg-rose-400"
            >
              Explore Fashion
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
