import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

import jewelry from "@/assets/shop-jewelry.jpg";
import khussa from "@/assets/shop-khussa.jpg";
import lehenga from "@/assets/shop-lehenga.jpg";
import pottery from "@/assets/shop-pottery.jpg";
import phulkari from "@/assets/textile-phulkari.jpg";
import bride from "@/assets/hero-bride.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "The Bazaar — Punjabi Heritage Atelier | VIRSA" },
      {
        name: "description",
        content:
          "Hand-crafted Phulkari, bridal couture, kundan jewelry, Multani pottery, and khussa — direct from artisans across Pakistani Punjab.",
      },
      { property: "og:title", content: "The Bazaar — Punjabi Heritage Atelier" },
      {
        property: "og:description",
        content:
          "Each piece is hand-crafted by artisans across Pakistani Punjab. Worldwide shipping from Lahore.",
      },
      { property: "og:image", content: lehenga },
      { property: "twitter:image", content: lehenga },
    ],
  }),
  component: ShopPage,
});

const categories = ["All", "Bridal Couture", "Jewelry", "Footwear", "Home Décor", "Textiles"];

const products = [
  { id: 1, name: "Maroon Zardozi Lehenga", artisan: "Sialkot Atelier", price: 480, tag: "Bridal Couture", img: lehenga },
  { id: 2, name: "Kundan & Pearl Choker Set", artisan: "Hira Mandi Workshop", price: 320, tag: "Jewelry", img: jewelry },
  { id: 3, name: "Mustard Tilla Khussa", artisan: "Multan Master Cobbler", price: 95, tag: "Footwear", img: khussa },
  { id: 4, name: "Multani Blue Floral Vase", artisan: "Multan Pottery House", price: 58, tag: "Home Décor", img: pottery },
  { id: 5, name: "Phulkari Heirloom Dupatta", artisan: "Bahawalpur Embroiderer", price: 180, tag: "Textiles", img: phulkari },
  { id: 6, name: "Bridal Sehra Crown", artisan: "Lahore Heritage Studio", price: 420, tag: "Bridal Couture", img: bride },
  { id: 7, name: "Jhumka Earrings — Gold Plated", artisan: "Anarkali Bazaar Goldsmith", price: 145, tag: "Jewelry", img: jewelry },
  { id: 8, name: "Hand-Painted Truck-Art Tray", artisan: "Rawalpindi Atelier", price: 75, tag: "Home Décor", img: pottery },
];

function ShopPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 phulkari-bg overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">The VIRSA Bazaar</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Heritage you can <span className="italic gold-text">hold.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece sourced directly from master artisans of Pakistani Punjab. Limited editions.
            Ethical pricing. Free worldwide shipping over $250.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 phulkari-bg">
        <div className="container mx-auto px-6">
          {/* Filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 -mx-6 px-6 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  i === 0
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {products.map((p) => (
              <article key={p.id} className="group flex flex-col">
                <div className="relative image-zoom aspect-[3/4] rounded-md bg-muted shadow-soft mb-4 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-ink to-transparent">
                    <div className="text-xs text-mustard tracking-[0.2em] uppercase">{p.artisan}</div>
                  </div>
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-primary mb-1.5">
                  {p.tag}
                </div>
                <h3 className="font-display text-xl md:text-2xl leading-tight mb-1">{p.name}</h3>
                <div className="mt-1 flex items-baseline justify-between">
                  <div className="font-medium">${p.price}</div>
                  <button className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors">
                    + Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan story */}
      <section className="bg-ink text-beige py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-zoom aspect-[4/5] rounded-md shadow-elegant order-2 lg:order-1">
            <img src={phulkari} alt="Phulkari embroidery in progress" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              variant="light"
              eyebrow="Behind Every Stitch"
              title="The hands that hold the thread."
              description="VIRSA partners directly with 47 artisan families across Punjab — from the Phulkari embroiderers of Bahawalpur to the blue potters of Multan. Fair wages. No middlemen. Every piece traceable to its maker."
            />
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-4xl text-mustard">47</div>
                <div className="text-xs text-beige/70 tracking-[0.15em] uppercase mt-1">Artisan families</div>
              </div>
              <div>
                <div className="font-display text-4xl text-mustard">12</div>
                <div className="text-xs text-beige/70 tracking-[0.15em] uppercase mt-1">Districts</div>
              </div>
              <div>
                <div className="font-display text-4xl text-mustard">100%</div>
                <div className="text-xs text-beige/70 tracking-[0.15em] uppercase mt-1">Handmade</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
