export type ProductCategory = 'women' | 'men' | 'accessories' | 'essentials';

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  handle: string;
  name: string;
  subtitle?: string;
  category: ProductCategory;
  collection: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  sku: string;
  inStock: boolean;
  stockCount?: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  description: string;
  details: string[];
  materials: string;
  fit: string;
  care: string;
  tags: string[];
  createdAt: string;
}

export interface CartItem {
  id: string; // unique item id (productId + color + size)
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  unitPrice: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface FilterState {
  category: string; // 'all' | 'women' | 'men' | 'accessories' | 'essentials'
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  onlyInStock: boolean;
  sortBy: 'featured' | 'best-selling' | 'price-asc' | 'price-desc' | 'newest';
  searchQuery: string;
}

export type AppView = 
  | { type: 'home' }
  | { type: 'collection'; category: string }
  | { type: 'product'; productId: string }
  | { type: 'cart' }
  | { type: 'checkout' }
  | { type: 'about' }
  | { type: 'journal' }
  | { type: 'faq' }
  | { type: 'order-confirmed'; orderNumber: string };

export type Currency = 'EUR' | 'USD' | 'GBP';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // relative to EUR
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'error';
  image?: string;
}

export interface ShopifyThemeSettings {
  announcementText: string;
  showAnnouncement: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  enableFreeShippingBar: boolean;
  freeShippingThreshold: number;
  themePalette: 'classic' | 'warm-ivory' | 'noir' | 'cashmere';
  gridColumns: 4 | 3 | 2;
  showQuickAdd: boolean;
  showRatingStars: boolean;
}
