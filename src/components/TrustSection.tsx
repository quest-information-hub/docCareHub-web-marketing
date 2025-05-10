import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Shield, BadgeCheck, ShieldCheck } from "lucide-react";
import Pimage from "/public/doc1.png";

const TrustSection = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image without Card */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src={Pimage} 
              alt="Secure Medical Data" 
              className="w-full h-auto object-cover "
            />
          </motion.div>

          {/* Text with Card */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-400 p-8 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
                Your Patient Data Is Secure With Us
              </h2>
              <p className="text-lg text-white mb-8">
                We understand the critical importance of data security in healthcare. Our platform is built from the ground up with HIPAA and GDPR compliance in mind.
              </p>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-medical-50 shadow">
                    <Shield className="h-6 w-6 text-medical-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">End-to-End Encryption</h3>
                    <p className="text-white">All patient data and communications are fully encrypted, ensuring that sensitive information remains private and protected.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-medical-50 shadow">
                    <BadgeCheck className="h-6 w-6 text-medical-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Compliant Infrastructure</h3>
                    <p className="text-white">Our systems are regularly audited and meet all requirements for handling protected health information (PHI).</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-medical-50 shadow">
                    <ShieldCheck className="h-6 w-6 text-medical-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">HIPAA + GDPR Compliant</h3>
                    <p className="text-white">Our platform adheres to global privacy standards, ensuring secure handling of patient data and regulatory compliance across regions.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
