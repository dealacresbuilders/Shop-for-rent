"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What types of shops are available for rent in Faridabad?",
    answer:
      "ShopForRentInFaridabad.com lists a wide variety of commercial spaces including small retail shops, grocery & pharmacy units, boutique spaces, food stalls, showrooms, ground-floor offices, and large commercial units across all major Faridabad localities like Mathura Road, Nehar Par, NIT, Ballabhgarh, Sainik Colony, Sector 15, Sector 17, Greenfields, and more.",
  },
  {
    question:
      "What is the typical rent for a commercial shop in Faridabad?",
    answer:
      "Shop rents in Faridabad vary by size and location. Small retail shops typically rent for ₹6,000–₹20,000/month, mid-size units for ₹20,000–₹60,000/month, and premium showrooms or high-street commercial spaces can command ₹75,000–₹3,00,000+/month in prime corridors like Mathura Road or NIT.",
  },
  {
    question:
      "Is there any brokerage charged for renting a shop in Faridabad?",
    answer:
      "No. We operate as a zero-brokerage platform. You connect directly with verified property owners — no middlemen, no commission, no hidden charges. Our consultation is completely free.",
  },
  {
    question:
      "Which are the best locations to rent a shop in Faridabad?",
    answer:
      "The top commercial rental hotspots in Faridabad include Mathura Road (NH-19), NIT Market, Nehar Par, Ballabhgarh, Old Faridabad, Huda Market, Patel Chowk, Sainik Colony, Sector 15, Sector 15A, Greenfields Colony, Mewla Maharajpur, and the New Industrial Township areas — all offering excellent visibility, footfall, and road connectivity.",
  },
  {
    question:
      "What documents are required to rent a shop in Faridabad?",
    answer:
      "To rent a commercial shop in Faridabad you need: Aadhaar card, PAN card, passport-size photos, address proof, and a signed lease agreement. For GST-registered businesses, a GST certificate is also recommended. Our team helps with all documentation.",
  },
  {
    question:
      "How quickly can I get possession after booking a shop?",
    answer:
      "Most listed shops on our platform offer immediate or short notice possession. Once you finalize a property and complete documentation, possession can typically be handed over within 3–7 working days, depending on the landlord.",
  },
  {
    question:
      "Can I negotiate rent on shops listed on your website?",
    answer:
      "Yes, rent is negotiable on most listings. Our team works as your advocate to help you secure the best deal — from monthly rent to security deposit amount, lease duration, and lock-in period terms.",
  },
  {
    question:
      "Are the shops listed on your website legally verified?",
    answer:
      "All shops listed on ShopForRentInFaridabad.com are verified for ownership, legal title clarity, and rental eligibility. We ensure complete transparency so you rent safe and stress-free.",
  },
  {
    question:
      "Do you provide shops for rent for small businesses or startups in Faridabad?",
    answer:
      "Absolutely! We have a dedicated range of small, affordable shops starting from 100 sq ft available across Faridabad's colonies and markets — perfect for startups, first-time entrepreneurs, kirana stores, and local service businesses.",
  },
  {
    question:
      "How do I contact your team for a free consultation?",
    answer:
      "You can fill in the 'Free Consultation' form on our homepage, call us directly via our listed phone number, or drop a message via our Contact Us page. Our experts typically respond within minutes during business hours.",
  },
];

export default function ShopRentFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-[#0f0a1f]">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-white/70 text-base md:text-lg max-w-3xl mt-4 md:mt-5 leading-7 md:leading-8">
              Everything you need to know before renting a commercial shop in
              Faridabad.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4 md:space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-white/20 bg-white/10 shadow-2xl shadow-black/20"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  } backdrop-blur-xl`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-start justify-between gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7 text-left"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-7 md:leading-8 pr-2">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex-shrink-0 w-10 h-10 md:min-w-[48px] md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-white text-[#5B23FF] rotate-180"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-white/10 mb-5 md:mb-6"></div>

                        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}