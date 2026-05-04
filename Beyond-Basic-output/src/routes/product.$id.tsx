import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProduct } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const p = getProduct(id);
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-primary underline">Browse all products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/shop/$category" params={{ category: p.categorySlug }} className="text-sm text-muted-foreground hover:text-primary">
          \u2190 Back to {p.category}
        </Link>
        <div className="mt-6 grid lg:grid-cols-2 gap-12">
          <div className="relative bg-gradient-soft rounded-3xl aspect-square flex items-center justify-center">
            <span className="text-[12rem]" aria-hidden>{p.emoji}</span>
            {p.oldPrice && (
              <span className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider">
                Sale \u00b7 Save ${p.oldPrice - p.price}
              </span>
            )}
          </div>
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">{p.category}</p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">{p.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-accent">\u2605\u2605\u2605\u2605\u2605</span>
              <span className="font-semibold">{p.rating}</span>
              <span className="text-muted-foreground">\u00b7 {p.reviews} reviews</span>
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-foreground">${p.price}</span>
              {p.oldPrice && <span className="text-lg text-muted-foreground line-through">${p.oldPrice}</span>}
            </div>
            <p className="mt-6 text-foreground/80 leading-relaxed">{p.description}</p>
            <ul className="mt-6 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="text-success">\u2713</span> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center border border-border rounded-full overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-muted">\u2212</button>
                <span className="px-4 font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-muted">+</button>
              </div>
              <button
                onClick={() => { add(p, qty); toast.success(`${p.name} added to cart`); }}
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-smooth"
              >
                Add to cart
              </button>
              <button
                onClick={() => { add(p, qty); navigate({ to: "/checkout" }); }}
                className="hidden sm:inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth"
              >
                Buy now
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">\U0001f69a Free shipping over $50</div>
              <div className="flex items-center gap-2">\u21a9\ufe0f 30-day easy returns</div>
              <div className="flex items-center gap-2">\U0001f512 Secure checkout</div>
              <div className="flex items-center gap-2">\U0001f4ac Real human support</div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
