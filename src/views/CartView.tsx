import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Tag, 
  Truck, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const CartView: React.FC = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    freeShippingThreshold,
    amountUntilFreeShipping,
    freeShippingProgress,
    updateCartQuantity,
    removeFromCart,
    formatPrice,
    navigateTo,
    orderNote,
    setOrderNote,
    appliedDiscountCode,
    applyDiscountCode,
    removeDiscountCode,
    discountAmount,
    finalTotal
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyDiscountCode(promoInput.trim());
      setPromoInput('');
    }
  };

  return (
    <div id="cart-page" className="w-full bg-[#FAF8F5] pb-24">
      
      {/* 1. Header */}
      <div className="bg-[#F5F1EB] border-b border-[#E8E2D6] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C8375] mb-2">
            <button onClick={() => navigateTo({ type: 'home' })} className="hover:text-[#141414] cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-[#141414] font-semibold">Shopping Bag</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#141414]">
            YOUR SHOPPING BAG
          </h1>
          <p className="text-xs sm:text-sm text-[#736C61] mt-2 font-light">
            Review your selected timeless pieces before checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {cart.length === 0 ? (
          /* Empty Bag State */
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#EFEAE2] flex items-center justify-center text-[#8C8375] mx-auto mb-5">
              <ShoppingBag size={32} strokeWidth={1.2} />
            </div>
            <h2 className="font-serif text-3xl text-[#141414] mb-3 font-normal">
              Your bag is empty
            </h2>
            <p className="text-xs sm:text-sm text-[#736C61] mb-8 leading-relaxed font-light">
              Your personal wardrobe currently holds no pieces. Explore our curated collections to discover refined European essentials.
            </p>
            <button
              onClick={() => navigateTo({ type: 'collection', category: 'all' })}
              className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer shadow"
            >
              Explore the Collection
            </button>
          </div>
        ) : (
          /* Non-empty Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Cart Items Table (7 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Free shipping banner */}
              <div className="bg-[#EFEAE1] p-4 rounded-xs border border-[#DFD7CA]">
                <div className="flex items-center justify-between text-xs text-[#3D3A35] font-medium mb-2">
                  {amountUntilFreeShipping === 0 ? (
                    <span className="flex items-center gap-1.5 font-semibold text-[#141414]">
                      <Sparkles size={14} className="text-[#9C7B4F]" /> Complimentary Express Shipping Unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-[#141414]">{formatPrice(amountUntilFreeShipping)}</strong> more to unlock complimentary express shipping.
                    </span>
                  )}
                  <span className="text-[11px] text-[#8C8375]">{freeShippingProgress}%</span>
                </div>
                <div className="w-full bg-[#D8D0C3] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#141414] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Table */}
              <div className="border border-[#E5DFD4] rounded-xs bg-[#FAF8F5] divide-y divide-[#EAE4D9]">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    
                    {/* Image & Main Info */}
                    <div className="flex gap-4 items-center">
                      <div 
                        className="w-20 h-26 bg-[#E2DBD1] overflow-hidden rounded-xs flex-shrink-0 cursor-pointer"
                        onClick={() => navigateTo({ type: 'product', productId: item.product.id })}
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#8C8375] font-semibold block">
                          {item.product.category}
                        </span>
                        <h3 
                          onClick={() => navigateTo({ type: 'product', productId: item.product.id })}
                          className="font-serif text-lg font-medium text-[#141414] hover:text-[#8A6D44] transition-colors cursor-pointer"
                        >
                          {item.product.name}
                        </h3>
                        <div className="text-xs text-[#736C61] tracking-wider mt-1 uppercase">
                          <span>Size: <strong>{item.selectedSize}</strong></span>
                          <span className="mx-2">•</span>
                          <span>Color: <strong>{item.selectedColor}</strong></span>
                        </div>
                        <div className="text-xs font-semibold text-[#141414] mt-1 sm:hidden">
                          {formatPrice(item.unitPrice)}
                        </div>
                      </div>
                    </div>

                    {/* Stepper & Price Controls */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#EAE4D9]">
                      <div className="flex items-center border border-[#DCD4C7] bg-[#FAF8F5] rounded-xs">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-xs font-semibold text-[#141414]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-[#5C564C] hover:text-[#141414] cursor-pointer"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <div className="text-right min-w-[70px]">
                        <div className="text-sm font-semibold text-[#141414]">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-[#8C8375]">
                            {formatPrice(item.unitPrice)} each
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#999083] hover:text-[#141414] p-1.5 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Order Notes / Gift Message */}
              <div className="bg-[#FAF8F5] border border-[#E5DFD4] p-5 rounded-xs">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-2">
                  Special Instructions or Gift Note
                </label>
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Include a bespoke handwritten message or special delivery instructions..."
                  rows={3}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                />
              </div>

              {/* Continue Shopping button */}
              <div>
                <button
                  onClick={() => navigateTo({ type: 'collection', category: 'all' })}
                  className="text-xs uppercase tracking-wider font-semibold text-[#141414] hover:text-[#8A6D44] underline cursor-pointer"
                >
                  ← Continue Shopping
                </button>
              </div>

            </div>

            {/* Right: Order Summary Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-[#F7F4EE] border border-[#E5DFD4] p-6 rounded-xs space-y-6 sticky top-28">
                
                <h2 className="font-serif text-xl font-normal text-[#141414] pb-3 border-b border-[#E5DFD4]">
                  ORDER SUMMARY
                </h2>

                {/* Promo Code Input */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                    Discount / Gift Card
                  </label>
                  {appliedDiscountCode ? (
                    <div className="flex items-center justify-between bg-[#EAE3D6] p-2.5 rounded-xs text-xs text-[#141414]">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Tag size={14} className="text-[#9C7B4F]" />
                        <span>{appliedDiscountCode} (-{formatPrice(discountAmount)})</span>
                      </div>
                      <button
                        onClick={removeDiscountCode}
                        className="text-[#7A7367] hover:text-[#141414] uppercase text-[10px] underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="e.g. WELCOME15"
                        className="flex-1 px-3 py-2 bg-[#FAF8F5] border border-[#D4CCC0] text-xs uppercase tracking-wider focus:outline-none focus:border-[#141414]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#2C2B29] cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 text-xs text-[#524C42] pt-2 border-t border-[#E5DFD4]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#141414]">{formatPrice(cartSubtotal)}</span>
                  </div>

                  {appliedDiscountCode && (
                    <div className="flex justify-between text-[#9C7B4F] font-medium">
                      <span>Discount ({appliedDiscountCode})</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{amountUntilFreeShipping === 0 ? 'Complimentary' : formatPrice(15)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated European VAT</span>
                    <span>Included</span>
                  </div>

                  <div className="flex justify-between text-base font-semibold text-[#141414] pt-4 border-t border-[#E5DFD4]">
                    <span>Total</span>
                    <span>{formatPrice(finalTotal + (amountUntilFreeShipping === 0 ? 0 : 15))}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => navigateTo({ type: 'checkout' })}
                  className="w-full py-4 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 rounded-xs"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={14} />
                </button>

                {/* Security and reassurance icons */}
                <div className="pt-2 space-y-2 text-[11px] text-[#736C61] border-t border-[#E5DFD4]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#8C8375]" />
                    <span>256-bit SSL Secure Encrypted Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw size={14} className="text-[#8C8375]" />
                    <span>30-day complimentary returns & exchanges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck size={14} className="text-[#8C8375]" />
                    <span>European DHL Express Carbon-Neutral Delivery</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
