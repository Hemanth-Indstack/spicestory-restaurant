import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

/**
 * SectionWrapper
 *
 * Props:
 * - id: section id for anchor links
 * - children: section content
 * - className: extra Tailwind classes (optional)
 * - bg: background color (optional)
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  bg = "bg-neutral-900",
}) {
  return (
    <section id={id} className={`${bg} py-24`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`max-w-7xl mx-auto px-6 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
