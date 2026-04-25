import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

import heroBride from "@/assets/hero-bride.jpg";
import cultureFields from "@/assets/culture-fields.jpg";
import cultureMehndi from "@/assets/culture-mehndi.jpg";
import cultureTruck from "@/assets/culture-truck-art.jpg";
import heritageBadshahi from "@/assets/heritage-badshahi.jpg";
import heritageShalimar from "@/assets/heritage-shalimar.jpg";
import foodLassi from "@/assets/food-lassi.jpg";
import foodSaag from "@/assets/food-saag.jpg";
import musicDhol from "@/assets/music-dhol.jpg";
import musicAlgoza from "@/assets/music-algoza.jpg";
import shopJewelry from "@/assets/shop-jewelry.jpg";
import shopKhussa from "@/assets/shop-khussa.jpg";
import shopLehenga from "@/assets/shop-lehenga.jpg";
import shopPottery from "@/assets/shop-pottery.jpg";
import textilePhulkari from "@/assets/textile-phulkari.jpg";

import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIRSA — The Soul of Punjab | Heritage, Culture & Living Traditions" },
      {
        name: "description",
        content:
          "Experience the soul of Pakistani Punjab — weddings, cuisine, folk music, and handcrafted heritage. A global cultural platform & digital museum.",
      },
      { property: "og:title", content: "VIRSA — The Soul of Punjab" },
      {
        property: "og:description",
        content:
          "A global cultural platform preserving the beauty of Pakistani Punjab's history, lifestyle, food, music, and celebrations.",
      },
      { property: "og:image", content: heroBride },
      { property: "twitter:image", content: heroBride },
    ],
  }),
  component: HomePage,
});

const shopPreview = [
  { img: shopLehenga, name: "Bridal Couture", price: "from $480", tag: "Phulkari · Zardozi" },
  { img: shopJewelry, name: "Heirloom Jewelry", price: "from $260", tag: "Kundan · Pearls" },
  { img: shopKhussa, name: "Handmade Khussa", price: "from $95", tag: "Multani Leather" },
  { img: shopPottery, name: "Multani Pottery", price: "from $58", tag: "Blue Glaze" },
];

const cultureCards = [
  {
    img: cultureMehndi,
    title: "Mehndi Nights",
    body: "Marigold canopies, dholki rhythms, and the bride's hands turning crimson with henna — the prelude to every Punjabi wedding.",
  },
  {
    img: cultureFields,
    title: "Sarson Ke Khet",
    body: "When the mustard fields bloom across the heartland, the entire province turns to gold — a sight that has shaped poetry for centuries.",
  },
  {
    img: cultureTruck,
    title: "Truck Art Soul",
    body: "Lahore's roads are moving murals — peacocks, calligraphy, and rose vines painted by hand on every Bedford & Hino.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroBride}
          alt="Pakistani Punjabi bride in traditional bridal attire at a Lahori haveli at golden hour"
          className="absolute inset-0 w-full h-full object-cover ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

        <div className="relative container mx-auto px-6 pb-24 pt-32 text-beige">
          <div className="max-w-3xl reveal" style={{ ["--delay" as string]: "200ms" }}>
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-mustard mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              ਪੰਜਾਬ · A Living Heritage
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Experience the
              <span className="block italic gold-text"> Soul of Punjab</span>
              <span className="block">— Heritage in motion.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-beige/80 leading-relaxed text-pretty">
              A global cultural platform preserving the beauty of Pakistani Punjab — its history,
              lifestyle, food, music, and celebrations. From Lahore's old city to the mustard fields
              of Sahiwal.
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
                Shop Heritage
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
                "ਜਿਊਂਦੇ ਰਹੋ ਪੰਜਾਬ",
                "✦",
                "Phulkari",
                "✦",
                "Lahore",
                "✦",
                "Bhangra",
                "✦",
                "Sarson Da Saag",
                "✦",
                "Heer Ranjha",
                "✦",
                "Mehndi",
                "✦",
                "Truck Art",
                "✦",
              ].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* COMMERCE PREVIEW */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="The Bazaar"
              title="Heritage you can hold."
              description="Each piece is hand-crafted by artisans across Pakistani Punjab — from Multan's blue potters to Sialkot's master embroiderers."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-medium group whitespace-nowrap"
            >
              Visit the Bazaar
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {shopPreview.map((item) => (
              <Link
                key={item.name}
                to="/shop"
                className="group flex flex-col"
              >
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
                eyebrow="A Living Museum"
                title="Five thousand years, written in stone."
                description="From the Indus Valley to the Mughal courts, from Sikh-era forts to colonial Lahore — Pakistani Punjab is a layered manuscript of civilizations."
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
              <div className="image-zoom rounded-md aspect-[3/4] mt-12">
                <img src={heritageBadshahi} alt="Badshahi Mosque Lahore" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
              </div>
              <div className="image-zoom rounded-md aspect-[3/4]">
                <img src={heritageShalimar} alt="Shalimar Gardens Lahore" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
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
            eyebrow="Living Traditions"
            title="The colors that won't fade."
            description="Mehndi nights, mustard fields, painted trucks. Punjab is not preserved in glass — it is danced, eaten, sung every single day."
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

      {/* FOOD EDITORIAL */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="image-zoom rounded-md aspect-square shadow-elegant">
                <img src={foodLassi} alt="Traditional Pakistani lassi in clay kulhar" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="image-zoom rounded-md aspect-square mt-12 shadow-elegant">
                <img src={foodSaag} alt="Sarson da saag and makki di roti" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Punjab Da Khana"
                title="Where butter is poetry and lassi is a love letter."
                description="Sarson da saag with makki di roti, slow-fried in desi ghee. A clay kulhar of frothing lassi at dawn. Gol gappay on Lahore's Mall Road. Food here isn't a meal — it's identity."
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
          src={musicDhol}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              variant="light"
              eyebrow="Folk & Rhythm"
              title="The dhol does not need a translator."
              description="From the algoza of a Cholistani shepherd to the booming dhol of a barat procession — Punjab's music is the universal language of joy. Tappay, mahiya, qawwali, bhangra."
            />
            <Link
              to="/music"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard text-ink px-7 py-3.5 font-medium hover:bg-gold transition-colors"
            >
              Hear the Folk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="image-zoom rounded-md aspect-[3/4] shadow-elegant border border-mustard/20">
              <img src={musicAlgoza} alt="Pakistani folk musician with algoza" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
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
          <div className="text-xs tracking-[0.3em] uppercase mb-5 opacity-80">Join the Atelier</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto text-balance">
            Carry a piece of Punjab into your home.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg opacity-90 text-pretty">
            New arrivals from our artisan partners every season. Worldwide shipping from Lahore.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-mustard px-8 py-4 font-medium hover:bg-background hover:text-ink transition-colors"
          >
            Enter the Bazaar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
