import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { HowItWorks } from "@/components/HowItWorks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, Star, Heart, Users } from "lucide-react";

import wallPosterImage from "@/assets/wall-poster.jpg";
import phoneCaseImage from "@/assets/phone-case.jpg";
import tShirtImage from "@/assets/t-shirt.jpg";
import mugImage from "@/assets/mug.jpg";

const products = [
  {
    title: "Printed Wall Posters",
    price: "₹999",
    image: wallPosterImage,
    description: "Bring elegance and personality to your space with our unique printed wall posters. Choose from artistic designs, motivational quotes, and more."
  },
  {
    title: "Customized Phone Cases",
    price: "₹1,999",
    image: phoneCaseImage,
    description: "Protect your phone with style! Our customized phone cases come in a variety of designs, including minimalist, nature, space, and more."
  },
  {
    title: "Custom Printed T-Shirts",
    price: "₹999",
    image: tShirtImage,
    description: "Wear your unique designs proudly with our custom printed T-shirts. Available in different styles and sizes to fit your personality."
  },
  {
    title: "Premium Mugs",
    price: "₹999",
    image: mugImage,
    description: "Start your day with a personalized mug! Choose your favorite design, from minimalistic art to vibrant patterns."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                R.N.R PRINT & PACKERS
              </h1>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Your One-Stop Shop for Customized Prints & Merchandise
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              At R.N.R PRINT & PACKERS, we offer a variety of high-quality customized products perfect for every occasion! 
              From personalized posters and shirts to unique phone cases, we bring your creativity to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-3">
                Browse Products
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">1000+</div>
              <div className="text-muted-foreground">Orders Delivered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-muted-foreground">Design Options</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">99%</div>
              <div className="text-muted-foreground">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection and find the perfect product for you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Customer Service Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Customer Service</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We value your satisfaction! For any queries or support, feel free to contact our customer service team. 
              We're here to help you with everything from product details to shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Get Support
              </Button>
              <Button size="lg" variant="outline">
                Track Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
