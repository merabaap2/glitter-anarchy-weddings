import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our wedding was absolutely magical! The team at Wishupon made our dream come true with their amazing decorations and flawless planning."
    },
    {
      name: "Rahul Verma", 
      role: "Groom",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The corporate event was highly professional and elegant. Every detail was perfect, and our clients were thoroughly impressed."
    },
    {
      name: "Anita Reddy",
      role: "Mother",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      rating: 5,
      text: "My daughter's first birthday party was beyond our expectations! The princess theme was beautifully executed. Thank you Wishupon!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Our Clients Say</h2>
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hear from our happy clients who trusted us with their special moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative shadow-luxury border-accent/20 bg-gradient-to-b from-card to-card/80 hover:shadow-glow transition-all duration-300">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30" />
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-accent/30">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-accent/20 text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;