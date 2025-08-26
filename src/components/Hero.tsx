import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import heroBuildingBg from '@/assets/hero-building-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Building Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBuildingBg} 
          alt="Construction buildings background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="mb-6 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-construction-yellow fill-current" />
                <span className="text-construction-yellow font-semibold">Est. 2020</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                FBC <span className="text-primary-light">DEVELOPERS</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Quality You Can Build On
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
                Leading construction company in Trivandrum, Kerala, specializing in residential, 
                commercial, and infrastructure development with over 4 years of excellence.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 fade-in-up">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-construction-yellow flex-shrink-0" />
                <span>Quality Construction</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-construction-yellow flex-shrink-0" />
                <span>Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-construction-yellow flex-shrink-0" />
                <span>Professional Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-construction-yellow flex-shrink-0" />
                <span>Competitive Pricing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-semibold px-8 py-6 text-lg"
              >
                View Projects
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-80">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;