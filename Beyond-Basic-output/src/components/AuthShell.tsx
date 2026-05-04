import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Brand panel */}
      <aside className="hidden lg:flex flex-col justify-between p-12 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 60%, white 0%, transparent 35%)",
        }} />
        <Link to="/" className="relative flex items-center gap-3 z-10">
          <img src={logo} alt="" className="h-12 w-12 bg-white rounded-full p-1" />
          <span className="font-display font-bold text-2xl">Beyond Basic</span>
        </Link>
        <div className="relative z-10 max-w-md">
          <h2 className="font-display text-4xl font-bold leading-tight">
            All the best, <em className="text-accent">for a whole lot less.</em>
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
            Join 50,000+ smart shoppers who get premium bags, gadgets, fashion and
            more — at prices that don't make you wince.
          </p>
          <ul className="mt-8 space-y-3 text-primary-foreground/90">
            {[
              "Free shipping on orders over $50",
              "30-day no-questions-asked returns",
              "Member-only drops & early access",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 text-sm text-primary-foreground/60">
          ★★★★★ "Quality I didn't expect at this price." — Maya R.
        </p>
      </aside>

      {/* Form panel */}
      <main className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="lg:hidden mb-8 flex justify-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Beyond Basic" className="h-12 w-12" />
            <span className="font-display font-bold text-xl">Beyond Basic</span>
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-sm text-muted-foreground text-center">{footer}</div>}
        </div>
      </main>
    </div>
  );
}
