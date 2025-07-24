import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProduct = () => {
    const element = document.getElementById('product');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/14e005e7-62a3-44d1-8828-e5417439e464.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 image-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-shadow-soft">
            UNIC
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-shadow-soft">
            L'élégance dans la simplicité
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Découvrez notre chemise signature qui allie raffinement et confort moderne
          </p>
          
          <Button 
            onClick={scrollToProduct}
            size="lg"
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 px-8 py-4 text-lg font-medium"
          >
            Découvrir
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;