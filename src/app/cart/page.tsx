
"use client";

import { useShop } from "../components/ShopContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useShop();

  const totalAmount = cart.reduce((total, item) => {
    const price = Number(item.price.replace(/[^\d.]/g, ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">

        <a href="/" className="text-sm text-stone-500 hover:text-rose-400">
          ← Continue Shopping
        </a>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
            Your Shopping Bag
          </p>

          <h1 className="mt-2 text-4xl font-semibold text-stone-900">
            My Cart 🛍️
          </h1>

          <p className="mt-3 text-stone-500">
            Your favourite styles, ready to shop.
          </p>
        </div>

        {cart.length > 0 ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">

            <div className="space-y-5 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full rounded-xl object-cover sm:w-36"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-stone-900">
                        {item.name}
                      </h2>

                      <p className="mt-2 font-semibold text-stone-900">
                        {item.price}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4 rounded-full border border-stone-200 px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="text-lg hover:text-rose-500"
                        >
                          −
                        </button>

                        <span className="font-medium">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="text-lg hover:text-rose-500"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-sm text-stone-500 hover:text-rose-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-stone-500">
                <span>Total Items</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>

              <div className="mt-4 flex justify-between border-t border-stone-100 pt-4">
                <span className="font-medium text-stone-700">Total Amount</span>
                <span className="text-xl font-semibold text-stone-900">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                disabled
                className="mt-7 w-full cursor-not-allowed rounded-full bg-rose-300 px-6 py-3 font-medium text-white opacity-70"
              >
                Checkout Coming Soon
              </button>

              <p className="mt-3 text-center text-xs text-stone-400">
                Online payment is not connected yet.
              </p>
            </div>

          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
            <p className="text-5xl">🛍️</p>

            <h2 className="mt-5 text-2xl font-semibold text-stone-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-stone-500">
              Discover something beautiful for your wardrobe.
            </p>

            <a
              href="/"
              className="mt-7 inline-block rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white hover:bg-rose-400"
            >
              Explore Fashion
            </a>
          </div>
        )}

      </div>
    </main>
  );
}
