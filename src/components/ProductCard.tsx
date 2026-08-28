import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Plus, Star, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showCategory = false }) => {
  const {
    navigateTo,
    formatPrice,
    addToCart,
    toggleWishlist,
    isWishlisted,
    openQuickView,
    themeSettings
  } = useShop();

  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState<string | null>(null);
  const [showSizePicker, setShowSizePicker] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const activeColor = product.colors[activeColorIndex] || product.colors[0];
  const primaryImage = product.images[activeColor?.imageIndex ?? 0] || product.images[0];
  const hoverImage = product.images[1] || product.images[0];

  const handleCardClick = () => {
    navigateTo({ type: 'product', productId: product.id });
  };

  const handleQuickAdd = (e: React.MouseEvent, size?: string) => {
    e.stopPropagation();
    const sizeToUse = size || selectedQuickSize || product.sizes[0] || 'One Size';
    addToCart(product, activeColor?.name, sizeToUse, 1);
    setShowSizePicker(false);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-[#FAF9F6] p-3 sm:p-4 border border-transparent hover:border-[#E5E0D8] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizePicker(false);
      }}
    >
      {/* Image Container */}
      <div 
        className="relative aspect-3/4 w-full overflow-hidden bg-[#F0EEEA] cursor-pointer rounded-xs"
        onClick={handleCardClick}
      >
        {/* Main Image & Hover Swap */}
        <img
          src={isHovered ? hoverImage : primaryImage}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges (New / Best Seller / Sale) */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isNewArrival && (
            <span className="bg-[#1A1A1A] text-[#FAF9F6] text-[9px] tracking-[0.2em] uppercase font-medium px-2 py-0.5">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNewArrival && (
            <span className="bg-[#FAF9F6] text-[#1A1A1A] text-[9px] tracking-[0.2em] uppercase font-medium px-2 py-0.5 border border-[#E5E0D8]">
              The Edit
            </span>
          )}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="bg-[#1A1A1A] text-white text-[9px] tracking-[0.2em] uppercase font-medium px-2 py-0.5">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          className={`absolute top-2.5 right-2.5 p-1.5 backdrop-blur-xs transition-all duration-200 z-10 cursor-pointer ${
            wishlisted
              ? 'bg-[#1A1A1A] text-white'
              : 'bg-[#FAF9F6]/90 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
          }`}
        >
          <Heart
            size={14}
            className={wishlisted ? 'fill-current' : ''}
            strokeWidth={1.5}
          />
        </button>

        {/* Quick View Button (Desktop Hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          aria-label="Quick View Details"
          className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center gap-1 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-3 py-1.5 text-[9px] font-medium tracking-[0.2em] uppercase shadow-xs transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer border border-[#E5E0D8]"
        >
          <Eye size={12} />
          <span>Quick View</span>
        </button>

        {/* Quick Add Overlay Bar */}
        {themeSettings.showQuickAdd && (
          <div className="absolute inset-x-0 bottom-0 p-2 transition-all duration-300">
            {showSizePicker ? (
              <div 
                className="bg-[#1A1A1A] text-white p-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-[9px] uppercase tracking-widest text-[#AAA] mb-1.5 text-center font-medium">
                  Select Size:
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={(e) => handleQuickAdd(e, sz)}
                      className="px-2 py-0.5 text-[10px] font-medium bg-[#2A2A2A] hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (product.sizes.length > 1) {
                    setShowSizePicker(true);
                  } else {
                    handleQuickAdd(e, product.sizes[0]);
                  }
                }}
                className="w-full bg-[#1A1A1A] hover:bg-[#333] text-[#FAF9F6] py-2 px-2 text-[9px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer"
              >
                <Plus size={12} strokeWidth={2} />
                <span>Quick Add</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="pt-3 pb-1 flex flex-col flex-1">
        
        {/* Category / Subtitle */}
        {showCategory && (
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#888] font-medium mb-0.5">
            {product.category}
          </span>
        )}

        {/* Rating Stars & Count */}
        {themeSettings.showRatingStars && (
          <div className="flex items-center gap-1 mb-1 text-[#1A1A1A]">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'fill-current text-[#1A1A1A]' : 'text-[#D8D5CE]'}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#777] font-sans font-normal">
              ({product.reviewsCount})
            </span>
          </div>
        )}

        {/* Product Title */}
        <h3
          onClick={handleCardClick}
          className="text-xs uppercase tracking-wider font-medium text-[#1A1A1A] hover:text-[#666] transition-colors line-clamp-1 cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Price & Compare Price */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xs font-light text-[#1A1A1A] tracking-wider">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="text-[11px] text-[#888] line-through font-light">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors.length > 1 && (
          <div className="mt-2 flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColorIndex(idx);
                }}
                title={color.name}
                className={`w-3 h-3 rounded-full border transition-all cursor-pointer ${
                  activeColorIndex === idx
                    ? 'ring-1 ring-[#1A1A1A] ring-offset-1 border-[#1A1A1A]'
                    : 'border-[#CCC] hover:scale-110'
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
            <span className="text-[9px] text-[#888] ml-1 uppercase tracking-wider hidden sm:inline">
              {product.colors.length} shades
            </span>
          </div>
        )}

      </div>
    </div>
  );
};
