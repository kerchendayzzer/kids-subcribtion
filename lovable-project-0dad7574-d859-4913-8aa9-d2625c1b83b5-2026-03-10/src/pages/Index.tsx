import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AgeSelection from "@/components/AgeSelection";
import Pricing from "@/components/Pricing";
import Safety from "@/components/Safety";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => setModalOpen(true)} />
      <main>
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <HowItWorks />
        <AgeSelection />
        <Pricing onOpenModal={() => setModalOpen(true)} />
        <Safety />
        <FaqSection />
        <FinalCta onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
