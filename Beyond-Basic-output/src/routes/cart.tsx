import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const { items, setQty, remove, subtotal, count } = useCart();
  const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 6;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div className="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground">Your cart</h1>
        <p className="mt-1 text-muted-foreground">{count} item{count === 1 ? "" : "s"}</p>

        {items.length === 0 ? (
          <div className="mt-12 bg-card rounded-3xl border border-border/60 p-12 text-center">
            <div className="text-6xl">🛒</div>
            <h2 className="mt-4 font-display text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Find something you'll love.</p>
            <Link to="/shop" className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth">
              Start shopping →
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="bg-card rounded-2xl border border-border/60 p-4 flex gap-4 items-center">
                  <Link to="/product/$id" params={{ id: product.id }} className="h-24 w-24 rounded-xl bg-gradient-soft flex items-center justify-center text-4xl shrink-0">
                    {product.emoji}
                  </Link>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase">{product.category}</p>
                    <Link to="/product/$id" params={{ id: product.id }} className="font-display text-lg font-bold hover:text-primary block truncate">
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{product.short}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="inline-flex items-center border border-border rounded-full overflow-hidden text-sm">
                        <button onClick={() => setQty(product.id, qty - 1)} className="px-3 py-1.5 hover:bg-muted">−</button>
                        <span className="px-3 font-semibold">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="px-3 py-1.5 hover:bg-muted">+</button>
                      </div>
                      <button onClick={() => remove(product.id)} className="text-xs text-muted-foreground hover:text-destructive">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-bold">${(product.price * qty).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">${product.price} each</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-card rounded-2xl border border-border/60 p-6 h-fit shadow-card">
              <h2 className="font-display text-xl font-bold">Order summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
                <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd></div>
                {subtotal > 0 && subtotal < 50 && (
                  <p className="text-xs text-muted-foreground">Add ${(50 - subtotal).toFixed(2)} more for free shipping.</p>
                )}
                <div className="border-t border-border pt-3 flex justify-between font-display text-lg font-bold">
                  <dt>Total</dt><dd>${total.toFixed(2)}</dd>
                </div>
              </dl>
              <Link
                to="/checkout"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth"
              >
                Checkout →
              </Link>
              <Link to="/shop" className="mt-3 w-full inline-flex items-center justify-center text-sm text-muted-foreground hover:text-primary">
                Continue shopping
              </Link>
              <p className="mt-4 text-xs text-muted-foreground text-center">🔒 Secure 256-bit checkout · No account required</p>
            </aside>
          </div>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
