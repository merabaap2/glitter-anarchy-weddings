import { Heart, Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/10 border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-wide">
                Wishupon
              </h3>
            </a>
            <p className="text-foreground/70 leading-relaxed">
              Turning your special moments into unforgettable memories. We specialize in creating magical experiences for weddings, birthdays, and corporate events.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 cursor-pointer transition-colors">
                <Facebook className="w-5 h-5 text-accent" />
              </div>
              <div className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 cursor-pointer transition-colors">
                <Instagram className="w-5 h-5 text-accent" />
              </div>
              <div className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 cursor-pointer transition-colors">
                <Twitter className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-foreground/70 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Weddings</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Birthday Parties</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Event Planning</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@wishupon.com</span>
              </div>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>123, Wedding Street<br />Dream City, State 400001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 mt-12 pt-8 text-center">
          <p className="text-foreground/60">
            © 2024 Wishupon Events. All rights reserved. | Made with ❤️ for creating beautiful memories
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;