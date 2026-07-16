
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import ShopRentContent from "@/components/ShopRentContent";
import ShopRentFAQSection from "@/components/ShopRentFAQSection";
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
     <ShopRentContent/>
     <ShopRentFAQSection/>
    </>
  );
}
