import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ShopifyProducts from "@/components/ShopifyProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <ShopifyProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
