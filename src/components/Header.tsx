import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-playfair text-2xl font-bold luxury-text-gradient">
            UNIC
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Produit
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ShoppingBag size={16} />
              Panier
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-foreground hover:text-accent transition-colors duration-300"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('product')}
                className="text-left py-2 text-foreground hover:text-accent transition-colors duration-300"
              >
                Produit
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-foreground hover:text-accent transition-colors duration-300"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground hover:text-accent transition-colors duration-300"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ShoppingBag size={16} />
                  Panier
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;