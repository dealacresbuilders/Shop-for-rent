"use client";

import { useState, useRef, useMemo, Fragment } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import ContactPopup from "@/components/ContactPopup";
import Pagination from "@/components/Pagination";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import PropertyViewButton from "./PropertyViewButton";
import FeaturedLocations from "./FeaturedLocations";
import PropertyBottomLinks from "@/components/PropertyBottomLinks";

export default function Properties() {
  const {
    properties,
    loading,
    error,
    page,
    setPage,
    totalItems,
    itemsPerPage,areas
  } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const gridRef = useRef(null);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";

    const formattedNumber = Number(area).toLocaleString("en-IN");

    if (!unit) return formattedNumber;

    return `${formattedNumber} ${unit}`;
  };

  const localities = useMemo(() => {
    return [
      ...new Set(
        properties?.map((item) => item?.locality).filter(Boolean)
      ),
    ];
  }, [properties]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#0f0a1f] text-gray-400">
        Loading Premium Listings...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0f0a1f] text-red-400">
        Something went wrong while loading properties.
      </div>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0f0a1f] text-white">
        No Shops Available in Faridabad
      </div>
    );
  }

  return (
    <section id="locations" className="bg-[#0f0a1f] px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Commercial Shops For Rent in{" "}
            <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Premium investment opportunities for serious business owners.
          </p>
        </div>

        {/* MAIN FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1">
            <div
              ref={gridRef}
              className="grid md:grid-cols-2 gap-10"
            >
              {properties.map((property, index) => {
                 const areaBatch = areas?.slice(
  Math.floor(index / 30) * 10,
  Math.floor(index / 30) * 10 + 10
) || [];

                const showFeatured =
                  (index + 1) % 30 === 0 &&
                  areaBatch.length > 0;

                return (
                  <Fragment key={property._id}>
                    {/* PROPERTY CARD */}
                    <div
                      key={property._id}
                      className="group rounded-3xl overflow-hidden 
                      border border-white/10 bg-white/5 backdrop-blur-xl
                      hover:border-[#5B23FF]/60 transition duration-500 shadow-2xl
                      flex flex-col"
                    >
                      {/* IMAGE */}
                      <div className="relative h-[280px] overflow-hidden">
                        <Image
                          src={
                            property?.media?.url
                              ? property?.media?.url
                              : "https://res.cloudinary.com/do84xjpmx/image/upload/v1778824619/faridabadProperties/hzepdxek70xx9r6tevhp.webp"
                          }
                          unoptimized
                          alt={property.title}
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

                          {property.price && property.price > 0 && (
                            <div
                              className="mt-3 text-xl font-bold 
                              bg-gradient-to-r from-[#5B23FF] to-purple-500 
                              bg-clip-text text-transparent"
                            >
                              ₹ {property.price.toLocaleString("en-IN")}
                            </div>
                          )}
                        </div>

                        {/* INFO GRID */}
                        <div className="grid grid-cols-3 gap-4 text-center mb-6">
                          <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                            <p className="text-xs text-gray-400">AREA</p>
                            <p className="text-sm font-semibold">
                              {formatArea(
                                property.area,
                                property.areaUnit
                              )}
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

                        {/* BUTTONS */}
                        <div className="mt-auto pt-6 flex justify-between items-center">
                          <PropertyViewButton
                            slug={property.slug}
                            city={property.city}
                          />

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
                         <PropertyBottomLinks
  propertyType={property.propertyType}
  city="faridabad"
  color="#5B23FF"
/>
                      </div>
                    </div>

                    {/* FEATURED LOCATIONS FULL WIDTH */}
                    {showFeatured && (
                      <div className="md:col-span-2 w-full">
                        <FeaturedLocations
                          locations={areaBatch}
                        />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>

            {/* PAGINATION */}
            <div className="mt-16">
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={page}
                onPageChange={setPage}
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[400px]">
            <div className="lg:sticky lg:top-24">
              <SidebarEnquiryForm />
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}