import { HomeHero } from "@/components/home/HomeHero";
import { AboutPlatform } from "@/components/home/AboutPlatform";
import { UpcomingEvent } from "@/components/home/UpcomingEvent";
import { WhoCanJoin } from "@/components/home/WhoCanJoin";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeTestimonial } from "@/components/home/HomeTestimonial";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <HomeHero />
      <AboutPlatform />
      <UpcomingEvent />
      <WhoCanJoin />
      <GalleryPreview />
      <HomeTestimonial />
      <HomeCTA />
      <Footer />
    </div>
  );
};

export default Home;
