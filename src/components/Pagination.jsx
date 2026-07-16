"use client";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const visiblePages = getVisiblePages();

  // 🔥 COMMON PAGE CHANGE + AUTO SCROLL
  const handlePageChange = (page) => {
    onPageChange(page);

    setTimeout(() => {
      const section =
        document.getElementById("locations") ||
        document.getElementById("property-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-3 mt-10 sm:mt-14 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-white/10 text-[#5B23FF] disabled:opacity-40
        hover:bg-[#5B23FF]/10 transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
            border border-white/10 text-[#5B23FF] hover:bg-[#5B23FF]/10 transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-1 sm:px-2 text-gray-500 text-xs sm:text-sm">
              ...
            </span>
          )}
        </>
      )}

      {/* VISIBLE PAGES */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl font-medium transition
            ${
              currentPage === page
                ? "bg-gradient-to-r from-[#5B23FF] to-purple-500 text-white shadow-lg"
                : "border border-white/10 text-[#5B23FF] hover:bg-[#5B23FF]/10"
            }`}
        >
          {page}
        </button>
      ))}

      {/* LAST PAGE */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] <
            totalPages - 1 && (
            <span className="px-1 sm:px-2 text-gray-500 text-xs sm:text-sm">
              ...
            </span>
          )}

          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
            border border-white/10 text-[#5B23FF] hover:bg-[#5B23FF]/10 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-white/10 text-[#5B23FF] disabled:opacity-40
        hover:bg-[#5B23FF]/10 transition"
      >
        Next
      </button>
    </div>
  );
}