import { Heart, Instagram, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-playfair text-3xl font-bold">
              UNIC
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              L'élégance masculine redéfinie. Des chemises premium pour l'homme moderne 
              qui apprécie la qualité et le style authentique.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Instagram size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <MessageCircle size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Produits</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Chemises</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nouveautés</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Promotions</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Client</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Guide des tailles</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Retours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Informations</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 UNIC. Tous droits réservés.
            </p>
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              Fait avec <Heart size={14} className="text-red-400" /> au Maroc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;