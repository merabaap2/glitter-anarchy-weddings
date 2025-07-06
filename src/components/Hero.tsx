import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, Crown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Clean Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-luxury-blush/20 to-luxury-cream/40" />
      
      {/* Floating Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-primary floating opacity-40" />
        <Star className="absolute top-32 right-20 w-4 h-4 text-primary floating opacity-30" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-40 left-20 w-5 h-5 text-primary floating opacity-35" style={{animationDelay: '2s'}} />
        <Star className="absolute bottom-60 right-10 w-6 h-6 text-primary floating opacity-25" style={{animationDelay: '0.5s'}} />
        <Sparkles className="absolute top-1/2 left-1/4 w-4 h-4 text-primary floating opacity-20" style={{animationDelay: '3s'}} />
        <Star className="absolute top-1/3 right-1/3 w-5 h-5 text-primary floating opacity-30" style={{animationDelay: '1.5s'}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="fade-in-up flex items-center justify-center gap-4 mb-8 stagger-1">
          <Crown className="w-12 h-12 text-primary floating" />
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-wider sparkle-text drop-shadow-sm">
            Wishupon
          </h1>
          <Crown className="w-12 h-12 text-primary floating" style={{animationDelay: '1s'}} />
        </div>
        
        <h2 className="fade-in-up stagger-2 text-3xl md:text-5xl font-light text-primary mb-8 tracking-wide">
          Turning Moments into Memories
        </h2>
        
        <div className="fade-in-up stagger-3 flex items-center justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-primary animate-pulse" fill="currentColor" style={{animationDelay: `${i * 0.2}s`}} />
          ))}
        </div>
        
        <p className="fade-in-up stagger-4 text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Rated 5 stars by thousands of happy couples. We specialize in creating magical weddings, 
          unforgettable birthdays, and prestigious corporate events.
        </p>
        
        <div className="fade-in-up stagger-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="luxury" size="hero" className="shadow-glow hover:scale-105 transition-all">
            <Heart className="w-6 h-6 mr-2" fill="currentColor" />
            View Wedding Packages
          </Button>
          <Button variant="elegant" size="hero" className="hover:scale-105 transition-all">
            <Sparkles className="w-6 h-6 mr-2" />
            Plan Birthday Party
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;