import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Instagram, Youtube, Facebook, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const socials = [
  { Icon: Instagram, label: "Instagram", handle: "@virsa.pk", href: "https://instagram.com/virsa.pk" },
  { Icon: Facebook, label: "Facebook", handle: "/virsa.pk", href: "https://facebook.com/virsa.pk" },
  { Icon: Youtube, label: "YouTube", handle: "@VirsaHeritage", href: "https://youtube.com/@VirsaHeritage" },
  { Icon: Music2, label: "TikTok", handle: "@virsa.pk", href: "https://tiktok.com/@virsa.pk" },
];

import lahoreAlley from "@/assets/lahore-walled-city.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VIRSA | Punjab Heritage Atelier" },
      {
        name: "description",
        content:
          "Reach the Virsa team in Lahore. Press, partnerships, artisan collaborations, and customer enquiries.",
      },
      { property: "og:title", content: "Contact VIRSA" },
      { property: "og:description", content: "Reach our team in Lahore for press, partnerships, and orders." },
      { property: "og:image", content: lahoreAlley },
      { property: "twitter:image", content: lahoreAlley },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative h-[55vh] flex items-end overflow-hidden bg-ink">
        <img src={lahoreAlley} alt="Old Lahore walled city alley at twilight" className="absolute inset-0 w-full h-full object-cover ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-[0.95]">
            Write to us from <span className="italic gold-text">anywhere.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 phulkari-bg">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Press, partnerships, or simply to say hello."
              description="We respond to every message within two working days. For artisan collaborations or wholesale, please mention your country."
            />
            <div className="mt-10 space-y-5 text-foreground/80">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <div className="font-medium">hello@virsa.pk</div>
                  <div className="text-sm text-muted-foreground">General enquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <div className="font-medium">Gulberg III, Lahore</div>
                  <div className="text-sm text-muted-foreground">Punjab, Pakistan</div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-xs tracking-[0.25em] uppercase text-foreground/60 mb-4">Follow Virsa</div>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <span className="h-10 w-10 rounded-full border border-foreground/15 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        <s.Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <div className="font-medium group-hover:text-primary transition-colors">{s.handle}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="bg-card rounded-lg shadow-soft p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-foreground/60">Name</label>
              <input className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-foreground/60">Email</label>
              <input type="email" className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-foreground/60">Message</label>
              <textarea rows={5} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary resize-none" placeholder="Tell us how we can help…" />
            </div>
            <button className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-medium hover:bg-primary/90 transition-colors">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
