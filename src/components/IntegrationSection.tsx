
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UserPlus,Wallet } from "lucide-react";
import Pimage from "/public/1-removebg-preview.png"


const IntegrationSection = () => {
  return (
    <section id="integration" className="py-16 bg-medical-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Image Column (now on right side) */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
                <img 
                  src={Pimage} 
                  alt="System Integration" 
                  className="w-full h-full object-cover "
                />

          </motion.div>
          
          {/* Text Column (now on left side) */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left">Seamless Profile Management</h2>
            <p className="text-lg text-medical-600 mb-6 text-left">
            Ensure patient and doctor profiles are always accurate and up-to-date with easy, secure access and editing.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full">
                  <UserPlus className="h-6 w-6 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-800">Effortless Patient Registration</h3>
                  <p className="text-medical-600">Admins handle WhatsApp-based registration, creating a smooth and controlled onboarding experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full">
                  <Wallet className="h-6 w-6 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-800">Flexible Payment & Dues Management</h3>
                  <p className="text-medical-600">Multiple payment modes and real-time dues tracking ensure transparent and convenient financial handling.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
