import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

import heroImg from "@/assets/heritage-badshahi.jpg";
import lahoreFort from "@/assets/heritage-lahore-fort.jpg";
import shalimar from "@/assets/heritage-shalimar.jpg";
import harappaBw from "@/assets/heritage-harappa-bw.jpg";
import indusArtifactBw from "@/assets/heritage-indus-artifact-bw.jpg";
import colonialBw from "@/assets/heritage-colonial-lahore-bw.jpg";
import partitionBw from "@/assets/heritage-partition-bw.jpg";

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
          "A scroll-based timeline of Pakistani Punjab's civilizations, monuments, and stories — illustrated with archival photography.",
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
    img: harappaBw,
    bw: true,
  },
  {
    period: "c. 2000 BCE",
    title: "The Priest King & The Seals",
    body: "Terracotta figures, soapstone seals, mysterious script. Five thousand years on, the artifacts of Mohenjo-Daro and Harappa still speak — even though we have not yet learned to listen.",
    accent: "mustard",
    img: indusArtifactBw,
    bw: true,
  },
  {
    period: "1556 – 1707",
    title: "Mughal Lahore",
    body: "Akbar made Lahore his capital. Shah Jahan built Shalimar. Aurangzeb crowned the city with the Badshahi Mosque. Marble, fresco, and red sandstone — an empire of grace.",
    accent: "royal-green",
    img: heroImg,
  },
  {
    period: "1799 – 1849",
    title: "Sikh Misls & Rohtas",
    body: "Ranjit Singh's lion court ruled from the Lahore Fort. Earlier, Sher Shah Suri's Rohtas — a fortress of impossible scale — still stands above the Jhelum.",
    accent: "indigo-blue",
    img: lahoreFort,
  },
  {
    period: "1849 – 1947",
    title: "Colonial Lahore",
    body: "The Mall, Anarkali Bazaar, the High Court, Government College — Lahore became one of the great cities of British India. Tongas crowded the streets. Ghalib walked here. Faiz dreamed here.",
    accent: "gold",
    img: colonialBw,
    bw: true,
  },
  {
    period: "August 1947",
    title: "The Partition",
    body: "The Radcliffe Line cut the heartland in two. Millions crossed in both directions; Lahore became the capital of Pakistani Punjab. From this rupture, a new cultural identity was forged — rooted in the same soil, the same language, the same songs.",
    accent: "deep-red",
    img: partitionBw,
    bw: true,
  },
  {
    period: "1947 → Today",
    title: "Pakistani Punjab — A Living Capital",
    body: "Pakistan's cultural heart. Faiz festivals at Alhamra. Food street at Fort Road. The Walled City restored, brick by brick. A heritage that refuses to be a museum piece.",
    accent: "royal-green",
    img: shalimar,
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
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="The Timeline"
            title="Walk through the centuries."
            description="Each era left its fingerprint on the soil, the script, and the streets of present-day Pakistani Punjab. Archival imagery for the ancient and colonial eras; full colour for the living present."
          />
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="space-y-20">
              {eras.map((era, i) => (
                <div
                  key={era.title}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className="inline-block text-xs tracking-[0.25em] uppercase mb-2 font-medium"
                      style={{ color: `var(--color-${era.accent})` }}
                    >
                      {era.period}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl mb-4">{era.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{era.body}</p>
                    {era.bw && (
                      <div className="mt-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/70">
                        — Archival imagery
                      </div>
                    )}
                  </div>
                  <div className="pl-12 md:pl-0">
                    <div className="image-zoom rounded-md aspect-[4/3] shadow-elegant overflow-hidden">
                      <img
                        src={era.img}
                        alt={era.title}
                        loading="lazy"
                        width={1600}
                        height={1200}
                        className={`h-full w-full object-cover ${era.bw ? "" : ""}`}
                      />
                    </div>
                  </div>
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
