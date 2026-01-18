import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80)"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl px-6 text-center text-white"
      >
        {/* Circle Badge */}
        <div className="mx-auto mb-8 w-36 h-36 rounded-full bg-accent flex flex-col items-center justify-center">
          <span className="text-4xl font-bold leading-none">40%</span>
          <span className="text-xs uppercase tracking-widest mt-1">
            Business Lunch
          </span>
        </div>

        {/* Small Heading */}
        <h6 className="uppercase tracking-[0.3em] text-sm mb-4">
          New Restaurant
        </h6>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Where every ingredient tells a story
        </h1>

        {/* CTA Button */}
        <button className="mt-4 px-8 py-3 rounded-full bg-accent text-black font-semibold uppercase tracking-wide hover:opacity-90 transition">
          Read More
        </button>
      </motion.div>
    </section>
  );
}
