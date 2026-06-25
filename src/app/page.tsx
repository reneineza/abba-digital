import HeroSection from "@/components/sections/HeroSection"
import FeatureCardsSection from "@/components/sections/FeatureCardsSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesGridSection from "@/components/sections/ServicesGridSection"
import ProjectsShowcaseSection from "@/components/sections/ProjectsShowcaseSection"
import MarqueeSection from "@/components/sections/MarqueeSection"
import WorkProcessSection from "@/components/sections/WorkProcessSection"
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import TeamSection from "@/components/sections/TeamSection"
import BrandSliderSection from "@/components/sections/BrandSliderSection"
import AwardSection from "@/components/sections/AwardSection"
import ContactFormSection from "@/components/sections/ContactFormSection"
import BlogSection from "@/components/sections/BlogSection"

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <HeroSection />
      <FeatureCardsSection />
      <AboutSection />
      <ServicesGridSection />
      <ProjectsShowcaseSection />
      <MarqueeSection />
      <WorkProcessSection />
      <VideoShowcaseSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
      <BrandSliderSection />
      <AwardSection />
      <ContactFormSection />
      <BlogSection />
    </div>
  )
}
