import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Heart, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h2> 
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to make your special day unforgettable? Let's discuss your dream event
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-luxury border-accent/20 bg-gradient-to-b from-card to-card/80">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Send className="w-6 h-6 text-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input id="name" placeholder="Your name" className="border-accent/30 focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-accent/30 focus:border-accent" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" className="border-accent/30 focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">Event Date</Label>
                  <Input id="date" type="date" className="border-accent/30 focus:border-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your dream event..."
                  className="min-h-32 border-accent/30 focus:border-accent resize-none"
                />
              </div>
              
              <Button variant="luxury" className="w-full shadow-glow" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Submit Enquiry
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-luxury border-accent/20 bg-gradient-to-r from-card to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/80">+91 98765 43210</p>
                    <p className="text-foreground/80">+91 87654 32109</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-luxury border-accent/20 bg-gradient-to-r from-card to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/80">info@wishupon.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-luxury border-accent/20 bg-gradient-to-r from-card to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/80">123, Wedding Street<br />Dream City, State 400001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-luxury border-accent/20 bg-gradient-to-r from-card to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-foreground/80">Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;