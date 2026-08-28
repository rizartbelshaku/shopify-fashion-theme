import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, 
  Heart, 
  Plus, 
  Minus, 
  Ruler, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Share2,
  Check,
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface ProductDetailViewProps {
  productId: string;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ productId }) => {
  const { 
    navigateTo, 
    addToCart, 
    formatPrice, 
    toggleWishlist, 
    isWishlisted, 
    openSizeGuide,
    freeShippingThreshold,
    addToast
  } = useShop();

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  // Component States
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'One Size');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  
  // Accordions State
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    description: true,
    materials: false,
    shipping: false,
    fit: false
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedColorIndex(0);
    setSelectedSize(product.sizes[0] || 'One Size');
    setQuantity(1);
    setActiveImageIndex(0);
  }, [productId]);

  const wishlisted = isWishlisted(product.id);
  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddToCart = () => {
    addToCart(product, activeColor?.name, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, activeColor?.name, selectedSize, quantity);
    navigateTo({ type: 'checkout' });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Link Copied', 'Product link copied to clipboard', 'info');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div id="product-detail-page" className="w-full bg-[#FAF8F5] pb-24">
      
      {/* 1. Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-[#E8E2D6]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C8375]">
          <button onClick={() => navigateTo({ type: 'home' })} className="hover:text-[#141414] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <button 
            onClick={() => navigateTo({ type: 'collection', category: product.category })} 
            className="hover:text-[#141414] cursor-pointer capitalize"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-[#141414] font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* 2. Main Product Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* LEFT: Product Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails list */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar max-h-[620px] flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 sm:w-20 aspect-3/4 bg-[#E0D8CB] overflow-hidden rounded-xs border-2 transition-all cursor-pointer flex-shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-[#141414] ring-1 ring-[#141414]'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-center" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="relative flex-1 aspect-3/4 bg-[#E0D8CB] overflow-hidden rounded-xs group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Tag / Badge */}
              {product.isNewArrival && (
                <span className="absolute top-4 left-4 bg-[#141414] text-[#FAF8F5] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                  New Arrival
                </span>
              )}
              {product.isBestSeller && !product.isNewArrival && (
                <span className="absolute top-4 left-4 bg-[#9C7B4F] text-black text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                  The Edit
                </span>
              )}

              {/* Zoom trigger */}
              <button
                onClick={() => setIsZoomOpen(true)}
                aria-label="Zoom image"
                className="absolute bottom-4 right-4 p-2.5 bg-white/80 hover:bg-white text-[#141414] rounded-full shadow-md backdrop-blur-xs transition-colors cursor-pointer"
              >
                <Maximize2 size={16} />
              </button>
            </div>

          </div>

          {/* RIGHT: Product Information (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              
              {/* Collection tagline & share */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375]">
                  {product.collection}
                </span>
                <button
                  onClick={handleShare}
                  aria-label="Share product"
                  className="text-[#8C8375] hover:text-[#141414] transition-colors p-1 cursor-pointer"
                >
                  <Share2 size={16} />
                </button>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414] leading-[1.15] mb-3">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#8A6D44]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'fill-current text-[#8A6D44]' : 'text-[#D8D0C3]'}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#736C61] font-medium">
                  {product.rating} ({product.reviewsCount} verified atelier reviews)
                </span>
              </div>

              {/* Price & Compare */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#E8E2D6]">
                <span className="text-2xl sm:text-3xl font-semibold text-[#141414]">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="text-base sm:text-lg text-[#8C8375] line-through font-light">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                <span className="text-[11px] text-[#7A7367] tracking-wider uppercase ml-1">
                  Tax included.
                </span>
              </div>

              {/* Color Swatches */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#141414] mb-2.5">
                  <span>Color: <strong className="font-normal text-[#5C564C]">{activeColor?.name}</strong></span>
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColorIndex(idx);
                        if (color.imageIndex !== undefined) {
                          setActiveImageIndex(color.imageIndex);
                        }
                      }}
                      className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
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

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#141414] mb-2.5">
                  <span>Size: <strong className="font-normal text-[#5C564C]">{selectedSize}</strong></span>
                  <button
                    onClick={() => openSizeGuide(product.category === 'men' ? 'men' : 'women')}
                    className="flex items-center gap-1 text-[11px] text-[#8C8375] hover:text-[#141414] underline font-normal lowercase tracking-normal cursor-pointer"
                  >
                    <Ruler size={12} /> Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 text-xs font-semibold uppercase tracking-wider border rounded-xs transition-all cursor-pointer text-center ${
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

              {/* Quantity Stepper & Add to Bag Actions */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#D4CCC0] bg-[#FAF8F5] rounded-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                      className="p-3 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 text-xs font-semibold text-[#141414]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="p-3 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add to Bag CTA */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md text-center rounded-xs"
                  >
                    Add to Bag • {formatPrice(product.price * quantity)}
                  </button>

                  {/* Wishlist Heart */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Wishlist"
                    className={`p-3.5 border rounded-xs transition-colors cursor-pointer ${
                      wishlisted
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'border-[#D4CCC0] text-[#141414] hover:bg-[#EFEAE2]'
                    }`}
                  >
                    <Heart size={18} className={wishlisted ? 'fill-current' : ''} />
                  </button>
                </div>

                {/* Buy It Now Secondary CTA */}
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 bg-[#FAF8F5] text-[#141414] border border-[#141414] hover:bg-[#141414] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer rounded-xs"
                >
                  Buy It Now
                </button>
              </div>

              {/* Complimentary shipping reassurance */}
              <div className="bg-[#F2EDE4] p-3.5 rounded-xs text-xs text-[#524C42] flex items-center gap-2 mb-8">
                <Truck size={16} className="text-[#8C8375] flex-shrink-0" />
                <span>
                  Complimentary express shipping on all orders over {formatPrice(freeShippingThreshold)}.
                </span>
              </div>

              {/* 4 Accordions */}
              <div className="border-t border-[#E8E2D6] divide-y divide-[#E8E2D6]">
                
                {/* 1. Description & Tailoring */}
                <div>
                  <button
                    onClick={() => toggleAccordion('description')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-[#141414] cursor-pointer"
                  >
                    <span>Description & Tailoring</span>
                    {openAccordions.description ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {openAccordions.description && (
                    <div className="pb-4 text-xs text-[#5C564C] font-light leading-relaxed space-y-2">
                      <p>{product.description}</p>
                      <ul className="list-disc pl-4 space-y-1 text-[#6E675B] pt-2">
                        {product.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 2. Materials & Sustainability */}
                <div>
                  <button
                    onClick={() => toggleAccordion('materials')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-[#141414] cursor-pointer"
                  >
                    <span>Materials & Sustainability</span>
                    {openAccordions.materials ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {openAccordions.materials && (
                    <div className="pb-4 text-xs text-[#5C564C] font-light leading-relaxed space-y-2">
                      <p><strong>Composition:</strong> {product.materials}</p>
                      <p>Sourced from certified ethical European partner mills in Tuscany and Piedmont. Zero harsh toxic bleaches or harmful micro-plastics.</p>
                      <p><strong>Care:</strong> Dry clean only with eco-solvents, or gentle cold hand wash.</p>
                    </div>
                  )}
                </div>

                {/* 3. Shipping & Returns */}
                <div>
                  <button
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-[#141414] cursor-pointer"
                  >
                    <span>Shipping, Customs & Returns</span>
                    {openAccordions.shipping ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {openAccordions.shipping && (
                    <div className="pb-4 text-xs text-[#5C564C] font-light leading-relaxed space-y-2">
                      <p>• Express European dispatch within 24-48 business hours.</p>
                      <p>• Complimentary express DHL on orders exceeding {formatPrice(freeShippingThreshold)}.</p>
                      <p>• 30-day complimentary returns and size exchanges.</p>
                    </div>
                  )}
                </div>

                {/* 4. Fit & Dimensions */}
                <div>
                  <button
                    onClick={() => toggleAccordion('fit')}
                    className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-wider font-semibold text-[#141414] cursor-pointer"
                  >
                    <span>Garment Fit & Model Stats</span>
                    {openAccordions.fit ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {openAccordions.fit && (
                    <div className="pb-4 text-xs text-[#5C564C] font-light leading-relaxed space-y-2">
                      <p>• Cut for a tailored, elegant European drape.</p>
                      <p>• Female model is 178cm / 5'10" and wears size S.</p>
                      <p>• Male model is 187cm / 6'2" and wears size L.</p>
                      <p>• If between sizes, choose your larger size for tailored outerwear.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. YOU MAY ALSO LIKE (Related Products) */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 border-t border-[#E8E2D6] mt-20">
          <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#E8E2D6]">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#8C8375] font-semibold block mb-1.5">
                Complete The Wardrobe
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#141414]">
                You May Also Like
              </h2>
            </div>
            <button
              onClick={() => navigateTo({ type: 'collection', category: product.category })}
              className="text-xs uppercase tracking-wider font-semibold text-[#141414] hover:text-[#9C7B4F] flex items-center gap-1 cursor-pointer"
            >
              <span>View Category</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}

      {/* 4. Full Image Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close zoom"
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full cursor-pointer z-10"
          >
            <ChevronDown size={28} />
          </button>
          <img
            src={product.images[activeImageIndex]}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}

      {/* 5. Mobile Sticky Add to Bag Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF8F5] border-t border-[#E0D8CB] p-3 z-40 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-serif font-medium text-[#141414] truncate max-w-[140px]">
            {product.name}
          </div>
          <div className="text-xs font-bold text-[#141414]">
            {formatPrice(product.price)}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold rounded-xs text-center cursor-pointer shadow"
        >
          Add to Bag
        </button>
      </div>

    </div>
  );
};
