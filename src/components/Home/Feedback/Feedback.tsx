'use client';

import React from "react";
import Image from "next/image";

// Testimonial data type
type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
};

const Feedback = () => {
  // Testimonial data based on the UI design
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Our community mobile app was expertly developed by the FortXcore",
      name: "Mr. Mohamed Siddique",
      title: "Trader and Businessman",
      image: "/testimonial1.jpg" // You'll need to add these images
    },
    {
      id: 2,
      quote: "They've done an excellent job representing our firm. Therefore, we intend to keep them on team consistently",
      name: "Mr. Bryson",
      title: "Technical Analyst at Intuit",
      image: "/testimonial2.jpg"
    },
    {
      id: 3,
      quote: "My order was successfully completed by them. Excellent attitude and clear lines of communication.",
      name: "Mr. Smith",
      title: "Founder of Cryptochain",
      image: "/testimonial3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl font-montserrat font-semibold text-primary italic">
            &quot;Our Clients&apos; Success Stories&quot;
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="bg-gray-100 rounded-2xl p-6 mb-6 relative shadow-md max-w-sm">
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-100"></div>
                </div>
                
                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex flex-col items-center">
                {/* Circular Profile Image */}
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="80px"
                    className="object-cover rounded-full border-4 border-white shadow-lg"
                    priority
                  />
                </div>

                {/* Name and Title */}
                <h3 className="text-lg font-bold text-primary mb-1 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;