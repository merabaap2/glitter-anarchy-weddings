import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in weddings, birthday parties, and corporate events. Our services include venue decoration, photography, event planning, catering, entertainment, and complete event management from start to finish."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking at least 2-3 months in advance for weddings and corporate events, and 3-4 weeks for birthday parties. However, we do accommodate last-minute bookings based on availability."
    },
    {
      question: "Do you provide destination weddings?",
      answer: "Yes! We organize beautiful destination weddings across India. We handle all logistics including venue booking, guest accommodation, transportation, and complete event coordination at your chosen destination."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the local metropolitan area and surrounding cities. For destination events, we can arrange services nationwide with our network of trusted partners."
    },
    {
      question: "Can I customize my event package?",
      answer: "Absolutely! Every event is unique, and we create customized packages based on your specific requirements, budget, and vision. We work closely with you to ensure every detail matches your dreams."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to make your dream event affordable. Typically, we require a 30% advance booking amount, with the balance payable in installments leading up to your event date."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Got questions? We've got answers to help you plan your perfect event
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-accent/20 rounded-lg px-6 bg-gradient-to-r from-card to-card/80 shadow-luxury hover:shadow-glow transition-all"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent py-6 text-lg font-medium">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 text-base leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;