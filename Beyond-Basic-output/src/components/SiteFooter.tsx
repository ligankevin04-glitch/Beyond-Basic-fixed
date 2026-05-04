import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Beyond Basic" className="h-12 w-12 object-contain bg-background rounded-full p-1" />
            <span className="font-display font-bold text-xl">Beyond Basic</span>
          </div>
          <p className="mt-4 text-sm text-secondary-foreground/70 max-w-sm">
            All the best for a whole lot less. Curated bags, gadgets, fashion & more —
            shipped fast with a 30-day happiness guarantee.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Bags</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Gadgets</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Clothing</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Shoes</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Perfumes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Account</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/login" className="hover:text-primary-foreground transition-smooth">Log in</Link></li>
            <li><Link to="/signup" className="hover:text-primary-foreground transition-smooth">Create account</Link></li>
            <li><Link to="/forgot" className="hover:text-primary-foreground transition-smooth">Reset password</Link></li>
            <li><a href="#" className="hover:text-primary-foreground transition-smooth">Track order</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-secondary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Beyond Basic. All rights reserved.</p>
          <p>Free shipping over $50 · 30-day returns · Secure checkout</p>
        </div>
      </div>
    </footer>
  );
}
