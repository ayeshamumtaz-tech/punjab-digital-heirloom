import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

import dholPlayer from "@/assets/music-dhol-player.jpg";
import qawwali from "@/assets/music-qawwali.jpg";
import algoza from "@/assets/music-algoza.jpg";
import dhol from "@/assets/music-dhol.jpg";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music & Folk of Punjab — Dhol, Algoza, Qawwali & Bhangra | VIRSA" },
      {
        name: "description",
        content:
          "From the algoza of Cholistan to the dhol of barat processions, qawwali at Sufi shrines and tappay verses — listen to the sound of Pakistani Punjab.",
      },
      { property: "og:title", content: "Music & Folk of Punjab" },
      {
        property: "og:description",
        content:
          "The dhol does not need a translator. Watch and listen — folk performances and instruments of Pakistani Punjab.",
      },
      { property: "og:image", content: dholPlayer },
      { property: "twitter:image", content: dholPlayer },
    ],
  }),
  component: MusicPage,
});

const performances = [
  {
    title: "Dhol — The Heartbeat of Barat",
    artist: "Pappu Saeen — Pakistani Folk",
    desc: "The double-headed barrel drum that has announced every Punjabi celebration for centuries.",
    videoId: "F-XHPGzqEAA",
    accent: "deep-red",
  },
  {
    title: "Qawwali — Dam Mast Qalandar",
    artist: "Nusrat Fateh Ali Khan",
    desc: "The Sufi devotional that travels from Lahore to the world. Harmonium, tabla, and the rising hands of clapping.",
    videoId: "AEUlFNGcvX8",
    accent: "royal-green",
  },
  {
    title: "Algoza — Twin Flutes of Cholistan",
    artist: "Ustad Khamiso Khan",
    desc: "Two wooden flutes played at once. The lonely song of the desert shepherd, breathed into the air.",
    videoId: "qjN9krWBN84",
    accent: "mustard",
  },
  {
    title: "Tappay — Punjabi Folk Verses",
    artist: "Pathanay Khan",
    desc: "Couplets traded back and forth, the oldest form of conversational music in Punjab.",
    videoId: "jzNEi1KMA50",
    accent: "indigo-blue",
  },
];

const instruments = [
  { name: "Dhol", desc: "The double-headed barrel drum. The heartbeat of every barat, every harvest, every celebration." },
  { name: "Algoza", desc: "Twin wooden flutes played simultaneously. The lonely song of the Cholistan shepherd." },
  { name: "Chimta", desc: "Long iron tongs with cymbals — the rhythmic spine of Sufi qawwali." },
  { name: "Tumbi", desc: "A single-string instrument plucked with the index finger — sharp, repetitive, hypnotic." },
];

function MusicPage() {
  return (
    <>
      <section className="relative h-[80vh] flex items-end overflow-hidden bg-ink">
        <img src={dholPlayer} alt="Pakistani folk dhol player in mustard fields" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Folk & Rhythm</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            The dhol does not need
            <span className="block italic gold-text">a translator.</span>
          </h1>
        </div>
      </section>

      {/* Live performances — YouTube */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            variant="light"
            eyebrow="Watch & Listen"
            title="The sound archive."
            description="Real performances by Pakistani folk masters — dhol, qawwali, algoza, and tappay. Press play."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
            {performances.map((p) => (
              <article key={p.title} className="group">
                <YouTubeEmbed videoId={p.videoId} title={p.title} className="border border-mustard/20 shadow-elegant" />
                <div className="mt-5 flex items-start gap-4">
                  <div
                    className="h-1 w-12 mt-3 shrink-0 rounded-full"
                    style={{ background: `var(--color-${p.accent})` }}
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-beige leading-tight">{p.title}</h3>
                    <div className="text-sm text-mustard mt-1">{p.artist}</div>
                    <p className="text-beige/70 mt-3 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="image-zoom rounded-md aspect-[3/4] shadow-elegant">
                <img src={algoza} alt="Folk musician with algoza twin flutes" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
              </div>
              <div className="image-zoom rounded-md aspect-[3/4] mt-12 shadow-elegant">
                <img src={qawwali} alt="Qawwali ensemble at a Sufi shrine" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
              </div>
            </div>
            <SectionHeading
              eyebrow="Instruments"
              title="Wood, skin, iron, breath."
              description="Punjab's folk instruments are made of the simplest materials — and yet they have carried the most complex emotions for a thousand years."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instruments.map((inst) => (
              <article key={inst.name} className="bg-card rounded-md p-7 shadow-soft hover-lift border-t-4 border-primary">
                <h3 className="font-display text-3xl mb-3">{inst.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{inst.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-deep-red text-beige py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            "Music in Punjab is not performed. <span className="text-mustard">It is breathed.</span>"
          </p>
          <img src={dhol} alt="" aria-hidden className="hidden" />
        </div>
      </section>
    </>
  );
}
