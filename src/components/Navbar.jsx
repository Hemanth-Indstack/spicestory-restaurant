import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "Landing", id: "landing" },
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold uppercase tracking-widest">
           SPICESTORY
          </div>

          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            {links.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-accent transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl"
            >
              ✕
            </button>

            <ul className="flex flex-col gap-8 text-xl uppercase tracking-widest text-center">
              {links.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-accent transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
