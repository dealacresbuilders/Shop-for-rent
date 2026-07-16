"use client";

import { useState, useEffect } from "react";
import AlertPopup from "@/components/AlertPopup";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
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

  // ✅ RESET STATE WHEN MODAL OPENS
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", phone: "", message: "" });
      setPopup({ open: false, type: "", message: "" });
      setLoading(false);
    }
  }, [isOpen]);

  // ✅ AUTO CLOSE SUCCESS POPUP + MODAL
  useEffect(() => {
    let timer;

    if (popup.open && popup.type === "success") {
      timer = setTimeout(() => {
        setPopup({ open: false, type: "", message: "" });
        onClose?.();
      }, 1200);
    }

    return () => clearTimeout(timer);
  }, [popup.open, popup.type, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ toast → ✅ AlertPopup
    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        propertyTitle,
        website: "shopforrentinfaridabad.com",
        source: "Popup Enquiry",
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({
          open: true,
          type: "success",
          message: "Enquiry submitted successfully!",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        setPopup({
          open: true,
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }
    } catch (err) {
      setPopup({
        open: true,
        type: "error",
        message: "Server error!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
      {/* ✅ ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup({ open: false, type: "", message: "" })
        }
      />

      <div className="relative w-full max-w-md 
      bg-white/5 backdrop-blur-2xl 
      border border-white/10 
      rounded-3xl p-8 shadow-2xl text-white">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white text-lg transition"
        >
          ✕
        </button>

        {/* HEADING */}
        <h3 className="text-2xl font-semibold mb-2">
          <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
            Price on Call
          </span>
        </h3>

        <p className="text-sm text-gray-400 mb-8">
          Enquiry for:{" "}
          <span className="text-white font-medium">
            {propertyTitle}
          </span>
        </p>

        {/* FORM */}
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
            name="message"
            rows="3"
            placeholder="Your Requirement / Message"
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
            hover:opacity-90 transition duration-300 shadow-lg disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>
      </div>
    </div>
  );
}