import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '@/data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-64 sm:w-72 h-[420px] rounded-2xl overflow-hidden cursor-pointer select-none">
      {/* Background image */}
      <Image
        src={service.imageUrl}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 640px) 256px, 288px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        draggable={false}
      />

      {/* Dark gradient overlay — top heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
        {/* Top: title + description */}
        <div className="space-y-2">
          <h3 className="text-white font-bold text-xl font-sans leading-tight">
            {service.title}
          </h3>
          <p className="text-white/75 text-sm font-sans leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Learn More button */}
          <button
            className="mt-3 inline-flex items-center gap-1.5 bg-white text-[#141f19] text-xs font-semibold font-sans px-4 py-2 rounded-full
              hover:bg-[#52c48a] hover:text-white transition-all duration-300 group/btn"
          >
            Learn More
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
