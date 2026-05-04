import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-products.jpg";

export const Route = createFileRoute("/")({ component: HomePage });

const categories = [
  { slug: "bags", name: "Bags", emoji: "👜", desc: "Everyday carry, elevated" },
  { slug: "gadgets", name: "Gadgets", emoji: "📱", desc: "Tech that just works" },
  { slug: "clothing", name: "Clothing", emoji: "👕", desc: "Wardrobe staples" },
  { slug: "shoes", name: "Shoes", emoji: "👟", desc: "Step up your game" },
  { slug: "perfumes", name: "Perfumes", emoji: "✨", desc: "Scents that linger" },
  { slug: "accessories", name: "Accessories", emoji: "💍", desc: "The finishing touch" },
] as const;

const trending = [
  { rank: "01", name: "Gadgets", note: "+128% this week" },
  { rank: "02", name: "Shoes", note: "Sneaker drop live" },
  { rank: "03", name: "Clothing", note: "New autumn picks" },
  { rank: "04", name: "Accessories", note: "Bestseller restocked" },
  { rank: "05", name: "Bags", note: "Editor's choice" },
];

const benefits = [
  { icon: "🚚", title: "Free shipping over $50", desc: "Fast tracked delivery to your door, no surprise fees." },
  { icon: "↩️", title: "30-day easy returns", desc: "Changed your mind? Send it back, no questions asked." },
  { icon: "🔒", title: "Secure checkout", desc: "256-bit encryption and trusted payment partners." },
  { icon: "💬", title: "Real human support", desc: "Chat with a real person, 7 days a week." },
];

const reviews = [
  { name: "Maya R.", role: "Verified buyer", quote: "I keep coming back. Quality I didn't expect at this price — and shipping was 2 days." },
  { name: "Daniel K.", role: "Verified buyer", quote: "Bought a bag and a perfume. Both feel premium. Returns were genuinely painless." },
  { name: "Priya S.", role: "Verified buyer", quote: "Beyond Basic lives up to its name. I've replaced half my wardrobe with their staples." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              New season · Up to 40% off
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              All the best,
              <br />
              <em className="text-primary not-italic">for a whole lot less.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bags, gadgets, fashion, shoes, perfumes — handpicked for quality,
              priced to make sense. Join 50,000+ shoppers who refuse to overpay.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth"
              >
                Start shopping →
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-foreground/10 text-foreground font-semibold hover:border-primary hover:text-primary transition-smooth"
              >
                Browse categories
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No account required · Guest checkout available</p>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="text-accent text-base">★★★★★</span>
                <span className="font-semibold text-foreground">4.9</span>
                <span>· 12,400+ reviews</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span>🚚</span> Free shipping over $50
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-cta opacity-20 blur-3xl rounded-full -z-10" />
            <img
              src={heroImg}
              alt="Curated selection of premium bags, gadgets, sneakers, perfume, clothing and accessories from Beyond Basic"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-elevated w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 max-w-xs">
              <div className="h-10 w-10 rounded-full bg-success/10 text-success flex items-center justify-center text-lg">✓</div>
              <div>
                <p className="text-sm font-semibold text-foreground">Free 2-day shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-card px-5 py-4 hidden sm:block">
              <p className="text-xs text-muted-foreground">Trusted by</p>
              <p className="font-display font-bold text-2xl text-foreground">50,000+</p>
              <p className="text-xs text-muted-foreground">happy shoppers</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border/60 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            ["🚚", "Free shipping $50+"],
            ["↩️", "30-day returns"],
            ["🔒", "Secure checkout"],
            ["⭐", "4.9 / 5 rated"],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-lg">{icon}</span>
              <span className="font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Shop by category</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Find your next favorite thing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six curated worlds. Thousands of pieces. Zero filler.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((c, i) => (
            <Link
              key={c.name}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth border border-border/60"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl lg:text-5xl">{c.emoji}</div>
              <h3 className="mt-4 font-display text-xl lg:text-2xl font-bold text-foreground">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                Shop {c.name.toLowerCase()} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section id="trending" className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">This week</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
              Top 5 trending categories
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              What 50,000+ shoppers are loving right now. Restocked weekly — when
              they're gone, they're really gone.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-smooth"
            >
              Browse trending →
            </Link>
          </div>
          <ol className="space-y-3">
            {trending.map((t) => (
              <li
                key={t.rank}
                className="group flex items-center gap-5 bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-smooth cursor-pointer"
              >
                <span className="font-display text-4xl font-bold text-primary/30 group-hover:text-primary transition-smooth w-14">
                  {t.rank}
                </span>
                <div className="flex-1">
                  <p className="font-display text-xl font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.note}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth">→</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Why Beyond Basic</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Premium experience. No premium markup.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-6 border border-border/60 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-2xl flex items-center justify-center">{b.icon}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">Real shoppers</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
              4.9 stars. 12,400+ reviews.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-card rounded-2xl p-6 shadow-card flex flex-col">
                <div className="text-accent text-lg">★★★★★</div>
                <blockquote className="mt-4 text-foreground leading-relaxed flex-1">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-cta text-primary-foreground flex items-center justify-center font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE / FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)",
          }} />
          <div className="relative max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider">
              30-day happiness guarantee
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Love it, or send it back.
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Try anything risk-free for 30 days. If it's not right, return it for
              a full refund — no forms, no fuss, no restocking fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition-smooth"
              >
                Shop now →
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-smooth"
              >
                Keep browsing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
