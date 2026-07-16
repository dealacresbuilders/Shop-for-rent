"use client";

import { useEffect, useState,useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProperty } from "@/contextapi/propertycontext";
import ContactPopup from "@/components/ContactPopup";
import PropertyViewButton from "@/components/PropertyViewButton";
import FeaturedLocations from "@/components/FeaturedLocations";
import { Fragment } from "react";

export default function FilterProperties({ area }) {
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const { data, loading2, error2, setLocality } = useProperty();
  const safeData = Array.isArray(data) ? data : [];

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };
  const localities = useMemo(() => {
  return [
    ...new Set(
      safeData
        ?.map((item) => item?.locality)
        .filter(Boolean)
    ),
  ];
}, [safeData]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#0f0a1f] text-gray-400">
        Loading Properties...
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0f0a1f] text-red-400">
        {error2}
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0f0a1f] text-white">
        <h2 className="text-2xl font-semibold">
          No Shops Available in {formattedArea}
        </h2>
        <p className="text-gray-400 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#0f0a1f] px-4 py-4">
      <div className="max-w-7xl mx-auto">

      

        {/* MAIN FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-10 auto-rows-fr">

              {safeData.map((property, index) => {

const showFeatured =
(index + 1) % 30 === 0;

const locationBatch =
showFeatured
? localities.slice(
   (Math.floor(index / 30)) * 10,
   (Math.floor(index / 30)) * 10 + 10
 )
: [];

return (
<Fragment key={property._id}>
                <div
                  className="group rounded-3xl overflow-hidden 
                  border border-white/10 bg-white/5 backdrop-blur-xl
                  hover:border-[#5B23FF]/60 transition duration-500 shadow-2xl
                  flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden">
                    
                      <Image
                         src={property?.media?.url ? 
                      property?.media?.url :
                       "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824619/faridabadProperties/hzepdxek70xx9r6tevhp.webp"}
                        alt={property.title}
                        unoptimized
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />
                  
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-white flex flex-col flex-1">

                    <div className="mb-5">
                      <h2 className="text-lg font-semibold line-clamp-2">
                        {property.title}
                      </h2>

                      <p className="text-sm text-gray-400 mt-1">
                        {property.locality}
                      </p>

                      {property.price > 0 && (
                        <div className="mt-3 text-xl font-bold 
                        bg-gradient-to-r from-[#5B23FF] to-purple-500 
                        bg-clip-text text-transparent">
                          ₹ {property.price.toLocaleString("en-IN")}
                        </div>
                      )}
                    </div>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                        <p className="text-xs text-gray-400">AREA</p>
                        <p className="text-sm font-semibold">
                          {formatArea(property.area, property.areaUnit)}
                        </p>
                      </div>

                      <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                        <p className="text-xs text-gray-400">STATUS</p>
                        <p className="text-sm font-semibold text-green-400">
                          {property.status || "Available"}
                        </p>
                      </div>

                      <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                        <p className="text-xs text-gray-400">TYPE</p>
                        <p className="text-sm font-semibold">
                          {property.propertyCategory}
                        </p>
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-auto pt-6 flex justify-between items-center">
                      {/* <Link
                        href={`/properties/${property.slug}`}
                        className="px-6 py-2 rounded-full text-sm 
                        bg-gradient-to-r from-[#5B23FF] to-purple-500"
                      >
                        View Details
                      </Link> */}
                         <PropertyViewButton slug={property.slug}
  city={property.city} />
                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="px-6 py-2 rounded-full text-sm 
                        border border-[#5B23FF] text-white
                        hover:bg-[#5B23FF] transition"
                      >
                        Contact Agent
                      </button>
                    </div>

                  </div>
               </div>

{showFeatured &&
locationBatch.length > 0 && (
<div className="md:col-span-2">
  <FeaturedLocations
    locations={locationBatch}
  />
</div>
)}

</Fragment>
);
})}

            </div>
          </div>

          {/* RIGHT SIDE - STICKY FORM */}
          

        </div>
      </div>

      {/* POPUP */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}