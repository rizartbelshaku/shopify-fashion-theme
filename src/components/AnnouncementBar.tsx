import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, SlidersHorizontal, ChevronRight, Globe } from 'lucide-react';
import { Currency } from '../types';

export const AnnouncementBar: React.FC = () => {
  const { 
    themeSettings, 
    cartSubtotal, 
    freeShippingThreshold, 
    currency, 
    setCurrency, 
    formatPrice,
    setIsThemeEditorOpen,
    navigateTo 
  } = useShop();

  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    themeSettings.announcementText,
    'THE AUTUMN / WINTER 2026 EDIT IS NOW LIVE',
    'WORLDWIDE INSURED CARBON-NEUTRAL EXPRESS COURIER'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [messages.length]);

  if (!themeSettings.showAnnouncement) return null;

  const remainingForFreeShip = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <div className="bg-[#1A1A1A] text-[#FAF9F6] text-[10px] py-2.5 px-4 sm:px-6 border-b border-[#2A2A2A] relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Shipping Status / Benefit */}
        <div className="hidden lg:flex items-center gap-2 text-[#999] tracking-[0.2em] uppercase font-light">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FAF9F6] animate-pulse" />
          {cartSubtotal >= freeShippingThreshold ? (
            <span className="text-[#FAF9F6] font-medium">
              Complimentary express shipping unlocked
            </span>
          ) : (
            <span>
              Complimentary shipping over {formatPrice(freeShippingThreshold)} ({formatPrice(remainingForFreeShip)} away)
            </span>
          )}
        </div>

        {/* Center: Dynamic Announcement Message */}
        <div className="flex-1 text-center font-normal tracking-[0.25em] uppercase text-[#FAF9F6] px-2 flex items-center justify-center gap-2">
          <span className="transition-opacity duration-500">
            {messages[messageIndex]}
          </span>
          <button 
            onClick={() => navigateTo({ type: 'collection', category: 'all' })}
            className="hidden sm:inline-flex items-center gap-0.5 text-[#AAA] hover:text-white underline underline-offset-4 cursor-pointer text-[9px] tracking-[0.2em]"
          >
            Shop Now <ChevronRight size={11} />
          </button>
        </div>

        {/* Right: Currency Selector & Shopify Theme Editor trigger */}
        <div className="hidden md:flex items-center gap-4 text-[#999]">
          {/* Currency Switcher */}
          <div className="flex items-center gap-1 text-[10px] font-light tracking-[0.15em]">
            <Globe size={11} className="text-[#777]" />
            {(['EUR', 'USD', 'GBP'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                  currency === curr 
                    ? 'bg-[#333] text-white font-medium' 
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Shopify Theme Editor Pill Button */}
          <button
            onClick={() => setIsThemeEditorOpen(true)}
            className="flex items-center gap-1.5 bg-[#252525] hover:bg-[#333] text-[#CCC] hover:text-white px-2.5 py-1 rounded-xs text-[9px] tracking-[0.2em] uppercase font-medium border border-[#3A3A3A] transition-all cursor-pointer"
            title="Open Shopify Theme Settings Editor"
          >
            <SlidersHorizontal size={10} className="text-white" />
            <span>Theme Editor</span>
          </button>
        </div>

      </div>
    </div>
  );
};
