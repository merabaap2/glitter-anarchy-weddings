import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Cake, Building, Sparkles, Crown, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Haldi Ceremony, Mehendi Night, Sangam Ceremony, Reception Party",
      features: ["Venue Decoration", "Photography", "Event Planning", "Catering"],
      buttonText: "View Wedding Packages",
      gradient: "from-background to-primary/20"
    },
    {
      icon: Cake,
      title: "Birthdays",
      description: "Cake Ceremony, First Birthday, Kitty Party, Surprise Party",
      features: ["Theme Decoration", "Entertainment", "Custom Cakes", "Party Planning"],
      buttonText: "Plan Birthday Party",
      gradient: "from-background to-accent/10"
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Conference, Corporate Party, Product Launch, Team Building",
      features: ["Professional Setup", "Audio/Visual", "Catering", "Event Management"],
      buttonText: "Plan Corporate Event",
      gradient: "from-background to-primary/15"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-luxury-blush/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary floating" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            <Sparkles className="w-8 h-8 text-primary floating" style={{animationDelay: '1s'}} />
          </div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light">
            Creating unforgettable experiences for your most precious moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden border-primary/10 bg-gradient-card shadow-elegant hover:shadow-luxury transition-all duration-500 group hover:scale-105`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">{service.title}</CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <Crown className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="luxury" 
                  className="w-full group-hover:shadow-glow transition-all"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;