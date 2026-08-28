import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { NewArrivalsSection } from '../components/NewArrivalsSection';
import { PromotionalBanner } from '../components/PromotionalBanner';
import { BestSellersSection } from '../components/BestSellersSection';
import { EditorialStorySection } from '../components/EditorialStorySection';
import { BenefitsSection } from '../components/BenefitsSection';
import { NewsletterSection } from '../components/NewsletterSection';

export const HomeView: React.FC = () => {
  return (
    <div id="home-view" className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Categories ("SHOP THE COLLECTION") */}
      <FeaturedCategories />

      {/* 3. New Arrivals ("NEW ARRIVALS") */}
      <NewArrivalsSection />

      {/* 4. Promotional Banner ("TIMELESS BY DESIGN") */}
      <PromotionalBanner />

      {/* 5. Best Sellers ("THE VELORA EDIT") */}
      <BestSellersSection />

      {/* 6. Editorial Story Section ("OUR PHILOSOPHY - LESS, BUT BETTER.") */}
      <EditorialStorySection />

      {/* 7. Benefits Section (4 pillars) */}
      <BenefitsSection />

      {/* 8. Newsletter Section ("STAY IN THE KNOW") */}
      <NewsletterSection />
    </div>
  );
};
