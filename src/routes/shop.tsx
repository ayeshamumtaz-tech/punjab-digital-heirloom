import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard, type Product } from "@/components/ProductCard";

import lehenga from "@/assets/shop-lehenga.jpg";
import lehenga2 from "@/assets/shop-lehenga-2.jpg";
import jewelry from "@/assets/shop-jewelry.jpg";
import jewelry2 from "@/assets/shop-jewelry-2.jpg";
import khussa from "@/assets/shop-khussa.jpg";
import khussa2 from "@/assets/shop-khussa-2.jpg";
import kohlapuri from "@/assets/shop-kohlapuri.jpg";
import kohlapuri2 from "@/assets/shop-kohlapuri-2.jpg";
import shalwarKameez from "@/assets/shop-shalwar-kameez-women.jpg";
import shalwarKameez2 from "@/assets/shop-shalwar-kameez-women-2.jpg";
import dhotiKurta from "@/assets/shop-dhoti-kurta.jpg";
import dhotiKurta2 from "@/assets/shop-dhoti-kurta-2.jpg";
import chooriyan from "@/assets/shop-kanch-chooriyan.jpg";
import chooriyan2 from "@/assets/shop-kanch-chooriyan-2.jpg";
import paranda from "@/assets/shop-paranda.jpg";
import paranda2 from "@/assets/shop-paranda-2.jpg";
import charpai from "@/assets/shop-charpai.jpg";
import charpai2 from "@/assets/shop-charpai-2.jpg";
import sandook from "@/assets/shop-sandook.jpg";
import sandook2 from "@/assets/shop-sandook-2.jpg";
import karhaiChadar from "@/assets/shop-karhai-chadar.jpg";
import karhaiChadar2 from "@/assets/shop-karhai-chadar-2.jpg";
import wallDecor from "@/assets/shop-wall-decor.jpg";
import wallDecor2 from "@/assets/shop-wall-decor-2.jpg";
import mattiBartan from "@/assets/shop-matti-bartan.jpg";
import mattiBartan2 from "@/assets/shop-matti-bartan-2.jpg";
import phulkari from "@/assets/textile-phulkari.jpg";
import karhaiChadarHero from "@/assets/shop-karhai-chadar.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "The Bazaar — Punjabi Heritage Atelier | VIRSA" },
      {
        name: "description",
        content:
          "Hand-crafted shalwar kameez, dhoti kurta, kohlapuri sandals, kanch chooriyan, paranday, charpai, sandook, karhai chadarein, gharay & wall decor — direct from artisans across Pakistani Punjab.",
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

const categories = [
  "All",
  "Apparel",
  "Bridal Couture",
  "Jewelry",
  "Footwear",
  "Textiles",
  "Home Décor",
] as const;

type Category = (typeof categories)[number];

const products: Product[] = [
  { id: 1, name: "Maroon Zardozi Lehenga", artisan: "Sialkot Atelier", price: 480, tag: "Bridal Couture", img: lehenga, imgAlt: lehenga2 },
  { id: 2, name: "Kundan & Pearl Choker Set", artisan: "Hira Mandi Workshop", price: 320, tag: "Jewelry", img: jewelry, imgAlt: jewelry2 },
  { id: 3, name: "Mustard Tilla Khussa", artisan: "Multan Master Cobbler", price: 95, tag: "Footwear", img: khussa, imgAlt: khussa2 },
  { id: 4, name: "Kohlapuri Leather Sandals", artisan: "Sahiwal Tannery", price: 78, tag: "Footwear", img: kohlapuri, imgAlt: kohlapuri2 },
  { id: 5, name: "Emerald Gota Shalwar Kameez", artisan: "Faisalabad Studio", price: 165, tag: "Apparel", img: shalwarKameez, imgAlt: shalwarKameez2 },
  { id: 6, name: "Cream Dhoti Kurta & Waistcoat", artisan: "Lahore Tailor House", price: 140, tag: "Apparel", img: dhotiKurta, imgAlt: dhotiKurta2 },
  { id: 7, name: "Kanch Ki Chooriyan — Stack of 12", artisan: "Hyderabad Glass Bazaar", price: 32, tag: "Jewelry", img: chooriyan, imgAlt: chooriyan2 },
  { id: 8, name: "Sheesha Paranda — Maroon", artisan: "Bahawalpur Embroiderer", price: 48, tag: "Jewelry", img: paranda, imgAlt: paranda2 },
  { id: 9, name: "Colorful Woven Charpai", artisan: "Sargodha Weaver", price: 220, tag: "Home Décor", img: charpai, imgAlt: charpai2 },
  { id: 10, name: "Hand-Carved Lakri Sandook", artisan: "Chiniot Wood Master", price: 540, tag: "Home Décor", img: sandook, imgAlt: sandook2 },
  { id: 11, name: "Karhai-Wali Chadar — Maroon", artisan: "Multan Embroiderer", price: 195, tag: "Textiles", img: karhaiChadar, imgAlt: karhaiChadar2 },
  { id: 12, name: "Phulkari Heirloom Dupatta", artisan: "Bahawalpur Atelier", price: 180, tag: "Textiles", img: phulkari, imgAlt: phulkari },
  { id: 13, name: "Truck-Art Wall Decor Set", artisan: "Rawalpindi Painter", price: 110, tag: "Home Décor", img: wallDecor, imgAlt: wallDecor2 },
  { id: 14, name: "Multani Painted Gharay (Set of 3)", artisan: "Multan Pottery House", price: 88, tag: "Home Décor", img: mattiBartan, imgAlt: mattiBartan2 },
];

function ShopPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.tag === active)),
    [active]
  );

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
          {/* Filter pills — interactive */}
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 -mx-6 px-6 scrollbar-hide">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-foreground text-background border-foreground shadow-soft"
                      : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                  {isActive && active !== "All" && (
                    <span className="ml-2 opacity-70 text-xs">({filtered.length})</span>
                  )}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <div className="font-display text-2xl mb-2">No pieces in this category yet.</div>
              <div className="text-sm">Check back next season.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artisan story */}
      <section className="bg-ink text-beige py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-zoom aspect-[4/5] rounded-md shadow-elegant order-2 lg:order-1">
            <img
              src={karhaiChadarHero}
              alt="Hand-embroidered karhai-wali chadar in progress"
              loading="lazy"
              width={1400}
              height={1750}
              className="h-full w-full object-cover"
            />
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
