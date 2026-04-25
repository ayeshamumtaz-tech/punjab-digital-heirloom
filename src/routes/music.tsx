import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

import dhol from "@/assets/music-dhol.jpg";
import algoza from "@/assets/music-algoza.jpg";
import phulkari from "@/assets/textile-phulkari.jpg";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music & Folk of Punjab — Dhol, Algoza & Bhangra | VIRSA" },
      {
        name: "description",
        content:
          "From the algoza of Cholistan to the dhol of barat processions, qawwali and tappay — the sound of Pakistani Punjab.",
      },
      { property: "og:title", content: "Music & Folk of Punjab" },
      {
        property: "og:description",
        content:
          "The dhol does not need a translator. Explore the folk instruments and rhythms of Pakistani Punjab.",
      },
      { property: "og:image", content: dhol },
      { property: "twitter:image", content: dhol },
    ],
  }),
  component: MusicPage,
});

const tracks = [
  { title: "Dhol Beat — Wedding Procession", artist: "Folk Ensemble", duration: "3:42", color: "deep-red" },
  { title: "Algoza Solo — Cholistan Desert", artist: "Ustad Khamiso Khan", duration: "5:18", color: "mustard" },
  { title: "Tappay — Heer Of Waris Shah", artist: "Pathanay Khan", duration: "7:24", color: "royal-green" },
  { title: "Qawwali — Dam Mast Qalandar", artist: "Sabri Brothers", duration: "9:11", color: "indigo-blue" },
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
        <img src={dhol} alt="Bhangra dhol players in mustard fields" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1200} />
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

      {/* Player */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                variant="light"
                eyebrow="Listen"
                title="The sound archive."
                description="A curated playlist of folk recordings, qawwali sessions, and field captures from across Pakistani Punjab."
              />
            </div>
            <div className="lg:col-span-7 space-y-3">
              {tracks.map((track, i) => (
                <button
                  key={track.title}
                  className="w-full group flex items-center gap-5 bg-beige/5 hover:bg-beige/10 border border-beige/10 hover:border-mustard/40 rounded-md p-5 transition-all text-left"
                >
                  <div
                    className="h-14 w-14 shrink-0 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `var(--color-${track.color})` }}
                  >
                    <Play className="h-5 w-5 text-beige fill-beige ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl text-beige truncate">{track.title}</div>
                    <div className="text-sm text-beige/60">{track.artist}</div>
                  </div>
                  <div className="text-sm text-mustard tabular-nums">{track.duration}</div>
                  <div className="text-xs text-beige/40 tabular-nums w-6">0{i + 1}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="image-zoom rounded-md aspect-[3/4] shadow-elegant">
                <img src={algoza} alt="Folk musician with algoza" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
              </div>
              <div className="image-zoom rounded-md aspect-[3/4] mt-12 shadow-elegant">
                <img src={phulkari} alt="Phulkari embroidery detail" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
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
    </>
  );
}
