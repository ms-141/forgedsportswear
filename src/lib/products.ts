export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  startingPrice: number;
  fabricNote: string;
  sizes: string[];
  features: string[];
};

export const categories: ProductCategory[] = [
  {
    slug: "jerseys",
    name: "Custom Jerseys",
    shortName: "Jerseys",
    tagline: "Full-sublimation game & practice jerseys",
    description:
      "Fully custom, dye-sublimated jerseys built for your team's colors, logos, names and numbers. Zero fade, breathable performance fabric.",
    image: "/media/images/clip-1-poster.jpg",
    startingPrice: 39.99,
    fabricNote: "Lightweight breathable performance knit",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "Custom names & numbers",
      "Full sublimation \u2014 no fading or cracking",
      "Moisture-wicking performance fabric",
      "Team logo + sponsor placement available",
    ],
  },
  {
    slug: "t-shirts",
    name: "Custom T-Shirts",
    shortName: "T-Shirts",
    tagline: "All-over print or front/back custom tees",
    description:
      "Soft, durable custom tees for teams, brands and events. All-over sublimation or screen-ready designs, your call.",
    image: "/media/images/clip-4-poster.jpg",
    startingPrice: 24.99,
    fabricNote: "Poly-cotton blend or 100% performance poly",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "All-over or placement printing",
      "Soft hand-feel, true-to-size fit",
      "Great for teams, events & merch drops",
      "Unlimited colors, no screen fees",
    ],
  },
  {
    slug: "hoodies-sweatshirts",
    name: "Custom Hoodies & Sweatshirts",
    shortName: "Hoodies",
    tagline: "Heavyweight custom hoodies & crewnecks",
    description:
      "Cozy, heavyweight hoodies and crewnecks fully customized with your design, built to survive practice, travel and everything after.",
    image: "/media/images/ad-horizontal-poster.jpg",
    startingPrice: 54.99,
    fabricNote: "Heavyweight fleece blend",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "Full custom sublimation front-to-back",
      "Heavyweight fleece for cold-weather durability",
      "Kangaroo pocket & matching drawstrings",
      "Crewneck option available",
    ],
  },
  {
    slug: "shorts",
    name: "Custom Shorts",
    shortName: "Shorts",
    tagline: "Game shorts, training shorts & compression combos",
    description:
      "Custom athletic shorts cut for performance and sublimated edge-to-edge so your design never cracks, peels or fades.",
    image: "/media/images/clip-3-poster.jpg",
    startingPrice: 29.99,
    fabricNote: "4-way stretch performance poly",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "4-way stretch, built for movement",
      "Custom waistband & side panel designs",
      "Optional built-in compression liner",
      "Pockets available on request",
    ],
  },
  {
    slug: "compression-gear",
    name: "Custom Compression Gear",
    shortName: "Compression",
    tagline: "Base layers, leggings & compression tops",
    description:
      "Second-skin compression gear, fully sublimated for teams that want a complete, matching kit under the uniform.",
    image: "/media/images/clip-2-poster.jpg",
    startingPrice: 27.99,
    fabricNote: "Stretch compression knit",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "Tight, supportive athletic fit",
      "Sweat-wicking stretch fabric",
      "Long sleeve, short sleeve or leggings",
      "Matches your jersey design exactly",
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
