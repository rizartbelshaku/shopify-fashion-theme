import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES_DATA } from '../data/products';
import { ArrowRight } from 'lucide-react';

export const FeaturedCategories: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section 
      id="featured-categories"
      className="border-b border-[#E5E0D8] bg-[#FAF9F6]"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-b border-[#E5E0D8] flex flex-col sm:flex-row sm:items-end justify-between">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888] font-medium block mb-2">
            Curated Lines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#1A1A1A]">
            Shop the Collection
          </h2>
        </div>
        <button
          onClick={() => navigateTo({ type: 'collection', category: 'all' })}
          className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-[#1A1A1A] hover:text-[#777] transition-colors cursor-pointer group underline underline-offset-4"
        >
          <span>View All Series</span>
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 4 Architectural Category Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]">
        {CATEGORIES_DATA.map((cat, idx) => (
          <div
            key={cat.id}
            id={`category-card-${cat.id}`}
            onClick={() => navigateTo({ type: 'collection', category: cat.id })}
            className="p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#F5F3EE] transition-colors duration-300"
          >
            {/* Image Container with Sleek Framing */}
            <div className="aspect-3/4 mb-6 overflow-hidden bg-[#F0EEEA] rounded-xs relative">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.96]"
              />
              <div className="absolute top-3 left-3 bg-[#FAF9F6]/90 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#1A1A1A] font-medium">
                0{idx + 1}
              </div>
            </div>

            {/* Category Meta & Title */}
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#888] mb-1 font-medium">
                {cat.tagline}
              </div>
              <h3 className="text-sm uppercase tracking-wider font-medium text-[#1A1A1A] mb-3">
                {cat.name}
              </h3>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest underline underline-offset-4 text-[#1A1A1A] group-hover:text-[#777] transition-colors font-medium">
                <span>Explore Series</span>
                <ArrowRight size={11} className="transition-transform group-hover:translate-x-1 duration-300" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
