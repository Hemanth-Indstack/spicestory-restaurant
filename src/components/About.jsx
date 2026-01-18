import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="w-full h-[420px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h6 className="uppercase tracking-[0.3em] text-sm mb-4">
            About Our Restaurant
          </h6>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Experience the taste of tradition and quality
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Our restaurant brings together carefully prepared dishes, inspired by
            classic recipes and modern culinary techniques. Every plate is crafted
            to deliver rich flavors and memorable moments.
          </p>

          <p className="text-gray-300 leading-relaxed">
            From fresh ingredients to a welcoming atmosphere, we focus on creating
            an enjoyable dining experience for every guest who walks through our
            doors.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
