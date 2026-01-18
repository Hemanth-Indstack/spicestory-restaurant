import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import About from "./components/About";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-dark text-white font-montserrat">
      <Navbar />

      {/* Sections (order matters for Nicepage clone) */}
      <Hero />        {/* Home */}
      <Landing />     {/* Landing */}
      <About />       {/* About */}
      <Menu />        {/* Menu */}
      <Team />        {/* Team */}
      <Contact />     {/* Contact */}
    </div>
  );
}
