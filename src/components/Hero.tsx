
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Pimage from "/public/1-removebg-preview.png"


const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:py-32 overflow-hidden bg-gradient-to-br from-sky-200 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-medical-800 leading-tight mb-4">
              DocCare Your Smart, <br/>All-in-One Clinic Management Platform
            </h1>
            <p className="text-lg text-medical-600 mb-8">
              Powered By: Q Information Hub
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link to="contact" smooth={true} duration={500}>
                <Button className="w-full sm:w-auto px-8 py-6 bg-medical-500 hover:bg-medical-600 text-white">
                  Book a Demo
                </Button>
              </Link>
              <Link to="features" smooth={true} duration={500}>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 border-medical-500 text-medical-500 hover:bg-medical-50">
                  View Features
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-8 -mt-16"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-medical-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-medical-200 rounded-full filter blur-xl opacity-70"></div>
              <div className="">
                <img 
                  src={Pimage}
                  alt="DocCare" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
