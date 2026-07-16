import ShopAdvancedSections from "./ShopAdvancedSections";
import ShopFinalSection from "./ShopFinalSection";
import ShopHero from "./ShopHero";
import ShopSections from "./ShopSections";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Easy Steps to Rent a Shop in Faridabad",

  description:
    "Renting a shop in Faridabad is now hassle-free. Search verified commercial shop listings, schedule a free site visit & move into your ideal retail space in Faridabad in just a few simple steps. Zero brokerage. No hidden charges.",

  keywords: [
    "how to rent shop in Faridabad", "shop renting process Faridabad", "commercial shop rental steps Faridabad", "shop booking on rent Faridabad", "shop rental guide Faridabad", "rent retail space Faridabad", "no brokerage shop rent Faridabad", "verified shops Faridabad", "rent agreement commercial Faridabad", "easy shop rental Faridabad"
  ],

  alternates: {
    canonical: "https://www.shopforrentinfaridabad.com/how-it-works",
  },
};

export default function Page() {
  return (
    <>
      <div>
        <ShopHero />
        <ShopSections />
        <ShopAdvancedSections />
        <ShopFinalSection />
      </div>
    </>
  );
}