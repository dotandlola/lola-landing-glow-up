import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, ExternalLink } from "lucide-react";
import { getProducts, formatPrice, getShopifyProductUrl, getShopifyCheckoutUrl, type ShopifyProduct } from "@/lib/shopify";
import { useToast } from "@/hooks/use-toast";

const ShopifyProducts = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const shopifyProducts = await getProducts(6);
        setProducts(shopifyProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        toast({
          title: "Error loading products",
          description: "Unable to load products from Shopify. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [toast]);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variantId = product.variants.edges[0]?.node.id;
    if (variantId) {
      // Create direct checkout URL
      const checkoutUrl = getShopifyCheckoutUrl(variantId);
      window.open(checkoutUrl, '_blank');
      
      toast({
        title: "Redirecting to checkout",
        description: `Taking you to secure checkout for ${product.title}`,
      });
    }
  };

  const handleViewProduct = (product: ShopifyProduct) => {
    const productUrl = getShopifyProductUrl(product.handle);
    window.open(productUrl, '_blank');
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-sage">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">Loading our latest products...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-soft animate-pulse">
                <div className="h-48 bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded mb-4"></div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-sage">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're updating our product catalog. Please check back soon!
          </p>
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => window.open('https://no-ordinary-no.myshopify.com', '_blank')}
          >
            Visit Our Store
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-sage">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our expertly formulated, plant-based hair and body care products. 
            Each one is crafted with natural ingredients for exceptional results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 6).map((product, index) => (
            <div 
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 border border-sage/10 hover:border-sage/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                {product.featuredImage ? (
                  <img 
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText || product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-accent flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{product.title}</span>
                  </div>
                )}
                
                {/* Product Tags */}
                {product.tags.includes('bestseller') && (
                  <div className="absolute top-4 left-4 bg-sage text-white text-xs px-2 py-1 rounded-full">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-sage transition-colors mb-2">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description || "Expertly crafted with natural ingredients for exceptional results."}
                </p>

                {/* Rating (placeholder - you can integrate reviews later) */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    <span className="text-sm font-medium text-foreground ml-1">5.0</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-sage">
                    {formatPrice(
                      product.priceRange.minVariantPrice.amount,
                      product.priceRange.minVariantPrice.currencyCode
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewProduct(product)}
                      className="group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="elegant" 
                      size="sm" 
                      onClick={() => handleAddToCart(product)}
                      className="group/btn"
                    >
                      <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products CTA */}
        <div className="text-center">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => window.open('https://no-ordinary-no.myshopify.com', '_blank')}
            className="group"
          >
            View All Products
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopifyProducts;