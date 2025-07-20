import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const Products = () => {
  const products = [
    {
      name: "Repair Shampoo",
      description: "Nourish, Smooth and Protect Dry, Coloured, or Curly Hair",
      price: "£27.36",
      rating: 4.8,
      reviews: 5,
      status: "Bestseller"
    },
    {
      name: "Repair Conditioner", 
      description: "Deep conditioning treatment for damaged and colored hair",
      price: "£30.09",
      rating: 5.0,
      reviews: 2,
      status: "Bestseller"
    },
    {
      name: "Luxury Body Wash",
      description: "Gentle cleansing with natural botanicals and essential oils",
      price: "£24.99",
      rating: 4.9,
      reviews: 8,
      status: "New"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-sage">Bestselling</span> Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the products that families love most. Each one is expertly formulated 
            with natural ingredients for exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Product Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={productsImage}
                alt="Dot & Lola hair care products"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Quality Badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-white rounded-full w-20 h-20 flex items-center justify-center text-sm font-bold shadow-glow animate-glow">
              Premium Quality
            </div>
          </div>

          {/* Products List */}
          <div className="space-y-6">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-sage/10 hover:border-sage/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-sage transition-colors">
                        {product.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.status === 'Bestseller' 
                          ? 'bg-sage text-white' 
                          : 'bg-gold text-white'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-gold text-gold' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="text-sm font-medium text-foreground ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sage mb-2">
                      {product.price}
                    </div>
                    <Button variant="elegant" size="sm" className="group/btn">
                      <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* View All Products CTA */}
            <div className="pt-6">
              <Button variant="luxury" size="lg" className="w-full">
                View All Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;