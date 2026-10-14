import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accreditations from "@/components/Accreditations";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurApproach from "@/components/OurApproach";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Accreditations />
        <Services />
        <WhyChooseUs />
        <OurApproach />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
