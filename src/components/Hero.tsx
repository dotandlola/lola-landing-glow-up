import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury spa hand cream in elegant bathroom"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-light/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-sage border border-sage/20">
              <Leaf className="w-4 h-4" />
              100% Plant-Based • Sustainable • Expert-Crafted
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Luxurious 
              <span className="block text-sage animate-glow">Hair & Body Care</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
                For Families Who Care
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Plant-based, sustainable, and luxurious hair & body care products, 
              expertly crafted for those who put their families and their future first.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-sage">
                <Heart className="w-4 h-4" />
                Family Safe
              </div>
              <div className="flex items-center gap-2 text-sage">
                <Leaf className="w-4 h-4" />
                Plant-Based
              </div>
              <div className="flex items-center gap-2 text-sage">
                <Shield className="w-4 h-4" />
                Expert Tested
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="luxury" size="xl" className="group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cream" size="xl">
                Learn Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">10,000+</div>
                <div>Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">5-Star</div>
                <div>Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">100%</div>
                <div>Plant-Based</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-float">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl shadow-elegant p-8 border border-sage/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full animate-glow opacity-20"></div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-sage">Special Launch Offer</div>
                <div className="text-xl text-muted-foreground">Save 25% on your first order</div>
                <div className="text-sm text-sage font-medium">Use code: WELCOME25</div>
                <Button variant="elegant" size="lg" className="w-full">
                  Claim Offer
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;