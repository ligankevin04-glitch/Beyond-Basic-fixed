import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/shop/")({ component: ShopIndex });

function ShopIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Shop</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-foreground">Everything in one place</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Browse freely — no account required. Add to cart, check out as guest.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary hover:text-primary transition-smooth text-sm font-medium"
            >
              <span>{c.emoji}</span> {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
