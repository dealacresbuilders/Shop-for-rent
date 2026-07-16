"use client"

import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerSection from "./DisclaimerSection";


export default function Page() {
  return (
    <section className="bg-[#0f0a1f] text-white py-20 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#5B23FF]/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="mb-6 flex justify-center">
   <Breadcrumb />
  </div>

        {/* ================= SECTION 1 : PAGE HEADING ================= */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
              Shop for Rent in Faridabad
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            From retail shops to office spaces and warehouses — find the right 
            commercial space for rent in Faridabad and give your business the 
            location it deserves.
          </p>
        </div>


        {/* ================= SECTION 2 : IMAGE + MISSION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Commercial Property in Faridabad"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          {/* MISSION CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              The right commercial space can make or break a business — and 
              finding it should not take months of searching, dozens of broker 
              calls, and endless site visits. Our mission is to give business 
              owners, entrepreneurs, and investors a single reliable platform 
              where they can discover verified shops, office spaces, showrooms, 
              and warehouses for rent across Faridabad's most active commercial corridors.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              From high-footfall retail markets in NIT Faridabad and Sector 16 
              to growing commercial hubs in Neharpar, Ballabhgarh, and Sector 21 — 
              we cover every pocket of Faridabad where business thrives, so you 
              never miss out on the right space at the right time.
            </p>
          </div>

        </div>


        {/* ================= SECTION 3 : STATS BOX ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl p-8 text-center shadow-xl hover:border-[#5B23FF]/40 transition duration-500">
            <h3 className="text-3xl font-bold text-[#5B23FF]">
              700+
            </h3>
            <p className="text-gray-400 mt-3">
              Commercial Spaces Listed for Rent
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl p-8 text-center shadow-xl hover:border-[#5B23FF]/40 transition duration-500">
            <h3 className="text-3xl font-bold text-[#5B23FF]">
              400+
            </h3>
            <p className="text-gray-400 mt-3">
              Shops, Offices & Showrooms Available
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl p-8 text-center shadow-xl hover:border-[#5B23FF]/40 transition duration-500">
            <h3 className="text-3xl font-bold text-[#5B23FF]">
              1600+
            </h3>
            <p className="text-gray-400 mt-3">
              Business Owners & Investors Served
            </p>
          </div>

        </div>


        {/* ================= SECTION 4 : WHY CHOOSE US ================= */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 hover:border-[#5B23FF]/40 transition duration-500 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Every Commercial Space, One Platform
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shops, office spaces, showrooms, warehouses — whatever your 
                business needs, you will find verified rental options across 
                all commercial categories right here in one place.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 hover:border-[#5B23FF]/40 transition duration-500 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                High-Demand Business Locations
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We list commercial spaces only in Faridabad's most active 
                business zones — areas with strong footfall, excellent 
                connectivity, and proven commercial potential.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 hover:border-[#5B23FF]/40 transition duration-500 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Owners, Get Your Space Rented Fast
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Post your shop, office, or warehouse listing in minutes and 
                connect instantly with business owners actively searching 
                for commercial spaces in Faridabad.
              </p>
            </div>

          </div>
        </div>


        {/* ================= SECTION 5 : CTA ================= */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Find the Perfect Commercial Space for Your Business in Faridabad.
          </h3>

          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Browse verified shops, office spaces, showrooms, and warehouses 
            for rent across Faridabad's top business locations — and get your 
            business running from the right address.
          </p>

          <a
             href="/" className="px-10 py-3 rounded-full font-semibold bg-gradient-to-r from-[#5B23FF] to-purple-500 hover:opacity-90 transition shadow-xl">
            Search Commercial Spaces Now
          </a>
        </div>

      </div>
      <DisclaimerSection/>
    </section>
  )
}