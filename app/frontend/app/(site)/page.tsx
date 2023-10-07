"use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/Topbar";
import Testimonials from "@/components/Testimonials";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <>
      <div className="flex-col h-full">
        <TopBar />
        <NavBar />
        <HeroSection />
        <PopularCategories />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
