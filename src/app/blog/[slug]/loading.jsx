export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen 
    bg-[#0f0a1f] text-white">

      <div className="flex flex-col items-center gap-5">

        {/* SPINNER (PURPLE) */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#5B23FF]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#5B23FF] animate-spin"></div>
        </div>

        {/* TEXT */}
        <p className="text-[#cbb7ff] text-sm tracking-wide animate-pulse font-medium">
          Loading amazing content...
        </p>

      </div>

    </div>
  );
}