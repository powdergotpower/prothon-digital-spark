import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Apps from "@/components/Apps";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Apps />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
