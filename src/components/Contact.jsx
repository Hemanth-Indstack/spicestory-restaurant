import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const contacts = [
    {
      title: "Our Address",
      value: "Plot No. 24, Banjara Hills, Hyderabad, Telangana",
    },
    {
      title: "Phone Number",
      value: "+91 98765 43210",
    },
    {
      title: "Email Address",
      value: "info@restaurantname.com",
    },
  ];

  return (
    <SectionWrapper id="contact">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h6 className="uppercase tracking-[0.3em] text-sm mb-4">
          Contact Us
        </h6>
        <h2 className="text-4xl font-bold">
          Get in touch with us
        </h2>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-10"
          >
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

