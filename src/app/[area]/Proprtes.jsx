"use client";

import { useState, useRef, useMemo, Fragment } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import Pagination from "@/components/Pagination";
import PropertyViewButton from "@/components/PropertyViewButton";
import FeaturedLocations from "@/components/FeaturedLocations";

export default function Properties() {
  const { properties, loading, error } = useProperty();

  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const gridRef = useRef(null);
  const itemsPerPage = 150;

  const formatArea = (area, unit) => {
    if (!area) return "N/A";

    const formattedNumber = Number(area).toLocaleString("en-IN");

    if (!unit) return formattedNumber;

    return `${formattedNumber} ${unit}`;
  };

  const localities = useMemo(() => {
    return [
      ...new Set(
        safeProperties
          ?.map((item) => item?.locality)
          .filter(Boolean)
      ),
    ];
  }, [safeProperties]);

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

  const totalItems = properties.length;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <section className="bg-[#0f0a1f] px-4 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1">

            <div
              ref={gridRef}
              className="grid md:grid-cols-2 gap-10"
            >

              {currentProperties.map((property, index) => {

                const globalIndex = startIndex + index;

                const showFeatured =
                  (globalIndex + 1) % 30 === 0;

                const locationBatch =
                  showFeatured
                    ? localities.slice(
                        (Math.floor(globalIndex / 30)) * 10,
                        (Math.floor(globalIndex / 30)) * 10 + 10
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
                      <div className="relative h-40 overflow-hidden">

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

                      </div>

                    </div>

                    {showFeatured &&
                      locationBatch.length > 0 && (
                        <div className="md:col-span-2 w-full">
                          <FeaturedLocations
                            locations={locationBatch}
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
                currentPage={currentPage}
                onPageChange={(page) => {
                  setCurrentPage(page);

                  setTimeout(() => {
                    gridRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }}
              />

            </div>

          </div>

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