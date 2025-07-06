import { Button } from "@/components/ui/button";
import { Menu, Heart, Star, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative floating">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-wide sparkle-text">
            Wishupon
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
            Services
          </a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth font-medium">
            Portfolio
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="luxury" size="sm" className="hidden sm:inline-flex">
            Book Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;