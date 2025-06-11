
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThreeStepApproach from "@/components/ThreeStepApproach";
import MentalHealthTips from "@/components/MentalHealthTips";
import MentalHealthGuides from "@/components/MentalHealthGuides";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Offerings from "@/components/Offerings";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThreeStepApproach />
      <Offerings />
      <Features />
      <MentalHealthTips />
      <MentalHealthGuides />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
