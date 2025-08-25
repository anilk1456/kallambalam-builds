import React from 'react';
import { MapPin, Phone, Mail, Instagram, Heart } from 'lucide-react';
import fbcLogo from '@/assets/fbc-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={fbcLogo} 
                alt="FBC Developers Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">FBC DEVELOPERS</h3>
                <p className="text-sm opacity-80">Quality You Can Build On</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
              Leading construction company in Kerala since 2020, specializing in residential, 
              commercial, and infrastructure development with a commitment to quality and excellence.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/fbcdevelopers?igsh=eWlqemdoNTF5Nnhy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary transition-fast rounded-lg flex items-center justify-center group"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground transition-fast" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>FBC Developers</p>
                  <p>Kallambalam (PO)</p>
                  <p>Kallambalam, Trivandrum</p>
                  <p>Kerala - 695605</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+917736779173" 
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  +91 77367 79173
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:fbc.klbm2020@gmail.com" 
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-fast"
                >
                  fbc.klbm2020@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              © {currentYear} FBC Developers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Kerala</span>
            </div>
            
            <div className="text-sm text-secondary-foreground/60">
              Est. 2020 | Quality You Can Build On
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;