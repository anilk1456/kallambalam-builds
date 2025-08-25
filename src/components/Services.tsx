import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  Hammer, 
  PaintBucket, 
  Wrench, 
  Shield,
  ArrowRight 
} from 'lucide-react';
import residential1 from '@/assets/residential-1.jpg';
import residential2 from '@/assets/residential-2.jpg';
import commercial1 from '@/assets/commercial-1.jpg';
import commercial2 from '@/assets/commercial-2.jpg';
import renovation1 from '@/assets/renovation-1.jpg';
import renovation2 from '@/assets/renovation-2.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import maintenance1 from '@/assets/maintenance-1.jpg';
import maintenance2 from '@/assets/maintenance-2.jpg';
import quality1 from '@/assets/quality-1.jpg';
import quality2 from '@/assets/quality-2.jpg';
import servicesBg1 from '@/assets/services-bg-1.jpg';
import servicesBg2 from '@/assets/services-bg-2.jpg';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes built with attention to detail and quality materials.",
      features: ["Custom Design", "Quality Materials", "Modern Amenities", "Timely Completion"],
      images: [residential1, residential2]
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes designed for business success.",
      features: ["Professional Design", "Functional Spaces", "Safety Standards", "Cost Effective"],
      images: [commercial1, commercial2]
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services.",
      features: ["Space Optimization", "Modern Upgrades", "Structural Changes", "Interior Design"],
      images: [renovation1, renovation2]
    },
    {
      icon: PaintBucket,
      title: "Interior Design",
      description: "Complete interior solutions from concept to execution, creating beautiful and functional spaces.",
      features: ["Custom Furniture", "Space Planning", "Color Schemes", "Lighting Design"],
      images: [interior1, interior2]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services to keep your property in perfect condition.",
      features: ["Regular Maintenance", "Emergency Repairs", "Preventive Care", "24/7 Support"],
      images: [maintenance1, maintenance2]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality control and assurance throughout every phase of construction.",
      features: ["Regular Inspections", "Quality Materials", "Safety Protocols", "Warranty Coverage"],
      images: [quality1, quality2]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${servicesBg1})` }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5 animate-pulse"
          style={{ backgroundImage: `url(${servicesBg2})`, animationDelay: '3s' }}
        />
        <div className="absolute inset-0 gradient-hero opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and development services tailored to meet your specific 
            needs with quality, efficiency, and professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-large transition-smooth fade-in-up group overflow-hidden">
                {/* Service Images */}
                <div className="relative h-48 overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <img 
                      src={service.images[0]} 
                      alt={`${service.title} example 1`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <img 
                      src={service.images[1]} 
                      alt={`${service.title} example 2`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-fast">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center gradient-hero rounded-2xl p-12 shadow-large fade-in-up relative overflow-hidden">
          {/* Additional background overlay */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${servicesBg1})` }}
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our team today for a free consultation and quote. 
              Let's bring your construction dreams to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-semibold px-8 py-6 text-lg"
              >
                Call Now: +91 77367 79173
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;