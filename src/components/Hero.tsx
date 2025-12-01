import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-headphones.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Hear the Future
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-foreground/90">
          Premium Headphones for Immersive Sound Experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToProducts}
            className="text-lg px-8"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProducts}
            className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Explore Models
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
