import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/logo-removebg-preview.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "bg-sky-100 shadow-md py-2" : "bg-sky-100 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced shadow */}
          <div className="flex-1 md:flex-none relative">
            <Link to="hero" smooth={true} duration={500}>
              <div className="flex items-center cursor-pointer">
                <motion.h1
                  className="text-xl font-bold relative z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={logo} alt="Logo" className="h-20 w-auto" />
                </motion.h1>
                {/* Glow effect behind logo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-medical-100/40 to-blue-100/40 rounded-full blur-lg -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="">
              <div className="flex space-x-8">
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  className="text-medical-800 hover:text-medical-500 font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-500 hover:after:w-full after:transition-all"
                >
                  Features
                </Link>
                <Link
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  className="text-medical-800 hover:text-medical-500 font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-500 hover:after:w-full after:transition-all"
                >
                  How It Works
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  className="text-medical-800 hover:text-medical-500 font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-500 hover:after:w-full after:transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block ml-6"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <Button className="text-lg px-10 py-4 bg-gradient-to-r from-medical-500 to-blue-600 hover:from-medical-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300">
                Book a Demo
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="bg-white/40 backdrop-blur-sm rounded-full shadow-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="py-4 px-6 space-y-4">
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="block text-medical-800 hover:text-medical-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="how-it-works"
                smooth={true}
                duration={500}
                className="block text-medical-800 hover:text-medical-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-medical-800 hover:text-medical-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-medical-500 to-blue-600 hover:from-medical-600 hover:to-blue-700 text-white rounded-full">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
