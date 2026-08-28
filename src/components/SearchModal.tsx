import React, { useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    searchResults,
    navigateTo,
    formatPrice
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = [
    'Blazer',
    'Trousers',
    'Dress',
    'Leather Bag',
    'Cashmere',
    'Overcoat',
    'Essentials'
  ];

  const handleProductSelect = (productId: string) => {
    setIsSearchOpen(false);
    navigateTo({ type: 'product', productId });
  };

  const handleCategorySelect = (category: string) => {
    setIsSearchOpen(false);
    navigateTo({ type: 'collection', category });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Container */}
      <div className="relative min-h-screen sm:min-h-0 sm:max-w-3xl sm:mx-auto sm:my-16 bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 z-10 sm:rounded-xs animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with Search Input */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E0D8CB]">
          <div className="flex items-center gap-3 flex-1">
            <Search size={22} className="text-[#8C8375]" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH VELORA..."
              className="w-full bg-transparent text-lg sm:text-2xl font-serif font-light text-[#141414] placeholder-[#A69E90] focus:outline-none tracking-wide"
            />
          </div>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            aria-label="Close search"
            className="p-2 text-[#6E675B] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE1] cursor-pointer ml-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Popular Searches when query is empty */}
        {searchQuery.trim() === '' ? (
          <div className="pt-6 space-y-6">
            <div>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C8375] block mb-3">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3.5 py-1.5 bg-[#EFEAE2] hover:bg-[#141414] hover:text-white transition-colors text-xs text-[#3D3A35] rounded-full uppercase tracking-wider font-medium cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Explore Collections shortcuts */}
            <div className="pt-4 border-t border-[#EAE4D8]">
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C8375] block mb-3">
                Browse Collections
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CATEGORIES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="p-3 bg-[#F2EDE4] hover:bg-[#E8E1D5] text-left transition-colors group rounded-xs cursor-pointer"
                  >
                    <span className="font-serif text-base text-[#141414] block group-hover:text-[#8A6D44]">
                      {cat.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8375]">
                      {cat.itemCount} pieces
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Live Results */
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#8C8375] font-medium">
                {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} found for "{searchQuery}"
              </span>
              {searchResults.length > 0 && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#8C8375] hover:text-[#141414] underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {searchResults.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-[#141414] mb-2 font-normal">
                  No products found
                </p>
                <p className="text-xs text-[#736C61] max-w-sm mx-auto mb-6">
                  We couldn't find any products matching "{searchQuery}". Try searching for categories like "blazer", "trousers", or "wool".
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => handleCategorySelect('all')}
                    className="px-6 py-2.5 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#2C2B29] cursor-pointer"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-1">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    className="flex gap-3.5 p-2.5 bg-[#F5F1EB] hover:bg-[#EDE6DC] transition-colors rounded-xs cursor-pointer group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover object-center bg-[#E0D8CB] flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[10px] tracking-widest uppercase text-[#8C8375] font-semibold">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-base text-[#141414] group-hover:text-[#8A6D44] transition-colors leading-tight">
                        {product.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#141414] mt-1">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <div className="flex items-center text-[#A69E90] group-hover:text-[#141414] pr-2">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
