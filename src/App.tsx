import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNavDrawer } from './components/MobileNavDrawer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { AccountModal } from './components/AccountModal';
import { ShopifyThemeInspector } from './components/ShopifyThemeInspector';
import { ToastContainer } from './components/ToastContainer';

import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { AboutView } from './views/AboutView';
import { FaqView } from './views/FaqView';
import { JournalView } from './views/JournalView';

const MainContent: React.FC = () => {
  const { view, currentRoute } = useShop();
  const activeView = view || currentRoute || { type: 'home' };

  // Render view based on route state
  const renderView = () => {
    switch (activeView?.type) {
      case 'home':
        return <HomeView />;
      case 'collection':
        return <CollectionView initialCategory={(activeView as any).category || 'all'} />;
      case 'product':
        return <ProductDetailView productId={(activeView as any).productId || 'prod-w-01'} />;
      case 'cart':
        return <CartView />;
      case 'checkout':
        return <CheckoutView />;
      case 'about':
        return <AboutView />;
      case 'faq':
        return <FaqView />;
      case 'journal':
        return <JournalView />;
      default:
        return <HomeView />;
    }
  };

  const isCheckout = activeView?.type === 'checkout';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-[#FAF9F6]">
      {/* Header & Announcement Bar (hidden on checkout for distraction-free flow) */}
      {!isCheckout && (
        <>
          <AnnouncementBar />
          <Header />
        </>
      )}

      {/* Primary Main View Container */}
      <main className="flex-1 w-full">
        {renderView()}
      </main>

      {/* Footer */}
      {!isCheckout && <Footer />}

      {/* Global Modals & Drawers */}
      <MobileNavDrawer />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <QuickViewModal />
      <SizeGuideModal />
      <AccountModal />
      <ShopifyThemeInspector />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
