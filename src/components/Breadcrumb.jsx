"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ property }) {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const formatTitle = (text = "") =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const baseClass = "text-white hover:underline";

  // ================= BLOG =================
  if (pathname.startsWith("/blog")) {
    if (pathname === "/blog") {
      return (
        <div className="text-xs flex gap-2 text-white">
          <Link href="/" className={baseClass}>
            Home
          </Link>

          <span>›</span>

          <span className="font-semibold text-white">Blog</span>
        </div>
      );
    }

    const slug = pathParts[pathParts.length - 1];

    return (
      <div className="text-xs flex gap-2 flex-wrap text-white">
        <Link href="/" className={baseClass}>
          Home
        </Link>

        <span>›</span>

        <Link href="/blog" className={baseClass}>
          Blog
        </Link>

        <span>›</span>

        <span className="font-semibold text-white">
          {formatTitle(slug)}
        </span>
      </div>
    );
  }

  // ================= PROPERTY =================
  if (property) {
    const city = property?.city || "";

    return (
      <div className="text-xs flex gap-2 flex-wrap text-white">
        <Link href="/" className={baseClass}>
          Home
        </Link>

        {city && (
          <>
            <span>›</span>

            <Link
              href={`/${city.toLowerCase()}`}
              className={baseClass}
            >
              {formatTitle(city)}
            </Link>
          </>
        )}

        <span>›</span>

        <span className="font-semibold text-white">
          {property?.title || "Property"}
        </span>
      </div>
    );
  }

  // ================= LISTING / STATIC PAGES =================
  const filteredParts = pathParts.filter((p) => p !== "listing");

  const lastPart = filteredParts[filteredParts.length - 1];

  return (
    <div className="text-xs flex gap-2 flex-wrap text-white">
      <Link href="/" className={baseClass}>
        Home
      </Link>

      {lastPart && (
        <>
          <span>›</span>

          <span className="font-semibold text-white">
            {formatTitle(lastPart)}
          </span>
        </>
      )}
    </div>
  );
}