import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaTile } from "@/components/MediaTile";

import mehndi from "@/assets/culture-mehndi.jpg";
import mehndiNight from "@/assets/wedding-mehndi-night.jpg";
import chooriyan from "@/assets/wedding-chooriyan.jpg";
import doli from "@/assets/wedding-doli.jpg";
import baratGroom from "@/assets/wedding-barat-groom.jpg";
import walima from "@/assets/wedding-walima.jpg";
import mayun from "@/assets/wedding-mayun.jpg";
import nikah from "@/assets/wedding-nikah.jpg";
import rukhsati from "@/assets/wedding-rukhsati.jpg";
import bhangraImg from "@/assets/dance-bhangra.jpg";
import luddiImg from "@/assets/dance-luddi.jpg";
import kikliImg from "@/assets/culture-kikli.jpg";
import truck from "@/assets/culture-truck-art.jpg";
import family from "@/assets/lifestyle-family.jpg";
import womenCasual from "@/assets/lifestyle-women-casual.jpg";
import menCasual from "@/assets/lifestyle-men-casual.jpg";
import elderPagri from "@/assets/portrait-elder-pagri.jpg";
import deraHukka from "@/assets/lifestyle-dera-hukka.jpg";
import tanga from "@/assets/lifestyle-tanga.jpg";


export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Living Culture of Punjab — Weddings, Dance & Daily Life | VIRSA" },
      {
        name: "description",
        content:
          "Mayun, mehndi, nikah, doli, barat, walima, rukhsati, bhangra, luddi, kikli — the rituals and daily living traditions of Pakistani Punjab.",
      },
      { property: "og:title", content: "Living Culture of Punjab" },
      {
        property: "og:description",
        content:
          "Weddings, dance, dress, and identity — the rituals and everyday rhythms that make Punjab pulse.",
      },
      { property: "og:image", content: doli },
      { property: "twitter:image", content: doli },
    ],
  }),
  component: CulturePage,
});

const wedding = [
  {
    title: "Mayun",
    body: "The bride wears yellow. Female relatives apply ubtan paste to her arms. Marigolds rain from the ceiling. The journey begins in turmeric and laughter.",
    img: mayun,
    day: "Day 1",
  },
  {
    title: "Mehndi Night",
    body: "Henna is applied in paisleys and peacocks. The dholki begins, women's tappay verses fill the courtyard. Yellow and orange everywhere.",
    img: mehndiNight,
    day: "Day 2",
  },
  {
    title: "Chooriyan & Hath Bharai",
    body: "Glass bangles in red, green and gold are slipped onto the bride's wrists by her mother and aunts — each colour a quiet wish.",
    img: chooriyan,
    day: "Ritual",
  },
  {
    title: "Nikah",
    body: "The maulvi reads the marriage contract. The groom in cream sherwani and sehra of fresh jasmine. Three times: qubool hai. The covenant is sealed.",
    img: nikah,
    day: "Day 3",
  },
  {
    title: "Barat",
    body: "The groom rides in on a white horse, sehra trembling, fireworks splitting the sky. Two families meet on the road — milni — and the celebration becomes one.",
    img: baratGroom,
    day: "Day 3",
  },
  {
    title: "Doli",
    body: "A modern doli draped in fresh white jasmine, red roses and orange marigolds — carried on the shoulders of four men. The bride leaves her father's home.",
    img: doli,
    day: "Vidaai",
  },
  {
    title: "Rukhsati",
    body: "The Quran held over her head, brothers and father escorting her, marigold petals in the air. The most emotional moment of the entire week.",
    img: rukhsati,
    day: "Vidaai",
  },
  {
    title: "Walima",
    body: "The morning after. Family. Pulao, korma, kebabs. The bride in pastel and silver. The wedding ends not with noise but with belonging.",
    img: walima,
    day: "Day 4",
  },
  {
    title: "Mehndi Patterns",
    body: "Deep maroon stains spreading from fingertip to elbow. Paisleys, peacocks, the groom's name hidden somewhere only he will find.",
    img: mehndi,
    day: "Tradition",
  },
];

const danceVideos = [
  {
    title: "Bhangra — Pakistani Folk",
    desc: "The harvest dance. Energetic kicks, fan-shaped turlas, and the ground-shaking double beat of the dhol.",
    image: bhangraImg,
  },
  {
    title: "Luddi — The Circle Dance",
    desc: "Slower, circular, performed in groups with raised dupattas catching the evening air.",
    image: luddiImg,
  },
  {
    title: "Kikli — Girls' Spinning Game",
    desc: "Two girls cross hands and spin until the world blurs. A childhood memory carried by every Punjabi household.",
    image: kikliImg,
  },
  {
    title: "Dera — Elders & Hukka",
    desc: "White pagris, brass hukka, charpais on the edge of golden mustard fields. The original gathering spot.",
    image: deraHukka,
  },
];

const dailyLife = [
  { title: "The Village Dera", desc: "Elders on charpais, brass hukka, white pagris, golden fields behind. The original gathering spot.", img: deraHukka },
  { title: "Tanga in Old Lahore", desc: "Horse-drawn carriages still trace the narrow alleys of the walled city — a living echo of pre-motor Punjab.", img: tanga },
  { title: "Casual Daily Wear", desc: "Plain cotton shalwar kameez, light dupattas, leather chappals. Comfort, modesty, and quiet elegance.", img: womenCasual },
  { title: "Three Generations", desc: "Joint families under one roof — grandfather in white, mother in florals, son in beige, daughter in red.", img: family },
  { title: "Roadside Conversations", desc: "Three men, three ages, one cup of doodh patti chai. Mornings begin at the dhaba, never at home.", img: menCasual },
  { title: "The White Pagri", desc: "A simple white turban, deeply tanned skin, a wooden hukka. The face of the Punjabi elder, unchanged across centuries.", img: elderPagri },
];

function CulturePage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={doli} alt="Modern floral Pakistani Punjabi bride doli at golden hour" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Living Traditions</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            The colors that <span className="italic gold-text">won't fade.</span>
          </h1>
        </div>
      </section>

      {/* Wedding Ritual Gallery */}
      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Punjabi Wedding Ritual Gallery"
            title="Four nights. One lifetime."
            description="A Pakistani Punjabi wedding is not an event — it's a season. From mayun to walima, every ritual carries five centuries of meaning."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wedding.map((w) => (
              <article key={w.title} className="bg-card rounded-md overflow-hidden shadow-soft hover-lift">
                <div className="image-zoom aspect-[4/5]">
                  <img src={w.img} alt={w.title} loading="lazy" width={1600} height={2000} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="text-xs text-primary tracking-[0.2em] uppercase mb-2">{w.day}</div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dance & Folk Videos — AI generated motion clips */}
      <section className="bg-ink text-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            variant="light"
            eyebrow="Dance & Joy"
            title="When the dhol drops, Punjab dances."
            description="Bhangra in the fields, luddi in the courtyard, kikli in the dust of a village afternoon — and elders smoking hukka on the dera. Press play."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
            {danceVideos.map((v) => (
              <article key={v.title} className="group">
                <MediaTile image={v.image} alt={v.title} className="border border-mustard/20 shadow-elegant" />
                <h3 className="font-display text-2xl md:text-3xl mt-5 text-beige">{v.title}</h3>
                <p className="text-beige/70 leading-relaxed mt-2">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Daily life mosaic */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Everyday Punjab"
            title="Beyond the wedding photographs."
            description="The dera, the tanga, the cotton shalwar kameez, the joint family. The Punjab that lives between celebrations."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {dailyLife.map((tile) => (
              <article key={tile.title} className="group relative aspect-[4/5] rounded-md overflow-hidden shadow-soft">
                <img src={tile.img} alt={tile.title} loading="lazy" width={1600} height={2000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
          <div className="mt-12 flex items-center gap-3 text-xs text-foreground/60">
            <span className="inline-block h-px w-8 bg-foreground/30" />
            Truck Art is a moving canvas — peacocks, calligraphy, mirrors painted by hand on every Bedford & Hino.
          </div>
          <div className="mt-6 rounded-md overflow-hidden shadow-soft">
            <img src={truck} alt="Pakistani truck art with peacocks and calligraphy" loading="lazy" width={1920} height={900} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
