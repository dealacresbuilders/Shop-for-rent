"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 50;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0f0a1f] text-white pt-20 pb-8 px-4 border-t border-[#5B23FF]/30">
      <div className="max-w-7xl mx-auto">

        {/* BRAND SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold">
            Shop For Rent in{" "}
            <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium commercial investment opportunities across prime sectors of Faridabad.
            Designed for serious investors and business owners.
          </p>
        </div>

        {/* LOCATIONS GRID */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-[#cbb7ff] tracking-wide">
            Explore Locations For Rental Shop
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (
            <Link
  key={index}
  href={`https://www.dealacres.com/properties/shop-for-rent-in-${toSlug(loc)}-faridabad`}
  target="_blank"
  rel="noopener noreferrer"
  className="relative group block"
>
                <span className="block truncate text-gray-400 group-hover:text-white transition duration-300">
                  Shop For Rent {loc}, Faridabad
                </span>

                <span className="
                  absolute left-1/2 -translate-x-1/2 -top-10
                  hidden group-hover:block group-active:block
                  whitespace-nowrap
                  bg-[#1a1333] text-white text-xs
                  px-4 py-2 rounded-lg
                  shadow-xl border border-[#5B23FF]/40
                  z-50
                ">
                  Shop For Rent {loc}, Faridabad
                </span>

                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#5B23FF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Read More */}
            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="cursor-pointer text-[#5B23FF] hover:underline"
                >
                  Read More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="cursor-pointer text-[#5B23FF] hover:underline"
                >
                  Read Less...
                </span>
              </div>
            )}

          </div>
        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-white/10 pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#5B23FF] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#5B23FF] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#5B23FF] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#5B23FF] transition"
      >
       How It's Work
      </Link>
    </div>

  </div>
</div>
        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shop For Rent Property Faridabad — All Rights Reserved.
          </p>

         <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}