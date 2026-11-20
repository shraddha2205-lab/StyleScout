
"use client";

import { useState, type FormEvent } from "react";
import { useShop } from "./ShopContext";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { cartCount, wishlist } = useShop();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    window.location.href = `/?search=${encodeURIComponent(search.trim())}`;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#fffaf8]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 py-4">

        <a
          href="/"
          className="shrink-0 text-2xl font-semibold tracking-tight text-stone-900"
        >
          Style<span className="text-rose-400">Scout</span>
        </a>

        <form onSubmit={handleSearch} className="flex-1">
          <div className="mx-auto max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dresses, tops, kurtis..."
              className="w-full rounded-full border border-stone-200 bg-white px-5 py-3 text-sm outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
            />
          </div>
        </form>

        <div className="hidden items-center gap-6 text-sm text-stone-600 lg:flex">
          <a href="/" className="hover:text-rose-400">Home</a>
          <a href="/#categories" className="hover:text-rose-400">Explore</a>
          <a href="/#videos" className="hover:text-rose-400">Videos</a>
        </div>

        <a
          href="/Wishlist"
          className="relative flex items-center gap-1 text-xl text-stone-700 transition hover:text-rose-500"
          title="Wishlist"
        >
          ♡
          <span className="hidden text-sm sm:inline">Wishlist</span>
          {wishlist.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-400 px-1 text-xs text-white">
              {wishlist.length}
            </span>
          )}
        </a>

        <a
          href="/cart"
          className="relative flex items-center gap-1 text-xl text-stone-700 transition hover:text-rose-500"
          title="Shopping Cart"
        >
          🛍️
          <span className="hidden text-sm sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-400 px-1 text-xs text-white">
              {cartCount}
            </span>
          )}
        </a>

        <button
          type="button"
          className="shrink-0 rounded-full border border-stone-300 px-4 py-2 text-sm transition hover:border-rose-400 hover:text-rose-400"
        >
          Login
        </button>

      </div>
    </nav>
  );
}
