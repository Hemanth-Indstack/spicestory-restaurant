import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Menu() {
  const menuItems = [
    { name: "Paneer Butter Masala", price: "₹280" },
    { name: "Chicken Biryani", price: "₹320" },
    { name: "Butter Naan (2 pcs)", price: "₹90" },
    { name: "Dal Tadka", price: "₹220" },
    { name: "Masala Dosa", price: "₹150" },
    { name: "Hyderabadi Mutton Curry", price: "₹380" },
    { name: "Veg Fried Rice", price: "₹200" },
    { name: "Gulab Jamun", price: "₹120" },
  ];

  return (
    <SectionWrapper id="menu">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h6 className="uppercase tracking-[0.3em] text-sm mb-4">
          Our Menu
        </h6>
        <h2 className="text-4xl font-bold">
          Authentic Indian dishes full of flavor
        </h2>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 max-w-4xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Food Name */}
            <span className="text-lg font-medium">
              {item.name}
            </span>

            {/* Dotted Line */}
            <span className="flex-1 mx-4 border-b border-dotted border-gray-500"></span>

            {/* Price */}
            <span className="text-lg font-semibold">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
