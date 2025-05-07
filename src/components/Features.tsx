
import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MessageSquare,
  Users,
  Check,
  Info,
  Settings,
  UserPlus,
  Stethoscope,
  Bell,
  CreditCard,
  LogIn,
  ClipboardList,
  BarChart,
  CalendarX2,
  FileText,
  Edit,
  Clipboard
} from 'lucide-react';


const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-custom border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-medical-600" />
      </div>
      <h3 className="text-xl font-semibold text-medical-800 mb-2">{title}</h3>
      <p className="text-medical-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const patientFeatures = [
    {
      icon: Users,
      title: "Seamless Profile Management",
      description: "The system allows patients to conveniently update their mobile number and address, ensuring their profiles remain accurate and up-to-date.",
      delay: 0.1
    },
    {
      icon: LogIn,
      title: "Secure Login System",
      description: "Once registered by the admin, patients can log in using their WhatsApp number and password.",
      delay: 0.2
    },
    {
      icon: UserPlus,
      title: "Effortless Registration",
      description: "The registration process is fully managed by the admin using the patient’s WhatsApp number, enabling a streamlined and hassle-free onboarding experience.",
      delay: 0.3
    },
    {
      icon: Stethoscope,
      title: "Enhanced Doctor Discovery & Appointment Booking",
      description: "Patients can view a list of doctors and access detailed doctor profiles.",
      delay: 0.3
    },
    {
      icon: Bell,
      title: "Intelligent Reminders & Notifications",
      description: "Patients will receive in-app notifications and WhatsApp alerts for upcoming, cancelled, or rescheduled appointments.",
      delay: 0.3
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options & Dues Tracking",
      description: "Patients can choose to pay via cash or card, with the flexibility to make partial or full payments.",
      delay: 0.3
    },
  ];

  const doctorFeatures = [
    {
      icon: LogIn,
      title: "Seamless Profile Management & Secure Login",
      description: "Doctors are registered by the admin, including profile details and earning share setup.",
      delay: 0.1
    },
    {
      icon: Info,
      title: "Access to Patient Medical History",
      description: "Doctors have full access to the medical history of patients they consult, including previous diagnoses, treatments, and prescriptions, ensuring better-informed clinical decisions.",
      delay: 0.2
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Doctors can view their upcoming scheduled appointments on a dedicated screen.",
      delay: 0.3
    },
    {
      icon: ClipboardList,
      title: "Consultation Form Completion",
      description: "After each consultation, doctors will fill out a structured form that includes: Service Selection: Checkboxes for services provided (e.g., teeth examination, filling, root canal, etc.).",
      delay: 0.3
    },
    {
      icon: BarChart,
      title: "Payment History & Analytics",
      description: "Doctors can view a dashboard with graphs and records showing:",
      delay: 0.3
    },
    {
      icon: CalendarX2,
      title: "Availability Management",
      description: "Doctors can set their unavailable time slots or full days during which no appointments can be scheduled with them.",
      delay: 0.3
    },
  ];

  const adminFeatures = [
    {
      icon: Users,
      title: "Patient and Doctor Profile Management",
      description: "Admins have full control over both patient and doctor profiles. Enables accurate record-keeping, seamless onboarding, and real-time updates.",
      delay: 0.1
    },
    {
      icon: Calendar,
      title: "Appointment Management & Status Tracking",
      description: "Admins can approve, reject, or manage appointment requests. Each request is validated against doctor availability.",
      delay: 0.2
    },
    {
      icon: Clipboard,
      title: "Doctor Consultation Record Monitoring",
      description: "Admins can view consultation records submitted by doctors. Includes service checklists, procedure descriptions, and prescribed medicines. Ensures transparency and protocol adherence.",
      delay: 0.3
    },
    {
      icon: FileText,
      title: "Automated Invoice Generation",
      description: "Invoices are automatically generated after each consultation.Admin selects: (Payment method: Cash or Card Payment type: Full or Partial Discount: Whether to apply or not)",
      delay: 0.1
    },
    {
      icon: BarChart,
      title: "Financial Insights & Dashboards",
      description: "Admins can access a comprehensive analytics module with time-based filtering, revenue and share graphs, payment distribution charts, outstanding dues visualization, and downloadable PDF reports for financial and appointment insights.",
      delay: 0.2
    },
    {
      icon: Bell,
      title: "Appointment and Communication Notifications",
      description: "Admins can manage notification settings for doctors and patients, using WhatsApp and in-app notifications to confirm appointments, send reminders, inform about cancellations, and share invoices and prescriptions.",
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="py-20 bg-medical-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Powerful Features for Everyone</h2>
          <p className="section-subtitle">A complete solution designed for patients, doctors, and administrators.</p>
        </motion.div>

        {/* For Patients */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-medical-700 mb-6"
          >
            For Patients
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* For Doctors */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-medical-700 mb-6"
          >
            For Doctors
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctorFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* For Admins */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-medical-700 mb-6"
          >
            For Administrators
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adminFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
