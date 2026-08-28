import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Heart, Plus, Minus, ArrowRight, ShieldCheck, Ruler } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    formatPrice,
    toggleWishlist,
    isWishlisted,
    openSizeGuide,
    navigateTo
  } = useShop();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColorIndex(0);
      setSelectedSize(quickViewProduct.sizes[0] || 'One Size');
      setQuantity(1);
      setActiveImageIndex(0);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);
  const activeColor = quickViewProduct.colors[selectedColorIndex] || quickViewProduct.colors[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, activeColor?.name, selectedSize, quantity);
    closeQuickView();
  };

  const handleGoToProduct = () => {
    closeQuickView();
    navigateTo({ type: 'product', productId: quickViewProduct.id });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      <div className="relative min-h-screen sm:min-h-0 sm:max-w-4xl sm:mx-auto sm:my-12 bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 z-10 sm:rounded-xs animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          aria-label="Close Quick View"
          className="absolute top-4 right-4 z-20 p-2 text-[#5C564C] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE2] cursor-pointer"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Gallery Left */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-3/4 bg-[#E0D8CB] overflow-hidden rounded-xs">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-3/4 bg-[#E0D8CB] overflow-hidden rounded-xs border transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#141414] ring-1 ring-[#141414]' : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-center" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Right */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8375]">
                  {quickViewProduct.collection}
                </span>
                {quickViewProduct.isNewArrival && (
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-[#141414] text-white px-2 py-0.5">
                    New
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl text-[#141414] font-normal leading-tight mb-2">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 text-[#8A6D44]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(quickViewProduct.rating) ? 'fill-current text-[#8A6D44]' : 'text-[#D4CCC0]'}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#736C61]">({quickViewProduct.reviewsCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mb-4">
                <span className="text-xl font-semibold text-[#141414]">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.compareAtPrice && quickViewProduct.compareAtPrice > quickViewProduct.price && (
                  <span className="text-sm text-[#8C8375] line-through">
                    {formatPrice(quickViewProduct.compareAtPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5C564C] font-light leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>

              {/* Color swatches */}
              <div className="mb-5">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#141414] mb-2 flex justify-between">
                  <span>Color: <strong className="font-normal text-[#5C564C]">{activeColor?.name}</strong></span>
                </div>
                <div className="flex gap-2">
                  {quickViewProduct.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColorIndex(idx);
                        if (color.imageIndex !== undefined) {
                          setActiveImageIndex(color.imageIndex);
                        }
                      }}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColorIndex === idx
                          ? 'border-[#141414] ring-2 ring-[#141414] ring-offset-2'
                          : 'border-[#D4CCC0] hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Picker */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#141414] mb-2">
                  <span>Select Size</span>
                  <button
                    onClick={() => openSizeGuide(quickViewProduct.category === 'men' ? 'men' : 'women')}
                    className="flex items-center gap-1 text-[11px] text-[#8C8375] hover:text-[#141414] underline font-normal lowercase tracking-normal cursor-pointer"
                  >
                    <Ruler size={12} /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]'
                          : 'bg-[#FAF8F5] text-[#3D3A35] border-[#D4CCC0] hover:border-[#141414]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-[#D4CCC0] bg-[#FAF8F5] rounded-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#141414]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md text-center"
                >
                  Add to Bag • {formatPrice(quickViewProduct.price * quantity)}
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  aria-label="Wishlist"
                  className={`p-3.5 border rounded-xs transition-colors cursor-pointer ${
                    wishlisted
                      ? 'bg-[#141414] text-white border-[#141414]'
                      : 'border-[#D4CCC0] text-[#141414] hover:bg-[#EFEAE2]'
                  }`}
                >
                  <Heart size={16} className={wishlisted ? 'fill-current' : ''} />
                </button>
              </div>

            </div>

            {/* View Full Product Link */}
            <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
              <span className="text-[11px] text-[#736C61]">SKU: {quickViewProduct.sku}</span>
              <button
                onClick={handleGoToProduct}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#141414] hover:text-[#9C7B4F] cursor-pointer"
              >
                <span>View Full Product Page</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
