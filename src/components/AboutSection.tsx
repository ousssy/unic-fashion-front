const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
            À propos de <span className="luxury-text-gradient">UNIC</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left space-y-6">
              <h3 className="font-playfair text-2xl font-semibold">Notre Philosophie</h3>
              <p className="text-muted-foreground leading-relaxed">
                UNIC incarne l'excellence dans la simplicité. Nous croyons qu'un homme élégant 
                n'a pas besoin d'en faire trop pour se démarquer. Une chemise parfaitement coupée, 
                des matières nobles et un design intemporel suffisent à révéler sa personnalité unique.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque pièce UNIC est pensée pour l'homme moderne qui apprécie la qualité, 
                le confort et le style authentique. Nous sélectionnons avec soin les meilleurs 
                tissus et travaillons avec des artisans passionnés pour vous offrir des vêtements 
                d'exception.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/dfca1fd1-f6a2-46da-b9c7-36096f5928f6.png" 
                alt="Style UNIC" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-luxury-gold">Q</span>
              </div>
              <h4 className="font-semibold text-lg">Qualité Premium</h4>
              <p className="text-muted-foreground text-sm">
                Tissus sélectionnés avec soin et confection artisanale pour une qualité irréprochable.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-luxury-gold">S</span>
              </div>
              <h4 className="font-semibold text-lg">Style Intemporel</h4>
              <p className="text-muted-foreground text-sm">
                Des designs classiques revisités avec une touche moderne pour un style qui traverse les années.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-luxury-gold">C</span>
              </div>
              <h4 className="font-semibold text-lg">Confort Absolu</h4>
              <p className="text-muted-foreground text-sm">
                Coupes étudiées et matières respirantes pour un confort optimal tout au long de la journée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;