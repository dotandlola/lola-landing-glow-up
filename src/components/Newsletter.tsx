import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Sparkles } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Newsletter Content */}
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-12 shadow-elegant border border-sage/20">
          
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the <span className="text-sage">Dot & Lola</span> Family
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know about new products, exclusive offers, and sustainability tips. 
            Plus, get 25% off your first order when you sign up!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-sage">
              <Gift className="w-4 h-4" />
              Exclusive Offers
            </div>
            <div className="flex items-center gap-2 text-sage">
              <Sparkles className="w-4 h-4" />
              New Product Alerts
            </div>
            <div className="flex items-center gap-2 text-sage">
              <Mail className="w-4 h-4" />
              Sustainability Tips
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 rounded-lg border-sage/20 focus:border-sage bg-background/50"
            />
            <Button 
              type="submit" 
              variant="luxury" 
              size="lg"
              className="px-8 h-12"
            >
              Subscribe
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold rounded-full px-4 py-2 text-sm font-medium mt-6 border border-gold/30">
            <Gift className="w-4 h-4" />
            Use code WELCOME25 for 25% off your first order
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;