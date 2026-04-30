import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

import heroTruck from "@/assets/hero-truck-art.jpg";
import heroVillage from "@/assets/hero-village-sarson.jpg";
import lahoreAlley from "@/assets/lahore-walled-city.jpg";
import childrenSarson from "@/assets/lifestyle-children-sarson.jpg";
import deraHukka from "@/assets/lifestyle-dera-hukka.jpg";
import mittiGhar from "@/assets/lifestyle-mitti-ghar.jpg";
import heritageBadshahi from "@/assets/heritage-badshahi.jpg";
import heritageHarappaBw from "@/assets/heritage-harappa-bw.jpg";
import foodNihari from "@/assets/food-nihari.jpg";
import foodStreetfood from "@/assets/food-streetfood.jpg";
import dholPlayer from "@/assets/music-dhol-player.jpg";
import shopJewelry from "@/assets/shop-jewelry.jpg";
import shopKohlapuri from "@/assets/shop-kohlapuri.jpg";
import shopShalwarKameez from "@/assets/shop-shalwar-kameez-women.jpg";
import shopCharpai from "@/assets/shop-charpai.jpg";
import shopWallDecor from "@/assets/shop-wall-decor.jpg";
import textilePhulkari from "@/assets/textile-phulkari.jpg";

import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIRSA — Experience the Living Heritage of Punjab" },
      {
        name: "description",
        content:
          "A curated digital journey through the traditions, crafts, cuisine, and culture of Pakistani Punjab — a premium cultural platform and artisan marketplace.",
      },
      { property: "og:title", content: "VIRSA — Experience the Living Heritage of Punjab" },
      {
        property: "og:description",
        content:
          "A curated digital journey through the traditions, crafts, cuisine, and culture of Pakistani Punjab.",
      },
      { property: "og:image", content: heroTruck },
      { property: "twitter:image", content: heroTruck },
    ],
  }),
  component: HomePage,
});

const shopPreview = [
  { img: shopShalwarKameez, name: "Desi Clothing", price: "from $140", tag: "Apparel" },
  { img: shopJewelry, name: "Heirloom Jewelry", price: "from $32", tag: "Jewelry" },
  { img: shopWallDecor, name: "Home Décor", price: "from $88", tag: "Home" },
  { img: shopKohlapuri, name: "Handmade Footwear", price: "from $78", tag: "Handicrafts" },
  { img: shopCharpai, name: "Festive Charpai", price: "from $220", tag: "Festive" },
];

const cultureCards = [
  {
    img: childrenSarson,
    title: "Sarson Ke Khet",
    body: "When the mustard fields bloom across the heartland, an entire province turns the colour of gold. The first poetry of rural Punjab.",
  },
  {
    img: deraHukka,
    title: "The Village Dera",
    body: "Charpais, white pagris, a brass hukka passed in silence. The dera is where stories, politics, and memory have always lived together.",
  },
  {
    img: mittiGhar,
    title: "Mitti Ke Ghar",
    body: "Hand-built mud houses with thatched roofs, painted in white folk geometries. The original sustainable architecture of the heartland.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO — split-frame: truck art + sarson village */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <img
            src={heroTruck}
            alt="Vibrant Pakistani truck art panel with peacocks, mirrors and Urdu calligraphy"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1280}
          />
          <img
            src={heroVillage}
            alt="Pakistani Punjab rural village at golden hour with mustard sarson fields and a tonga"
            className="hidden md:block h-full w-full object-cover ken-burns"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

        <div className="relative container mx-auto px-6 pb-24 pt-32 text-beige">
          <div className="max-w-3xl reveal" style={{ ["--delay" as string]: "200ms" }}>
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-mustard mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span dir="rtl" lang="ur" className="font-display text-base tracking-normal">
                ورثہ
              </span>
              · A Cultural Preservation Platform
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Experience the
              <span className="block italic gold-text">Living Heritage</span>
              <span className="block">of Punjab.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-beige/80 leading-relaxed text-pretty">
              A curated digital journey through the traditions, crafts, cuisine, and culture of
              Pakistani Punjab — from the alleys of old Lahore to the mustard fields of the
              heartland.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/culture"
                className="group inline-flex items-center gap-3 rounded-full bg-mustard text-ink px-7 py-4 font-medium hover:bg-gold transition-all shadow-gold"
              >
                Explore Culture
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 rounded-full border border-beige/40 text-beige px-7 py-4 font-medium hover:bg-beige hover:text-ink transition-all backdrop-blur-sm"
              >
                Discover Shop
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-6 text-sm text-beige/60">
              <MapPin className="h-4 w-4 text-mustard" />
              Lahore · Multan · Sialkot · Bahawalpur · Faisalabad
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-deep-red text-mustard py-5 overflow-hidden border-y border-mustard/20">
        <div className="flex whitespace-nowrap animate-[marquee_50s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-12 pr-12 font-display text-2xl italic">
              {[
                <span key="ur" dir="rtl" lang="ur">
                  جیتا رہے پنجاب
                </span>,
                "✦", "Phulkari", "✦", "Lahore", "✦", "Bhangra", "✦", "Sarson Da Saag", "✦",
                "Heer Ranjha", "✦", "Truck Art", "✦", "Dera", "✦", "Tanga", "✦", "Kabaddi", "✦",
              ].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — premium cultural brand statement */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-6">About Virsa</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            A cultural preservation platform dedicated to{" "}
            <span className="italic gold-text">Pakistani Punjab</span> — its storytelling,
            craftsmanship, and digital memory.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Virsa exists to document, dignify, and share the soul of one of the world's oldest
            living cultures. Through editorial photography, oral history, and a marketplace built
            directly with master artisans, we bring the heartland to a global audience — without
            losing what makes it sacred.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="5,000+" label="Years of heritage" />
            <Stat value="47" label="Artisan families" />
            <Stat value="12" label="Districts of Punjab" />
            <Stat value="100%" label="Handmade" />
          </div>
        </div>
      </section>

      {/* COMMERCE PREVIEW */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="The Marketplace"
              title="Heritage you can hold."
              description="A premium cultural marketplace — Desi clothing, jewelry, home décor, festive items and handicrafts, sourced directly from artisans across Pakistani Punjab."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-medium group whitespace-nowrap"
            >
              Visit the Shop
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {shopPreview.map((item) => (
              <Link key={item.name} to="/shop" className="group flex flex-col">
                <div className="image-zoom aspect-[3/4] rounded-md bg-muted shadow-soft mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-primary mb-1.5">
                  {item.tag}
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">{item.name}</h3>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">{item.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE EDITORIAL */}
      <section className="bg-ink text-beige py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                variant="light"
                eyebrow="Virsa — A Living Museum"
                title="Five thousand years, written in stone."
                description="From the Indus Valley to the Mughal courts, from Sikh-era forts and colonial Lahore to the Partition of 1947 — Pakistani Punjab is a layered manuscript of civilizations."
              />
              <Link
                to="/heritage"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard text-ink px-7 py-3.5 font-medium hover:bg-gold transition-colors"
              >
                Walk the Timeline
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
              <div className="image-zoom rounded-md aspect-[3/4] mt-12 relative">
                <img src={heritageHarappaBw} alt="Harappa archaeological site, Indus Valley civilization" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
                <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase text-beige/90 bg-ink/60 px-2 py-1 rounded-sm">c. 2500 BCE</div>
              </div>
              <div className="image-zoom rounded-md aspect-[3/4]">
                <img src={heritageBadshahi} alt="Badshahi Mosque Lahore" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE TILES */}
      <section className="py-24 md:py-32 phulkari-bg">
        <div className="container mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Living Culture"
            title="The colours that won't fade."
            description="Mustard fields, mud houses, elders on the dera. Punjab is not preserved in glass — it is danced, eaten, and breathed every single day."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {cultureCards.map((card, i) => (
              <article
                key={card.title}
                className="group bg-card rounded-md overflow-hidden shadow-soft hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="image-zoom aspect-[4/5]">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/culture"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              All cultural stories
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRADITIONS PREVIEW — Lahore alley */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-ink text-beige">
        <img src={lahoreAlley} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative container mx-auto px-6 max-w-3xl">
          <SectionHeading
            variant="light"
            eyebrow="Rasm-o-Riwaj"
            title="Traditions older than the borders that drew them."
            description="Wedding rituals, melas, bazaar culture, and kabaddi — the customs that have shaped daily life across the heartland for centuries."
          />
          <Link
            to="/traditions"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard text-ink px-7 py-3.5 font-medium hover:bg-gold transition-colors"
          >
            Explore Traditions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FOOD EDITORIAL */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="image-zoom rounded-md aspect-square shadow-elegant">
                <img src={foodNihari} alt="Pakistani nihari in brass karahi" loading="lazy" width={1600} height={1080} className="h-full w-full object-cover" />
              </div>
              <div className="image-zoom rounded-md aspect-square mt-12 shadow-elegant">
                <img src={foodStreetfood} alt="Pakistani street food thali" loading="lazy" width={1600} height={1080} className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Zaiqa — The Cuisine"
                title="Where butter is poetry and lassi is a love letter."
                description="Saag with makki di roti. Nihari at sunrise. Lassi in clay kulhars. Fifteen dishes that map a province by its taste."
              />
              <Link
                to="/food"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:bg-primary/90 transition-colors"
              >
                Taste the Heartland
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-ink text-beige">
        <img
          src={dholPlayer}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              variant="light"
              eyebrow="Folk & Rhythm"
              title="The dhol does not need a translator."
              description="From the algoza of a Cholistani shepherd to the booming dhol of a barat procession, from qawwali at Data Darbar to tappay in a village courtyard — Punjab's music is the universal language of joy."
            />
            <Link
              to="/culture"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard text-ink px-7 py-3.5 font-medium hover:bg-gold transition-colors"
            >
              Hear the Folk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="image-zoom rounded-md aspect-[3/4] shadow-elegant border border-mustard/20">
              <img src={dholPlayer} alt="Punjabi dhol player" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
            </div>
            <div className="image-zoom rounded-md aspect-[3/4] mt-16 shadow-elegant border border-mustard/20">
              <img src={textilePhulkari} alt="Phulkari embroidery" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-sunset text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${textilePhulkari})`,
          backgroundSize: 'cover',
          mixBlendMode: 'overlay'
        }} />
        <div className="relative container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase mb-5 opacity-80">Carry Punjab Home</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto text-balance">
            A piece of Punjab, for the world.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg opacity-90 text-pretty">
            New arrivals from our artisan partners every season. Worldwide shipping from Lahore.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-mustard px-8 py-4 font-medium hover:bg-background hover:text-ink transition-colors"
          >
            Enter the Shop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl text-primary">{value}</div>
      <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-2">{label}</div>
    </div>
  );
}
