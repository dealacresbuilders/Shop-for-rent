"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Breadcrumb from "@/components/Breadcrumb";
export default function PropertyDetails({ propertyy }) {
  const [open, setOpen] = useState(false);

  const { properties: allProperties } = useProperty();

  const formatArea = (area, unit) => {
    if (!area) return "—";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  const relatedProperties =
    allProperties
      ?.filter(
        (p) =>
          p._id !== propertyy._id &&
          p.city === propertyy.city
      )
      ?.slice(0, 30) || [];

  return (
    <div className="bg-[#0f0a1f] text-white px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
<div className="mb-6">
   <Breadcrumb property={propertyy} />
  </div>
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16">

          {/* IMAGE */}
          <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            
              <Image
                src={propertyy?.media?.url ? 
                      propertyy?.media?.url :
                       "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824619/faridabadProperties/hzepdxek70xx9r6tevhp.webp"}
                unoptimized
                alt={propertyy?.title}
                fill
                priority
                className="object-cover"
              />
            
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold">
                {propertyy?.title}
              </h1>

              <p className="text-gray-400 mt-3">
                {propertyy?.locality}
              </p>

              <p className="mt-8 text-3xl font-bold 
              bg-gradient-to-r from-[#5B23FF] to-purple-400 
              bg-clip-text text-transparent">
                {propertyy?.price === 0
                  ? "Price on Request"
                  : `₹ ${propertyy?.price?.toLocaleString("en-IN")}`}
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm border-t border-white/10 pt-8">
                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="Area" value={formatArea(propertyy?.area, propertyy?.areaUnit)} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={() => setOpen(true)}
                className="px-10 py-3 rounded-full font-semibold 
                bg-gradient-to-r from-[#5B23FF] to-purple-500
                hover:opacity-90 transition shadow-xl"
              >
                Contact Owner
              </button>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <section className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold mb-6">
            Description
          </h2>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed max-w-4xl">
            {propertyy?.description2?.length > 0 ? (
              propertyy.description2.map((text, i) => (
                <p key={i}>{text}</p>
              ))
            ) : (
              <p>No additional description available.</p>
            )}
          </div>
        </section>

        {/* RELATED PROPERTIES */}
        {relatedProperties.length > 0 && (
          <section className="mt-24 border-t border-white/10 pt-14">
            <h2 className="text-3xl font-semibold mb-10">
              <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
                Related Properties
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          </section>
        )}

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-500 text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-2 font-medium text-white">
        {value || "—"}
      </div>
    </div>
  );
}