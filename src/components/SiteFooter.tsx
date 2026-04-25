import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";

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
              {[Instagram, Youtube, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-beige/20 flex items-center justify-center hover:bg-mustard hover:text-ink hover:border-mustard transition-all"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-mustard text-xs tracking-[0.25em] uppercase mb-5">Explore</div>
            <ul className="space-y-3 text-beige/80">
              <li><Link to="/heritage" className="hover:text-mustard transition-colors">Heritage</Link></li>
              <li><Link to="/culture" className="hover:text-mustard transition-colors">Living Culture</Link></li>
              <li><Link to="/food" className="hover:text-mustard transition-colors">Cuisine</Link></li>
              <li><Link to="/music" className="hover:text-mustard transition-colors">Music & Folk</Link></li>
              <li><Link to="/shop" className="hover:text-mustard transition-colors">The Bazaar</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-mustard text-xs tracking-[0.25em] uppercase mb-5">Newsletter</div>
            <p className="text-beige/70 text-sm mb-4 leading-relaxed">
              Stories from Lahore. Cuisine from the heartland. Heritage in your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-beige/10 border border-beige/20 rounded-full px-5 py-3 text-sm text-beige placeholder:text-beige/40 focus:outline-none focus:border-mustard transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-mustard text-ink px-5 py-3 text-sm font-medium hover:bg-gold transition-colors"
              >
                Subscribe
              </button>
            </form>
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
