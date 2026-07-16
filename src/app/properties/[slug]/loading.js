export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a1f] text-white">

      <div className="flex flex-col items-center gap-8">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-20 h-20">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#5B23FF]/20"></div>

          {/* Spinning Purple Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#5B23FF] border-r-purple-400 animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-5 bg-gradient-to-r from-[#5B23FF] to-purple-400 rounded-full animate-pulse"></div>

        </div>

        {/* Main Text */}
        <p className="font-semibold text-xl tracking-wide">
          <span className="bg-gradient-to-r from-[#5B23FF] to-purple-400 bg-clip-text text-transparent">
            Loading Property Details...
          </span>
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-400 text-center max-w-sm leading-relaxed">
          Please wait while we fetch premium property information for you.
        </p>

      </div>
    </div>
  );
}