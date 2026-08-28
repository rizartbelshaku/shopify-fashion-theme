import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Award, Sparkles, Globe, Shield } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div id="about-page" className="w-full bg-[#FAF8F5] pb-24">
      {/* Editorial Header */}
      <div className="relative py-20 sm:py-28 bg-[#23211E] text-[#FAF8F5] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="VELORA Atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4C9BC] block mb-3">
            The VELORA Maison
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
            PURSUING THE ENDURING SILHOUETTE
          </h1>
          <p className="text-base sm:text-lg text-[#E0D8CB] font-light max-w-2xl mx-auto leading-relaxed">
            Founded on the premise that true luxury is defined by deliberate restraint, rare fibers, and unhurried craftsmanship.
          </p>
        </div>
      </div>

      {/* Main Philosophy Story */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 space-y-20">
        
        {/* Section 1: The Principle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375] block">
              Chapter 01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal leading-snug">
              Less noise. More intention.
            </h2>
            <p className="text-sm text-[#5C564C] font-light leading-relaxed">
              In an era dominated by ephemeral micro-trends and synthetic disposability, VELORA was created to champion an alternative: clothing and accessories engineered to live in your wardrobe for decades.
            </p>
            <p className="text-sm text-[#5C564C] font-light leading-relaxed">
              Every seam, horn button, and wool ply is meticulously chosen to ensure the garment maintains its structural drape through countless wears.
            </p>
          </div>
          <div className="aspect-4/5 overflow-hidden rounded-xs bg-[#E0D8CB]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              alt="Tailoring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 2: European Provenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="aspect-4/5 overflow-hidden rounded-xs bg-[#E0D8CB] md:order-1">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
              alt="Atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 md:order-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375] block">
              Chapter 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal leading-snug">
              Artisanal European Heritage
            </h2>
            <p className="text-sm text-[#5C564C] font-light leading-relaxed">
              We partner exclusively with multi-generational mills in Biella, Como, and Tuscany. Our wools are certified Super 120s virgin fleece, our silks are woven in Como, and our leather goods are hand-stitched by Florentine masters.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#F2EDE4] rounded-xs">
                <span className="font-serif text-2xl text-[#141414] block">100%</span>
                <span className="text-xs text-[#736C61]">Traceable noble fibers</span>
              </div>
              <div className="p-4 bg-[#F2EDE4] rounded-xs">
                <span className="font-serif text-2xl text-[#141414] block">0%</span>
                <span className="text-xs text-[#736C61]">Petroleum synthetics</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="text-center pt-8 border-t border-[#E8E2D6]">
          <h3 className="font-serif text-3xl text-[#141414] mb-3">
            Experience the Collection
          </h3>
          <p className="text-xs sm:text-sm text-[#6E675B] mb-6">
            Discover pieces designed to elevate your everyday rituals.
          </p>
          <button
            onClick={() => navigateTo({ type: 'collection', category: 'all' })}
            className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer shadow"
          >
            Explore Wardrobe Essentials
          </button>
        </div>

      </div>
    </div>
  );
};
