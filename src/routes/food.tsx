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
      { title: "Zaiqa — 15 Iconic Dishes of Punjabi Cuisine | VIRSA" },
      {
        name: "description",
        content:
          "Saag, biryani, lassi, nihari, chana chaat — fifteen dishes that map the cuisine and cultural identity of Pakistani Punjab.",
      },
      { property: "og:title", content: "Zaiqa — Cuisine of Punjab" },
      { property: "og:description", content: "Fifteen iconic dishes that define Pakistani Punjabi cuisine." },
      { property: "og:image", content: nihari },
      { property: "twitter:image", content: nihari },
    ],
  }),
  component: FoodPage,
});

const dishes = [
  { name: "Saag & Makki Di Roti", origin: "Rural Heartland", body: "Mustard greens slow-cooked with garlic and ginger, served with corn flatbread, white butter, and jaggery — winter on a brass thali. The signature dish of rural Punjab.", img: saag },
  { name: "Lahori Biryani", origin: "Old Lahore", body: "Long-grain basmati layered with marinated meat, saffron, fried onions and kewra. A wedding centrepiece that became a weekend staple.", img: nihari },
  { name: "Lassi", origin: "Punjab-wide", body: "A clay kulhar overflowing with churned yogurt and a finger of malai. Sweet or salty. Always cold. The province's national drink.", img: lassi },
  { name: "Nihari", origin: "Old Lahore", body: "Slow-cooked overnight. Beef shank falling apart. Garam masala, ginger julienne, lemon. Eaten at sunrise with naan torn straight from the tandoor.", img: nihari },
  { name: "Chana Chaat", origin: "Bazaar Streets", body: "Boiled chickpeas, potato, onion, tamarind chutney, green chilli. The first taste of Lahori street life — sharp, sour, alive.", img: streetfood },
  { name: "Gol Gappay", origin: "Mall Road, Lahore", body: "Crisp puris filled with spiced potato and an explosive rush of tamarind water. Eaten standing, six in a row, before the next customer arrives.", img: streetfood },
  { name: "Halwa Puri", origin: "Sunday Mornings", body: "Suji halwa, channa masala, fluffy fried puris. The breakfast that defines a weekend across Lahore, Faisalabad, and Multan.", img: halwapuri },
  { name: "Paye", origin: "Walled City", body: "Trotters slow-cooked overnight in spices until the broth becomes silk. Eaten with kulcha at dawn — a Lahori cure for everything.", img: nihari },
  { name: "Haleem", origin: "Muharram & Beyond", body: "Wheat, lentils, and shredded meat pounded for hours into a velvet stew. Garnished with crisp onions, ginger, and lemon.", img: nihari },
  { name: "Pakoray & Chai", origin: "Monsoon Afternoons", body: "Crisp besan-coated vegetables, fried as the rain begins. Karak doodh patti chai in a clay cup. The whole house gathers at the table.", img: pakoraChai },
  { name: "Samosa", origin: "Iftar Tables", body: "A triangle of crisp pastry hiding spiced potato and peas. Beloved across all four provinces — but Lahore claims the crispiest fold.", img: streetfood },
  { name: "Dahi Bhallay", origin: "Anarkali Bazaar", body: "Soft lentil dumplings drowned in chilled yogurt, tamarind chutney and crisp sev. A summer afternoon in a single katori.", img: streetfood },
  { name: "Sajji", origin: "Cholistan & Beyond", body: "Whole lamb or chicken marinated in salt and lemon, slow-roasted on skewers around an open fire. Tribal hospitality on a tray.", img: nihari },
  { name: "Kheer", origin: "Festive Tables", body: "Rice slow-simmered in milk, scented with cardamom and almonds. Served at weddings, Eid, and the birth of a child.", img: lassi },
  { name: "Falooda", origin: "Summer Streets", body: "Vermicelli, basil seeds, rose syrup, kulfi and milk in a tall glass. Lahore's answer to forty-five degree afternoons.", img: lassi },
];

function FoodPage() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden bg-ink">
        <img src={nihari} alt="Pakistani nihari in a brass karahi with naan" className="absolute inset-0 w-full h-full object-cover opacity-70 ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40 text-beige">
          <div className="text-xs tracking-[0.3em] uppercase text-mustard mb-4">Zaiqa · The Cuisine</div>
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
            title="Fifteen dishes that define a province."
            description="From rural winter staples to the after-midnight street food of Lahore — taste the geography of Pakistani Punjab on a single brass thali."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((d, i) => (
              <article key={d.name} className="group bg-card rounded-md overflow-hidden shadow-soft hover-lift" style={{ animationDelay: `${i * 60}ms` }}>
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
