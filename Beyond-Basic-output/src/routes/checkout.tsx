import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/lib/cart";

type PayMode = "card" | "paypal" | "apple" | "cod";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = useState<PayMode>("card");
  const [submitting, setSubmitting] = useState(false);
  const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 6;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-6xl">🛒</div>
            <h1 className="mt-4 font-display text-3xl font-bold">Nothing to check out yet</h1>
            <p className="mt-2 text-muted-foreground">Your cart is empty.</p>
            <Link to="/shop" className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-gradient-cta text-primary-foreground font-semibold">
              Browse products →
            </Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Order placed! A confirmation has been sent to your email.");
      clear();
      navigate({ to: "/" });
    }, 900);
  }

  const payOptions: { id: PayMode; label: string; icon: string; desc: string }[] = [
    { id: "card", label: "Credit / debit card", icon: "💳", desc: "Visa, Mastercard, Amex" },
    { id: "paypal", label: "PayPal", icon: "🅿️", desc: "You'll be redirected" },
    { id: "apple", label: "Apple Pay", icon: "", desc: "One-tap on supported devices" },
    { id: "cod", label: "Cash on delivery", icon: "💵", desc: "Pay when it arrives" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <form onSubmit={handleSubmit} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold">Checkout</h1>
            <p className="mt-1 text-sm text-muted-foreground">No account needed. We'll email your receipt.</p>
          </div>

          <section className="bg-card rounded-2xl border border-border/60 p-6">
            <h2 className="font-display text-xl font-bold">Contact</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
          </section>

          <section className="bg-card rounded-2xl border border-border/60 p-6">
            <h2 className="font-display text-xl font-bold">Shipping address</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
              <Field label="Address" name="address" className="sm:col-span-2" required />
              <Field label="City" name="city" required />
              <Field label="ZIP / Postal" name="zip" required />
              <Field label="Country" name="country" defaultValue="United States" required />
            </div>
          </section>

          <section className="bg-card rounded-2xl border border-border/60 p-6">
            <h2 className="font-display text-xl font-bold">Payment method</h2>
            <p className="mt-1 text-xs text-muted-foreground">All transactions are secure and encrypted.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {payOptions.map((opt) => (
                <label
                  key={opt.id}
                  className={`relative flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-smooth ${
                    pay === opt.id ? "border-primary bg-primary-soft/40" : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="pay"
                    value={opt.id}
                    checked={pay === opt.id}
                    onChange={() => setPay(opt.id)}
                    className="mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm flex items-center gap-2">
                      <span>{opt.icon}</span> {opt.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            {pay === "card" && (
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field label="Card number" name="card" placeholder="1234 5678 9012 3456" className="sm:col-span-2" required />
                <Field label="Expiry (MM/YY)" name="exp" placeholder="12/28" required />
                <Field label="CVC" name="cvc" placeholder="123" required />
              </div>
            )}
            {pay === "cod" && (
              <p className="mt-4 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                A small handling fee may apply. Pay in cash to the courier on delivery.
              </p>
            )}
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit bg-card rounded-2xl border border-border/60 p-6 shadow-card">
          <h2 className="font-display text-xl font-bold">Your order</h2>
          <ul className="mt-4 space-y-3 max-h-72 overflow-auto">
            {items.map(({ product, qty }) => (
              <li key={product.id} className="flex gap-3 items-center text-sm">
                <div className="relative h-12 w-12 rounded-lg bg-gradient-soft flex items-center justify-center text-xl shrink-0">
                  {product.emoji}
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">{qty}</span>
                </div>
                <p className="flex-1 truncate">{product.name}</p>
                <p className="font-semibold">${(product.price * qty).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2 text-sm border-t border-border pt-4">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd></div>
            <div className="flex justify-between"><dt>Tax (est.)</dt><dd>${tax.toFixed(2)}</dd></div>
            <div className="border-t border-border pt-3 flex justify-between font-display text-lg font-bold">
              <dt>Total</dt><dd>${total.toFixed(2)}</dd>
            </div>
          </dl>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth disabled:opacity-60"
          >
            {submitting ? "Placing order…" : `Place order · $${total.toFixed(2)}`}
          </button>
          <p className="mt-3 text-xs text-muted-foreground text-center">🔒 256-bit encrypted · 30-day returns</p>
        </aside>
      </form>
      <SiteFooter />
    </div>
  );
}

function Field({
  label, name, type = "text", className = "", ...rest
}: { label: string; name: string; type?: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">{label}</span>
      <input
        name={name}
        type={type}
        {...rest}
        className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
      />
    </label>
  );
}
