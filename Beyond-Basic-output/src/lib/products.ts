export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  rating: number;
  reviews: number;
  short: string;
  description: string;
  features: string[];
};

export const CATEGORIES = [
  { slug: "bags", name: "Bags", emoji: "👜", desc: "Everyday carry, elevated" },
  { slug: "gadgets", name: "Gadgets", emoji: "📱", desc: "Tech that just works" },
  { slug: "clothing", name: "Clothing", emoji: "👕", desc: "Wardrobe staples" },
  { slug: "shoes", name: "Shoes", emoji: "👟", desc: "Step up your game" },
  { slug: "perfumes", name: "Perfumes", emoji: "✨", desc: "Scents that linger" },
  { slug: "accessories", name: "Accessories", emoji: "💍", desc: "The finishing touch" },
] as const;

export const PRODUCTS: Product[] = [
  // Bags
  { id: "bag-01", name: "Metro Commuter Backpack", category: "Bags", categorySlug: "bags", price: 79, oldPrice: 109, emoji: "🎒", rating: 4.8, reviews: 412, short: "Water-resistant 22L pack with padded laptop sleeve.", description: "Built for the daily grind. The Metro Commuter fits a 16\" laptop, has a hidden anti-theft pocket, and shrugs off rain with its recycled ripstop shell.", features: ["Fits 16\" laptop", "Water-resistant shell", "Hidden back pocket", "Padded ergonomic straps"] },
  { id: "bag-02", name: "Weekender Duffel", category: "Bags", categorySlug: "bags", price: 95, emoji: "👜", rating: 4.7, reviews: 218, short: "Cabin-sized weekender in vegan leather.", description: "Two days, one bag. Soft vegan leather, brass hardware, and a separate shoe compartment so your sneakers don't meet your shirts.", features: ["Cabin-approved size", "Vegan leather", "Shoe compartment", "Detachable shoulder strap"] },
  { id: "bag-03", name: "Crossbody Sling", category: "Bags", categorySlug: "bags", price: 39, oldPrice: 55, emoji: "👝", rating: 4.6, reviews: 587, short: "Hands-free essentials carrier.", description: "Phone, wallet, keys, sunglasses — done. Adjustable strap, YKK zips, secret RFID-blocking pocket.", features: ["RFID-blocking pocket", "YKK zippers", "Adjustable strap"] },

  // Gadgets
  { id: "gad-01", name: "AirPulse Pro Earbuds", category: "Gadgets", categorySlug: "gadgets", price: 89, oldPrice: 129, emoji: "🎧", rating: 4.9, reviews: 1240, short: "Active noise cancellation, 32h battery.", description: "Studio-grade ANC in a feather-light shell. Dual mics for crystal-clear calls. 8 hours per charge, 32 with the case.", features: ["Active noise cancellation", "32h total battery", "IPX5 sweatproof", "Wireless charging case"] },
  { id: "gad-02", name: "Lumen Smart Watch", category: "Gadgets", categorySlug: "gadgets", price: 149, emoji: "⌚", rating: 4.7, reviews: 642, short: "Always-on AMOLED, 10-day battery.", description: "Track sleep, runs, heart rate, and 80+ workouts. AMOLED display you can read in sunlight, battery that lasts all week and then some.", features: ["10-day battery", "Heart rate + SpO2", "GPS tracking", "5ATM water resistance"] },
  { id: "gad-03", name: "PowerStack 20K", category: "Gadgets", categorySlug: "gadgets", price: 49, emoji: "🔋", rating: 4.8, reviews: 932, short: "20,000 mAh power bank with 65W USB-C.", description: "Charges a laptop. Charges a phone five times. Charges your day. Pass-through charging means it juices itself and your devices at once.", features: ["20,000 mAh", "65W USB-C PD", "Charges 3 devices", "Airline-safe"] },

  // Clothing
  { id: "clo-01", name: "Essential Crew Tee", category: "Clothing", categorySlug: "clothing", price: 24, emoji: "👕", rating: 4.6, reviews: 1842, short: "Heavyweight 100% organic cotton.", description: "The tee you'll reach for first. 240gsm organic cotton, garment-dyed for that perfect lived-in feel from day one.", features: ["240gsm organic cotton", "Pre-shrunk", "Garment-dyed", "Available in 8 colors"] },
  { id: "clo-02", name: "All-Day Joggers", category: "Clothing", categorySlug: "clothing", price: 59, oldPrice: 79, emoji: "👖", rating: 4.7, reviews: 524, short: "Tapered fit. Office-to-gym fabric.", description: "Looks like trousers. Feels like sweats. Four-way stretch, hidden zip pocket, tapered ankle that hits just right.", features: ["4-way stretch", "Hidden zip pocket", "Tapered fit", "Machine washable"] },
  { id: "clo-03", name: "Cloud Hoodie", category: "Clothing", categorySlug: "clothing", price: 69, emoji: "🧥", rating: 4.9, reviews: 718, short: "Brushed-fleece interior, structured shell.", description: "Soft on the inside, sharp on the outside. Heavyweight French terry with ribbed cuffs and a structured hood that actually holds its shape.", features: ["Heavyweight French terry", "Brushed interior", "Kangaroo pocket", "Reinforced cuffs"] },

  // Shoes
  { id: "sho-01", name: "Drift Runner", category: "Shoes", categorySlug: "shoes", price: 119, oldPrice: 149, emoji: "👟", rating: 4.8, reviews: 893, short: "Cushioned daily trainer with foam midsole.", description: "5km. 50km. Same shoe. Responsive foam midsole, breathable mesh upper, grippy rubber outsole engineered for road and treadmill.", features: ["Responsive foam midsole", "Breathable mesh upper", "Grippy rubber outsole", "Lightweight 240g"] },
  { id: "sho-02", name: "Court Classic Low", category: "Shoes", categorySlug: "shoes", price: 89, emoji: "👞", rating: 4.7, reviews: 412, short: "Minimal court silhouette, premium leather.", description: "A clean-lined tennis-inspired sneaker that goes with literally everything. Full-grain leather upper, padded collar, vulcanized rubber sole.", features: ["Full-grain leather", "Padded collar", "Vulcanized sole", "Cushioned insole"] },
  { id: "sho-03", name: "Trail Boot LX", category: "Shoes", categorySlug: "shoes", price: 159, emoji: "🥾", rating: 4.9, reviews: 261, short: "Waterproof hiking boot for serious miles.", description: "Built to go where the trail gets real. Waterproof membrane, aggressive lug pattern, and ankle support that doesn't sacrifice flexibility.", features: ["Waterproof membrane", "Vibram-style outsole", "Ankle support", "Recycled laces"] },

  // Perfumes
  { id: "per-01", name: "Amber Noir Eau de Parfum", category: "Perfumes", categorySlug: "perfumes", price: 79, emoji: "🌹", rating: 4.8, reviews: 384, short: "Warm amber, smoked vanilla, oud.", description: "An evening in a bottle. Opens with bergamot and pink pepper, settles into a heart of amber and rose, finishes with smoked vanilla and oud.", features: ["50ml EDP", "8-12hr longevity", "Cruelty-free", "Refillable bottle"] },
  { id: "per-02", name: "Citrus Bloom Cologne", category: "Perfumes", categorySlug: "perfumes", price: 55, oldPrice: 75, emoji: "🍋", rating: 4.6, reviews: 297, short: "Bright bergamot, neroli, cedar.", description: "Your fresh-out-of-the-shower scent — bottled. Sicilian bergamot, white neroli, soft cedar drydown. Uplifting, clean, never sharp.", features: ["100ml EDC", "All-day fresh", "Vegan formula", "Recycled glass"] },
  { id: "per-03", name: "Velvet Musk Body Mist", category: "Perfumes", categorySlug: "perfumes", price: 29, emoji: "💐", rating: 4.7, reviews: 612, short: "Soft skin musk with iris and sandalwood.", description: "The everyday scent that becomes your signature. Light enough for the office, addictive enough that strangers will ask what you're wearing.", features: ["150ml mist", "Skin-safe alcohol-free", "Iris + sandalwood", "Layerable"] },

  // Accessories
  { id: "acc-01", name: "Minimalist Bifold Wallet", category: "Accessories", categorySlug: "accessories", price: 45, emoji: "👛", rating: 4.8, reviews: 521, short: "Slim full-grain leather, RFID-blocking.", description: "Holds 8 cards and folded bills without the bulk. Full-grain leather that ages beautifully, RFID-blocking lining as standard.", features: ["Full-grain leather", "RFID-blocking", "Holds 8 cards", "Slim 8mm profile"] },
  { id: "acc-02", name: "Aviator Sunglasses", category: "Accessories", categorySlug: "accessories", price: 65, oldPrice: 89, emoji: "🕶️", rating: 4.7, reviews: 384, short: "Polarized lenses, lightweight titanium.", description: "Classic aviator, modern materials. Polarized lenses kill glare, titanium frame weighs almost nothing, spring hinges fit any face.", features: ["Polarized lenses", "Titanium frame", "Spring hinges", "UV400 protection"] },
  { id: "acc-03", name: "Woven Leather Belt", category: "Accessories", categorySlug: "accessories", price: 35, emoji: "🎀", rating: 4.6, reviews: 198, short: "Hand-woven leather, brass buckle.", description: "One belt, infinite holes — the woven design lets you cinch anywhere. Solid brass buckle that won't tarnish, vegetable-tanned leather.", features: ["Hand-woven", "Solid brass buckle", "Veg-tanned leather", "Adjustable anywhere"] },
];

export function getProductsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
