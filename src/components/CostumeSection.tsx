import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";

const CostumeSection = () => {
  return (
    <section id="costume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Collection Premium</Badge>
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Costumes sur mesure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L'art du costume revisité. Une coupe impeccable, des finitions luxueuses 
            et un style affirmé pour l'homme qui impose le respect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/6ced0a9b-7191-4f47-92c0-c5913db63dc7.jpg"
              alt="Costume LIMITLESS"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-luxury-gold text-luxury-gold" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(18 avis)</span>
              </div>

              <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Costume Double Boutonnage
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Un costume noir double boutonnage taillé pour le pouvoir. Coupe ajustée, 
                boutons dorés et finitions soignées — pour l'homme qui ne passe jamais inaperçu.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Caractéristiques :</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Matière :</strong> Laine vierge italienne</li>
                <li>• <strong>Coupe :</strong> Slim fit structurée</li>
                <li>• <strong>Style :</strong> Double boutonnage, boutons dorés</li>
                <li>• <strong>Doublure :</strong> Satin premium</li>
                <li>• <strong>Inclus :</strong> Veste + Pantalon</li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-playfair text-3xl font-bold text-foreground">
                1 299 MAD
              </span>
              <span className="text-lg text-muted-foreground line-through">
                1 699 MAD
              </span>
              <Badge className="bg-luxury-gold text-primary">-24%</Badge>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 py-4 text-lg"
            >
              <ShoppingBag size={20} />
              Commander ce costume
            </Button>

            <div className="bg-secondary/50 rounded-xl p-6 space-y-2">
              <p className="text-sm font-medium">✓ Retouches offertes</p>
              <p className="text-sm font-medium">✓ Livraison express Casablanca</p>
              <p className="text-sm font-medium">✓ Échange gratuit sous 14 jours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostumeSection;
