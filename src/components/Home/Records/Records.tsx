'use client';

type Stats = {
    id: number;
    completedProjects : number;
  };

import React from "react";
import Image from "next/image";
import { useEffect, useState } from 'react';

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
          {/* Projects Completed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/record1.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                {stats.length > 0 ? stats[0]?.completedProjects  || 0 : 0}
              </h3>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Projects Completed
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Solutions that drive efficiency and impact.
              </p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/record1.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                {stats.length > 1 ? stats[1]?.completedProjects  || 200 : 200}+
              </h3>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Projects Completed
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Solutions that drive efficiency and impact.
              </p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/record1.svg"
                  alt="records"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                {stats.length > 2 ? stats[2]?.completedProjects  || 200 : 200}+
              </h3>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Projects Completed
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Solutions that drive efficiency and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;
