import { Heart } from "lucide-react";
import { useCart } from "./CartContext";

type Product = {
  id: number;
  name: string;
  artisan: string;
  price: number;
  tag: string;
  img: string;
  imgAlt?: string;
  /** Short cultural significance / story */
  story?: string;
};

/**
 * Bazaar product card with one or two side-by-side images per item,
 * plus a short cultural note that gives the product context.
 */
export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const images = product.imgAlt ? [product.img, product.imgAlt] : [product.img];
  const isSingle = images.length === 1;
  return (
    <article className="group flex flex-col">
      <div
        className={`relative grid gap-1.5 mb-4 ${isSingle ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-md bg-muted shadow-soft ${
              isSingle ? "aspect-[4/5]" : "aspect-[3/4]"
            }`}
          >
            <img
              src={src}
              alt={`${product.name}${isSingle ? "" : ` — view ${i + 1}`}`}
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
      </div>

      <div className="text-[11px] tracking-[0.2em] uppercase text-primary mb-1.5">{product.tag}</div>
      <h3 className="font-display text-lg md:text-xl leading-tight mb-1">{product.name}</h3>
      <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/80 mb-2">
        {product.artisan}
      </div>
      {product.story && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{product.story}</p>
      )}
      <div className="mt-auto pt-2 flex items-baseline justify-between border-t border-border/60">
        <div className="font-medium">${product.price}</div>
        <button
          type="button"
          onClick={() =>
            addItem({ id: product.id, name: product.name, price: product.price, img: product.img })
          }
          className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors"
        >
          + Add to Cart
        </button>
      </div>
    </article>
  );
}

export type { Product };
