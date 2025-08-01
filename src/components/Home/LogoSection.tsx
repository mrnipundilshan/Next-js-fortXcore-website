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
    <div className="h-[145px] relative px-4 md:px-28 pt-20 pb-16 bg-white flex items-center justify-center">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-rows-2 gap-x-[400px] items-center justify-items-center">
          <h1 className="text-primary font-bold italic text-center">Trusted by Leading Brands</h1>
          <div className="flex flex-wrap gap-6 mt-4 justify-center">
            {logos.map((logo) => (
              <div key={logo.id} className="relative w-[120px] h-[40px]">
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
  );
}
