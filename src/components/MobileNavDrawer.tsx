import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, ChevronRight, Heart, User, Search, Globe, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { Currency } from '../types';

export const MobileNavDrawer: React.FC = () => {
  const {
    isMobileNavOpen,
    setIsMobileNavOpen,
    navigateTo,
    currency,
    setCurrency,
    wishlist,
    setIsWishlistOpen,
    setIsAccountOpen,
    setIsSearchOpen
  } = useShop();

  if (!isMobileNavOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="font-serif text-xl tracking-[0.2em] font-medium text-[#141414]">
            VELORA
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="Close Menu"
            className="p-1.5 text-[#5C564C] hover:text-[#141414] transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search Bar in Drawer */}
        <div className="p-4 border-b border-[#EFEAE2]">
          <button
            onClick={() => {
              setIsMobileNavOpen(false);
              setIsSearchOpen(true);
            }}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 bg-[#EFEAE1] text-[#787063] rounded text-xs tracking-wider uppercase font-medium cursor-pointer"
          >
            <Search size={15} />
            <span>Search products, collections...</span>
          </button>
        </div>

        {/* Main Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold mb-3">
              Collections
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  navigateTo({ type: 'collection', category: 'all' });
                  setIsMobileNavOpen(false);
                }}
                className="flex items-center justify-between w-full py-2.5 text-sm uppercase tracking-wider font-semibold text-[#141414] hover:text-[#9C7B4F] text-left cursor-pointer"
              >
                <span>All Collections</span>
                <ChevronRight size={16} className="text-[#A89F91]" />
              </button>

              {CATEGORIES_DATA.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    navigateTo({ type: 'collection', category: cat.id });
                    setIsMobileNavOpen(false);
                  }}
                  className="flex items-center justify-between w-full py-2.5 text-sm uppercase tracking-wider text-[#3D3A35] hover:text-[#141414] text-left cursor-pointer border-t border-[#F2EDE5]"
                >
                  <div className="flex items-center gap-2">
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-[#9A9183] lowercase font-sans">
                      ({cat.itemCount})
                    </span>
                  </div>
                  <ChevronRight size={15} className="text-[#B5AC9E]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#E8E2D8]">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold mb-3">
              Discover
            </div>
            <div className="space-y-1.5 text-xs uppercase tracking-wider">
              <button
                onClick={() => {
                  navigateTo({ type: 'about' });
                  setIsMobileNavOpen(false);
                }}
                className="block w-full text-left py-2 text-[#3D3A35] hover:text-[#141414] cursor-pointer"
              >
                Our Philosophy & Story
              </button>
              <button
                onClick={() => {
                  navigateTo({ type: 'faq' });
                  setIsMobileNavOpen(false);
                }}
                className="block w-full text-left py-2 text-[#3D3A35] hover:text-[#141414] cursor-pointer"
              >
                Shipping, Returns & Care
              </button>
            </div>
          </div>

          {/* Quick Account & Wishlist */}
          <div className="pt-3 border-t border-[#E8E2D8] space-y-2">
            <button
              onClick={() => {
                setIsMobileNavOpen(false);
                setIsWishlistOpen(true);
              }}
              className="flex items-center justify-between w-full py-2 text-xs uppercase tracking-wider text-[#3D3A35] cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Heart size={16} strokeWidth={1.5} />
                <span>Wishlist</span>
              </div>
              {wishlist.length > 0 && (
                <span className="bg-[#9C7B4F] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setIsMobileNavOpen(false);
                setIsAccountOpen(true);
              }}
              className="flex items-center gap-2.5 w-full py-2 text-xs uppercase tracking-wider text-[#3D3A35] cursor-pointer"
            >
              <User size={16} strokeWidth={1.5} />
              <span>My Account</span>
            </button>
          </div>

        </div>

        {/* Footer: Currency Selector */}
        <div className="p-5 bg-[#F2ECE3] border-t border-[#E2DBD0]">
          <div className="flex items-center justify-between text-xs text-[#6B6356] mb-2 font-medium">
            <span className="flex items-center gap-1.5">
              <Globe size={13} /> Region / Currency
            </span>
            <div className="flex gap-1">
              {(['EUR', 'USD', 'GBP'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                    currency === c ? 'bg-[#141414] text-white' : 'bg-[#E3DCDB] text-[#4A453E]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#8C8375] tracking-wider text-center mt-3">
            © 2026 VELORA Studio European.
          </div>
        </div>

      </div>
    </div>
  );
};
