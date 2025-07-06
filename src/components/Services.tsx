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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Creating unforgettable experiences for your most precious moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden border-accent/20 bg-gradient-to-b ${service.gradient} shadow-luxury hover:shadow-glow transition-all duration-500 group`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10" />
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/20 rounded-full w-fit group-hover:bg-accent/30 transition-colors">
                  <service.icon className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <Crown className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="luxury" 
                  className="w-full group-hover:shadow-sparkle transition-all"
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