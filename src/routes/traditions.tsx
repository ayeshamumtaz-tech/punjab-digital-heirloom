import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

import mela from "@/assets/tradition-mela.jpg";
import kabaddi from "@/assets/tradition-kabaddi.jpg";
import bazaar from "@/assets/tradition-bazaar.jpg";
import mayun from "@/assets/wedding-mayun.jpg";
import mehndiNight from "@/assets/wedding-mehndi-night.jpg";
import nikah from "@/assets/wedding-nikah.jpg";
import barat from "@/assets/wedding-barat-groom.jpg";
import doli from "@/assets/wedding-doli.jpg";
import rukhsati from "@/assets/wedding-rukhsati.jpg";
import walima from "@/assets/wedding-walima.jpg";


export const Route = createFileRoute("/traditions")({
  head: () => ({
    meta: [
      { title: "Rasm-o-Riwaj — Traditions of Pakistani Punjab | VIRSA" },
      {
        name: "description",
        content:
          "Wedding rituals, melas, bazaar culture, and kabaddi — the customs and ceremonies that have shaped daily life across Pakistani Punjab for centuries.",
      },
      { property: "og:title", content: "Rasm-o-Riwaj — Traditions of Punjab" },
      {
        property: "og:description",
        content:
          "A cultural documentation of weddings, festivals, bazaars, and folk sports of Pakistani Punjab.",
      },
      { property: "og:image", content: mela },
      { property: "twitter:image", content: mela },
    ],
  }),
  component: TraditionsPage,
});

const wedding = [
  { title: "Mayun", body: "The bride wears yellow. Female relatives apply ubtan paste. Marigolds rain from the ceiling. The journey begins in turmeric and laughter.", img: mayun, day: "Day 1" },
  { title: "Mehndi Night", body: "Henna is applied in paisleys and peacocks. The dholki begins; women's tappay verses fill the courtyard. Yellow and orange everywhere.", img: mehndiNight, day: "Day 2" },
  { title: "Chooriyan", body: "Glass bangles in red, green and gold are slipped onto the bride's wrists by her mother and aunts — each colour a quiet wish.", img: chooriyan, day: "Ritual" },
  { title: "Nikah", body: "The maulvi reads the marriage contract. Three times: qubool hai. The covenant is sealed.", img: nikah, day: "Day 3" },
  { title: "Barat", body: "The groom arrives, sehra trembling, fireworks splitting the sky. Two families meet — milni — and the celebration becomes one.", img: barat, day: "Day 3" },
  { title: "Doli", body: "A doli draped in fresh jasmine and marigolds — carried on the shoulders of four men. The bride leaves her father's home.", img: doli, day: "Vidaai" },
  { title: "Rukhsati", body: "The Quran held over her head, brothers and father escorting her, marigold petals in the air. The most emotional moment.", img: rukhsati, day: "Vidaai" },
  { title: "Walima", body: "The morning after. Family. Pulao, korma, kebabs. The wedding ends not with noise but with belonging.", img: walima, day: "Day 4" },
];

const customs = [
  {
    title: "Melas — The Village Festivals",
    body: "From the Urs at Sufi shrines to the harvest melas of Sahiwal, the Pakistani Punjabi mela is a riot of colour: bunting flags, swings, sugarcane juice carts, dust and golden afternoon light. Centuries of communal joy.",
    img: mela,
  },
  {
    title: "Bazaar Culture",
    body: "The bazaar is not a place — it is a way of life. Anarkali, Liberty, Ichhra, the Walled City lanes — fabric shops, brass utensils, spice sacks, and the unhurried art of bargaining over a cup of doodh patti chai.",
    img: bazaar,
  },
  {
    title: "Kabaddi — The Soil Sport",
    body: "Stripped to shorts, dust in the air, the raider chants 'kabaddi-kabaddi' on a single breath. Played in every village ground from Faisalabad to Bahawalpur — Pakistan's national sport, born of Punjabi soil.",
    img: kabaddi,
  },
];

function TraditionsPage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden bg-ink">
        <img src={mela} alt="Pakistani Punjabi mela festival with colourful bunting" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Rasm-o-Riwaj</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            The customs that <span className="italic gold-text">carry us.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-beige/80">
            Weddings, festivals, bazaars, and folk sports — documented as living tradition, not staged performance.
          </p>
        </div>
      </section>

      {/* Customs */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Cultural Customs"
            title="Three pillars of Punjabi public life."
            description="The mela, the bazaar, the kabaddi ground — three places where the entire province still gathers."
          />
          <div className="mt-16 space-y-16">
            {customs.map((c, i) => (
              <article key={c.title} className={`grid md:grid-cols-5 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-3 image-zoom rounded-md aspect-[4/3] shadow-elegant">
                  <img src={c.img} alt={c.title} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display text-3xl md:text-4xl mb-4">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding ritual gallery */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            variant="light"
            eyebrow="Weddings as Tradition"
            title="Four nights. One lifetime."
            description="A Pakistani Punjabi wedding is not an event — it is a season. From mayun to walima, every ritual carries five centuries of meaning. Documented here as cultural heritage."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wedding.map((w) => (
              <article key={w.title} className="group bg-ink/40 rounded-md overflow-hidden border border-mustard/15 hover:border-mustard/40 transition-colors">
                <div className="image-zoom aspect-[4/5]">
                  <img src={w.img} alt={w.title} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-mustard mb-1.5">{w.day}</div>
                  <h3 className="font-display text-xl text-beige mb-2">{w.title}</h3>
                  <p className="text-sm text-beige/70 leading-relaxed">{w.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
