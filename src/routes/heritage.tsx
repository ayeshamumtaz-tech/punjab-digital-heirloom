import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

import heroImg from "@/assets/heritage-badshahi.jpg";
import lahoreFort from "@/assets/heritage-lahore-fort.jpg";
import shalimar from "@/assets/heritage-shalimar.jpg";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage of Punjab — Five Thousand Years | VIRSA" },
      {
        name: "description",
        content:
          "From the Indus Valley to Mughal Lahore, Sikh-era forts to colonial heritage — walk the layered timeline of Pakistani Punjab.",
      },
      { property: "og:title", content: "Heritage of Punjab — Five Thousand Years" },
      {
        property: "og:description",
        content:
          "A scroll-based timeline of Pakistani Punjab's civilizations, monuments, and stories.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HeritagePage,
});

const eras = [
  {
    period: "c. 2500 BCE",
    title: "The Indus Valley",
    body: "Harappa, in today's Sahiwal district, was one of the great cities of the Indus civilization — perfect grids, sophisticated drainage, and a script we still cannot read. Punjab's story begins on these mounds.",
    accent: "deep-red",
  },
  {
    period: "1000 – 500 BCE",
    title: "Vedic & Gandharan Echoes",
    body: "The land of five rivers, the Sapta Sindhu of the hymns. Caravans, cattle, and the slow shaping of language and ritual that would echo across the subcontinent.",
    accent: "mustard",
  },
  {
    period: "1556 – 1707",
    title: "Mughal Lahore",
    body: "Akbar made Lahore his capital. Shah Jahan built Shalimar. Aurangzeb crowned the city with the Badshahi Mosque. Marble, fresco, and red sandstone — an empire of grace.",
    accent: "royal-green",
  },
  {
    period: "1799 – 1849",
    title: "Sikh Misls & Rohtas",
    body: "Ranjit Singh's lion court ruled from the Lahore Fort. Earlier, Sher Shah Suri's Rohtas — a fortress of impossible scale — still stands above the Jhelum.",
    accent: "indigo-blue",
  },
  {
    period: "1849 – 1947",
    title: "Colonial Lahore",
    body: "The Mall, Anarkali Bazaar, the High Court, Government College — Lahore became one of the great cities of British India. Ghalib walked here. Faiz dreamed here.",
    accent: "gold",
  },
  {
    period: "1947 → Today",
    title: "A Living Capital",
    body: "Pakistan's cultural heart. Faiz festivals at Alhamra. Food street at Fort Road. The Walled City restored, brick by brick. A heritage that refuses to be a museum piece.",
    accent: "deep-red",
  },
];

const sites = [
  { name: "Badshahi Mosque", desc: "Mughal grandeur, built 1673", img: heroImg },
  { name: "Lahore Fort", desc: "UNESCO heritage citadel", img: lahoreFort },
  { name: "Shalimar Gardens", desc: "Persian-Mughal paradise garden", img: shalimar },
];

function HeritagePage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={heroImg} alt="Badshahi Mosque at sunset" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1600} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">A Living Museum</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Five thousand years,<br />
              <span className="italic gold-text">written in stone.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="The Timeline"
            title="Walk through the centuries."
            description="Each era left its fingerprint on the soil, the script, and the streets of present-day Pakistani Punjab."
          />
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="space-y-16">
              {eras.map((era, i) => (
                <div
                  key={era.title}
                  className={`relative grid md:grid-cols-2 gap-8 items-start ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-block text-xs tracking-[0.25em] uppercase text-${era.accent} mb-2 font-medium`} style={{ color: `var(--color-${era.accent})` }}>
                      {era.period}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl mb-4">{era.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{era.body}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage sites */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            variant="light"
            eyebrow="Pilgrimage Sites"
            title="Monuments that still breathe."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {sites.map((site) => (
              <article key={site.name} className="group relative aspect-[3/4] rounded-md overflow-hidden shadow-elegant">
                <img src={site.img} alt={site.name} loading="lazy" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-3xl text-beige mb-1">{site.name}</h3>
                  <div className="text-sm text-mustard">{site.desc}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
