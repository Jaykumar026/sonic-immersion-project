import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">JK Headphone</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
