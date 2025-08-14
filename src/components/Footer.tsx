import { Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="font-bold">R</span>
              </div>
              <span className="text-lg font-bold">R.N.R PRINT & PACKERS</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for high-quality customized prints and merchandise. 
              We bring your creativity to life with precision and care.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Customer Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Wall Posters</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Phone Cases</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">T-Shirts</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Mugs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+91 74920 76396</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">Patna, Patna City 800008</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">info@rnrprint.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 R.N.R PRINT & PACKERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};