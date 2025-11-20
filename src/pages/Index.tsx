import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
