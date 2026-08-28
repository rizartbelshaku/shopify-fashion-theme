import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const BenefitsSection: React.FC = () => {
  const { formatPrice, freeShippingThreshold } = useShop();

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: `Complimentary express shipping on orders over ${formatPrice(freeShippingThreshold)}.`
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day hassle-free returns & complimentary exchanges.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      description: 'Encrypted transactions with Visa, Mastercard, Apple Pay & Klarna.'
    },
    {
      icon: Sparkles,
      title: 'Artisanal Provenance',
      description: 'Certified noble materials, fair wages & sustainable European ateliers.'
    }
  ];

  return (
    <section 
      id="benefits-section"
      className="border-b border-[#E5E0D8] bg-[#FAF9F6]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <div
              key={idx}
              className="p-8 sm:p-10 flex flex-col justify-start"
            >
              <div className="text-[#1A1A1A] mb-4">
                <Icon size={20} strokeWidth={1.3} />
              </div>
              <h3 className="text-xs uppercase tracking-wider font-medium text-[#1A1A1A] mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-[#666] font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
