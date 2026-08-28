import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }

    setIsSubscribed(true);
    addToast(
      'Welcome to VELORA',
      'You are now subscribed. Use code WELCOME15 for 15% off your first order!',
      'success'
    );
  };

  return (
    <section 
      id="newsletter-section"
      className="py-16 sm:py-24 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#E5E0D8]"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        <div className="text-[10px] tracking-[0.4em] uppercase text-[#777] font-medium mb-3">
          Newsletter Subscription
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-[#1A1A1A] mb-3">
          STAY IN THE KNOW
        </h2>

        <p className="text-xs sm:text-sm text-[#666] font-light max-w-md mx-auto mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive releases and private seasonal previews.
        </p>

        {isSubscribed ? (
          <div className="p-6 bg-[#F0EEEA] border border-[#E5E0D8] max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-center gap-2 text-[#1A1A1A] font-medium text-xs tracking-wider uppercase mb-1">
              <CheckCircle2 size={16} className="text-[#1A1A1A]" />
              <span>You're on the priority list.</span>
            </div>
            <p className="text-xs text-[#666] mt-1 font-light">
              Use code <strong className="text-[#1A1A1A] tracking-widest font-semibold">WELCOME15</strong> at checkout for 15% off.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto border border-[#1A1A1A]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-5 py-4 bg-[#FAF9F6] text-[#1A1A1A] placeholder-[#888] text-xs tracking-wide focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#333] transition-all text-[10px] tracking-[0.2em] uppercase font-medium whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#888] font-light mt-4 tracking-wider">
          By signing up, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};
