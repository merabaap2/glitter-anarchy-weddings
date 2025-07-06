import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, Crown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Wedding Ceremony" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>
      
      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-accent animate-pulse opacity-60" />
        <Star className="absolute top-32 right-20 w-4 h-4 text-accent animate-pulse opacity-40" />
        <Sparkles className="absolute bottom-40 left-20 w-5 h-5 text-accent animate-pulse opacity-50" />
        <Star className="absolute bottom-60 right-10 w-6 h-6 text-accent animate-pulse opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Crown className="w-12 h-12 text-accent" />
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-wider">
            Wishupon
          </h1>
          <Crown className="w-12 h-12 text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light text-accent mb-6 tracking-wide">
          Turning Moments into Memories
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-accent" fill="currentColor" />
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Rated 5 stars by thousands of couples. We specialize in weddings, birthdays, 
          and corporate events.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="luxury" size="hero" className="shadow-glow">
            <Heart className="w-6 h-6 mr-2" fill="currentColor" />
            View Wedding Packages
          </Button>
          <Button variant="sparkle" size="hero">
            <Sparkles className="w-6 h-6 mr-2" />
            View Birthday Party
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;