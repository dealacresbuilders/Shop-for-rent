"use client";

import Link from "next/link";

export default function ShopSections() {
  return (
    <section className="w-full bg-[#0f0a1f] text-white py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* SECTION 3 */}
        <div className="border-l-4 border-[#5B23FF] pl-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Why Faridabad is Growing Fast
          </h2>

          <p className="text-gray-300 mb-3">
            Faridabad is one of the fastest-growing cities near Delhi.
          </p>

          <p className="text-gray-300 mb-2">Reasons for growth:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Close to Delhi and Gurgaon</li>
            <li>Good road and metro connectivity</li>
            <li>Growing population</li>
            <li>Increasing business opportunities</li>
            <li>New commercial developments</li>
          </ul>

          <p className="text-gray-300 mt-3">
            Because of this, demand for shop space for rent in Faridabad is rising every year.
          </p>
        </div>

        {/* SECTION 4 */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
             Shop vs Flat vs Plot – What is Better?
          </h2>

          <p className="text-gray-300 mb-4">
            Before renting, it is important to compare options.
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-[#1a1333] p-4 rounded-xl">
              <p className="font-semibold mb-2">Shop</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Best for business</li>
                <li>Ready to use</li>
                <li>Located in busy areas</li>
              </ul>
            </div>

            <div className="bg-[#1a1333] p-4 rounded-xl">
              <p className="font-semibold mb-2">Flat</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Used for living</li>
                <li>Not ideal for commercial use</li>
              </ul>
            </div>

            <div className="bg-[#1a1333] p-4 rounded-xl">
              <p className="font-semibold mb-2">Plot</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Needs construction</li>
                <li>Time-consuming</li>
              </ul>
            </div>

          </div>

          <p className="text-gray-300 mt-4">
            If your goal is business, then a shop for rent in Faridabad is the best choice.
          </p>
        </div>

        {/* SECTION 5 */}
        <div className="bg-gradient-to-br from-[#5B23FF]/10 to-purple-400/10 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Types of Shops Available
          </h2>

          <p className="text-gray-300 mb-4">
            There are many types of commercial property for rent in Faridabad.
          </p>

          <p className="mb-2 text-white">Common types:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-4">
            <li>Small retail shops</li>
            <li>Showrooms</li>
            <li>Food outlets</li>
            <li>Office spaces</li>
            <li>Kiosks in malls</li>
          </ul>

          <p className="mb-2 text-white">Based on size:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Small shops (100–300 sq ft)</li>
            <li>Medium shops (300–800 sq ft)</li>
            <li>Large shops (800+ sq ft)</li>
          </ul>

          <p className="text-gray-300 mt-4">
            Choose based on your business needs.
          </p>
        </div>

        {/* SECTION 6 - UNIQUE LOCATION CARD */}
        <div className="relative bg-gradient-to-r from-[#5B23FF] to-purple-400 rounded-3xl p-8 overflow-hidden">

          {/* overlay glow */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
            Best Locations in Faridabad
            </h2>

            <p className="mb-4">
              Location is very important when choosing a shop for lease in Faridabad.
            </p>

            <p className="mb-2 font-semibold">Popular areas:</p>

            {/* LOCATION TAG CARDS */}
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                "Sector 15 – High footfall",
                "Sector 16 – Good for offices",
                "Sector 21C – Growing market",
                "NIT Faridabad – Busy area",
                "Ballabgarh – Affordable options",
              ].map((item, i) => (
                <span
                  key={i}
                  className="bg-white text-[#5B23FF] px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mb-2 font-semibold">What to check:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Foot traffic</li>
              <li>Parking space</li>
              <li>Nearby businesses</li>
              <li>Road connectivity</li>
            </ul>

            <p className="mb-6">
              A good location helps your business grow faster.
            </p>

            {/* BUTTON */}
            <Link href="/">
              <button className="bg-white text-[#5B23FF] px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition">
                Explore More Location →
              </button>
            </Link>
          </div>
        </div>

        {/* SECTION 7 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Price Trends in Faridabad
          </h2>

          <p className="text-gray-300 mb-3">
            The price of a shop for rent in Faridabad depends on many factors.
          </p>

          <p className="mb-2 text-white">Key factors:</p>
          <ul className="list-disc pl-5 text-gray-300 mb-4">
            <li>Location</li>
            <li>Size</li>
            <li>Demand</li>
            <li>Type of shop</li>
          </ul>

          <p className="mb-2 text-white">Average rent:</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Small shops: ₹8,000 – ₹20,000</li>
            <li>Medium shops: ₹20,000 – ₹50,000</li>
            <li>Large shops: ₹50,000+</li>
          </ul>

          <p className="text-gray-300 mt-4">
            Prices are rising due to high demand for commercial space in Faridabad.
          </p>
        </div>

        {/* SECTION 8 */}
        <div className="bg-gradient-to-br from-[#5B23FF]/10 to-purple-400/10 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
           How the Platform Helps Users
          </h2>

          <p className="text-gray-300 mb-3">
            Our platform makes your search easy and safe.
          </p>

          <p className="mb-2 text-white">Key benefits:</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>All shops for rent in Faridabad in one place</li>
            <li>Trusted and verified listings</li>
            <li>No broker or middleman</li>
            <li>Direct contact with owner</li>
            <li>Clear property details</li>
          </ul>

          <p className="text-gray-300 mt-4">
            You save time, money, and effort.
          </p>
        </div>

      </div>
    </section>
  );
}