import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ImageSlideshow from "../components/ImageSlideshow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ImageSlideshow />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
