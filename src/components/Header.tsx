import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
const fbcLogo = '/lovable-uploads/b2b1b1c3-cf75-499b-b980-4ae7cacaa988.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={fbcLogo} 
              alt="FBC Developers Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-secondary">FBC DEVELOPERS</h1>
              <p className="text-xs text-muted-foreground">Quality You Can Build On</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-fast font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-fast font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-fast font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-fast font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-fast font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 77367 79173</span>
            </div>
            <Button variant="default" size="sm" className="gradient-primary">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-fast"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-fast font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-fast font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-fast font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-fast font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-fast font-medium"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 77367 79173</span>
                </div>
                <Button variant="default" size="sm" className="gradient-primary w-full">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;