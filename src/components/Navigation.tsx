import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

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
          <Link to="/" className="text-2xl font-bold text-gradient">
            Prothon
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/team"
              className={`transition-colors ${
                isActive("/team")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Team
            </Link>
            <Link
              to="/apps"
              className={`transition-colors ${
                isActive("/apps")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Apps
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Get Started
              </Button>
            </Link>
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
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`transition-colors text-left ${
                  isActive("/about")
                    ? "text-accent font-medium"
                    : "text-foreground hover:text-accent"
                }`}
              >
                About
              </Link>
              <Link
                to="/team"
                onClick={closeMobileMenu}
                className={`transition-colors text-left ${
                  isActive("/team")
                    ? "text-accent font-medium"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Team
              </Link>
              <Link
                to="/apps"
                onClick={closeMobileMenu}
                className={`transition-colors text-left ${
                  isActive("/apps")
                    ? "text-accent font-medium"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Apps
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`transition-colors text-left ${
                  isActive("/contact")
                    ? "text-accent font-medium"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={closeMobileMenu}>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
