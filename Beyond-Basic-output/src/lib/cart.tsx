import * as React from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = React.createContext<CartCtx | null>(null);
const STORAGE_KEY = "bb_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = React.useCallback((p: Product, qty = 1) => {
    setItems((curr) => {
      const found = curr.find((i) => i.product.id === p.id);
      if (found) return curr.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...curr, { product: p, qty }];
    });
  }, []);

  const remove = React.useCallback((id: string) => {
    setItems((curr) => curr.filter((i) => i.product.id !== id));
  }, []);

  const setQty = React.useCallback((id: string, qty: number) => {
    setItems((curr) =>
      qty <= 0
        ? curr.filter((i) => i.product.id !== id)
        : curr.map((i) => (i.product.id === id ? { ...i, qty } : i)),
    );
  }, []);

  const clear = React.useCallback(() => setItems([]), []);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, count, subtotal }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
