import { Button } from "@/components/ui/button";
import { Menu, Heart, Star, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Heart className="w-8 h-8 text-accent" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-wide">
            Wishupon
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
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