'use client';

type Stats = {
    id: number;
    completedProjects : number;
  };

import React from "react";
import Image from "next/image";
import { useEffect, useState } from 'react';

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (end > 0) {
      setCount(0);
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return count;
};

const Records = () => {

    const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats'); // no CORS issue
        const data = await res.json();
        // Sort the stats by id in ascending order
        const sortedStats = (data.docs || []).sort((a: Stats, b: Stats) => a.id - b.id);
        setStats(sortedStats);
      } catch (error) {
        console.error('Failed to fetch logos:', error);
      }
    }

    fetchStats();
  }, []);

  // Animated counts for each stat
  const animatedProjects = useCountUp(stats.length > 0 ? stats[0]?.completedProjects || 0 : 0);
  const animatedClients = useCountUp(stats.length > 1 ? stats[1]?.completedProjects || 0 : 0);
  const animatedYears = useCountUp(stats.length > 2 ? stats[2]?.completedProjects || 0 : 0);

  return (
    <section className="py-8">
      {/* Light gray background only for inner content */}
      <div className="bg-[#F4F4F7] max-w-420 mx-auto px-4 md:px-8 lg:px-12 rounded-3xl shadow-md pb-10">
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-black mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg md:text-xl font-montserrat font-semibold text-primary italic">
            &quot;Our Proven Track Record&quot;
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Projects Completed - Mobile: text right, image left | Desktop: centered */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="flex flex-row md:flex-col items-center md:text-center w-full">
              <div className="relative w-32 h-32 md:w-42 md:h-42 mx-auto md:mb-4 order-1 md:order-1">
                <Image
                  src="/record1.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="text-left md:text-center ml-4 md:ml-0 mt-0 md:mt-0 order-2 md:order-2">
                <h3 className="text-4xl md:text-6xl font-montserrat font-extrabold text-gray-900 mb-3">
                  {animatedProjects}+
                </h3>
                <h4 className="text-lg md:text-xl font-montserrat font-bold text-gray-800 mb-3">
                  Projects Completed
                </h4>
                <p className="text-black text-sm font-montserrat font-light md:text-base">
                  Solutions that drive efficiency and impact.
                </p>
              </div>
            </div>
          </div>

          {/* Happy Clients - Mobile: text left, image right | Desktop: centered */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="flex flex-row md:flex-col items-center md:text-center w-full">
              <div className="text-left md:text-center mr-4 md:mr-0 mt-0 md:mt-0 order-1 md:order-2">
                <h3 className="text-4xl md:text-6xl font-montserrat font-extrabold text-gray-900 mb-3">
                  {animatedClients}+
                </h3>
                <h4 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 mb-3">
                Happy Clients
                </h4>
                <p className="text-black text-sm font-montserrat font-light md:text-base">
                Trusted by 150+ businesses for top-tier IT solutions.
                </p>
              </div>

              <div className="relative w-32 h-32 md:w-42 md:h-42 mx-auto md:mb-4 order-2 md:order-1">
                <Image
                  src="/record2.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Years of Excellence - Mobile: text left, image right | Desktop: centered */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="flex flex-row md:flex-col items-center md:text-center w-full">
              <div className="text-left md:text-center mr-4 md:mr-0 mt-0 md:mt-0 order-1 md:order-2">
                <h3 className="text-4xl md:text-6xl font-montserrat font-extrabold text-gray-900 mb-3">
                  {animatedYears}+
                </h3>
                <h4 className="text-lg md:text-xl font-montserrat font-bold text-gray-800 mb-3">
                Years of Excellence
                </h4>
                <p className="text-black text-sm font-montserrat font-light md:text-base">
                A decade of expertise in delivering cutting-edge technology.
                </p>
              </div>

              <div className="relative w-32 h-32 md:w-42 md:h-42 mx-auto md:mb-4 order-2 md:order-1">
                <Image
                  src="/record3.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;
