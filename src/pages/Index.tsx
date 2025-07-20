import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
