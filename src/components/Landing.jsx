import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Landing() {
  const items = [
    {
      title: "Fresh Ingredients",
      text: "We use fresh, seasonal ingredients to create authentic and flavorful dishes every day.",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Our Specialties",
      text: "Discover our chef’s special recipes, prepared with passion and attention to detail.",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Cozy Atmosphere",
      text: "Enjoy your meals in a warm and welcoming restaurant atmosphere designed for comfort.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <SectionWrapper id="landing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
