"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import AlertPopup from "@/components/AlertPopup";
export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  type: "",
  message: "",
});

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
 setPopup({
  open: true,
  type: "error",
  message: "Phone number must be 10 digits",
});      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website:"shopforrentinfaridabad.com",
        }),
      });

      const result = await res.json();

      if (result.success) {
setPopup({
  open: true,
  type: "success",
  message: "Enquiry submitted successfully!",
});
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      toast.error("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
      
    >
    <AlertPopup
    open={popup.open}
    type={popup.type}
    message={popup.message}
    onClose={() =>
      setPopup({
        open: false,
        type: "",
        message: "",
      })
    }
  />
      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Soft Purple Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-[#5B23FF]/25 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-purple-500/15 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-white">

          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6 mt-5">
            Shop for Rent in Faridabad{" "}
            <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
              – Grow Your Business Faster
            </span>
          </h1>

          <div className="text-lg space-y-1 text-gray-300 leading-relaxed max-w-xl">

            <p>
            </p>
            <p>
                    As a trusted venture of Deal Acres, we specialize in helping business owners, entrepreneurs, and brands discover the most profitable shop for rent in Faridabad that aligns with their vision, budget, and growth goals. From bustling markets to emerging commercial hubs, we ensure you rent smart, safe, and stress-free
            </p>
<Link href="/how-it-works">
  <button className="relative overflow-hidden bg-gradient-to-r from-[#5B23FF] to-purple-400  text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-gradient-to-r from-[#5B23FF] to-purple-400  hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-5">

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl text-white">

            <h2 className="text-2xl font-semibold mb-3">
              Free Consultation
            </h2>

            <p className="text-gray-400 text-sm mb-8">
              Fill in your details and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl 
                bg-white/10 text-white placeholder-gray-400
                border border-white/20
                focus:border-[#5B23FF]
                focus:ring-2 focus:ring-[#5B23FF]/50
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl 
                bg-white/10 text-white placeholder-gray-400
                border border-white/20
                focus:border-[#5B23FF]
                focus:ring-2 focus:ring-[#5B23FF]/50
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl 
                bg-white/10 text-white placeholder-gray-400
                border border-white/20
                focus:border-[#5B23FF]
                focus:ring-2 focus:ring-[#5B23FF]/50
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold 
                bg-gradient-to-r from-[#5B23FF] to-purple-500
                hover:opacity-90 transition duration-300
                disabled:opacity-60 shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}