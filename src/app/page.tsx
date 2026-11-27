import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyClinicHubSection } from "@/components/WhyClinicHubSection";
import { DoctorsSection } from "@/components/DoctorsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideosSection } from "@/components/VideosSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ExpertiseSection />
      <HowItWorksSection />
      <WhyClinicHubSection />
      <DoctorsSection />
      <TestimonialsSection />
      <VideosSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
