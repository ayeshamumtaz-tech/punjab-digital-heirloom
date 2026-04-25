import { Heart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  artisan: string;
  price: number;
  tag: string;
  img: string;
  imgAlt: string;
};

/**
 * Bazaar product card with two side-by-side images per item.
 * - Mobile: stacked top/bottom or single
 * - md+: two square images side-by-side that both reveal on hover
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative grid grid-cols-2 gap-1.5 mb-4">
        {[product.img, product.imgAlt].map((src, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted shadow-soft"
          >
            <img
              src={src}
              alt={`${product.name} — view ${i + 1}`}
              loading="lazy"
              width={960}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-ink/95 to-transparent rounded-b-md">
          <div className="text-[10px] text-mustard tracking-[0.25em] uppercase">{product.artisan}</div>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.2em] uppercase text-primary mb-1.5">{product.tag}</div>
      <h3 className="font-display text-lg md:text-xl leading-tight mb-1">{product.name}</h3>
      <div className="mt-1 flex items-baseline justify-between">
        <div className="font-medium">${product.price}</div>
        <button className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors">
          + Add
        </button>
      </div>
    </article>
  );
}

export type { Product };
