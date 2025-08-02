'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Logo = {
  id: number;
  url: string;
  alt: string;
};

export default function LogoSection() {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch('/api/logo'); // no CORS issue
        const data = await res.json();
        setLogos(data.docs || []);
      } catch (error) {
        console.error('Failed to fetch logos:', error);
      }
    }

    fetchLogos();
  }, []);

  return (
    <div className="relative px-4 md:px-28 py-4 bg-white flex items-start justify-center">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-primary font-bold italic text-center m-0 p-0">
            Trusted by Leading Brands
          </h1>
          <div className="relative w-full overflow-hidden mt-4">
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo) => (
                <div
                  key={`first-${logo.id}`}
                  className="relative w-[150px] h-[60px] bg-white mx-3 flex-shrink-0"
                >
                  <Image
                    src={`https://next-js-fort-xcore-admin-panel-payload-5h17w5u29.vercel.app${logo.url}`}
                    alt={logo.alt || 'Logo'}
                    fill
                    sizes="(min-width: 1024px) 200px, 120px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo) => (
                <div
                  key={`second-${logo.id}`}
                  className="relative w-[150px] h-[60px] bg-white mx-3 flex-shrink-0"
                >
                  <Image
                    src={`https://next-js-fort-xcore-admin-panel-payload-5h17w5u29.vercel.app${logo.url}`}
                    alt={logo.alt || 'Logo'}
                    fill
                    sizes="(min-width: 1024px) 200px, 120px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
