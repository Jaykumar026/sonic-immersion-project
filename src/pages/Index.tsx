import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import ContactForm from "@/components/ContactForm";
import productProImage from "@/assets/product-pro.jpg";
import productAirliteImage from "@/assets/product-airlite.jpg";
import productStudioImage from "@/assets/product-studio.jpg";

const Index = () => {
  const products = [
    {
      image: productProImage,
      title: "JK Pro+",
      description: "Noise cancellation, deep bass, 40-hour battery, Bluetooth 5.3",
    },
    {
      image: productAirliteImage,
      title: "JK AirLite",
      description: "Lightweight, crystal-clear audio, 30-hour battery, wireless",
    },
    {
      image: productStudioImage,
      title: "JK Studio X",
      description: "Studio-quality sound, adaptive EQ, 50-hour battery, premium design",
    },
  ];

  const reviews = [
    {
      name: "John D.",
      review: "The sound quality is incredible! The bass is deep and crisp. Totally worth it.",
    },
    {
      name: "Sarah L.",
      review: "Comfortable, stylish, and the battery life is amazing. I use them daily.",
    },
    {
      name: "Mike P.",
      review: "Noise cancellation works perfectly. I can focus on work without distractions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Our Top Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            About JK Headphone
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            JK Headphone is dedicated to delivering premium headphones that redefine the 
            listening experience. Our mission is to combine cutting-edge technology with 
            sleek design to create products that let you hear the future.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-darker-bg border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 JK Headphone | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
