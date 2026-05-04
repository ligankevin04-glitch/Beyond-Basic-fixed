import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, getCategory, getProductsByCategory } from "@/lib/products";

export const Route = createFileRoute("/shop/$category")({
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = getCategory(category);
  const products = getProductsByCategory(category);

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Category not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-primary underline">Browse all products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary">\u2190 All shop</Link>
          <div className="mt-3 flex items-center gap-4">
            <span className="text-5xl">{cat.emoji}</span>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">{cat.name}</h1>
              <p className="mt-1 text-muted-foreground">{cat.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-smooth ${
                c.slug === cat.slug
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card border-border/60 hover:border-primary hover:text-primary"
              }`}
            >
              <span>{c.emoji}</span> {c.name}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
