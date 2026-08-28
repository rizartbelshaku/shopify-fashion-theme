import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, BookOpen } from 'lucide-react';

export const JournalView: React.FC = () => {
  const { navigateTo } = useShop();

  const articles = [
    {
      id: 1,
      title: 'The Anatomy of the Perfect Overcoat',
      category: 'Craftsmanship',
      date: 'Autumn 2026',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      summary: 'Exploring the shoulder construction, canvas chest pieces, and virgin wool weights that define our signature Adrian coat.'
    },
    {
      id: 2,
      title: 'Monochrome Living: Building a Permanent Capsule',
      category: 'Style Guide',
      date: 'Late Summer 2026',
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop',
      summary: 'Why limiting your daily palette to oatmeals, stones, and charcoal creates an effortlessly cohesive lifestyle.'
    },
    {
      id: 3,
      title: 'Inside our Biella Wool Mill Partners',
      category: 'Provenance',
      date: 'Summer 2026',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
      summary: 'A journey into the foothills of the Italian Alps where mountain spring water cleanses the world’s softest merino fleece.'
    }
  ];

  return (
    <div id="journal-page" className="w-full bg-[#FAF8F5] pb-24">
      {/* Header */}
      <div className="bg-[#F5F1EB] border-b border-[#E8E2D6] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8375] block mb-2">
            Editorial & Atelier Notes
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#141414] mb-3">
            THE VELORA JOURNAL
          </h1>
          <p className="text-xs sm:text-sm text-[#736C61] max-w-md mx-auto font-light">
            Essays on architectural tailoring, material provenance, and deliberate living.
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => navigateTo({ type: 'about' })}
            >
              <div>
                <div className="aspect-4/3 bg-[#E0D8CB] overflow-hidden rounded-xs mb-4">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#8C8375] font-semibold mb-2">
                  <span>{art.category}</span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141414] group-hover:text-[#8A6D44] transition-colors leading-snug mb-2">
                  {art.title}
                </h3>
                <p className="text-xs text-[#5C564C] font-light leading-relaxed mb-4">
                  {art.summary}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#141414] group-hover:text-[#8A6D44]">
                <span>Read Essay</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
