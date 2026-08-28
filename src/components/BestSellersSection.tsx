import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const BestSellersSection: React.FC = () => {
  const { navigateTo } = useShop();
  const scrollRef = useRef<HTMLDivElement>(null);

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 8);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="best-sellers-section"
      className="border-b border-[#E5E0D8] bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#E5E0D8]">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#888] font-medium block mb-2">
              Most Coveted
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-[#1A1A1A]">
              The VELORA Edit
            </h2>
          </div>

          {/* Carousel arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll products left"
              className="p-2 border border-[#E5E0D8] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer text-[#1A1A1A]"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll products right"
              className="p-2 border border-[#E5E0D8] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer text-[#1A1A1A]"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel for Mobile / Clean Scrollable Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {bestSellers.map((product) => (
            <div 
              key={product.id} 
              className="w-[240px] sm:w-[260px] md:w-[280px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Explore Link */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigateTo({ type: 'collection', category: 'all' })}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:text-[#777] transition-colors cursor-pointer group underline underline-offset-4"
          >
            <span>Shop Full Bestsellers Edit</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
