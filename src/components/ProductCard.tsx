import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

export const ProductCard = ({ title, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-product hover:-translate-y-1 animate-scale-in">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
          <div className="text-2xl font-bold text-primary mb-4">{price}</div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 gap-3">
        <Button variant="outline" className="flex-1">
          Add to Cart
        </Button>
        <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};