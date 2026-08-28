import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';

export const PromotionalBanner: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section 
      id="promotional-banner"
      className="relative w-full min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#1A1A1A] border-y border-[#E5E0D8]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
          alt="VELORA Timeless Design"
          className="w-full h-full object-cover object-[center_35%] filter brightness-70 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-[#FAF9F6]">
        <span className="text-[10px] tracking-[0.4em] uppercase font-medium text-[#CCC] block mb-4">
          The Permanent Wardrobe
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white mb-4 leading-tight">
          TIMELESS BY DESIGN
        </h2>
        <p className="text-xs sm:text-sm text-[#DDD] font-light max-w-md mx-auto mb-8 leading-relaxed">
          Pieces created to stay beyond the season. Uncompromised textiles engineered for enduring longevity.
        </p>
        <button
          onClick={() => navigateTo({ type: 'collection', category: 'essentials' })}
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] hover:bg-white transition-all text-[10px] tracking-[0.2em] uppercase font-medium cursor-pointer group shadow-sm"
        >
          <span>Explore Essentials</span>
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
