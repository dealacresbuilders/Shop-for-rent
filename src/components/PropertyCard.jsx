"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  return (
    <>
      <div
        className="relative group rounded-3xl overflow-hidden 
        border border-white/10 bg-white/5 backdrop-blur-xl
        hover:border-[#5B23FF]/60 transition duration-700 shadow-2xl"
      >
        {/* IMAGE SECTION */}
        <div className="relative h-60 overflow-hidden">
         
            <Image
              src={property?.media?.url ? 
                      property?.media?.url :
                       "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824619/faridabadProperties/hzepdxek70xx9r6tevhp.webp"}
              unoptimized
              alt={property.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-1000"
            />
         

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* PROPERTY CATEGORY (only this on image) */}
          <div
            className="absolute top-4 left-4 
            bg-[#5B23FF]/60 backdrop-blur-md 
            text-white text-xs font-medium px-3 py-1 
            rounded-full"
          >
            {property.propertyCategory}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 text-white">

          {/* TITLE */}
          <h2 className="text-lg font-semibold mb-1">
            {property.title}
          </h2>

          {/* LOCALITY */}
          <p className="text-sm text-gray-400">
            {property.locality}
          </p>

          {/* PRICE (ab location ke niche) */}
          {property.price && property.price > 0 && (
            <p className="text-base font-semibold text-[#5B23FF] mt-2 mb-6">
              ₹ {property.price.toLocaleString("en-IN")}
            </p>
          )}

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

          {/* DESCRIPTION */}
          {/* <p className="text-sm text-gray-400 line-clamp-2 mb-6">
            {property.description2 ||
              "High-value commercial asset offering strong rental potential and long-term growth."}
          </p> */}

          {/* BUTTONS */}
          <div className="flex justify-between items-center">

            <Link
              href={`/properties/${property.slug}`}
              className="px-6 py-2 rounded-full text-sm 
              bg-gradient-to-r from-[#5B23FF] to-purple-500
              hover:opacity-90 transition"
            >
              View Details
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-2 rounded-full text-sm 
              border border-[#5B23FF] text-white
              hover:bg-[#5B23FF] transition"
            >
              Contact Agent
            </button>

          </div>
        </div>
      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />
    </>
  );
}