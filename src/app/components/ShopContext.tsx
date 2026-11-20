
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

type ShopContextType = {
  wishlist: string[];
  cart: CartItem[];
  toggleWishlist: (name: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, change: number) => void;
  cartCount: number;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("stylescout-wishlist");
      const savedCart = localStorage.getItem("stylescout-cart");

      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch {
      console.error("Unable to load saved shopping data");
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem("stylescout-wishlist", JSON.stringify(wishlist));
    localStorage.setItem("stylescout-cart", JSON.stringify(cart));
  }, [wishlist, cart, ready]);

  const toggleWishlist = (name: string) => {
    setWishlist((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  const addToCart = (product: Product) => {
    setCart((current) => {
      const exists = current.find((item) => item.name === product.name);

      if (exists) {
        return current.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((current) => current.filter((item) => item.name !== name));
  };

  const updateQuantity = (name: string, change: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,
        toggleWishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}
