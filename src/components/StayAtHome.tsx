import React from 'react';
import { motion } from 'framer-motion';
import Pimage from "/public/stay.png"

const StayAtHome = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-medical-500 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay at home!</h2>
              <p className="text-xl text-white/90 mb-6">
                Let's create healthier brighter smiles together
              </p>
              <button className="bg-white text-medical-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                Book Appointment
              </button>
            </div>
            <div className="w-full md:w-1/3 p-4 flex justify-center">
              <img 
                src={Pimage}
                alt="Stay at Home Medical Service" 
                className="max-h-64 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayAtHome;