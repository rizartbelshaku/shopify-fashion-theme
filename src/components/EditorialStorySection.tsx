import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export const EditorialStorySection: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section 
      id="editorial-story"
      className="bg-[#FAF9F6] border-b border-[#E5E0D8]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Large Architectural Fashion Image with Border */}
        <div className="lg:col-span-6 lg:border-r border-[#E5E0D8] bg-[#F0EEEA] relative overflow-hidden min-h-[460px] lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
            alt="VELORA Editorial Philosophy"
            loading="lazy"
            className="w-full h-full object-cover object-center filter brightness-95 scale-100 hover:scale-103 transition-transform duration-700"
          />
          
          {/* Minimalist Floating Stamp */}
          <div className="absolute bottom-6 left-6 bg-[#1A1A1A] text-white p-5 max-w-[220px] border border-white/10">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] block mb-1 font-medium">
              Atelier Principle
            </span>
            <p className="font-serif text-base leading-snug italic font-light">
              “Crafted without haste.”
            </p>
          </div>
        </div>

        {/* Right Side: Philosophy Content */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-14 sm:py-20">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#777] font-medium mb-4">
            Our Philosophy
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#1A1A1A] mb-6 leading-[1.05]">
            LESS, BUT BETTER.
          </h2>

          <p className="text-sm sm:text-base text-[#444] font-light leading-relaxed mb-6">
            VELORA is built around thoughtful design, timeless silhouettes and exceptional materials. We create pieces that become an integral part of your everyday wardrobe.
          </p>

          <p className="text-xs sm:text-sm text-[#666] font-light leading-relaxed mb-8">
            We reject transient micro-trends in favor of disciplined European tailoring, certified Mongolian cashmere, and long-staple organic cottons that elevate daily rituals.
          </p>

          {/* Brand Pillars Split */}
          <div className="grid grid-cols-2 gap-6 pb-8 mb-8 border-b border-[#E5E0D8]">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] block mb-1">
                Artisanal Provenance
              </span>
              <span className="text-xs text-[#777] font-light block">
                Family-owned mills in Biella & Tuscany
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] block mb-1">
                Pure Fibers
              </span>
              <span className="text-xs text-[#777] font-light block">
                Zero toxic synthetics or fast blends
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => navigateTo({ type: 'about' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#333] transition-all text-[10px] tracking-[0.2em] uppercase font-medium cursor-pointer group"
            >
              <span>Discover VELORA</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
