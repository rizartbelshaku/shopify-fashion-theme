import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
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
  const [showNoteInput, setShowNoteInput] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigateTo({ type: 'checkout' });
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    navigateTo({ type: 'cart' });
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput) {
      applyDiscountCode(promoInput);
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Right Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-baseline gap-2">
            <h2 className="font-serif text-2xl font-normal text-[#141414]">
              YOUR BAG
            </h2>
            <span className="text-xs uppercase tracking-widest text-[#8C8375] font-medium">
              ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Shopping Bag"
            className="p-1.5 text-[#5C564C] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE2] cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[#EFEAE1] px-5 py-3 border-b border-[#E0D8CB]">
          <div className="flex items-center justify-between text-xs tracking-wide text-[#3D3A35] font-medium mb-1.5">
            {amountUntilFreeShipping === 0 ? (
              <span className="text-[#141414] font-semibold flex items-center gap-1">
                ✨ Complimentary Express Shipping Unlocked!
              </span>
            ) : (
              <span>
                You are <strong className="text-[#141414]">{formatPrice(amountUntilFreeShipping)}</strong> away from complimentary express shipping.
              </span>
            )}
            <span className="text-[11px] text-[#8C8375]">{freeShippingProgress}%</span>
          </div>
          <div className="w-full bg-[#DCD4C7] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#141414] h-full transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List or Empty State */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#EFEAE2] flex items-center justify-center text-[#8C8375] mb-4">
              <ShoppingBag size={28} strokeWidth={1.3} />
            </div>
            <h3 className="font-serif text-2xl text-[#141414] mb-2 font-normal">
              Your bag is empty
            </h3>
            <p className="text-xs text-[#736C61] max-w-xs mb-6 font-light leading-relaxed">
              Explore our new seasonal edit and permanent tailoring essentials to find your next staple.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigateTo({ type: 'collection', category: 'all' });
              }}
              className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer shadow"
            >
              Discover Collection
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#EAE4D9]">
            {cart.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                {/* Thumbnail */}
                <div 
                  className="w-20 h-26 flex-shrink-0 bg-[#E2DBD1] overflow-hidden rounded-xs cursor-pointer"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo({ type: 'product', productId: item.product.id });
                  }}
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 
                        onClick={() => {
                          setIsCartOpen(false);
                          navigateTo({ type: 'product', productId: item.product.id });
                        }}
                        className="font-serif text-base font-medium text-[#141414] hover:text-[#8A6D44] transition-colors cursor-pointer leading-snug"
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-[#999083] hover:text-[#141414] transition-colors cursor-pointer p-0.5"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#736C61] tracking-wider mt-1 uppercase flex items-center gap-2">
                      <span>Size: {item.selectedSize}</span>
                      <span>•</span>
                      <span>Color: {item.selectedColor}</span>
                    </div>

                    <div className="text-xs font-semibold text-[#141414] mt-1">
                      {formatPrice(item.unitPrice)}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between mt-3 pt-2">
                    <div className="flex items-center border border-[#DCD4C7] bg-[#FAF8F5] rounded-xs">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="p-1.5 text-[#5C564C] hover:text-[#141414] hover:bg-[#EFEAE2] transition-colors cursor-pointer"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="px-3 text-xs font-medium text-[#141414]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="p-1.5 text-[#5C564C] hover:text-[#141414] hover:bg-[#EFEAE2] transition-colors cursor-pointer"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#141414]">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Order Summary & Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8E2D8] bg-[#F7F4EE] space-y-4">
            
            {/* Promo Code Input Accordion */}
            <div>
              {appliedDiscountCode ? (
                <div className="flex items-center justify-between bg-[#EFE9DE] px-3 py-1.5 rounded-xs text-xs text-[#141414]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Tag size={13} className="text-[#9C7B4F]" />
                    <span>Promo: {appliedDiscountCode} (-{formatPrice(discountAmount)})</span>
                  </div>
                  <button
                    onClick={removeDiscountCode}
                    className="text-[#8C8375] hover:text-[#141414] uppercase text-[10px] underline cursor-pointer"
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
                    placeholder="Promo code (e.g. VELORA10)"
                    className="flex-1 px-3 py-1.5 bg-[#FAF8F5] border border-[#D8D0C3] text-xs uppercase tracking-wider focus:outline-none focus:border-[#141414]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#141414] text-[#FAF8F5] text-[11px] uppercase tracking-wider font-semibold cursor-pointer hover:bg-[#2C2B29]"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Note toggle */}
            <div>
              <button
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="text-[11px] text-[#736C61] underline hover:text-[#141414] uppercase tracking-wider cursor-pointer"
              >
                {showNoteInput ? 'Hide order note' : '+ Add gift note or special instructions'}
              </button>
              {showNoteInput && (
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Special instructions for delivery or gift note..."
                  rows={2}
                  className="w-full mt-2 p-2 bg-[#FAF8F5] border border-[#D8D0C3] text-xs text-[#141414] focus:outline-none focus:border-[#141414]"
                />
              )}
            </div>

            {/* Subtotal breakdown */}
            <div className="space-y-1.5 text-xs text-[#524C42]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#141414]">{formatPrice(cartSubtotal)}</span>
              </div>
              {appliedDiscountCode && (
                <div className="flex justify-between text-[#9C7B4F] font-medium">
                  <span>Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{amountUntilFreeShipping === 0 ? 'Complimentary' : formatPrice(15)}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#141414] pt-2 border-t border-[#E5DFD4]">
                <span>Total</span>
                <span>{formatPrice(finalTotal + (amountUntilFreeShipping === 0 ? 0 : 15))}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] transition-all text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={handleViewCart}
                className="w-full py-2.5 bg-transparent hover:bg-[#EFEAE2] text-[#141414] border border-[#D4CCC0] transition-colors text-xs tracking-[0.15em] uppercase font-semibold cursor-pointer text-center"
              >
                View Full Bag
              </button>
            </div>

            {/* Security note */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#736C61] pt-1">
              <ShieldCheck size={13} className="text-[#8C8375]" />
              <span>Encrypted SSL 256-bit European Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
