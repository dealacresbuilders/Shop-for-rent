"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "How It's Work", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
   
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[#0f0a1f]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-[78px]">

            {/* LOGO */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold tracking-wide 
              bg-gradient-to-r from-[#5B23FF] to-purple-400 
              bg-clip-text text-transparent"
            >
              DA
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-12">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-gray-300 font-medium transition duration-300 group hover:text-white"
                >
                  {link.name}

                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] 
                  bg-gradient-to-r from-[#5B23FF] to-purple-400
                  transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}

              {/* CTA BUTTON */}
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-sm font-semibold 
                bg-gradient-to-r from-[#5B23FF] to-purple-500
                hover:opacity-90 transition shadow-lg"
              >
                Contact Us
              </Link>

            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#5B23FF]"
            >
              {isOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed top-[78px] left-0 w-full z-40 md:hidden 
        bg-[#0f0a1f] border-t border-white/10 shadow-2xl">

          <div className="flex flex-col gap-8 p-8 text-gray-300">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-5 py-3 rounded-full text-center
              bg-gradient-to-r from-[#5B23FF] to-purple-500
              text-white font-semibold"
            >
              Contact us
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;