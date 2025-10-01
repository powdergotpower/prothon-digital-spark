import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Prothon</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("feedback")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("feedback")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("apps")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                Apps
              </button>
              <button
                onClick={() => scrollToSection("feedback")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("feedback")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
