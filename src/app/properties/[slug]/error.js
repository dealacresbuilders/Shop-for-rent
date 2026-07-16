"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  const isNotFound = error?.message === "PROPERTY_NOT_FOUND";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a1f] px-4 text-white">

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl 
      border border-white/10 p-10 rounded-3xl shadow-2xl">

        <h1 className="text-3xl font-semibold mb-4">
          {isNotFound ? (
            <>
              Property{" "}
              <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
                not found
              </span>
            </>
          ) : (
            "Unable to load this property"
          )}
        </h1>

        <p className="text-gray-400 text-sm leading-7 mb-10">
          {isNotFound
            ? "This property may have been removed or is no longer available."
            : "Something went wrong while loading the property. Please try again."}
        </p>

        <div className="flex flex-wrap gap-5">

          <button
            onClick={reset}
            className="px-7 py-3 rounded-full font-medium text-sm
            bg-gradient-to-r from-[#5B23FF] to-purple-500
            hover:opacity-90 transition shadow-lg"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-7 py-3 rounded-full text-sm font-medium
            border border-white/20 text-gray-300
            hover:bg-white/10 hover:text-white transition"
          >
            Go to Home
          </Link>

        </div>

        <p className="text-xs text-gray-500 mt-8">
          If the problem continues, this listing may no longer be available.
        </p>

      </div>
    </div>
  );
}