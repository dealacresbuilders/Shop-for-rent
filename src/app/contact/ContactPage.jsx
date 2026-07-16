"use client"

import { useState } from "react"
import Image from "next/image"
import AlertPopup from "@/components/AlertPopup"
import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  })

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    })
  }

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      showPopup(
        "error",
        "Phone number must be 10 digits"
      )
      return
    }

    try {
      setLoading(true)

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website:
            "shopforrentinfaridabad.com",
        }),
      })

      const result = await res.json()

      if (result.success) {
        showPopup(
          "success",
          "Your inquiry has been submitted!"
        )

        setFormData({
          name: "",
          phone: "",
          message: "",
        })
      } else {
        showPopup(
          "error",
          result.message ||
            "Something went wrong. Please try again."
        )
      }
    } catch (err) {
      console.log(err)

      showPopup(
        "error",
        "Server error. Please try later."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-[#0f0a1f] text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="mb-6 flex justify-center">
   <Breadcrumb />
  </div>

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#5B23FF]/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
        

          <div className="text-center mb-20">
            <h1 className="text-2xl md:text-4xl font-bold">
              Let’s Discuss Your{" "}
              <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
                Property Goals
              </span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Whether you are buying, selling,
              or investing in commercial real estate,
              our experts are here to guide you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl p-10 shadow-2xl hover:border-[#5B23FF]/40 transition duration-500"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Register Your Interest
              </h2>

              <p className="text-gray-400 mb-8 text-sm">
                Fill in your details and our consultant will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="text-sm text-gray-400">
                    Full Name*
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#1a1333]
                    border border-white/10 text-white
                    focus:ring-2 focus:ring-[#5B23FF]
                    outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Phone*
                  </label>

                  <input
                    name="phone"
                    required
                    inputMode="numeric"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#1a1333]
                    border border-white/10 text-white
                    focus:ring-2 focus:ring-[#5B23FF]
                    outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your property requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#1a1333]
                    border border-white/10 text-white
                    focus:ring-2 focus:ring-[#5B23FF]
                    outline-none resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-semibold
                  bg-gradient-to-r from-[#5B23FF] to-purple-500
                  hover:opacity-90 transition shadow-xl"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Inquiry"}
                </button>
              </form>
            </div>

            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/apartment-balcony-city-view.png"
                alt="Contact Real Estate"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

          </div>

          <div className="mt-24 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
  title="Faridabad Location"
  src="https://www.google.com/maps?q=Faridabad,Haryana&z=12&output=embed"
  className="w-full h-[500px] border-0"
  loading="lazy"
/>
          </div>

        </div>
      </section>

      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  )
}