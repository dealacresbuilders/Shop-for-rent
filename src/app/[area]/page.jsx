import FilterProperties from "./FilterProperties";
import Properties from "./Proprtes";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
import HisarMarketOverview from "./HisarMarketOverview";

// ✅ GET SEO DATA

async function getDealerMeta(
  slug
) {
  try {

    const domain =
      "www.shopforrentinfaridabad.com";

    const res =
      await fetch(
        `https://faridabad-backend.onrender.com/api/add/get-dealer-meta/${slug}?domain=${domain}`,
        {
          cache: "no-store",
        }
      );

    if (!res.ok)
      return null;

    const data =
      await res.json();

    return (
      data?.data || null
    );

  } catch (error) {

    console.log(error);

    return null;

  }
}

export async function generateMetadata({
  params,
}) {

  const resolvedParams =
    await params;

  const rawArea =
    resolvedParams?.area;

  // ✅ CLEAN SLUG

  const area =
    rawArea?.replace(
      "shop-for-rent-in-",
      ""
    );

  // ✅ FORMATTED LOCATION

  const formattedArea =
    area
      ?.replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) =>
          c.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      area
    );

  // ✅ FALLBACK META

  const fallbackTitle =
    ` ${formattedArea}`;

  const fallbackDescription =
    `${formattedArea}`;

  return {
    title:
      seoData?.metaTitle ||
      fallbackTitle,

    description:
      seoData?.metaDescription ||
      fallbackDescription,

    alternates: {
      canonical:
        `https://www.shopforrentinfaridabad.com/${rawArea}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}) {

  const resolvedParams =
    await params;

  const rawArea =
    resolvedParams?.area;

  // ✅ CLEAN SLUG

  const area =
    rawArea?.replace(
      "shop-for-rent-in-",
      ""
    );

  // ✅ FORMATTED AREA

  const formattedArea =
    area
      ?.replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) =>
          c.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      area
    );

  return (
    <div className="bg-[#0f0a1f] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        {/* 🔥 HEADING (Full Width) */}
        <div className=" mb-14">
          <h1 className="text-2xl md:text-4xl font-bold capitalize leading-tight">
             Shops For Rent in{" "}
            <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
              {formattedArea}
            </span>
          </h1>

          <h2 className="text-gray-400 mt-4 text-base md:text-lg">
            Commercial listings in prime investment zones offering
            high rental potential and long-term value.
          </h2>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-8">
            {/* <FilterProperties area={area} /> */}
            <Properties />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-white/5 backdrop-blur-xl 
              border border-white/10 rounded-3xl p-6 shadow-2xl">
                <SidebarEnquiryForm />
              </div>
            </div>
          </div>

        </div>
      <HisarMarketOverview
  pageContent={
    seoData?.pageContent
  }
/>
      </div>
    </div>
  );
}