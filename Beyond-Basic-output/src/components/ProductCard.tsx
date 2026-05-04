import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group bg-card rounded-2xl border border-border/60 shadow-card hover:shadow-elevated transition-smooth overflow-hidden flex flex-col">
      <Link
        to="/product/$id"
        params={{ id: p.id }}
        className="relative aspect-square bg-gradient-soft flex items-center justify-center text-7xl group-hover:scale-105 transition-smooth"
      >
        <span aria-hidden>{p.emoji}</span>
        {p.oldPrice && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider">
            Sale
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{p.category}</p>
        <Link to="/product/$id" params={{ id: p.id }} className="mt-1">
          <h3 className="font-display text-lg font-bold text-foreground hover:text-primary transition-smooth leading-tight">
            {p.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2 flex-1">{p.short}</p>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <span className="text-accent">★</span>
          <span className="font-semibold text-foreground">{p.rating}</span>
          <span>({p.reviews})</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-foreground">${p.price}</span>
            {p.oldPrice && <span className="text-sm text-muted-foreground line-through">${p.oldPrice}</span>}
          </div>
          <button
            onClick={() => {
              add(p, 1);
              toast.success(`${p.name} added to cart`);
            }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-primary transition-smooth"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
