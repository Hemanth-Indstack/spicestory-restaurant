import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Team() {
  const chefs = [
    {
      name: "Chef Arjun Kumar",
      role: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chef Riya Sharma",
      role: "Indian Cuisine Specialist",
      image:
        "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chef Aman Singh",
      role: "Tandoor & Grill Expert",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <SectionWrapper id="team">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h6 className="uppercase tracking-[0.3em] text-sm mb-4">
          Our Team
        </h6>
        <h2 className="text-4xl font-bold">
          Meet our experienced chefs
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {chefs.map((chef, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Chef Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold mb-1">
              {chef.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              {chef.role}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
