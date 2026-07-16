"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
export default function ShopHeroUnique() {
  return (
    <section className="w-full bg-[#0f0a1f] text-white py-8 px-6 md:px-16 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="py-6 relative z-20">
  <Breadcrumb />
</div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#5B23FF]/30 rounded-full blur-3xl"></div>
    
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative">

        {/* TOP FULL WIDTH */}
        <div className="max-w-6xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            Shop for Rent in Faridabad – Complete Guide to Find the Best Property
          </h1>

          {/* <p className="text-gray-300 leading-relaxed">
            If you are looking for a shop for rent in Faridabad, you may already know it is not simple. There are many options, but not all are real or trusted. Many people face problems like fake listings, high brokerage fees, and unclear information.
          </p> */}
        </div>

        {/* TWO FLOATING CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-[#5B23FF]/20 to-purple-400/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.02] transition duration-300">

            <h2 className="text-xl font-semibold mb-4 text-white">
              Introduction – Finding the Right Shop is Not Easy
            </h2>
                <p className="text-gray-300 mb-3">
                    If you are looking for a shop for rent in Faridabad, you may already know it is not simple. There are many options, but not all are real or trusted. Many people face problems like fake listings, high brokerage fees, and unclear information.
                </p>
            <p className="text-gray-300 mb-3">
              This is where the right platform helps.
            </p>

            <p className="text-gray-300 mb-3">
              Instead of searching in many places, you can now find all properties in one place. A trusted property listing platform gives you verified listings, clear details, and direct contact with owners. This means no middleman, no confusion, and no extra cost.
            </p>

            <p className="text-gray-300">
              In this guide, you will learn everything about renting a shop in Faridabad and how to make the best decision.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.02] transition duration-300">

            <h2 className="text-xl font-semibold mb-4 text-white">
             What Our Website Does
            </h2>

            <p className="text-gray-300 mb-3">
              Our website is a simple and powerful property listing platform.
            </p>

            <p className="mb-2 text-white">Here is what we offer:</p>

            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>You can find all types of commercial shops in Faridabad in one place</li>
              <li>All listings are real and trusted</li>
              <li>You can directly talk to the owner (no middleman)</li>
              <li>You can list your property with free property listing</li>
              <li>We have a strong corporate tie-up with Deal Acres</li>
              <li>The platform is built on trust, transparency, and simplicity</li>
            </ul>

            <p className="text-gray-300 mt-4">
              Whether you want a retail shop for rent in Faridabad or want to list your property, everything is easy and fast.
            </p>

          </div>

        </div>

        {/* CTA STRIP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#5B23FF] to-purple-400 rounded-2xl px-6 py-5">

          <p className="font-medium">
            Start exploring verified shops without any middleman
          </p>

          <Link href="/">
  <button className="bg-white text-[#5B23FF] px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
    Explore Shops →
  </button>
</Link>

        </div>

      </div>
    </section>
  );
}