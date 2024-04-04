import GetStarted from "./Hero Components/GetStarted";
import HeroImage from "./Hero Components/HeroImage";
import MainTitleSection from "./Hero Components/MainTitleSection";
import PricingSection from "./Hero Components/PricingSection";
import ReviewsSection from "./Hero Components/ReviewsSection";
import SectionTwo from "./Hero Components/SectionTwo";
import Tutorial from "./Hero Components/Tutorial";

export default function Home() {
  return (
    <div className={`flex flex-col gap-14 `}>
      <MainTitleSection />
      <HeroImage />
      <SectionTwo />
      <GetStarted />
      <Tutorial />
      <PricingSection />
      <ReviewsSection />
    </div>
  );
}
