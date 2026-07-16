import React from "react";
import BlogList from "./BlogList";

/* ================= SEO METADATA ================= */
export const metadata = {
  title: "Commercial Real Estate Blog | Shop Renting Tips, Market Trends & Property News in Faridabad",
  description:
    "Read expert blogs on shop renting tips in Faridabad, commercial property market trends, lease agreement guide, best localities for retail shops & expert real estate advice to help your business make the smartest rental decision.",
  keywords: [
    "shop rental blog Faridabad", "shop renting tips Faridabad", "commercial property market trends Faridabad", "lease agreement guide Faridabad", "best localities for shops Faridabad", "shop rent news Faridabad", "retail space trends Faridabad", "Faridabad commercial property guide", "shop rent price trends Faridabad", "commercial shop rental checklist Faridabad"
  ],
  alternates: {
    canonical: "www.shopforrentinfaridabad.com/blog", // 👈 yahan apna real domain daal dena
  },
  openGraph: {
    title: "Property & Real Estate Blogs",
    description:
      "Expert insights, commercial property guides and real estate updates.",
    url: "www.shopforrentinfaridabad.com/blog", // 👈 same yahan bhi
    type: "website",
  },
};

/* ================= PAGE ================= */
const Page = () => {
  return (
    <div className="min-h-screen bg-[#0f0a1f] text-white">
      <BlogList />
    </div>
  );
};

export default Page;