
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Lock, BadgeCheck, ShieldCheck } from "lucide-react";
import Pimage from "/public/WhatsApp Image 2025-05-08 at 03.29.23_4dc4418f.jpg"


const TrustSection = () => {
  return (
    <section id="trust" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0 overflow-hidden">
                <img 
                  src={Pimage} 
                  alt="Secure Medical Data" 
                  className="w-full h-full object-cover rounded-lg"
                />
            </Card>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left">Your Patient Data Is Secure With Us</h2>
            <p className="text-lg text-medical-600 mb-6 text-left">
              We understand the critical importance of data security in healthcare. Our platform is built from the ground up with HIPAA and GDPR compliance in mind.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-50 rounded-full">
                  <Shield className="h-6 w-6 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-800">End-to-End Encryption</h3>
                  <p className="text-medical-600">All patient data and communications are fully encrypted, ensuring that sensitive information remains private and protected.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-50 rounded-full">
                  <BadgeCheck className="h-6 w-6 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-800">Compliant Infrastructure</h3>
                  <p className="text-medical-600">Our systems are regularly audited and meet all requirements for handling protected health information (PHI).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-50 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-800">HIPAA + GDPR Compliant
                  </h3>
                  <p className="text-medical-600">Our platform adheres to global privacy standards, ensuring secure handling of patient data and regulatory compliance across regions.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
