import { MainLayout } from "@/components/layout/MainLayout";
import { SecondaryNav } from "@/components/home/SecondaryNav";
import { HeroSection } from "@/components/home/HeroSection";
import { ImportantAnnouncement } from "@/components/home/ImportantAnnouncement";
import { ServicesSection } from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <MainLayout>
      <SecondaryNav />
      <HeroSection />
      <ImportantAnnouncement />
      <ServicesSection />
    </MainLayout>
  );
};

export default Index;
