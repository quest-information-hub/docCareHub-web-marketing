import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <Link to="hero" smooth={true} duration={500}>
              <div className="flex items-center cursor-pointer">
                <img src={logo} alt="Logo" className="h-20 w-auto" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-medical-800 hover:text-medical-500 font-medium cursor-pointer transition-colors"
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className="text-medical-800 hover:text-medical-500 font-medium cursor-pointer transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-medical-800 hover:text-medical-500 font-medium cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="contact" smooth={true} duration={500}>
              <Button className="bg-medical-500 hover:bg-medical-100 text-white font-medium hover:text-black border border-transparent hover:border-sky-500 transition duration-300">
                Book a Demo
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md absolute top-full left-0 right-0"
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
              <Button className="w-full bg-medical-500 hover:bg-medical-600 text-white">
                Book a Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
