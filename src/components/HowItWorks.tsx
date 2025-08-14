import { Search, Palette, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Explore our wide range of customizable products."
  },
  {
    icon: Palette,
    title: "Customize",
    description: "Choose the design that matches your style, or upload your own!"
  },
  {
    icon: ShoppingCart,
    title: "Buy",
    description: "Add to cart and proceed to secure checkout. We accept various payment methods."
  },
  {
    icon: Truck,
    title: "Enjoy",
    description: "Receive your custom print delivered right to your doorstep."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your custom prints is easier than ever with our simple 4-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};