import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';

export const Header: React.FC = () => {
  const {
    view,
    navigateTo,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    setIsMobileNavOpen,
    setIsWishlistOpen,
    setIsAccountOpen,
    wishlist
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-xs py-3.5'
          : 'bg-[#FAF9F6] border-b border-[#E5E0D8] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Left: Hamburger Menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2 -ml-2 text-[#1A1A1A] hover:text-[#555] transition-colors cursor-pointer"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-[#1A1A1A] hover:text-[#555] transition-colors ml-1 cursor-pointer sm:hidden"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[10px] tracking-[0.2em] uppercase font-medium text-[#1A1A1A]">
            
            {/* Shop with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <button
                onClick={() => navigateTo({ type: 'collection', category: 'all' })}
                className="flex items-center gap-1 hover:text-[#777] transition-colors py-2 cursor-pointer"
              >
                <span>Shop</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${shopMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Shop Dropdown Panel */}
              {shopMenuOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#FAF9F6] border border-[#E5E0D8] shadow-lg p-5 mt-1 rounded-xs z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[9px] tracking-[0.25em] text-[#888] uppercase font-semibold pb-2 mb-3 border-b border-[#E5E0D8]">
                    Collections
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        navigateTo({ type: 'collection', category: 'all' });
                        setShopMenuOpen(false);
                      }}
                      className="block w-full text-left text-[11px] uppercase tracking-wider text-[#1A1A1A] hover:text-[#777] transition-colors py-1 cursor-pointer font-semibold"
                    >
                      All Pieces (24)
                    </button>
                    {CATEGORIES_DATA.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          navigateTo({ type: 'collection', category: cat.id });
                          setShopMenuOpen(false);
                        }}
                        className="flex items-center justify-between w-full text-left text-[11px] uppercase tracking-wider text-[#444] hover:text-[#1A1A1A] hover:translate-x-1 transition-all py-1 cursor-pointer"
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-[#888] lowercase tracking-normal">
                          {cat.itemCount} items
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-[10px] text-[#888]">
                    <span className="font-serif italic text-xs text-[#1A1A1A]">Autumn / Winter 2026</span>
                    <button
                      onClick={() => {
                        navigateTo({ type: 'collection', category: 'all' });
                        setShopMenuOpen(false);
                      }}
                      className="text-[#1A1A1A] hover:underline uppercase text-[9px] tracking-[0.2em] font-semibold cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo({ type: 'collection', category: 'all' })}
              className="hover:text-[#777] transition-colors py-2 cursor-pointer"
            >
              New Arrivals
            </button>

            <button
              onClick={() => navigateTo({ type: 'collection', category: 'women' })}
              className="hover:text-[#777] transition-colors py-2 cursor-pointer"
            >
              Women
            </button>

            <button
              onClick={() => navigateTo({ type: 'collection', category: 'men' })}
              className="hover:text-[#777] transition-colors py-2 cursor-pointer"
            >
              Men
            </button>

            <button
              onClick={() => navigateTo({ type: 'about' })}
              className="hover:text-[#777] transition-colors py-2 cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Center: Brand Logo */}
          <div className="flex-1 lg:flex-initial text-center">
            <button
              onClick={() => navigateTo({ type: 'home' })}
              className="inline-block group cursor-pointer focus:outline-none"
              aria-label="VELORA Homepage"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.4em] uppercase font-light text-[#1A1A1A] group-hover:opacity-80 transition-opacity">
                VELORA
              </span>
            </button>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-[#1A1A1A]">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              className="p-2 hover:text-[#555] transition-colors rounded-full hover:bg-[#F0EEEA] cursor-pointer hidden sm:flex items-center gap-1.5"
            >
              <Search size={17} strokeWidth={1.5} />
              <span className="hidden xl:inline text-[10px] tracking-[0.2em] uppercase text-[#555] font-medium">
                Search
              </span>
            </button>

            {/* Account */}
            <button
              onClick={() => setIsAccountOpen(true)}
              aria-label="My Account"
              className="p-2 hover:text-[#555] transition-colors rounded-full hover:bg-[#F0EEEA] cursor-pointer hidden md:block"
            >
              <User size={17} strokeWidth={1.5} />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="p-2 hover:text-[#555] transition-colors rounded-full hover:bg-[#F0EEEA] relative cursor-pointer hidden sm:block"
            >
              <Heart size={17} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#1A1A1A] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              id="cart-drawer-trigger"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Bag (${cartCount} items)`}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-[#1A1A1A] text-[#FAF9F6] hover:bg-[#333] transition-all cursor-pointer shadow-xs"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              <span className="text-[10px] font-medium tracking-widest">
                {cartCount}
              </span>
              <span className="hidden lg:inline text-[9px] tracking-[0.2em] uppercase text-[#CCC] border-l border-[#444] pl-2">
                Bag
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
