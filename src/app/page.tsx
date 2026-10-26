import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustedBySection from "@/components/sections/home/TrustedBySection";
import ServicesCarousel from "@/components/sections/home/ServicesCarousel";
import StatsSection from "@/components/sections/home/StatsSection";
import TechStackSection from "@/components/sections/home/TechStackSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layout/Footer";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <TrustedBySection />
      <ServicesCarousel />
      <StatsSection />
      <TechStackSection />
      <TestimonialsSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
 