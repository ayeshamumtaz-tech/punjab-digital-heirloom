import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/heritage", label: "Heritage" },
  { to: "/culture", label: "Culture" },
  { to: "/food", label: "Cuisine" },
  { to: "/music", label: "Music" },
  { to: "/shop", label: "Bazaar" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-sunset flex items-center justify-center shadow-gold">
                <span className="font-display text-primary-foreground text-lg leading-none">V</span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-gold/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="leading-none">
              <div className="font-display text-2xl tracking-wide text-foreground">VIRSA</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                ورثہ · Heritage
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
                className="text-sm tracking-wide transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-sunset scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors shadow-soft"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-md text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-background shadow-elegant flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-display text-2xl">VIRSA</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="font-display text-2xl py-3 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="phulkari-border" />
        </div>
      </div>
    </>
  );
}
