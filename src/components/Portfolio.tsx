import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Crown, Sparkles, Camera, Eye } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  const categories = [
    { name: "All" },
    { name: "Wedding" },
    { name: "Haldi" },
    { name: "Lighting" },
    { name: "Reception" },
    { name: "Birthdays" },
    { name: "Corporate" }
  ];

  const portfolioItems = [
    // Wedding
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
      title: "Traditional Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Anisha & Vikram"
    },
    {
      title: "Destination Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Kavya & Rohan"
    },
    {
      title: "Palace Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Shreya & Aditya"
    },
    {
      title: "Beachside Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Nisha & Karan"
    },
    // Haldi
    {
      title: "Traditional Haldi Ceremony",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Pooja & Amit"
    },
    {
      title: "Colorful Haldi Celebration",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Riya & Sanjay"
    },
    {
      title: "Garden Haldi Function",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Divya & Rahul"
    },
    {
      title: "Royal Haldi Ceremony",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1574030842553-9f834e5e9b1e?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Priyanka & Vishal"
    },
    {
      title: "Intimate Haldi Ritual",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Sneha & Arjun"
    },
    {
      title: "Festive Haldi Event",
      category: "Haldi",
      image: "https://images.unsplash.com/photo-1569425955948-09b1b5e9a4cc?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Megha & Deepak"
    },
    // Lighting
    {
      title: "Elegant Wedding Lighting",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Fairy Lights Setup"
    },
    {
      title: "Crystal Chandelier Decor",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Luxury Lighting"
    },
    {
      title: "LED Stage Lighting",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Modern Setup"
    },
    {
      title: "Garden String Lights",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Outdoor Ambiance"
    },
    {
      title: "Mandap Lighting Design",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Traditional Setup"
    },
    {
      title: "Reception Hall Lighting",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Grand Ballroom"
    },
    // Reception
    {
      title: "Grand Reception Hall",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Anjali & Rohit"
    },
    {
      title: "Garden Reception",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Sonal & Nikhil"
    },
    {
      title: "Beach Reception",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Tanya & Arjun"
    },
    {
      title: "Royal Palace Reception",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Ishita & Varun"
    },
    {
      title: "Modern Reception Setup",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Neha & Suresh"
    },
    {
      title: "Luxury Reception Decor",
      category: "Reception",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Prachi & Manish"
    },
    // Birthdays
    {
      title: "Princess Birthday Party",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Little Anya"
    },
    {
      title: "Superhero Birthday Bash",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Aryan's 5th Birthday"
    },
    {
      title: "Garden Birthday Celebration",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Sia's Sweet 16"
    },
    {
      title: "Elegant Adult Birthday",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Meera's 30th"
    },
    {
      title: "Themed Birthday Party",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Rohan's 21st"
    },
    {
      title: "Luxury Birthday Bash",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Kavya's Milestone"
    },
    // Corporate
    {
      title: "Corporate Gala Night",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Tech Solutions Ltd"
    },
    {
      title: "Annual Conference",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Global Industries"
    },
    {
      title: "Product Launch Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Innovation Corp"
    },
    {
      title: "Team Building Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      rating: 5,
      clients: "HR Excellence"
    },
    {
      title: "Award Ceremony",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Business Awards"
    },
    {
      title: "Corporate Retreat",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=600&h=400&fit=crop",
      rating: 5,
      clients: "Executive Summit"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayItems = showAll ? portfolioItems : filteredItems.slice(0, 8);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-luxury-blush/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-primary floating" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Portfolio</h2>
            <Camera className="w-8 h-8 text-primary floating" style={{animationDelay: '1s'}} />
          </div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 font-light">
            Browse through our collection of beautiful wedding moments
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(category.name);
                  setShowAll(false);
                }}
                className={`px-6 py-2 text-sm cursor-pointer transition-all hover:shadow-soft ${
                  activeCategory === category.name
                    ? 'bg-primary text-white shadow-soft hover:shadow-glow' 
                    : 'border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50'
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Portfolio Carousel */}
        <Carousel className="w-full mb-12">
          <CarouselContent className="-ml-4">
            {displayItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-luxury transition-all duration-500 cursor-pointer hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3">{item.clients}</p>
                  <Button variant="elegant" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              {/* Category Badge */}
              <Badge className="absolute top-3 left-3 bg-primary/90 text-white">
                {item.category}
              </Badge>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary/30 hover:bg-primary hover:text-white" />
          <CarouselNext className="border-primary/30 hover:bg-primary hover:text-white" />
        </Carousel>
        
        <div className="text-center">
          <Button 
            variant="luxury" 
            size="lg" 
            className="shadow-glow hover:scale-105 transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {showAll ? "Show Less" : "View More Designs"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;