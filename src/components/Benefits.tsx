import { Leaf, Heart, Sparkles, Shield, Recycle, Award } from "lucide-react";
import ingredientsImage from "@/assets/ingredients.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Plant-Based",
      description: "Carefully sourced natural ingredients that nourish without compromise"
    },
    {
      icon: Heart,
      title: "Family Safe",
      description: "Gentle formulations safe for every member of your family"
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Spa-quality results in the comfort of your own home"
    },
    {
      icon: Shield,
      title: "Expert Tested", 
      description: "Developed by cosmetic experts and dermatologically tested"
    },
    {
      icon: Recycle,
      title: "Sustainable",
      description: "Eco-friendly packaging and responsible sourcing practices"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients for superior performance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-sage">Dot & Lola</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe luxury shouldn't come at the expense of your family's health or our planet's future. 
            That's why every product is thoughtfully crafted with the highest standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-sage/10 hover:border-sage/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-sage transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={ingredientsImage}
                alt="Natural plant-based ingredients"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-6 border border-sage/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-sage">15+</div>
                <div className="text-sm text-muted-foreground">Natural Ingredients</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-card rounded-2xl shadow-elegant p-6 border border-sage/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-sage">0%</div>
                <div className="text-sm text-muted-foreground">Harsh Chemicals</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;