import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoSection from "@/components/MetodoSection";
import ChiSonoSection from "@/components/ChiSonoSection";
import RepartiSection from "@/components/RepartiSection";
import HiringSection from "@/components/HiringSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";
import FloatingButton from "@/components/FloatingButton";
import ScrollProgress from "@/components/ScrollProgress";

const GeometricCanvas = lazy(() => import("@/components/GeometricCanvas"));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Suspense fallback={null}>
        <GeometricCanvas />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MetodoSection />
      <ChiSonoSection />
      <RepartiSection />
      <HiringSection />
      <ContactSection />
      <ReviewsSection />
      <FooterSection />
      <FloatingButton />
    </div>
  );
};

export default Index;
