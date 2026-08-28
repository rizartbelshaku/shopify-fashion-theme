import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory, Product } from '../types';
import { 
  SlidersHorizontal, 
  ChevronDown, 
  X, 
  Grid3X3, 
  Grid2X2, 
  ArrowUpDown, 
  Check, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface CollectionViewProps {
  initialCategory?: string;
}

export const CollectionView: React.FC<CollectionViewProps> = ({ initialCategory = 'all' }) => {
  const { navigateTo, formatPrice } = useShop();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'best-selling' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  
  // UI states
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [gridColumns, setGridColumns] = useState<4 | 2>(4);

  // Available Filter Options
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
  const allColors = [
    { label: 'Beige / Stone', hex: '#D8CFC4' },
    { label: 'Black / Noir', hex: '#1C1B1A' },
    { label: 'Oatmeal', hex: '#C2B8AA' },
    { label: 'Espresso / Brown', hex: '#382D24' },
    { label: 'Charcoal / Slate', hex: '#373A3E' },
    { label: 'Chalk / Ivory', hex: '#F0EBE1' }
  ];

  // Category Metadata Info
  const categoryMeta = useMemo(() => {
    if (selectedCategory === 'all') {
      return {
        title: 'THE COMPLETE COLLECTION',
        description: 'Explore the full spectrum of modern European tailoring, Italian leather goods, and refined wardrobe foundations.'
      };
    }
    const found = CATEGORIES_DATA.find(c => c.id === selectedCategory);
    if (found) {
      return {
        title: found.name.toUpperCase(),
        description: found.description
      };
    }
    return {
      title: selectedCategory.toUpperCase(),
      description: 'Discover refined silhouettes designed for everyday confidence.'
    };
  }, [selectedCategory]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some(s => selectedSizes.includes(s));
        if (!hasSize) return false;
      }
      // Color filter
      if (selectedColors.length > 0) {
        const hasColor = product.colors.some(c => 
          selectedColors.some(sc => c.name.toLowerCase().includes(sc.toLowerCase()) || sc.toLowerCase().includes(c.name.toLowerCase()))
        );
        if (!hasColor) return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // In Stock filter
      if (onlyInStock && !product.inStock) {
        return false;
      }
      return true;
    });

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'best-selling':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'featured':
      default:
        // default natural catalog order
        break;
    }

    return result;
  }, [selectedCategory, selectedSizes, selectedColors, maxPrice, onlyInStock, sortBy]);

  // Handlers
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorLabel: string) => {
    const key = colorLabel.split(' / ')[0];
    setSelectedColors(prev => 
      prev.includes(key) ? prev.filter(c => c !== key) : [...prev, key]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
    setMaxPrice(350);
    setOnlyInStock(false);
    setSortBy('featured');
  };

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length +
    (maxPrice < 350 ? 1 : 0) +
    (onlyInStock ? 1 : 0);

  return (
    <div id="collection-page" className="w-full bg-[#FAF9F6] pb-24">
      
      {/* 1. Header & Breadcrumbs */}
      <div className="bg-[#FAF9F6] border-b border-[#E5E0D8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#888] mb-3">
            <button onClick={() => navigateTo({ type: 'home' })} className="hover:text-[#1A1A1A] cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-[#1A1A1A] font-medium">Collections</span>
            <span>/</span>
            <span className="text-[#1A1A1A] font-medium">{categoryMeta.title}</span>
          </div>

          {/* Collection Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#1A1A1A] mb-4">
            {categoryMeta.title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-[#666] font-light max-w-xl mx-auto leading-relaxed">
            {categoryMeta.description}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Series' },
              { id: 'women', label: 'Women' },
              { id: 'men', label: 'Men' },
              { id: 'accessories', label: 'Accessories' },
              { id: 'essentials', label: 'Essentials' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer border ${
                  selectedCategory === tab.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FAF9F6] text-[#666] border-[#E5E0D8] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* 2. Filter & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E5E0D8]">
          
          {/* Left: Filter Toggle & Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FAF9F6] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={13} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-[#1A1A1A] text-white text-[9px] w-4 h-4 flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-[10px] text-[#777] hover:text-[#1A1A1A] underline uppercase tracking-widest flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={11} /> Clear all
              </button>
            )}

            <span className="text-[10px] text-[#888] uppercase tracking-[0.2em] hidden sm:inline ml-2">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
            </span>
          </div>

          {/* Right: Layout Switcher & Sorting */}
          <div className="flex items-center gap-3">
            
            {/* Grid density buttons */}
            <div className="hidden md:flex items-center border border-[#E5E0D8] bg-[#FAF9F6]">
              <button
                onClick={() => setGridColumns(4)}
                aria-label="4-column layout"
                className={`p-2 transition-colors cursor-pointer ${
                  gridColumns === 4 ? 'bg-[#1A1A1A] text-white' : 'text-[#777] hover:text-[#1A1A1A]'
                }`}
              >
                <Grid3X3 size={14} />
              </button>
              <button
                onClick={() => setGridColumns(2)}
                aria-label="2-column layout"
                className={`p-2 transition-colors cursor-pointer ${
                  gridColumns === 2 ? 'bg-[#1A1A1A] text-white' : 'text-[#777] hover:text-[#1A1A1A]'
                }`}
              >
                <Grid2X2 size={15} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-[#FAF8F5] border border-[#D8D2C5] text-[#141414] px-4 py-2.5 pr-8 text-xs uppercase tracking-wider font-semibold rounded-xs focus:outline-none focus:border-[#141414] cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="best-selling">Sort: Best Selling</option>
                <option value="price-asc">Sort: Price (Low to High)</option>
                <option value="price-desc">Sort: Price (High to Low)</option>
                <option value="newest">Sort: Newest</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#736C61] pointer-events-none" />
            </div>

          </div>

        </div>

        {/* 3. Filter Collapsible Drawer / Sidebar Overlay */}
        {isFilterDrawerOpen && (
          <div className="bg-[#F2ECE3] p-6 mb-8 border border-[#E0D8CB] rounded-xs animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DBD0] mb-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#141414]">
                Refine Selection
              </span>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="text-xs text-[#736C61] hover:text-[#141414] cursor-pointer"
              >
                Close Filters
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Filter 1: Size */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A453E] block mb-2.5">
                  Size
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {allSizes.map(sz => (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider border rounded-xs transition-colors cursor-pointer ${
                        selectedSizes.includes(sz)
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-[#FAF8F5] text-[#4A453E] border-[#D4CCC0] hover:border-[#141414]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter 2: Color */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A453E] block mb-2.5">
                  Palette Tone
                </span>
                <div className="space-y-1.5">
                  {allColors.map(c => {
                    const key = c.label.split(' / ')[0];
                    const isChecked = selectedColors.includes(key);
                    return (
                      <button
                        key={c.label}
                        onClick={() => toggleColor(c.label)}
                        className="flex items-center gap-2 text-xs text-[#3D3A35] hover:text-[#141414] w-full text-left py-0.5 cursor-pointer"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full border border-black/20 ${isChecked ? 'ring-2 ring-[#141414] ring-offset-1' : ''}`}
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className={isChecked ? 'font-semibold text-[#141414]' : ''}>
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter 3: Price Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A453E]">
                    Max Price
                  </span>
                  <span className="text-xs font-bold text-[#141414]">{formatPrice(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={350}
                  step={10}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#141414] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C8375] mt-1">
                  <span>{formatPrice(40)}</span>
                  <span>{formatPrice(350)}</span>
                </div>
              </div>

              {/* Filter 4: In Stock Availability */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A453E] block mb-2.5">
                  Availability
                </span>
                <label className="flex items-center gap-2 text-xs text-[#3D3A35] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="rounded accent-[#141414] w-4 h-4"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

            </div>
          </div>
        )}

        {/* 4. Active Filters Chips Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-wider text-[#8C8375] font-medium mr-1">
              Active Filters:
            </span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E1D5] text-[#141414] rounded-full text-xs font-medium">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="cursor-pointer hover:text-black"><X size={12} /></button>
              </span>
            )}
            {selectedSizes.map(sz => (
              <span key={sz} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E1D5] text-[#141414] rounded-full text-xs font-medium">
                Size: {sz}
                <button onClick={() => toggleSize(sz)} className="cursor-pointer hover:text-black"><X size={12} /></button>
              </span>
            ))}
            {selectedColors.map(c => (
              <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E1D5] text-[#141414] rounded-full text-xs font-medium">
                Color: {c}
                <button onClick={() => setSelectedColors(prev => prev.filter(item => item !== c))} className="cursor-pointer hover:text-black"><X size={12} /></button>
              </span>
            ))}
            {maxPrice < 350 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E1D5] text-[#141414] rounded-full text-xs font-medium">
                Under {formatPrice(maxPrice)}
                <button onClick={() => setMaxPrice(350)} className="cursor-pointer hover:text-black"><X size={12} /></button>
              </span>
            )}
            {onlyInStock && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E1D5] text-[#141414] rounded-full text-xs font-medium">
                In Stock Only
                <button onClick={() => setOnlyInStock(false)} className="cursor-pointer hover:text-black"><X size={12} /></button>
              </span>
            )}
          </div>
        )}

        {/* 5. Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="font-serif text-3xl text-[#141414] mb-3 font-normal">
              No matching pieces found
            </h3>
            <p className="text-sm text-[#736C61] max-w-sm mx-auto mb-6">
              We couldn't find any products matching your specific filters. Try resetting the filters to view the full collection.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-8 py-3.5 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#2C2B29] cursor-pointer shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            gridColumns === 4
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showCategory={selectedCategory === 'all'} 
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
