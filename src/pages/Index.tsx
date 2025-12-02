import { HeroSection } from "@/components/HeroSection";
import { CollectionSection } from "@/components/CollectionSection";
import { EventSection } from "@/components/EventSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CollectionSection />
      <EventSection />
      <GallerySection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
