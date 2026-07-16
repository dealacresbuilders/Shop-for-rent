"use client";

import React, { useState } from "react";
import AlertPopup from "@/components/AlertPopup";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    });
  };

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      showPopup(
        "error",
        "Phone number must be exactly 10 digits."
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        website: "shopforrentinfaridabad.com",
        source:
          "Residential Sidebar Enquiry — Buy House in Faridabad",
      };

      console.log("PAYLOAD:", payload);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        showPopup(
          "success",
          "Your enquiry has been submitted successfully!"
        );

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        showPopup(
          "error",
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.log("ERROR:", err);

      showPopup(
        "error",
        "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="sticky top-28 
        bg-white/5 backdrop-blur-xl 
        rounded-3xl shadow-2xl p-8 
        border border-white/10 text-white"
      >
        <h2
          className="text-2xl font-semibold 
          bg-gradient-to-r from-[#5B23FF] to-purple-400 
          bg-clip-text text-transparent mb-2"
        >
          Request Project Details
        </h2>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          Share your requirement and get complete
          price details, floor plans, and exclusive
          offers for commercial shops in Faridabad.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* NAME */}
          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 border border-white/10
            text-white placeholder:text-gray-400
            focus:ring-2 focus:ring-[#5B23FF]
            focus:border-[#5B23FF]
            outline-none transition"
          />

          {/* PHONE */}
          <input
            name="phone"
            required
            inputMode="numeric"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 border border-white/10
            text-white placeholder:text-gray-400
            focus:ring-2 focus:ring-[#5B23FF]
            focus:border-[#5B23FF]
            outline-none transition"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Requirement (Budget / Preferred Location)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 border border-white/10
            text-white placeholder:text-gray-400
            focus:ring-2 focus:ring-[#5B23FF]
            focus:border-[#5B23FF]
            outline-none resize-none transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-[#5B23FF] to-purple-500
            hover:opacity-90 transition
            shadow-lg disabled:opacity-60"
          >
            {loading
              ? "Submitting..."
              : "Get Price Details"}
          </button>
        </form>
      </div>

      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
};

export default SidebarEnquiryForm;