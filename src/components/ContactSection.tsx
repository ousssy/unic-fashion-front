import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une question sur nos produits ? Besoin d'aide pour votre commande ? 
              Notre équipe est là pour vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6">
                  Envoyez-nous un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 h-12"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-6">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">contact@limitless.ma</p>
                      <p className="text-muted-foreground">commandes@limitless.ma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-muted-foreground">+212 6 00 00 00 00</p>
                      <p className="text-muted-foreground">+212 5 22 00 00 00</p>
                      <p className="text-sm text-muted-foreground">Lun-Sam: 9h-19h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-muted-foreground">Boulevard Mohammed V</p>
                      <p className="text-muted-foreground">Casablanca 20250, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp</h4>
                      <p className="text-muted-foreground">+212 6 00 00 00 00</p>
                      <p className="text-sm text-muted-foreground">Réponse rapide 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 hover:bg-accent/10"
                  >
                    <Instagram size={20} />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 hover:bg-green-50"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-luxury-gold/10 border-luxury-gold/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Contact rapide</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pour une réponse immédiate, contactez-nous directement sur WhatsApp.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Ouvrir WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;