
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";


const Step = ({ number, title, description, delay, isLast = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col md:flex-row items-center md:items-start gap-4"
    >
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-medical-500 flex items-center justify-center text-white text-2xl font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="hidden md:block h-24 w-0.5 bg-medical-200 mx-auto my-2"></div>
        )}
      </div>
      
      {/* Step Content */}
      <div className="md:ml-6 text-center md:text-left mb-8">
        <h3 className="text-xl font-bold text-medical-800 mb-2">{title}</h3>
        <p className="text-medical-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Patient Registration",
      description: "Once registered by the admin, patients can log in using their WhatsApp number and password. A One-Time Password (OTP) will be sent to their WhatsApp to verify and complete the login process securely.",
      delay: 0.1
    },
    {
      number: 2,
      title: "Appointment Booking",
      description: "Patients can view a list of doctors with detailed profiles, check available time slots based on doctor schedules, select a preferred slot, optionally provide a reason, and submit the appointment request.",
      delay: 0.3
    },
    {
      number: 3,
      title: "Flexible Payment Options",
      description: "Patients can choose to pay via cash or card, with the flexibility to make partial or full payments.",
      delay: 0.5,
      isLast: true
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, three-step process that streamlines healthcare administration.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <Step 
                key={index} 
                number={step.number} 
                title={step.title} 
                description={step.description} 
                delay={step.delay}
                isLast={step.isLast}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 p-6 md:p-8 bg-medical-50 rounded-xl shadow-custom text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-medical-800 mb-3">Ready to see it in action?</h3>
          <p className="text-medical-600 mb-0">
            Schedule a demo and discover how DocCare can transform your practice.
          </p>
          <Link to="contact" smooth={true} duration={500}>
              <Button className="bg-medical-500 hover:bg-medical-100 text-white font-medium hover:text-black border border-transparent hover:border-sky-500 transition duration-300 mt-5">
                Book a Demo
              </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
