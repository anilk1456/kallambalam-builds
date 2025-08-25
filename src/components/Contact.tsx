import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us today for a free consultation 
            and detailed quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  FBC Developers<br />
                  Kallambalam (PO)<br />
                  Kallambalam, Trivandrum (Dist)<br />
                  Kerala - 695605
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+917736779173" 
                  className="text-primary hover:text-primary-dark transition-fast font-semibold"
                >
                  +91 77367 79173
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Available 24/7 for inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:fbc.klbm2020@gmail.com" 
                  className="text-primary hover:text-primary-dark transition-fast font-semibold"
                >
                  fbc.klbm2020@gmail.com
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Get detailed quotes via email
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center">
                  <Instagram className="w-5 h-5 mr-3 text-primary" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.instagram.com/fbcdevelopers?igsh=eWlqemdoNTF5Nnhy&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-fast font-semibold"
                >
                  @fbcdevelopers
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  See our latest projects
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card shadow-card border-0 fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-secondary mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project type or inquiry"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gradient-primary font-semibold py-6 text-lg group"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center gradient-hero rounded-2xl p-8 shadow-large fade-in-up">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            For urgent construction queries or emergency services, call us directly.
          </p>
          <Button 
            size="lg"
            className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 font-semibold px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 77367 79173
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;