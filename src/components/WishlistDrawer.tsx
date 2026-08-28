import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistProducts,
    toggleWishlist,
    addToCart,
    formatPrice,
    navigateTo
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Slide-over Right Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-[#9C7B4F] fill-[#9C7B4F]" />
            <h2 className="font-serif text-2xl font-normal text-[#141414]">
              SAVED PIECES
            </h2>
            <span className="text-xs uppercase tracking-widest text-[#8C8375] font-medium">
              ({wishlistProducts.length})
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close Wishlist"
            className="p-1.5 text-[#5C564C] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE2] cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Wishlist Items List */}
        {wishlistProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#EFEAE2] flex items-center justify-center text-[#8C8375] mb-4">
              <Heart size={26} strokeWidth={1.3} />
            </div>
            <h3 className="font-serif text-2xl text-[#141414] mb-2 font-normal">
              Your wishlist is empty
            </h3>
            <p className="text-xs text-[#736C61] max-w-xs mb-6 font-light">
              Tap the heart icon on any product to save timeless pieces for later.
            </p>
            <button
              onClick={() => {
                setIsWishlistOpen(false);
                navigateTo({ type: 'collection', category: 'all' });
              }}
              className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer shadow"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#EAE4D9]">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                <div 
                  className="w-20 h-26 flex-shrink-0 bg-[#E2DBD1] overflow-hidden rounded-xs cursor-pointer"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateTo({ type: 'product', productId: product.id });
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigateTo({ type: 'product', productId: product.id });
                        }}
                        className="font-serif text-base font-medium text-[#141414] hover:text-[#8A6D44] transition-colors cursor-pointer leading-snug"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Remove from wishlist"
                        className="text-[#999083] hover:text-[#141414] transition-colors cursor-pointer p-0.5"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="text-xs font-semibold text-[#141414] mt-1">
                      {formatPrice(product.price)}
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        addToCart(product, product.colors[0]?.name, product.sizes[0], 1);
                        toggleWishlist(product.id);
                      }}
                      className="flex-1 py-2 bg-[#141414] text-white hover:bg-[#2C2B29] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag size={13} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
