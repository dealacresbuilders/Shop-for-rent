import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: "Shop for Rent in Faridabad | Affordable Commercial Shops at Best Price",

description:
"Find verified shops for rent in Faridabad. Explore affordable commercial shops, showrooms & retail spaces in Sector 15, 16, 20, Mathura Road, Neharpar & more. No brokerage. Book free site visit today.",

keywords: [
  "shop for rent in Faridabad", "commercial shop for rent Faridabad", "rent shop Faridabad", "retail space for rent Faridabad", "showroom for rent Faridabad", "affordable shop rent Faridabad", "shop on rent Mathura Road Faridabad", "small shop for rent Faridabad", "no brokerage shop rent Faridabad", "commercial space for rent Faridabad", "shop for rent Neharpar Faridabad", "market shop for rent Faridabad"
],

  alternates: {
    canonical: "www.shopforrentinfaridabad.com/",
  },
  verification: {
    google: "LX2Im9If9EgUCqcAsQuwwilgAG3Pgxa11xCNcLU2bkE",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VWFQ996');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F2F73ZGD0D"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F2F73ZGD0D');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VWFQ996"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}