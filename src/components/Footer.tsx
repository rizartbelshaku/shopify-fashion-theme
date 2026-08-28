import React from 'react';
import { useShop } from '../context/ShopContext';
import { Instagram, Facebook, Globe, ArrowUp } from 'lucide-react';
import { Currency } from '../types';

export const Footer: React.FC = () => {
  const { 
    navigateTo, 
    currency, 
    setCurrency, 
    openSizeGuide, 
    setIsAccountOpen 
  } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-[#FAF9F6] pt-16 pb-12 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#2A2A2A]">
          
          {/* Col 1: Brand Essence (Takes 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigateTo({ type: 'home' })}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-3xl tracking-[0.35em] font-light text-white block uppercase">
                VELORA
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#888] block mt-1">
                European Atelier & Lifestyle
              </span>
            </button>

            <p className="text-xs text-[#999] font-light max-w-sm leading-relaxed">
              Modern essentials for modern living. Refined tailoring, sustainable noble fibers, and enduring silhouettes crafted in European ateliers.
            </p>

            {/* Currency & Region Selector */}
            <div className="pt-3">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#777] block mb-2 font-medium">
                Country / Currency
              </span>
              <div className="flex items-center gap-1.5">
                {(['EUR', 'USD', 'GBP'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium transition-colors cursor-pointer border ${
                      currency === c
                        ? 'bg-[#FAF9F6] text-[#1A1A1A] border-white'
                        : 'bg-[#252525] text-[#999] border-[#333] hover:bg-[#333] hover:text-white'
                    }`}
                  >
                    {c} ({c === 'EUR' ? '€ Europe' : c === 'USD' ? '$ United States' : '£ United Kingdom'})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: SHOP */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#999] font-light">
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'women' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'men' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Men
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'accessories' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Accessories & Leather
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'essentials' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Permanent Essentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'all' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'all' })}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#DDD]"
                >
                  The VELORA Edit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: HELP */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium text-white mb-4">
              Help
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#999] font-light">
              <li>
                <button
                  onClick={() => navigateTo({ type: 'faq' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'faq' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Shipping & Customs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'faq' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  30-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  onClick={() => openSizeGuide('women')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tailoring Size Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAccountOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Order Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: ABOUT */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium text-white mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#999] font-light">
              <li>
                <button
                  onClick={() => navigateTo({ type: 'about' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'about' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Italian & Mongolian Mills
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'about' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Circularity & Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'journal' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'about' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Careers in Milan & Paris
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal, Socials, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#777]">
          
          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[10px] tracking-wider uppercase font-light">
            <button 
              onClick={() => navigateTo({ type: 'faq' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigateTo({ type: 'faq' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => navigateTo({ type: 'faq' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => navigateTo({ type: 'faq' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Shipping Policy
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#999]">
            <a 
              href="#instagram" 
              onClick={(e) => e.preventDefault()}
              className="p-1.5 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} strokeWidth={1.5} />
            </a>
            <a 
              href="#facebook" 
              onClick={(e) => e.preventDefault()}
              className="p-1.5 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={15} strokeWidth={1.5} />
            </a>
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#AAA] hover:text-white transition-colors ml-4 cursor-pointer pl-4 border-l border-[#333]"
            >
              <span>Top</span>
              <ArrowUp size={11} />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 text-center text-[10px] text-[#555] tracking-wider font-light">
          © 2026 VELORA Inc. Designed & engineered for modern European luxury commerce. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
