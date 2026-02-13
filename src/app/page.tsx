import HeroSlider from "@/components/home/HeroSlider";
import ServiceSection from "@/components/home/ServiceSection";
import PortfolioHighlight from "@/components/home/PortfolioHighlight";
import StatsCounter from "@/components/home/StatsCounter";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServiceSection />
      <PortfolioHighlight />
      <StatsCounter />
      <CTASection />
    </>
  );
}
