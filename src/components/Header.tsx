import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">R.N.R PRINT & PACKERS</h1>
              <p className="text-xs text-muted-foreground">Your One-Stop Shop</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 74920 76396</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Patna, Patna City 800008</span>
            </div>
          </div>
          
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};