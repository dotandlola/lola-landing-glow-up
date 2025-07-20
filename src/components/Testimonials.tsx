import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK", 
      text: "I've been using Dot & Lola products for 6 months now and my hair has never felt healthier. The fact that they're plant-based gives me peace of mind when using them on my children too.",
      rating: 5,
      verified: true
    },
    {
      name: "Emma Richardson",
      location: "Manchester, UK",
      text: "Finally found a luxury brand that aligns with my values! The repair shampoo worked wonders on my color-treated hair, and I love that it's sustainable.",
      rating: 5,
      verified: true
    },
    {
      name: "Rachel Davies",
      location: "Birmingham, UK", 
      text: "As a busy mum, I need products that work quickly and effectively. Dot & Lola delivers that luxury spa experience at home. My whole family uses them now!",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-sage">Families</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real families are saying 
            about their Dot & Lola experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border border-sage/10 relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground group-hover:text-sage transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="text-xs bg-sage-light text-sage px-2 py-1 rounded-full">
                    Verified Purchase
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-gradient-warm rounded-3xl p-8 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-sage mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage mb-2">30 Day</div>
              <div className="text-sm text-muted-foreground">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;