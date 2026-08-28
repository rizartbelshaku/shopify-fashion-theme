import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Truck, 
  ArrowLeft, 
  Tag, 
  Check, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    freeShippingThreshold,
    amountUntilFreeShipping,
    formatPrice,
    navigateTo,
    appliedDiscountCode,
    applyDiscountCode,
    removeDiscountCode,
    discountAmount,
    finalTotal,
    clearCart,
    addToast
  } = useShop();

  // Step 1 Form States
  const [email, setEmail] = useState('elena.vance@example.com');
  const [firstName, setFirstName] = useState('Elena');
  const [lastName, setLastName] = useState('Vance');
  const [address, setAddress] = useState('Via Monte Napoleone 8');
  const [city, setCity] = useState('Milan');
  const [postalCode, setPostalCode] = useState('20121');
  const [country, setCountry] = useState('Italy');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'priority'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'cc' | 'klarna' | 'apple'>('cc');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('884');
  const [promoInput, setPromoInput] = useState('');
  
  // Placed Order Result State
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const shippingCost = shippingMethod === 'priority' 
    ? 25 
    : (amountUntilFreeShipping === 0 ? 0 : 15);

  const grandTotal = finalTotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !address) {
      addToast('Missing Details', 'Please fill in all shipping fields.', 'error');
      return;
    }

    const randomId = `VEL-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(randomId);
    setOrderPlaced(true);
    clearCart();
    addToast('Order Placed Successfully', `Confirmation sent to ${email}`, 'success');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput) {
      applyDiscountCode(promoInput);
      setPromoInput('');
    }
  };

  if (orderPlaced) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-[#141414] text-[#FAF8F5] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-[#9C7B4F]" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375] block mb-2">
          Order Confirmed
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#141414] mb-3">
          THANK YOU, {firstName.toUpperCase()}
        </h1>

        <p className="text-sm sm:text-base text-[#615A50] font-light max-w-md mx-auto mb-6">
          Your order <strong>#{orderNumber}</strong> has been received. Our European ateliers are preparing your pieces for DHL Express dispatch.
        </p>

        <div className="p-6 bg-[#F2EDE4] border border-[#E0D8CB] rounded-xs max-w-lg mx-auto text-left mb-8 space-y-3 text-xs text-[#524C42]">
          <div className="flex justify-between border-b border-[#DFD8CC] pb-2 font-medium text-[#141414]">
            <span>Order Number:</span>
            <span className="font-mono">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Confirmation Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping To:</span>
            <span>{address}, {city}, {postalCode} ({country})</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery:</span>
            <span>2-3 Business Days (Express Air)</span>
          </div>
        </div>

        <button
          onClick={() => navigateTo({ type: 'home' })}
          className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer shadow"
        >
          Return to VELORA Store
        </button>
      </div>
    );
  }

  return (
    <div id="shopify-checkout-flow" className="min-h-screen bg-[#FAF8F5]">
      
      {/* Top Header */}
      <header className="border-b border-[#E8E2D6] py-5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigateTo({ type: 'cart' })}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6E675B] hover:text-[#141414] cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Return to bag</span>
          </button>

          <button onClick={() => navigateTo({ type: 'home' })} className="cursor-pointer">
            <span className="font-serif text-2xl tracking-[0.25em] font-medium text-[#141414]">
              VELORA
            </span>
          </button>

          <div className="flex items-center gap-1 text-xs text-[#736C61]">
            <Lock size={13} />
            <span className="hidden sm:inline">Secure 256-Bit</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Information, Shipping & Payment (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Express Checkout Simulation */}
            <div className="space-y-3">
              <span className="text-center block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8375]">
                Express Checkout
              </span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => addToast('Shop Pay', 'Redirecting to Shop Pay wallet...', 'info')}
                  className="py-3 bg-[#5A31F4] text-white rounded-xs font-semibold text-xs tracking-wider cursor-pointer hover:opacity-90"
                >
                  Shop Pay
                </button>
                <button
                  type="button"
                  onClick={() => addToast('Apple Pay', 'Authenticating FaceID...', 'info')}
                  className="py-3 bg-black text-white rounded-xs font-semibold text-xs tracking-wider cursor-pointer hover:opacity-90 flex items-center justify-center"
                >
                  Pay
                </button>
                <button
                  type="button"
                  onClick={() => addToast('Klarna', 'Opening Klarna 3-installments...', 'info')}
                  className="py-3 bg-[#FFB3C7] text-[#141414] rounded-xs font-semibold text-xs tracking-wider cursor-pointer hover:opacity-90"
                >
                  Klarna
                </button>
              </div>

              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-[#E0D8CB]"></div>
                <span className="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-[#8C8375]">
                  Or Enter Details Below
                </span>
                <div className="flex-grow border-t border-[#E0D8CB]"></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              
              {/* 1. Contact Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141414]">
                    1. Contact Information
                  </h3>
                  <span className="text-xs text-[#736C61]">Already have an account? <strong className="cursor-pointer text-[#141414] underline">Sign in</strong></span>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address for order confirmation"
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                />
              </div>

              {/* 2. Delivery Address */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141414]">
                  2. Shipping Address
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                  />
                </div>

                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street Address"
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                />

                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                  />
                  <input
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal Code"
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                  />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs"
                  >
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Switzerland">Switzerland</option>
                  </select>
                </div>
              </div>

              {/* 3. Shipping Method */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141414]">
                  3. Shipping Method
                </h3>
                <div className="border border-[#D4CCC0] rounded-xs divide-y divide-[#EAE4D8] bg-[#FAF8F5]">
                  <label className="flex items-center justify-between p-3.5 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="accent-[#141414]"
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#141414] block">
                          DHL Express Carbon-Neutral
                        </span>
                        <span className="text-[11px] text-[#736C61]">
                          2-3 business days tracking included
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#141414]">
                      {amountUntilFreeShipping === 0 ? 'Complimentary' : formatPrice(15)}
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3.5 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === 'priority'}
                        onChange={() => setShippingMethod('priority')}
                        className="accent-[#141414]"
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#141414] block">
                          VIP Priority White-Glove Courier
                        </span>
                        <span className="text-[11px] text-[#736C61]">
                          Next-day guaranteed delivery
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#141414]">
                      {formatPrice(25)}
                    </span>
                  </label>
                </div>
              </div>

              {/* 4. Payment */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141414]">
                  4. Payment Method
                </h3>
                <div className="border border-[#D4CCC0] rounded-xs divide-y divide-[#EAE4D8] bg-[#FAF8F5]">
                  
                  {/* Credit Card Option */}
                  <div className="p-4 space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'cc'}
                          onChange={() => setPaymentMethod('cc')}
                          className="accent-[#141414]"
                        />
                        <span className="text-xs font-semibold text-[#141414]">Credit or Debit Card</span>
                      </div>
                      <div className="flex gap-1 text-[#8C8375]">
                        <CreditCard size={18} />
                      </div>
                    </label>

                    {paymentMethod === 'cc' && (
                      <div className="pt-2 space-y-3">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="Card Number"
                          className="w-full px-3 py-2.5 bg-white border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs font-mono"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM / YY"
                            className="w-full px-3 py-2.5 bg-white border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs font-mono"
                          />
                          <input
                            type="text"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            placeholder="Security CVC"
                            className="w-full px-3 py-2.5 bg-white border border-[#D4CCC0] text-xs text-[#141414] focus:outline-none focus:border-[#141414] rounded-xs font-mono"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Klarna Option */}
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'klarna'}
                        onChange={() => setPaymentMethod('klarna')}
                        className="accent-[#141414]"
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#141414] block">Klarna 3 Interest-Free Payments</span>
                        <span className="text-[11px] text-[#736C61]">Pay {formatPrice(grandTotal / 3)}/month</span>
                      </div>
                    </div>
                  </label>

                </div>
              </div>

              {/* Complete Order Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-lg rounded-xs flex items-center justify-center gap-2"
                >
                  <Lock size={14} />
                  <span>Pay {formatPrice(grandTotal)} & Complete Order</span>
                </button>
              </div>

            </form>

          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F5F1EB] p-6 rounded-xs border border-[#E0D8CB] space-y-6 sticky top-24">
              <h2 className="font-serif text-xl font-normal text-[#141414] pb-3 border-b border-[#E0D8CB]">
                ORDER SUMMARY
              </h2>

              {/* Product items in summary */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1 divide-y divide-[#E6DEC4]">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3.5">
                    <div className="relative w-14 h-18 bg-[#E0D8CB] rounded-xs flex-shrink-0 overflow-hidden">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 bg-[#141414] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium text-[#141414] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] text-[#736C61] uppercase tracking-wider block">
                        {item.selectedSize} / {item.selectedColor}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#141414]">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo input in checkout */}
              <div className="pt-2 border-t border-[#E0D8CB]">
                {appliedDiscountCode ? (
                  <div className="flex items-center justify-between bg-[#EFE9DF] p-2.5 rounded-xs text-xs text-[#141414]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Tag size={13} className="text-[#9C7B4F]" />
                      <span>Code: {appliedDiscountCode} (-{formatPrice(discountAmount)})</span>
                    </div>
                    <button
                      onClick={removeDiscountCode}
                      className="text-[#7A7367] hover:text-[#141414] text-[10px] uppercase underline cursor-pointer"
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
                      placeholder="Discount Code"
                      className="flex-1 px-3 py-2 bg-[#FAF8F5] border border-[#D4CCC0] text-xs uppercase tracking-wider focus:outline-none focus:border-[#141414]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#2C2B29] cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Price rows */}
              <div className="space-y-2 text-xs text-[#524C42] pt-4 border-t border-[#E0D8CB]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#141414]">{formatPrice(cartSubtotal)}</span>
                </div>
                {appliedDiscountCode && (
                  <div className="flex justify-between text-[#9C7B4F] font-semibold">
                    <span>Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#141414] pt-3 border-t border-[#E0D8CB]">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-3 bg-[#EAE3D6] rounded-xs text-[11px] text-[#6E675B] flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#8C8375] flex-shrink-0" />
                <span>VELORA Official Atelier Warranty & 30-day returns.</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
