
"use client";

import { useEffect, useState } from "react";
import { useShop, Product } from "./ShopContext";

const products: (Product & { slug: string })[] = [
  {
    name: "Floral Summer Dress",
    slug: "floral-summer-dress",
    price: "₹1,299",
    category: "Dresses",
    image: "https://m.media-amazon.com/images/I/71fJKbCU4xL._SY741_.jpg",
  },
  {
    name: "Elegant White Top",
    slug: "elegant-white-top",
    price: "₹899",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Printed Ethnic Kurti",
    slug: "printed-ethnic-kurti",
    price: "₹1,099",
    category: "Kurtis",
    image:
      "https://laxmipati.com/cdn/shop/products/K21-1-A.jpg?v=1664269342&width=2048",
  },
  {
    name: "Classic Party Dress",
    slug: "classic-party-dress",
    price: "₹1,599",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Maroon Velvet Party Dress",
    slug: "maroon-velvet-party-dress",
    price: "₹999",
    category: "Party Wear",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TrendingProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { wishlist, toggleWishlist, addToCart } = useShop();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("search") || "");
    setCategory(params.get("category") || "");
  }, []);

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      !category ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="trending" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
          {category || (search ? "Search results" : "Trending now")}
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-stone-900">
          {category
            ? `${category} Collection`
            : search
            ? `Results for "${search}"`
            : "Looks you'll love"}
        </h2>

        <p className="mt-3 text-stone-500">
          Handpicked styles worth adding to your wardrobe.
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.name);

            return (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    onClick={() => toggleWishlist(product.name)}
                    aria-label="Toggle wishlist"
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow ${
                      isWishlisted ? "text-rose-500" : "text-stone-700"
                    }`}
                  >
                    {isWishlisted ? "♥" : "♡"}
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-stone-400">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-semibold text-stone-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 font-semibold text-stone-900">
                    {product.price}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 rounded-full bg-rose-400 px-3 py-3 text-sm font-medium text-white transition hover:bg-rose-500"
                    >
                      🛒 Add to Cart
                    </button>

                    <a
                      href={`/products/${product.slug}`}
                      className="rounded-full border border-stone-200 px-4 py-3 text-sm hover:border-rose-400"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl bg-white px-6 py-16 text-center">
          <p className="text-4xl">🔍</p>
          <h3 className="mt-4 text-xl font-semibold">
            No products found
          </h3>
          <p className="mt-2 text-stone-500">
            Try searching for dresses, tops or kurtis.
          </p>
        </div>
      )}
    </section>
  );
}
