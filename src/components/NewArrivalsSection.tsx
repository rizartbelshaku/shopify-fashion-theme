import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';

export const NewArrivalsSection: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | ProductCategory>('all');

  const newArrivals = PRODUCTS.filter(p => p.isNewArrival);

  const filteredProducts = activeTab === 'all' 
    ? newArrivals.slice(0, 8) 
    : newArrivals.filter(p => p.category === activeTab);

  return (
    <section 
      id="new-arrivals-section"
      className="border-b border-[#E5E0D8] bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888] font-medium block mb-2">
            Just Released
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-[#1A1A1A] mb-3">
            New Arrivals
          </h2>
          <p className="text-xs sm:text-sm text-[#666] font-light max-w-md mx-auto">
            Designed for the season ahead. Precise tailoring and refined silhouettes.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'All Pieces' },
              { id: 'women', label: 'Women' },
              { id: 'men', label: 'Men' },
              { id: 'accessories', label: 'Accessories' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer border ${
                  activeTab === tab.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FAF9F6] text-[#666] border-[#E5E0D8] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo({ type: 'collection', category: 'all' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all text-[10px] tracking-[0.2em] uppercase font-medium cursor-pointer"
          >
            <span>View All New Arrivals</span>
            <ArrowRight size={12} />
          </button>
        </div>

      </div>
    </section>
  );
};
