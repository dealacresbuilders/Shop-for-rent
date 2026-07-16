"use client";

import { useState } from "react";

export default function ShopFinalSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a shop for rent in Faridabad easily?",
      a: "You can use a trusted property listing platform where all listings are available in one place. It saves time and effort. You can also filter options based on budget and location. Direct owner contact makes the process faster and easier.",
    },
    {
      q: "2. What is the average rent for commercial shops in Faridabad?",
      a: "The rent depends on location and size. Small shops start from ₹8,000, while bigger shops can go above ₹50,000. Prime areas cost more due to high demand for commercial space in Faridabad.",
    },
    {
      q: "3. Is it safe to rent a shop online?",
      a: "Yes, if you use a platform that offers verified listings. Trusted platforms check property details before listing. This reduces the risk of fraud and ensures safe transactions.",
    },
    {
      q: "4. What are the best areas for a retail shop for rent in Faridabad?",
      a: "Popular areas include Sector 15, Sector 16, and NIT Faridabad. These places have high foot traffic and good business opportunities. Location plays a big role in success.",
    },
    {
      q: "5. Do I need to pay brokerage for renting a shop?",
      a: "Not always. Some platforms offer direct buyer-seller interaction. This means no middleman and no brokerage fee, which saves money.",
    },
    {
      q: "6. What documents are needed for renting a shop space in Faridabad?",
      a: "You need ID proof, address proof, and business details. A rental agreement is also required. Keeping documents ready makes the process smooth.",
    },
    {
      q: "7. Can I list my shop for rent for free?",
      a: "Yes, many platforms offer free property listing. This helps property owners connect with buyers without any cost. It is simple and effective.",
    },
    {
      q: "8. What should I check before renting a shop?",
      a: "Check location, rent, legal documents, and property condition. Always visit the shop before finalising. This helps avoid future problems.",
    },
    {
      q: "9. Why is Faridabad a good place for business?",
      a: "Faridabad is growing fast with better infrastructure and connectivity. Demand for commercial property for rent in Faridabad is increasing, making it a good business location.",
    },
    {
      q: "10. How does direct owner contact help?",
      a: "Direct contact helps in clear communication and faster deals. You can negotiate better and avoid extra costs. It makes renting a shop simple and transparent.",
    },
  ];

  return (
    <section className="w-full bg-[#0f0a1f] py-6 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* CONCLUSION */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#5B23FF] to-purple-400">
          <div className="bg-[#0f0a1f] rounded-3xl p-8 text-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Conclusion – Your Complete Solution
            </h2>

            <p className="text-gray-300 mb-4">
              Finding a shop for rent in Faridabad does not have to be hard.
            </p>

            <p className="mb-2 text-white font-medium">
              With the right platform, you get:
            </p>

            <ul className="list-disc pl-5 text-gray-300 inline-block text-left mb-4">
              <li>Trusted listings</li>
              <li>Direct owner contact</li>
              <li>No middleman</li>
              <li>Free property listing</li>
              <li>All properties in one place</li>
            </ul>

            <p className="text-gray-300">
              This makes your journey simple, safe, and fast.
            </p>

          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#A78BFA]">
            FAQs – Shop for Rent in Faridabad
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-white/10 transition"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-[#5B23FF] text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="px-5 py-4 text-gray-300 border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}