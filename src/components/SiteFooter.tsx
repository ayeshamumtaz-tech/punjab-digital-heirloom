import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";

const socials = [
  { Icon: Instagram, label: "Instagram", handle: "@virsa.pk", href: "https://instagram.com/virsa.pk" },
  { Icon: Facebook, label: "Facebook", handle: "/virsa.pk", href: "https://facebook.com/virsa.pk" },
  { Icon: Youtube, label: "YouTube", handle: "@VirsaHeritage", href: "https://youtube.com/@VirsaHeritage" },
  { Icon: Music2, label: "TikTok", handle: "@virsa.pk", href: "https://tiktok.com/@virsa.pk" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-beige">
      <div className="phulkari-border" />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-full bg-gradient-sunset flex items-center justify-center shadow-gold">
                <span className="font-display text-2xl text-primary-foreground leading-none">V</span>
              </div>
              <div>
                <div className="font-display text-3xl">VIRSA</div>
                <div className="text-[10px] tracking-[0.3em] text-mustard uppercase">
                  ورثہ · Punjab Heritage
                </div>
              </div>
            </div>
            <p className="text-beige/70 leading-relaxed font-display text-lg italic">
              "Preserving Punjab's soul — its weddings, its fields, its songs — and presenting them
              to the world."
            </p>
            <div className="flex items-center gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-beige/20 flex items-center justify-center hover:bg-mustard hover:text-ink hover:border-mustard transition-all"
                  aria-label={`${s.label} ${s.handle}`}
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-mustard text-xs tracking-[0.25em] uppercase mb-5">Explore</div>
            <ul className="space-y-3 text-beige/80">
              <li><Link to="/heritage" className="hover:text-mustard transition-colors">Virsa — Heritage</Link></li>
              <li><Link to="/traditions" className="hover:text-mustard transition-colors">Rasm-o-Riwaj</Link></li>
              <li><Link to="/shop" className="hover:text-mustard transition-colors">Shop</Link></li>
              <li><Link to="/food" className="hover:text-mustard transition-colors">Zaiqa — Cuisine</Link></li>
              <li><Link to="/contact" className="hover:text-mustard transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-mustard text-xs tracking-[0.25em] uppercase mb-5">Follow VIRSA</div>
            <ul className="space-y-3 text-beige/80 text-sm">
              {socials.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <s.Icon className="h-4 w-4 text-mustard shrink-0" />
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-mustard transition-colors">
                    <span className="text-beige/50">{s.label} ·</span> {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-beige/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-beige/50">
          <div>© {new Date().getFullYear()} VIRSA · Punjab Heritage Atelier · Lahore, Pakistan</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-mustard">Privacy</a>
            <a href="#" className="hover:text-mustard">Terms</a>
            <a href="#" className="hover:text-mustard">Artisans</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
