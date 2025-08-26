import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
const fbcLogo = '/lovable-uploads/b2b1b1c3-cf75-499b-b980-4ae7cacaa988.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <p className="text-lg mb-8 opacity-80 max-w-2xl">
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
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
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

          {/* Logo/Visual */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 gradient-primary rounded-full flex items-center justify-center shadow-large pulse-glow p-8">
                <img 
                  src={fbcLogo} 
                  alt="FBC Developers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center animate-pulse">
                <span className="text-secondary font-bold">2020</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-foreground/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">Kerala</span>
              </div>
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