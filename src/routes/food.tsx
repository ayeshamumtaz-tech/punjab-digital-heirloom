import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

import lassi from "@/assets/food-lassi.jpg";
import saag from "@/assets/food-saag.jpg";
import nihari from "@/assets/food-nihari.jpg";
import streetfood from "@/assets/food-streetfood.jpg";
import halwapuri from "@/assets/food-halwapuri.jpg";
import pakoraChai from "@/assets/food-pakora-chai.jpg";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Cuisine of Punjab — Saag, Nihari, Lassi & Street Food | VIRSA" },
      {
        name: "description",
        content:
          "Sarson da saag, nihari, lassi in clay kulhars, gol gappay, halwa puri, and Lahore's legendary street food — Pakistani Punjabi cuisine as cultural identity.",
      },
      { property: "og:title", content: "Cuisine of Punjab" },
      {
        property: "og:description",
        content:
          "Where butter is poetry and lassi is a love letter — explore the food culture of Pakistani Punjab.",
      },
      { property: "og:image", content: nihari },
      { property: "twitter:image", content: nihari },
    ],
  }),
  component: FoodPage,
});

const dishes = [
  { name: "Sarson Da Saag & Makki Di Roti", origin: "Rural Heartland", body: "Mustard greens slow-cooked with garlic and ginger, served with corn flatbread, white butter, and jaggery. Winter on a brass thali.", img: saag },
  { name: "Lassi", origin: "Lahore Pre-Dawn", body: "A clay kulhar overflowing with churned yogurt and a finger of malai. Sweet or salty. Always cold. Always served with a smile.", img: lassi },
  { name: "Nihari", origin: "Old Lahore", body: "Slow-cooked overnight. Beef shank falling apart. Garam masala, ginger julienne, lemon. Eaten at sunrise with naan torn straight from the tandoor.", img: nihari },
  { name: "Gol Gappay & Chaat", origin: "Mall Road, Lahore", body: "Crisp puris filled with chickpeas, potato, and an explosive rush of tamarind water. Dahi bhallay, samosa, chana chaat — the entire street on one brass tray.", img: streetfood },
  { name: "Halwa Puri", origin: "Sunday Mornings", body: "Suji halwa, channa masala, fried puris. The breakfast that defines a weekend. Best eaten standing up at a roadside dhaba.", img: halwapuri },
  { name: "Pakoray & Chai", origin: "Monsoon Afternoons", body: "Crisp besan-coated vegetables, fried as the rain begins. Karak doodh patti chai in a clay cup. The whole house gathers at the table.", img: pakoraChai },
];

function FoodPage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden bg-ink">
        <img src={nihari} alt="Pakistani nihari in a brass karahi with naan" className="absolute inset-0 w-full h-full object-cover opacity-70 ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Punjab Da Khana</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            Where butter is poetry,
            <span className="block italic gold-text">and lassi is a love letter.</span>
          </h1>
        </div>
      </section>

      <section className="phulkari-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="The Menu"
            title="Six dishes that define a province."
            description="From rural winter staples to the after-midnight street food of Lahore — taste the geography of Pakistani Punjab."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((d, i) => (
              <article key={d.name} className="group bg-card rounded-md overflow-hidden shadow-soft hover-lift" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="image-zoom aspect-[4/3]">
                  <img src={d.img} alt={d.name} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] text-primary tracking-[0.2em] uppercase mb-2">{d.origin}</div>
                  <h3 className="font-display text-2xl mb-3 leading-tight">{d.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-red text-beige py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            "In Lahore, you don't go to dinner. <span className="text-mustard">Dinner happens to you.</span>"
          </p>
        </div>
      </section>
    </>
  );
}
