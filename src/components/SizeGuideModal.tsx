import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, HelpCircle } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen, sizeGuideCategory } = useShop();
  const [activeGender, setActiveGender] = useState<'women' | 'men'>(sizeGuideCategory || 'women');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isSizeGuideOpen) return null;

  const womenData = [
    { size: 'XS', uk: '6', eu: '34', us: '2', bust: unit === 'cm' ? '80-84' : '31-33', waist: unit === 'cm' ? '62-66' : '24-26', hips: unit === 'cm' ? '88-92' : '34-36' },
    { size: 'S', uk: '8', eu: '36', us: '4', bust: unit === 'cm' ? '85-89' : '33-35', waist: unit === 'cm' ? '67-71' : '26-28', hips: unit === 'cm' ? '93-97' : '36-38' },
    { size: 'M', uk: '10', eu: '38', us: '6', bust: unit === 'cm' ? '90-94' : '35-37', waist: unit === 'cm' ? '72-76' : '28-30', hips: unit === 'cm' ? '98-102' : '38-40' },
    { size: 'L', uk: '12', eu: '40', us: '8', bust: unit === 'cm' ? '95-100' : '37-39', waist: unit === 'cm' ? '77-82' : '30-32', hips: unit === 'cm' ? '103-108' : '40-42' },
    { size: 'XL', uk: '14', eu: '42', us: '10', bust: unit === 'cm' ? '101-106' : '39-42', waist: unit === 'cm' ? '83-88' : '32-35', hips: unit === 'cm' ? '109-114' : '42-45' }
  ];

  const menData = [
    { size: 'S', eu: '46', us: '36', chest: unit === 'cm' ? '91-96' : '36-38', waist: unit === 'cm' ? '76-81' : '30-32', neck: unit === 'cm' ? '38' : '15' },
    { size: 'M', eu: '48', us: '38', chest: unit === 'cm' ? '97-102' : '38-40', waist: unit === 'cm' ? '82-87' : '32-34', neck: unit === 'cm' ? '40' : '15.5' },
    { size: 'L', eu: '50', us: '40', chest: unit === 'cm' ? '103-108' : '40-42', waist: unit === 'cm' ? '88-93' : '34-36', neck: unit === 'cm' ? '42' : '16.5' },
    { size: 'XL', eu: '52', us: '42', chest: unit === 'cm' ? '109-114' : '42-45', waist: unit === 'cm' ? '94-99' : '36-38', neck: unit === 'cm' ? '44' : '17.5' },
    { size: 'XXL', eu: '54', us: '44', chest: unit === 'cm' ? '115-120' : '45-47', waist: unit === 'cm' ? '100-105' : '38-41', neck: unit === 'cm' ? '46' : '18' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSizeGuideOpen(false)}
      />

      <div className="relative min-h-screen sm:min-h-0 sm:max-w-2xl sm:mx-auto sm:my-16 bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 z-10 sm:rounded-xs animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E0D8CB]">
          <div className="flex items-center gap-2">
            <Ruler size={20} className="text-[#8C8375]" />
            <h2 className="font-serif text-2xl font-normal text-[#141414]">
              TAILORING SIZE GUIDE
            </h2>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            aria-label="Close Size Guide"
            className="p-1.5 text-[#6E675B] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE1] cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Controls: Gender & Unit Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-5">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveGender('women')}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer ${
                activeGender === 'women'
                  ? 'bg-[#141414] text-[#FAF8F5]'
                  : 'bg-[#EAE4D8] text-[#5C564C] hover:text-[#141414]'
              }`}
            >
              Women's Apparel
            </button>
            <button
              onClick={() => setActiveGender('men')}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer ${
                activeGender === 'men'
                  ? 'bg-[#141414] text-[#FAF8F5]'
                  : 'bg-[#EAE4D8] text-[#5C564C] hover:text-[#141414]'
              }`}
            >
              Men's Apparel
            </button>
          </div>

          <div className="flex items-center gap-1 bg-[#EAE4D8] p-1 rounded-xs self-start sm:self-auto">
            <button
              onClick={() => setUnit('cm')}
              className={`px-2.5 py-0.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                unit === 'cm' ? 'bg-[#FAF8F5] text-[#141414] shadow-xs' : 'text-[#736C61]'
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-2.5 py-0.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                unit === 'in' ? 'bg-[#FAF8F5] text-[#141414] shadow-xs' : 'text-[#736C61]'
              }`}
            >
              INCHES
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#E0D8CB] bg-white rounded-xs">
          {activeGender === 'women' ? (
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F2ECE3] text-[#141414] uppercase tracking-wider font-semibold border-b border-[#E0D8CB]">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">EU</th>
                  <th className="p-3">US</th>
                  <th className="p-3">UK</th>
                  <th className="p-3">Bust ({unit})</th>
                  <th className="p-3">Waist ({unit})</th>
                  <th className="p-3">Hips ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE1] text-[#4A453E]">
                {womenData.map((row) => (
                  <tr key={row.size} className="hover:bg-[#FAF8F5]">
                    <td className="p-3 font-semibold text-[#141414]">{row.size}</td>
                    <td className="p-3">{row.eu}</td>
                    <td className="p-3">{row.us}</td>
                    <td className="p-3">{row.uk}</td>
                    <td className="p-3">{row.bust}</td>
                    <td className="p-3">{row.waist}</td>
                    <td className="p-3">{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F2ECE3] text-[#141414] uppercase tracking-wider font-semibold border-b border-[#E0D8CB]">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">EU</th>
                  <th className="p-3">US</th>
                  <th className="p-3">Chest ({unit})</th>
                  <th className="p-3">Waist ({unit})</th>
                  <th className="p-3">Neck ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE1] text-[#4A453E]">
                {menData.map((row) => (
                  <tr key={row.size} className="hover:bg-[#FAF8F5]">
                    <td className="p-3 font-semibold text-[#141414]">{row.size}</td>
                    <td className="p-3">{row.eu}</td>
                    <td className="p-3">{row.us}</td>
                    <td className="p-3">{row.chest}</td>
                    <td className="p-3">{row.waist}</td>
                    <td className="p-3">{row.neck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Measuring Tip */}
        <div className="mt-5 p-3.5 bg-[#F2EDE4] rounded-xs text-xs text-[#635D52] flex items-start gap-2.5">
          <HelpCircle size={16} className="text-[#8C8375] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#141414]">Tailor's Advice:</strong> If you are between sizes, we recommend ordering your larger size for tailored outerwear & blazers, or your normal size for silk and knitwear.
          </div>
        </div>

      </div>
    </div>
  );
};
