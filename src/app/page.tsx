"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Map, Sun, Wind } from "lucide-react";
import { useRef } from "react";

const EXPEDITIONS = [
  {
    id: 1,
    title: "The Dragon's Blood Trek",
    duration: "7 Days",
    price: "$2,500",
    image: "/socotra-hero.png",
    desc: "Journey deep into the Diksam Plateau. Walk among the ancient, umbrella-like Dragon's Blood trees and camp under the stars.",
  },
  {
    id: 2,
    title: "Pristine Shores Expedition",
    duration: "5 Days",
    price: "$1,800",
    image: "/socotra-beach.png",
    desc: "Discover Detwah Lagoon and Shoab beach. Encounter spinner dolphins and witness the turquoise waters of the Arabian Sea.",
  },
  {
    id: 3,
    title: "Nomadic Odyssey",
    duration: "10 Days",
    price: "$3,200",
    image: "/socotra-dunes.png",
    desc: "A complete traverse of the island. From the towering sand dunes of Zahek to the mystical Hoq Cave. The ultimate adventure.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax effects for the hero background
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity1 = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Depth */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/socotra-hero.png')",
            y: y1,
            opacity: opacity1
          }}
        />
        {/* Gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80 z-0" />

        <div className="container relative z-10 px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-light tracking-tight mb-6 drop-shadow-2xl">
              Beyond The <br className="hidden md:block"/>
              <span className="text-primary italic">Known</span> World
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-md"
          >
            Join our exclusive expeditions to the Galápagos of the Indian Ocean. Experience cinematic landscapes, 
            rare biodiversity, and raw beauty in absolute luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link 
              href="/expeditions" 
              className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:tracking-[0.2em]"
            >
              Discover Expeditions <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-primary"
          />
        </motion.div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="py-32 bg-background relative z-10 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <Compass className="w-12 h-12 mx-auto text-primary mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              A Landscape <span className="text-primary italic">Untouched</span> by Time
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-8">
              Socotra is an alien landscape on Earth. From the iconic Dragon's Blood trees to 
              pristine white sand beaches, we curate high-end, immersive travel experiences 
              for those who seek true adventure without compromising on comfort.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50 mt-12">
              {[
                { icon: Map, label: "Remote Locations" },
                { icon: Sun, label: "Year-round Sun" },
                { icon: Wind, label: "Untamed Nature" },
                { icon: Compass, label: "Expert Guides" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Expeditions */}
      <section className="py-32 bg-[#0a0a0a] relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-4">Curated Journeys</h2>
              <p className="text-muted-foreground max-w-lg">Select from our meticulously designed itineraries, offering the perfect balance of exploration and luxury.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/expeditions" className="group flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:text-white transition-colors">
                View All Itineraries 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPEDITIONS.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-card rounded-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest">
                    {exp.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {exp.desc}
                  </p>
                  <div className="flex justify-between items-center border-t border-border/50 pt-6">
                    <span className="text-sm tracking-widest text-foreground/80">From {exp.price}</span>
                    <span className="text-primary text-sm uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Quote Section */}
      <section className="relative py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('/socotra-quote.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-3xl md:text-5xl font-serif text-white max-w-4xl mx-auto leading-snug italic">
              "To walk in Socotra is to step onto another planet. It is the last refuge of the truly wild."
            </p>
            <div className="mt-10 w-16 h-[1px] bg-primary mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready for the Extraordinary?</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Our 2026 expedition dates are now open. Secure your place on the journey of a lifetime.
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-primary text-primary-foreground px-10 py-5 uppercase tracking-[0.15em] text-sm hover:bg-white transition-colors duration-300"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
