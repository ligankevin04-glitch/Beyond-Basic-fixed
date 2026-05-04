import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Beyond Basic" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-lg tracking-tight text-ink hidden sm:inline">
            Beyond Basic
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/shop" className="text-foreground/80 hover:text-primary transition-smooth">Shop</Link>
          <Link to="/shop/$category" params={{ category: "gadgets" }} className="text-foreground/80 hover:text-primary transition-smooth">Gadgets</Link>
          <Link to="/shop/$category" params={{ category: "clothing" }} className="text-foreground/80 hover:text-primary transition-smooth">Clothing</Link>
          <Link to="/shop/$category" params={{ category: "shoes" }} className="text-foreground/80 hover:text-primary transition-smooth">Shoes</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-muted transition-smooth"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
          >
            Log in
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-cta text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
          >
            Shop now
          </Link>
        </div>
      </div>
    </header>
  );
}
