
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would handle the form submission
    console.log('Form submitted');
    // You would typically integrate with a form handling service here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-medical-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Request a Demo</h2>
          <p className="section-subtitle">See how MediPoint Connect can revolutionize your healthcare practice.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-custom"
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Smith" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" placeholder="+1 234 567 8900" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Tell us about your practice..." className="mt-1" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-medical-500 hover:bg-medical-600">
                  Request Demo
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-medical-600 text-white p-8 rounded-lg shadow-custom flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us Directly</h3>
              <p className="mb-6">
                Prefer to chat now? Reach out to our team directly for immediate assistance.
              </p>

              <div className="mb-8">
                <a 
                  href="https://wa.me/12345678900" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 mb-4 text-white hover:text-medical-100 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="border-t border-medical-500 pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>HIPAA + GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Secure by Design – Firebase + Firestore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>99.99% Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
