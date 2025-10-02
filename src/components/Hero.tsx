import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden floating-particles"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.92), rgba(10, 15, 45, 0.95)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-animated-gradient opacity-20" />
      
      {/* Bottom fade to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8 animate-fade-in animate-pulse-slow">
            <Sparkles className="w-5 h-5 text-accent animate-float" />
            <span className="text-sm font-medium text-white/90">
              Building the future of technology
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 animate-slide-up">
            <span className="text-gradient">Prothon</span>
            <br />
            <span className="text-white">
              Innovation in Every Line of Code
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 animate-slide-up font-light leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
            We build, deploy, and maintain cutting-edge applications that
            transform businesses and connect people worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/apps">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold"
              >
                Explore Our Apps
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift transition-all duration-300"
                style={{
                  animationDelay: `${0.8 + index * 0.1}s`,
                }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToBottom}
          className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-lg"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
