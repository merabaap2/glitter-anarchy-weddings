import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Crown, Sparkles, Camera, Eye } from "lucide-react";

const Portfolio = () => {
  const categories = [
    { name: "All", active: true },
    { name: "Weddings", active: false },
    { name: "Birthdays", active: false },
    { name: "Corporate", active: false }
  ];

  const portfolioItems = [
    {
      title: "Royal Wedding Ceremony",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Priya & Arjun"
    },
    {
      title: "Garden Wedding Reception",
      category: "Wedding", 
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Meera & Rajesh"
    },
    {
      title: "Princess Birthday Party",
      category: "Birthday",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Little Anya"
    },
    {
      title: "Corporate Gala Night",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Tech Solutions Ltd"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Portfolio</h2>
            <Camera className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Browse through our collection of beautiful wedding moments
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={category.active ? "default" : "outline"}
                className={`px-6 py-2 text-sm cursor-pointer transition-all hover:shadow-sparkle ${
                  category.active 
                    ? 'bg-accent text-primary shadow-glow' 
                    : 'border-accent/40 text-foreground hover:bg-accent/10'
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-luxury hover:shadow-glow transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-1">{item.title}</h3>
                  <p className="text-foreground/80 text-sm mb-3">{item.clients}</p>
                  <Button variant="sparkle" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              {/* Category Badge */}
              <Badge className="absolute top-3 left-3 bg-accent/90 text-primary">
                {item.category}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="luxury" size="lg" className="shadow-glow">
            <Sparkles className="w-5 h-5 mr-2" />
            View More Designs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;