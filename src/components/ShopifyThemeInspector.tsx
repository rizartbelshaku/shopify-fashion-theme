import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, SlidersHorizontal, Check, RefreshCw, Layers, Palette, Layout, Type } from 'lucide-react';

export const ShopifyThemeInspector: React.FC = () => {
  const {
    isThemeEditorOpen,
    setIsThemeEditorOpen,
    themeSettings,
    updateThemeSettings,
    addToast
  } = useShop();

  if (!isThemeEditorOpen) return null;

  const handleResetDefaults = () => {
    updateThemeSettings({
      announcementText: 'COMPLIMENTARY EUROPEAN EXPRESS SHIPPING ON ORDERS OVER €100',
      showAnnouncement: true,
      heroHeadline: 'THE ART OF EVERYDAY',
      heroSubheadline: 'Refined essentials designed for modern living.',
      enableFreeShippingBar: true,
      freeShippingThreshold: 100,
      themePalette: 'classic',
      gridColumns: 4,
      showQuickAdd: true,
      showRatingStars: true,
    });
    addToast('Theme Settings Reset', 'Default Shopify theme schema restored', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsThemeEditorOpen(false)}
      />

      {/* Left / Right Slide-over Inspector Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#181818] text-[#FAF8F5] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#333]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#2C2C2C] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#9C7B4F] text-black rounded-xs">
              <SlidersHorizontal size={16} />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase text-white">
                Shopify OS 2.0 Theme Editor
              </h2>
              <span className="text-[10px] text-[#A69E92] tracking-wider block">
                Theme: VELORA Atelier v2.4 • Live Customizer
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsThemeEditorOpen(false)}
            aria-label="Close Inspector"
            className="p-1.5 text-[#A8A194] hover:text-white rounded-full hover:bg-[#2A2A2A] cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Customizer Settings Form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs divide-y divide-[#2C2C2C]">
          
          {/* Section: Announcement Bar */}
          <div className="space-y-3 pt-2 first:pt-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold uppercase tracking-wider text-[#DCD5C9] flex items-center gap-1.5">
                <Layout size={13} className="text-[#9C7B4F]" /> Announcement Bar
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={themeSettings.showAnnouncement}
                  onChange={(e) => updateThemeSettings({ showAnnouncement: e.target.checked })}
                  className="rounded accent-[#9C7B4F]"
                />
                <span className="text-[11px] text-[#A8A194]">Enabled</span>
              </label>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8C8375] mb-1">
                Announcement Notice Copy
              </label>
              <input
                type="text"
                value={themeSettings.announcementText}
                onChange={(e) => updateThemeSettings({ announcementText: e.target.value })}
                className="w-full px-3 py-2 bg-[#222] border border-[#3A3A3A] text-[#FAF8F5] rounded-xs focus:outline-none focus:border-[#9C7B4F]"
              />
            </div>
          </div>

          {/* Section: Editorial Hero Section */}
          <div className="space-y-3 pt-5">
            <span className="font-semibold uppercase tracking-wider text-[#DCD5C9] flex items-center gap-1.5">
              <Type size={13} className="text-[#9C7B4F]" /> Hero Section
            </span>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8C8375] mb-1">
                Main Headline (H1)
              </label>
              <input
                type="text"
                value={themeSettings.heroHeadline}
                onChange={(e) => updateThemeSettings({ heroHeadline: e.target.value })}
                className="w-full px-3 py-2 bg-[#222] border border-[#3A3A3A] text-[#FAF8F5] rounded-xs focus:outline-none focus:border-[#9C7B4F]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8C8375] mb-1">
                Sub-headline Supporting Copy
              </label>
              <input
                type="text"
                value={themeSettings.heroSubheadline}
                onChange={(e) => updateThemeSettings({ heroSubheadline: e.target.value })}
                className="w-full px-3 py-2 bg-[#222] border border-[#3A3A3A] text-[#FAF8F5] rounded-xs focus:outline-none focus:border-[#9C7B4F]"
              />
            </div>
          </div>

          {/* Section: Free Shipping Settings */}
          <div className="space-y-3 pt-5">
            <span className="font-semibold uppercase tracking-wider text-[#DCD5C9] flex items-center gap-1.5">
              <Layers size={13} className="text-[#9C7B4F]" /> Cart & Shipping Rules
            </span>

            <div className="flex items-center justify-between">
              <label className="text-[11px] text-[#A8A194]">
                Free Shipping Threshold (€)
              </label>
              <input
                type="number"
                min={20}
                max={500}
                step={10}
                value={themeSettings.freeShippingThreshold}
                onChange={(e) => updateThemeSettings({ freeShippingThreshold: Number(e.target.value) })}
                className="w-24 px-2 py-1 bg-[#222] border border-[#3A3A3A] text-white rounded-xs text-right focus:outline-none focus:border-[#9C7B4F]"
              />
            </div>
          </div>

          {/* Section: Product Cards & Grid Configuration */}
          <div className="space-y-3 pt-5">
            <span className="font-semibold uppercase tracking-wider text-[#DCD5C9] flex items-center gap-1.5">
              <Layout size={13} className="text-[#9C7B4F]" /> Product Cards & Display
            </span>

            <label className="flex items-center justify-between py-1 cursor-pointer">
              <span className="text-[#A8A194]">Enable Hover Quick Add Bar</span>
              <input
                type="checkbox"
                checked={themeSettings.showQuickAdd}
                onChange={(e) => updateThemeSettings({ showQuickAdd: e.target.checked })}
                className="rounded accent-[#9C7B4F]"
              />
            </label>

            <label className="flex items-center justify-between py-1 cursor-pointer">
              <span className="text-[#A8A194]">Show Customer Rating Stars</span>
              <input
                type="checkbox"
                checked={themeSettings.showRatingStars}
                onChange={(e) => updateThemeSettings({ showRatingStars: e.target.checked })}
                className="rounded accent-[#9C7B4F]"
              />
            </label>
          </div>

          {/* Liquid Sections Information */}
          <div className="space-y-2 pt-5">
            <span className="font-semibold uppercase tracking-wider text-[#A89F91] block">
              Liquid Template Structure:
            </span>
            <div className="p-3 bg-[#111] rounded font-mono text-[10px] text-[#8C8375] space-y-1">
              <div>📁 sections/hero.liquid</div>
              <div>📁 sections/featured-collections.liquid</div>
              <div>📁 sections/product-grid.liquid</div>
              <div>📁 sections/editorial-story.liquid</div>
              <div>📁 sections/benefits.liquid</div>
              <div>📁 sections/newsletter.liquid</div>
              <div>📁 snippets/product-card.liquid</div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#2C2C2C] bg-[#141414] flex gap-3">
          <button
            onClick={handleResetDefaults}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#252525] hover:bg-[#333] text-[#FAF8F5] text-xs uppercase tracking-wider rounded-xs font-semibold cursor-pointer flex-1"
          >
            <RefreshCw size={13} />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={() => {
              setIsThemeEditorOpen(false);
              addToast('Settings Saved', 'Theme settings applied live', 'success');
            }}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#9C7B4F] hover:bg-[#8A6D44] text-black text-xs uppercase tracking-wider rounded-xs font-bold cursor-pointer flex-1"
          >
            <Check size={14} />
            <span>Save & Close</span>
          </button>
        </div>

      </div>
    </div>
  );
};
