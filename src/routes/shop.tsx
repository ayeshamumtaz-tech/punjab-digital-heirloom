import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard, type Product } from "@/components/ProductCard";

import lehenga from "@/assets/shop-lehenga.jpg";
import lehenga2 from "@/assets/shop-lehenga-2.jpg";
import jewelry from "@/assets/shop-jewelry.jpg";
import khussa from "@/assets/shop-khussa.jpg";
import kohlapuri from "@/assets/shop-kohlapuri.jpg";
import shalwarKameez from "@/assets/shop-shalwar-kameez-women.jpg";
import dhotiKurta from "@/assets/shop-dhoti-kurta.jpg";
import dhotiKurta2 from "@/assets/shop-dhoti-kurta-2.jpg";
import chooriyan from "@/assets/shop-kanch-chooriyan.jpg";
import paranda from "@/assets/shop-paranda.jpg";
import paranda2 from "@/assets/shop-paranda-2.jpg";
import charpai from "@/assets/shop-charpai.jpg";
import sandook from "@/assets/shop-sandook.jpg";
import sandook2 from "@/assets/shop-sandook-2.jpg";
import karhaiChadar from "@/assets/shop-karhai-chadar.jpg";
import wallDecor from "@/assets/shop-wall-decor.jpg";
import mattiBartan from "@/assets/shop-matti-bartan.jpg";
import mattiBartan2 from "@/assets/shop-matti-bartan-2.jpg";
import phulkari from "@/assets/textile-phulkari.jpg";
import karhaiChadarHero from "@/assets/shop-karhai-chadar.jpg";

import shararaEmerald from "@/assets/shop-sharara-emerald.jpg";
import anarkaliIvory from "@/assets/shop-anarkali-ivory.jpg";
import sherwaniCream from "@/assets/shop-sherwani-cream.jpg";
import kurtaShalwarWhite from "@/assets/shop-kurta-shalwar-white.jpg";
import lawnPink from "@/assets/shop-lawn-pink.jpg";

import jhumka from "@/assets/shop-jhumka.jpg";
import mathaPatti from "@/assets/shop-matha-patti.jpg";
import nath from "@/assets/shop-nath.jpg";
import jhanjar from "@/assets/shop-jhanjar.jpg";
import tikka from "@/assets/shop-tikka.jpg";
import kangan from "@/assets/shop-kangan.jpg";
import haathPhool from "@/assets/shop-haath-phool.jpg";

import brassSurahi from "@/assets/shop-brass-surahi.jpg";
import multaniVase from "@/assets/shop-multani-vase.jpg";
import kilimRug from "@/assets/shop-kilim-rug.jpg";
import camelLamp from "@/assets/shop-camel-lamp.jpg";
import onyxBowl from "@/assets/shop-onyx-bowl.jpg";
import chiniotBookends from "@/assets/shop-chiniot-bookends.jpg";
import sindhiCushion from "@/assets/shop-sindhi-cushion.jpg";
import copperKettle from "@/assets/shop-copper-kettle.jpg";

import brassDiya from "@/assets/shop-brass-diya.jpg";
import bunting from "@/assets/shop-bunting.jpg";
import patang from "@/assets/shop-patang.jpg";
import dholki from "@/assets/shop-dholki.jpg";
import mehndiCone from "@/assets/shop-mehndi-cone.jpg";
import gotaDupatta from "@/assets/shop-gota-dupatta.jpg";
import flowerMala from "@/assets/shop-flower-mala.jpg";
import truckModel from "@/assets/shop-truck-model.jpg";

import multaniTiles from "@/assets/shop-multani-tiles.jpg";
import mojari from "@/assets/shop-mojari.jpg";
import onyxChess from "@/assets/shop-onyx-chess.jpg";
import ajrak from "@/assets/shop-ajrak.jpg";
import sindhiTopi from "@/assets/shop-sindhi-topi.jpg";
import jhumar from "@/assets/shop-jhumar.jpg";
import khaddarShawl from "@/assets/shop-khaddar-shawl.jpg";
import mughalMiniature from "@/assets/shop-mughal-miniature.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "The Bazaar — Punjabi Heritage Atelier | VIRSA" },
      {
        name: "description",
        content:
          "Hand-crafted clothing, gold jewellery, home décor, festive items and handicrafts — direct from artisans across Pakistani Punjab.",
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
  "Desi Clothing",
  "Jewelry",
  "Home Décor",
  "Festive Items",
  "Handicrafts",
] as const;

type Category = (typeof categories)[number];

const products: Product[] = [
  // ── Desi Clothing ─────────────────────────────────────────────
  { id: 1, name: "Maroon Zardozi Lehenga", artisan: "Sialkot Atelier", price: 480, tag: "Desi Clothing", img: lehenga, imgAlt: lehenga2, story: "Zardozi — gold-thread embroidery — was once the exclusive craft of the Mughal court. Today, Sialkot's master karigars keep the technique alive." },
  { id: 2, name: "Emerald Gota Shalwar Kameez", artisan: "Faisalabad Studio", price: 165, tag: "Desi Clothing", img: shalwarKameez, story: "Gota — flat metallic ribbon — is appliquéd along necklines and hems. Faisalabad's mills feed the cloth; village embroiderers finish each piece by hand." },
  { id: 3, name: "Cream Dhoti Kurta & Waistcoat", artisan: "Lahore Tailor House", price: 140, tag: "Desi Clothing", img: dhotiKurta, imgAlt: dhotiKurta2, story: "The dhoti is the rural Punjabi man's garment — cool in summer, modest, and worn from the dera to the wedding pavilion." },
  { id: 4, name: "Karhai-Wali Chadar — Maroon", artisan: "Multan Embroiderer", price: 195, tag: "Desi Clothing", img: karhaiChadar, story: "Hand-embroidered shawl, worked in a single colour over three weeks. Multan's signature — quiet, dense, warm enough for December." },
  { id: 5, name: "Phulkari Heirloom Dupatta", artisan: "Bahawalpur Atelier", price: 180, tag: "Desi Clothing", img: phulkari, story: "Phulkari — 'flower work' — is darned silk on coarse cotton, a dowry tradition five centuries old. Each motif is a wish from mother to daughter." },
  { id: 6, name: "Emerald Gota Sharara Suit", artisan: "Lahore Atelier", price: 295, tag: "Desi Clothing", img: shararaEmerald, story: "Sharara — flared from the knee, originally favoured by Awadh royalty — is the bridesmaid's choice across Punjab today." },
  { id: 7, name: "Ivory Tilla Anarkali Frock", artisan: "Sialkot Studio", price: 340, tag: "Desi Clothing", img: anarkaliIvory, story: "Anarkali — named after the legendary Lahori courtesan. The flowing flare gathers the entire dance floor at every mehndi." },
  { id: 8, name: "Cream Tilla Sherwani Set", artisan: "Lahore Master Tailor", price: 410, tag: "Desi Clothing", img: sherwaniCream, story: "Tone-on-tone tilla on raw silk, paired with a maroon kulla turban. The Lahori groom's uniform from Anarkali to Aitchison." },
  { id: 9, name: "Men's Chikankari Kurta Shalwar", artisan: "Lahore Tailor House", price: 110, tag: "Desi Clothing", img: kurtaShalwarWhite, story: "White cotton, hand-stitched chikankari on the placket. The Friday prayer staple — light enough for Ramadan, formal enough for Eid." },
  { id: 10, name: "Pink Lawn Summer Suit", artisan: "Faisalabad Mills", price: 95, tag: "Desi Clothing", img: lawnPink, story: "Lawn — Pakistan's summer cotton, woven in Faisalabad and printed across Punjab. The annual collections are national events." },

  // ── Jewelry ────────────────────────────────────────────────────
  { id: 11, name: "Kundan & Pearl Choker Set", artisan: "Hira Mandi Workshop", price: 320, tag: "Jewelry", img: jewelry, story: "Kundan setting traces back to imperial Lahore — uncut gemstones laid in 24-karat gold foil, a wedding heirloom passed mother to daughter." },
  { id: 12, name: "Kanch Ki Chooriyan — Stack of 12", artisan: "Hyderabad Glass Bazaar", price: 32, tag: "Jewelry", img: chooriyan, story: "Glass bangles, blown and coloured by hand. A Pakistani bride wears red and green; an unmarried girl wears whatever colour catches the sun." },
  { id: 13, name: "Sheesha Paranda — Maroon", artisan: "Bahawalpur Embroiderer", price: 48, tag: "Jewelry", img: paranda, imgAlt: paranda2, story: "The paranda is woven into a girl's plait — silk threads, mirror work, and three tassels that swing as she walks. A daily ornament, not a costume." },
  { id: 14, name: "Meenakari Gold Jhumka", artisan: "Lahore Sunehri Bazaar", price: 145, tag: "Jewelry", img: jhumka, story: "Bell-shaped earrings with enamel meenakari and pearl drops. The chime under a dupatta is Punjab's most loved accessory." },
  { id: 15, name: "Bridal Matha Patti", artisan: "Hira Mandi Workshop", price: 285, tag: "Jewelry", img: mathaPatti, story: "Forehead jewellery with a central pendant and side chains — every Pakistani bride's first heirloom from her nani's box." },
  { id: 16, name: "Heavy Bridal Nath", artisan: "Gujranwala Goldsmith", price: 220, tag: "Jewelry", img: nath, story: "The nath — nose ring linked to the ear by a fine gold chain — turns the bride's profile into a portrait at the nikah." },
  { id: 17, name: "Oxidised Silver Jhanjar", artisan: "Sialkot Silversmith", price: 75, tag: "Jewelry", img: jhanjar, story: "Anklets with tiny ghungroo bells. A village girl is heard before she is seen — the chime once announced the hour for tea." },
  { id: 18, name: "Kundan Tikka with Pearl Drop", artisan: "Lahore Sunehri Bazaar", price: 135, tag: "Jewelry", img: tikka, story: "A single pendant rests in the centre parting, a pearl trembling above the brow. Worn at mayun, mehndi, and every shaadi photograph." },
  { id: 19, name: "Pair of Bridal Kangan", artisan: "Lahore Sunehri Bazaar", price: 380, tag: "Jewelry", img: kangan, story: "Wide gold cuffs with engraved meenakari — the kind a Lahori grandmother gives the day after rukhsati." },
  { id: 20, name: "Silver Haath Phool", artisan: "Multan Silversmith", price: 165, tag: "Jewelry", img: haathPhool, story: "Hand harness with finger rings and a bracelet — a single piece that turns the bride's hand into the centrepiece of the mehndi." },

  // ── Home Décor ────────────────────────────────────────────────
  { id: 21, name: "Hand-Carved Lakri Sandook", artisan: "Chiniot Wood Master", price: 540, tag: "Home Décor", img: sandook, imgAlt: sandook2, story: "Chiniot's woodcarvers have shaped sheesham trunks for four hundred years — once a bride's dowry chest, now a family heirloom." },
  { id: 22, name: "Multani Painted Gharay (Set of 3)", artisan: "Multan Pottery House", price: 88, tag: "Home Décor", img: mattiBartan, imgAlt: mattiBartan2, story: "The blue glaze of Multan, fired since the twelfth century. Used to keep water cool — and to remind a city of its kilns." },
  { id: 23, name: "Engraved Brass Surahi", artisan: "Wazirabad Brass Worker", price: 165, tag: "Home Décor", img: brassSurahi, story: "Wazirabad has hammered brass for two centuries. The surahi keeps water cool through a Lahore summer — and the engraving keeps the eye busy." },
  { id: 24, name: "Multani Blue Floor Vase", artisan: "Multan Pottery House", price: 195, tag: "Home Décor", img: multaniVase, story: "Cobalt glaze, white arabesque — the blue of Multan's tombs. One of the few pottery traditions still fired in wood-burning kilns." },
  { id: 25, name: "Hand-Knotted Kilim Rug", artisan: "Bahawalpur Weaver", price: 420, tag: "Home Décor", img: kilimRug, story: "Geometric tribal patterns in indigo and crimson, wool sheared from a single flock. Three months of one weaver's life on your floor." },
  { id: 26, name: "Camel-Skin Painted Lamp Pair", artisan: "Multan Painter", price: 240, tag: "Home Décor", img: camelLamp, story: "Translucent parchment with hand-painted Mughal florals. The light glows through the skin — the city's oldest lighting craft." },
  { id: 27, name: "Onyx Marble Bowl", artisan: "Quetta Stone Cutter", price: 130, tag: "Home Décor", img: onyxBowl, story: "Quetta's onyx is cut from a single block — green, amber and cream veins decided millennia ago, polished smooth in a single afternoon." },
  { id: 28, name: "Chiniot Carved Bookends", artisan: "Chiniot Wood Master", price: 175, tag: "Home Décor", img: chiniotBookends, story: "Sheesham wood, hand-carved with floral relief — the same chisels that carve Chiniot's haveli doorways, scaled for your library." },
  { id: 29, name: "Sindhi Mirror-Work Cushion", artisan: "Tharparkar Embroiderer", price: 65, tag: "Home Décor", img: sindhiCushion, story: "Tiny round mirrors couched in red silk thread, the desert's answer to candlelight — every cushion catches a flicker." },
  { id: 30, name: "Engraved Copper Tea Kettle", artisan: "Wazirabad Coppersmith", price: 145, tag: "Home Décor", img: copperKettle, story: "Copper conducts heat better than any modern alloy. Wazirabad's smiths still hammer each kettle from a single sheet, by hand." },

  // ── Festive Items ─────────────────────────────────────────────
  { id: 31, name: "Colorful Woven Charpai", artisan: "Sargodha Weaver", price: 220, tag: "Festive Items", img: charpai, story: "The charpai — four legs, a wooden frame, woven cotton tape — is the original sofa, bed, and dining table of the Punjabi village." },
  { id: 32, name: "Truck-Art Wall Decor Set", artisan: "Rawalpindi Painter", price: 110, tag: "Festive Items", img: wallDecor, story: "Pakistan's truck art is a moving folk gallery — peacocks, mirrors, calligraphy. Now miniaturised for the wall, painted by the same masters." },
  { id: 33, name: "Engraved Brass Diya Pair", artisan: "Wazirabad Brass Worker", price: 42, tag: "Festive Items", img: brassDiya, story: "Lit at Eid, weddings, and Shab-e-Barat — the small brass lamp that turns every threshold into a welcome." },
  { id: 34, name: "Pom-Pom Bunting Garland — 3m", artisan: "Lahore Festive Studio", price: 28, tag: "Festive Items", img: bunting, story: "Strung across the rooftop on basant, the courtyard on mehndi, the gully on Independence Day. Pakistan in colour." },
  { id: 35, name: "Basant Patang Kite Pair + Dor", artisan: "Lahore Walled City", price: 22, tag: "Festive Items", img: patang, story: "Spring belongs to the rooftops of Lahore. The cry of 'bo kata' belongs to anyone who can hold a manjha string steady in the wind." },
  { id: 36, name: "Wooden Dholki Drum", artisan: "Gujrat Instrument Maker", price: 185, tag: "Festive Items", img: dholki, story: "Goat-skin heads, sheesham body, rope tensioning. The dholki opens every mehndi night — the women's tappay can carry until dawn." },
  { id: 37, name: "Mehndi Cone & Henna Powder Kit", artisan: "Multan Henna House", price: 18, tag: "Festive Items", img: mehndiCone, story: "Sun-dried, stone-ground Multani henna — the only kind that stains a deep maroon by morning. Cones included for your own paisleys." },
  { id: 38, name: "Gota Dupatta Wedding Favour Pair", artisan: "Faisalabad Studio", price: 36, tag: "Festive Items", img: gotaDupatta, story: "Mustard and pink chiffon edged in metallic gota — placed on every guest's plate at the mehndi, taken home as a memory." },
  { id: 39, name: "Marigold & Jasmine Mala Garland", artisan: "Lahore Phool Mandi", price: 24, tag: "Festive Items", img: flowerMala, story: "Strung at dawn at the Lahore Phool Mandi, delivered before noon to the doli. Forty thousand garlands in a single wedding season." },
  { id: 40, name: "Truck-Art Wooden Model Truck", artisan: "Karachi Truck Painter", price: 95, tag: "Festive Items", img: truckModel, story: "A scale-model Bedford in full truck-art livery — peacocks, mirrors, calligraphy. The same hands paint the real ones on the GT Road." },

  // ── Handicrafts ───────────────────────────────────────────────
  { id: 41, name: "Embellished Khussa", artisan: "Multan Master Cobbler", price: 95, tag: "Handicrafts", img: khussa, story: "The khussa is Punjab's oldest footwear — hand-stitched leather, mirror work, tilla. No left or right; the shoe shapes itself to your foot over time." },
  { id: 42, name: "Kohlapuri Leather Sandals", artisan: "Sahiwal Tannery", price: 78, tag: "Handicrafts", img: kohlapuri, story: "Vegetable-tanned buffalo leather, hand-braided. A summer staple from Sahiwal to Lahore — softer the more you wear them." },
  { id: 43, name: "Multani Blue Tile Set (4)", artisan: "Multan Pottery House", price: 58, tag: "Handicrafts", img: multaniTiles, story: "The tiles that line the shrine of Bahauddin Zakariya — cobalt and white arabesques, fired the same way for nine hundred years." },
  { id: 44, name: "Embroidered Leather Mojari", artisan: "Bahawalpur Cobbler", price: 88, tag: "Handicrafts", img: mojari, story: "Tan leather, silk-thread floral embroidery, leather sole stitched by hand. The festive cousin of the everyday khussa." },
  { id: 45, name: "Onyx Marble Chess Set", artisan: "Quetta Stone Cutter", price: 230, tag: "Handicrafts", img: onyxChess, story: "Each piece carved by hand from a single onyx block. Green and amber pieces on a marbled board — the game of viziers." },
  { id: 46, name: "Hand-Block Ajrak Shawl", artisan: "Sindh / Punjab Border", price: 75, tag: "Handicrafts", img: ajrak, story: "Indigo and crimson geometric prints, fixed with seven natural dye baths over two weeks. The shoulder cloth of the river plains." },
  { id: 47, name: "Embroidered Sindhi Topi", artisan: "Tharparkar Embroiderer", price: 55, tag: "Handicrafts", img: sindhiTopi, story: "Mirror work and silk thread on a fitted cap — the cultural counterpart to the Punjabi pagri, gifted to honoured guests." },
  { id: 48, name: "Brass Jhumar Hanging Pair", artisan: "Wazirabad Brass Worker", price: 68, tag: "Handicrafts", img: jhumar, story: "Tasselled bell-shaped hangings strung over wedding doorways — the gentle metallic chime says: a guest has arrived." },
  { id: 49, name: "Hand-Woven Khaddar Shawl", artisan: "Sahiwal Weaver", price: 92, tag: "Handicrafts", img: khaddarShawl, story: "Khaddar — hand-spun, hand-woven cotton — the cloth Gandhi made famous and Pakistani villages never stopped wearing." },
  { id: 50, name: "Mughal Miniature Garden Painting", artisan: "Lahore Miniature Studio", price: 280, tag: "Handicrafts", img: mughalMiniature, story: "Squirrel-hair brushes one fibre wide. A single peacock can take a week. The tradition that built Akbar's library, kept alive in Anarkali." },
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
            Fifty pieces sourced directly from master artisans of Pakistani Punjab. Limited editions.
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
