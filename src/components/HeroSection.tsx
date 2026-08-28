import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigateTo, themeSettings } = useShop();

  return (
    <section 
      id="hero-section"
      className="relative w-full border-b border-[#E5E0D8] bg-[#FAF9F6] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] lg:min-h-[85vh]">
        
        {/* Left Content Area */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:border-r border-[#E5E0D8]">
          
          {/* Eyebrow */}
          <div className="text-[10px] uppercase tracking-[0.4em] mb-6 text-[#777] font-medium">
            Autumn / Winter 2026
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 uppercase tracking-tighter text-[#1A1A1A] font-light">
            {themeSettings.heroHeadline || 'THE ART OF EVERYDAY'}
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#555] max-w-md mb-10 leading-relaxed font-light">
            {themeSettings.heroSubheadline || 'Refined essentials designed for modern living. Engineered with disciplined tailoring and certified noble materials.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigateTo({ type: 'collection', category: 'women' })}
              className="bg-[#1A1A1A] text-white text-[10px] uppercase tracking-widest px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#333] transition duration-300 text-center cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Shop Women</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => navigateTo({ type: 'collection', category: 'men' })}
              className="border border-[#1A1A1A] text-[#1A1A1A] text-[10px] uppercase tracking-widest px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#1A1A1A] hover:text-white transition duration-300 text-center cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Shop Men</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Right Editorial Hero Image Area */}
        <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full bg-[#F0EEEA] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
            alt="VELORA New Season Editorial"
            className="w-full h-full object-cover object-[center_28%] scale-100 filter brightness-95"
          />
          
          {/* Subtle Bottom Architectural Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white/90 z-10">
            <div className="bg-[#1A1A1A]/80 backdrop-blur-xs p-4 border border-white/10">
              <span className="text-[9px] uppercase tracking-[0.3em] block text-[#CCC] mb-1 font-medium">
                Campaign No. 04
              </span>
              <span className="font-serif text-sm tracking-wider uppercase font-light text-white block">
                Pure Cashmere & Italian Wool
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-[0.2em] bg-[#1A1A1A]/60 px-3 py-2 backdrop-blur-xs">
              <span>Scroll to explore</span>
              <ArrowDown size={12} className="animate-bounce" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
