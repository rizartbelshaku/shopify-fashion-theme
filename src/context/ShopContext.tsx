import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, AppView, Currency, ToastMessage, ShopifyThemeSettings } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  // Navigation
  view: AppView;
  currentRoute: AppView;
  navigateTo: (newView: AppView) => void;
  goBack: () => void;
  
  // Cart
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  freeShippingProgress: number;
  orderNote: string;
  setOrderNote: (note: string) => void;
  appliedDiscountCode: string | null;
  discountPercentage: number;
  discountAmount: number;
  finalTotal: number;
  addToCart: (product: Product, color?: string, size?: string, quantity?: number) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  removeDiscountCode: () => void;

  // Wishlist
  wishlist: string[];
  wishlistProducts: Product[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Product[];

  // Drawers & Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  sizeGuideCategory: 'women' | 'men';
  openSizeGuide: (category: 'women' | 'men') => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isThemeEditorOpen: boolean;
  setIsThemeEditorOpen: (open: boolean) => void;

  // Currency & Formatting
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInEur: number) => string;

  // Toasts
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'error', image?: string) => void;
  removeToast: (id: string) => void;

  // Theme Settings
  themeSettings: ShopifyThemeSettings;
  updateThemeSettings: (settings: Partial<ShopifyThemeSettings>) => void;
}

const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  EUR: { symbol: '€', rate: 1 },
  USD: { symbol: '$', rate: 1.09 },
  GBP: { symbol: '£', rate: 0.85 },
};

const DEFAULT_THEME_SETTINGS: ShopifyThemeSettings = {
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
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation state
  const [viewHistory, setViewHistory] = useState<AppView[]>([{ type: 'home' }]);
  const view = viewHistory[viewHistory.length - 1] || { type: 'home' };

  const navigateTo = (newView: AppView) => {
    setViewHistory(prev => [...prev, newView]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (viewHistory.length > 1) {
      setViewHistory(prev => prev.slice(0, prev.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateTo({ type: 'home' });
    }
  };

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('velora_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'prod-w-01-Stone Beige-S',
          product: PRODUCTS[0],
          selectedColor: 'Stone Beige',
          selectedSize: 'S',
          quantity: 1,
          unitPrice: 189
        }
      ];
    } catch {
      return [];
    }
  });

  const [orderNote, setOrderNote] = useState<string>('');
  const [appliedDiscountCode, setAppliedDiscountCode] = useState<string | null>(null);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  // Wishlist State (Persisted)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('velora_wishlist');
      return saved ? JSON.parse(saved) : ['prod-w-01', 'prod-a-02'];
    } catch {
      return ['prod-w-01', 'prod-a-02'];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState<'women' | 'men'>('women');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isThemeEditorOpen, setIsThemeEditorOpen] = useState(false);

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Currency
  const [currency, setCurrency] = useState<Currency>('EUR');

  // Theme Settings
  const [themeSettings, setThemeSettings] = useState<ShopifyThemeSettings>(() => {
    try {
      const saved = localStorage.getItem('velora_theme_settings');
      return saved ? { ...DEFAULT_THEME_SETTINGS, ...JSON.parse(saved) } : DEFAULT_THEME_SETTINGS;
    } catch {
      return DEFAULT_THEME_SETTINGS;
    }
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velora_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('velora_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('velora_theme_settings', JSON.stringify(themeSettings));
    } catch (e) {
      console.error(e);
    }
  }, [themeSettings]);

  // Calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const freeShippingThreshold = themeSettings.freeShippingThreshold;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  
  const discountAmount = Math.round(cartSubtotal * (discountPercentage / 100));
  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  // Cart operations
  const addToCart = (product: Product, color?: string, size?: string, quantity: number = 1) => {
    const selectedColor = color || (product.colors[0]?.name ?? 'Default');
    const selectedSize = size || (product.sizes[0] ?? 'One Size');
    const itemId = `${product.id}-${selectedColor}-${selectedSize}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: itemId,
            product,
            selectedColor,
            selectedSize,
            quantity,
            unitPrice: product.price
          }
        ];
      }
    });

    addToast(
      'Added to Bag',
      `${product.name} (${selectedSize} / ${selectedColor})`,
      'success',
      product.images[0]
    );

    setIsCartOpen(true);
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
    addToast('Item removed', 'Your bag has been updated.', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyDiscountCode = (code: string) => {
    const normalized = code.trim().toUpperCase();
    if (normalized === 'VELORA10') {
      setAppliedDiscountCode('VELORA10');
      setDiscountPercentage(10);
      addToast('Promo Applied', '10% discount applied to your order!', 'success');
      return { success: true, message: '10% discount applied!' };
    } else if (normalized === 'WELCOME15' || normalized === 'VIP15') {
      setAppliedDiscountCode(normalized);
      setDiscountPercentage(15);
      addToast('VIP Promo Applied', '15% welcome discount applied!', 'success');
      return { success: true, message: '15% welcome discount applied!' };
    } else if (normalized === 'FREESHIP') {
      setAppliedDiscountCode('FREESHIP');
      setDiscountPercentage(5);
      addToast('Promo Applied', 'Extra 5% discount applied!', 'success');
      return { success: true, message: 'Special promo applied!' };
    } else {
      addToast('Invalid Code', 'Please check the promotional code.', 'error');
      return { success: false, message: 'Invalid promo code. Try VELORA10 or WELCOME15.' };
    }
  };

  const removeDiscountCode = () => {
    setAppliedDiscountCode(null);
    setDiscountPercentage(0);
    addToast('Promo Removed', 'Discount removed from your order.', 'info');
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from Wishlist', product?.name || 'Item', 'info');
        return prev.filter(id => id !== productId);
      } else {
        addToast('Saved to Wishlist', product?.name || 'Item', 'success', product?.images[0]);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  // Search Results
  const searchResults = searchQuery.trim() === ''
    ? []
    : PRODUCTS.filter(p => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some(tag => tag.toLowerCase().includes(q))
        );
      });

  // Size Guide trigger
  const openSizeGuide = (category: 'women' | 'men') => {
    setSizeGuideCategory(category);
    setIsSizeGuideOpen(true);
  };

  // Quick View
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Price formatting
  const formatPrice = (amountInEur: number) => {
    const config = CURRENCY_RATES[currency];
    const converted = Math.round(amountInEur * config.rate);
    return `${config.symbol}${converted}`;
  };

  // Toasts
  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success', image?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev.slice(-3), { id, title, message, type, image }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Theme settings updater
  const updateThemeSettings = (newSettings: Partial<ShopifyThemeSettings>) => {
    setThemeSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <ShopContext.Provider
      value={{
        view,
        currentRoute: view,
        navigateTo,
        goBack,
        cart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        amountUntilFreeShipping,
        freeShippingProgress,
        orderNote,
        setOrderNote,
        appliedDiscountCode,
        discountPercentage,
        discountAmount,
        finalTotal,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        applyDiscountCode,
        removeDiscountCode,
        wishlist,
        wishlistProducts,
        toggleWishlist,
        isWishlisted,
        searchQuery,
        setSearchQuery,
        searchResults,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isAccountOpen,
        setIsAccountOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        sizeGuideCategory,
        openSizeGuide,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isThemeEditorOpen,
        setIsThemeEditorOpen,
        currency,
        setCurrency,
        formatPrice,
        toasts,
        addToast,
        removeToast,
        themeSettings,
        updateThemeSettings
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
