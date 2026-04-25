import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

import heroBride from "@/assets/hero-bride.jpg";
import mehndi from "@/assets/culture-mehndi.jpg";
import fields from "@/assets/culture-fields.jpg";
import truck from "@/assets/culture-truck-art.jpg";
import phulkari from "@/assets/textile-phulkari.jpg";
import dhol from "@/assets/music-dhol.jpg";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Living Culture of Punjab — Weddings, Festivals & Identity | VIRSA" },
      {
        name: "description",
        content:
          "Mehndi nights, barat processions, walima receptions, bhangra & luddi — explore the daily living traditions of Pakistani Punjab.",
      },
      { property: "og:title", content: "Living Culture of Punjab" },
      {
        property: "og:description",
        content:
          "Weddings, dance, dress, and identity — the rituals that make Punjab pulse.",
      },
      { property: "og:image", content: mehndi },
      { property: "twitter:image", content: mehndi },
    ],
  }),
  component: CulturePage,
});

const wedding = [
  {
    title: "Mayun & Mehndi",
    body: "The bride wears yellow. Marigolds rain from the ceiling. The dholki begins, and the women's tappay verses turn into the night's soundtrack.",
    img: mehndi,
  },
  {
    title: "Barat",
    body: "The groom rides in on a white horse, sehra trembling, fireworks splitting the sky. The two families meet on the road — milni — and the celebration becomes one.",
    img: heroBride,
  },
  {
    title: "Walima",
    body: "The morning after. Family. Pulao, korma, kebabs. Quiet conversation. The wedding ends not with noise but with belonging.",
    img: phulkari,
  },
];

const tiles = [
  { title: "Bhangra", desc: "Stage-style and rural folk — the rhythm of a harvest celebrated by the world.", img: dhol },
  { title: "Luddi", desc: "A slower, circular dance of joy — performed in groups, hands raised, scarves catching the air.", img: mehndi },
  { title: "Tappay", desc: "Couplet folk songs traded back and forth — Punjab's oldest form of conversational music.", img: phulkari },
  { title: "Truck Art", desc: "The street-level Sistine Chapel — peacocks, calligraphy, mirrors, marigolds painted by hand.", img: truck },
  { title: "Mustard Fields", desc: "Sarson ke khet stretching to the horizon — an annual gold rush across the heartland.", img: fields },
  { title: "Bridal Dupatta", desc: "Crimson, gold-edged, embroidered with phulkari — the most loaded fabric in any Punjabi home.", img: heroBride },
];

function CulturePage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={mehndi} alt="Mehndi night celebration" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Living Traditions</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            The colors that <span className="italic gold-text">won't fade.</span>
          </h1>
        </div>
      </section>

      {/* Weddings */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Punjabi Weddings"
            title="Three nights. One lifetime."
            description="A Pakistani Punjabi wedding is not an event — it's a season. From mayun to walima, every ritual carries five centuries of meaning."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {wedding.map((w, i) => (
              <article key={w.title} className="bg-card rounded-md overflow-hidden shadow-soft hover-lift">
                <div className="image-zoom aspect-[4/5]">
                  <img src={w.img} alt={w.title} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="text-xs text-primary tracking-[0.2em] uppercase mb-2">Day {i + 1}</div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural mosaic tiles */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            variant="light"
            align="center"
            eyebrow="The Mosaic"
            title="Eight ways Punjab still sings."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {tiles.map((tile) => (
              <article key={tile.title} className="group relative aspect-[4/5] rounded-md overflow-hidden">
                <img src={tile.img} alt={tile.title} loading="lazy" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 transition-transform duration-500">
                  <h3 className="font-display text-xl md:text-2xl text-beige">{tile.title}</h3>
                  <p className="mt-2 text-sm text-beige/80 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
