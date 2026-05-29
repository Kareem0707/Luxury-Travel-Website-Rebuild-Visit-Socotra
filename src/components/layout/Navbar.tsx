"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-primary tracking-wider">
          VISIT SOCOTRA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          <Link href="/expeditions" className="hover:text-primary transition-colors">
            Expeditions
          </Link>
          <Link href="/journal" className="hover:text-primary transition-colors">
            Journal
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/book"
            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background absolute top-20 left-0 w-full flex flex-col items-center pt-20 gap-8 text-lg uppercase tracking-widest"
        >
          <Link href="/expeditions" onClick={() => setIsMenuOpen(false)}>Expeditions</Link>
          <Link href="/journal" onClick={() => setIsMenuOpen(false)}>Journal</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/book" onClick={() => setIsMenuOpen(false)} className="text-primary">Book Now</Link>
        </motion.div>
      )}
    </motion.header>
  );
}
