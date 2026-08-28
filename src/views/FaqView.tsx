import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronDown, ChevronUp, HelpCircle, Mail, MessageSquare } from 'lucide-react';

export const FaqView: React.FC = () => {
  const { navigateTo } = useShop();

  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const faqs = [
    {
      category: 'Shipping & Delivery',
      question: 'What are your European & International shipping options?',
      answer: 'We offer complimentary express DHL delivery across Europe and the UK on all orders exceeding €100 / £90 / $110. Standard delivery arrives within 2-4 business days. VIP priority next-day shipping is also available at checkout.'
    },
    {
      category: 'Returns & Exchanges',
      question: 'What is the VELORA 30-day return policy?',
      answer: 'We provide a 30-day complimentary return window from the date your order is delivered. Items must be unworn, undamaged, in original packaging with garment security tags attached. Pre-paid DHL return labels are included in every shipment.'
    },
    {
      category: 'Sizing & Tailoring',
      question: 'How do I choose the correct size?',
      answer: 'Our garments are designed according to traditional European bespoke tailoring standards. We provide detailed sizing charts (EU, UK, US) and garment measurements for chest, waist, and hips on each product page. If you are between sizes for outerwear or tailored coats, we recommend taking the larger size.'
    },
    {
      category: 'Sustainability & Materials',
      question: 'Where are VELORA garments manufactured?',
      answer: 'All VELORA pieces are crafted in certified, audited ateliers located in Northern Italy, Portugal, and Mongolia (for certified raw cashmere). We ensure fair artisan wages, safe working environments, and zero toxic chemical dyes.'
    },
    {
      category: 'Payment & Security',
      question: 'Which payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, American Express, Apple Pay, Google Pay, Shop Pay, and Klarna (pay in 3 interest-free installments). All transactions are encrypted with bank-grade 256-bit SSL protocols.'
    }
  ];

  return (
    <div id="faq-page" className="w-full bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-[#F5F1EB] border-b border-[#E8E2D6] py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375] block mb-2">
            Client Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#141414] mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xs sm:text-sm text-[#736C61] max-w-md mx-auto">
            Everything you need to know about our atelier orders, international shipping, sizing, and complimentary returns.
          </p>
        </div>
      </div>

      {/* FAQs List */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12">
        <div className="border border-[#E5DFD4] rounded-xs bg-[#FAF8F5] divide-y divide-[#EAE4D9]">
          {faqs.map((faq, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div key={idx} className="p-5 sm:p-6">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C8375] font-semibold block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#141414]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-[#5C564C] flex-shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#5C564C] font-light leading-relaxed pt-2 border-t border-[#EFEAE2]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Concierge Box */}
        <div className="mt-12 p-8 bg-[#F2EDE4] border border-[#E0D8CB] rounded-xs text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#141414]">
            Need Personal Styling or Order Assistance?
          </h3>
          <p className="text-xs text-[#736C61] max-w-md mx-auto font-light">
            Our atelier concierge team in Milan is available Monday through Friday, 09:00 - 18:00 CET.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="mailto:concierge@velora.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#2C2B29] cursor-pointer"
            >
              <Mail size={14} />
              <span>concierge@velora.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
