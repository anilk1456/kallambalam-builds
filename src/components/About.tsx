import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "4+", label: "Years Experience" },
    { icon: Clock, number: "100%", label: "On-Time Delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            About FBC Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2020, FBC Developers has quickly become a trusted name in Kerala's 
            construction industry, delivering quality projects with precision and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Building Dreams, Creating Futures
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Located in the heart of Kallambalam, Trivandrum, FBC Developers specializes 
                in residential, commercial, and infrastructure development. Our commitment to 
                quality construction and customer satisfaction has made us a preferred choice 
                for clients across Kerala.
              </p>
              <p className="leading-relaxed">
                We combine traditional craftsmanship with modern technology to deliver 
                projects that stand the test of time. Our experienced team ensures every 
                project meets the highest standards of quality, safety, and sustainability.
              </p>
              <p className="leading-relaxed">
                From concept to completion, we work closely with our clients to bring their 
                vision to life, ensuring transparency, timely delivery, and exceptional value.
              </p>
            </div>

            {/* Company Details */}
            <div className="mt-8 p-6 gradient-card rounded-lg shadow-card">
              <h4 className="text-lg font-semibold text-secondary mb-4">Company Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-secondary">Established:</span>
                  <span className="ml-2 text-muted-foreground">2020</span>
                </div>
                <div>
                  <span className="font-medium text-secondary">Location:</span>
                  <span className="ml-2 text-muted-foreground">Kallambalam, Kerala</span>
                </div>
                <div>
                  <span className="font-medium text-secondary">Specialization:</span>
                  <span className="ml-2 text-muted-foreground">Construction & Development</span>
                </div>
                <div>
                  <span className="font-medium text-secondary">Service Area:</span>
                  <span className="ml-2 text-muted-foreground">Kerala & Surroundings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-up">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="gradient-card shadow-card border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-card shadow-card border-0 fade-in-up">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Our Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction services that exceed client expectations 
                through innovative solutions, quality craftsmanship, and unwavering commitment 
                to excellence in every project we undertake.
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card border-0 fade-in-up">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Building className="w-6 h-6 mr-3 text-primary" />
                Our Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To be Kerala's most trusted construction company, recognized for our 
                quality, integrity, and innovation in creating sustainable spaces that 
                enhance communities and improve lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;