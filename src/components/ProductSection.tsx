import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Star } from "lucide-react";

const ProductSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const images = [
    "/lovable-uploads/14e005e7-62a3-44d1-8828-e5417439e464.png",
    "/lovable-uploads/dfca1fd1-f6a2-46da-b9c7-36096f5928f6.png",
    "/lovable-uploads/8120649d-c545-450e-ba3d-1c06eaabb806.png",
    "/lovable-uploads/c094ca86-26c6-47bd-b428-73715aab673f.png"
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img 
                src={images[selectedImage]} 
                alt="Chemise UNIC" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-accent ring-offset-2' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Vue ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">Nouveauté</Badge>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(42 avis)</span>
                </div>
              </div>
              
              <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Chemise Rayée Premium
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Une chemise d'exception confectionnée dans un coton premium. 
                Ses rayures délicates et sa coupe moderne en font la pièce parfaite 
                pour l'homme élégant et contemporain.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="font-playfair text-3xl font-bold text-foreground">
                349 MAD
              </span>
              <span className="text-lg text-muted-foreground line-through">
                449 MAD
              </span>
              <Badge className="bg-luxury-gold text-primary">-22%</Badge>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Caractéristiques :</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Matière :</strong> Coton premium 100%</li>
                <li>• <strong>Coupe :</strong> Slim fit moderne</li>
                <li>• <strong>Col :</strong> Col italien classique</li>
                <li>• <strong>Motif :</strong> Rayures fines élégantes</li>
                <li>• <strong>Entretien :</strong> Lavage machine 30°</li>
              </ul>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Taille :</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 py-4 text-lg"
              >
                <ShoppingBag size={20} />
                Ajouter au panier
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 flex items-center gap-2"
                >
                  <Heart size={18} />
                  Favoris
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                >
                  Acheter maintenant
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-secondary/50 rounded-xl p-6 space-y-2">
              <p className="text-sm font-medium">✓ Livraison gratuite dès 500 MAD</p>
              <p className="text-sm font-medium">✓ Retour gratuit sous 30 jours</p>
              <p className="text-sm font-medium">✓ Paiement sécurisé</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;