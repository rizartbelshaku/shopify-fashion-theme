import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // WOMEN'S COLLECTION
  // -------------------------------------------------------------
  {
    id: 'prod-w-01',
    handle: 'elena-structured-blazer',
    name: 'Elena Structured Blazer',
    subtitle: 'Tailored virgin wool blend',
    category: 'women',
    collection: 'Tailoring & Outerwear',
    price: 189,
    compareAtPrice: 229,
    rating: 4.9,
    reviewsCount: 38,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 8,
    sku: 'VEL-W-BLZ-001',
    description: 'A refined tailored blazer designed with a structured silhouette, sharp peak lapels, and contemporary proportions. Crafted from a premium virgin wool blend woven in Biella, Italy.',
    details: [
      'Double-breasted front with horn-effect buttons',
      'Structured padded shoulders and waist darts',
      'Dual flap pockets and interior chest pocket',
      'Fully lined with silky cupro fabric',
      'Clean vented back for fluid movement'
    ],
    materials: '65% Virgin Wool, 25% Polyamide, 10% Cashmere. Lining: 100% Cupro.',
    fit: 'Relaxed tailored fit. True to size. Take your normal size for a tailored drape or size up for an oversized silhouette.',
    care: 'Dry clean only. Steam at low temperature. Do not tumble dry.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stone Beige', hex: '#D8CFC4', imageIndex: 0 },
      { name: 'Oatmeal Melange', hex: '#C2B8AA', imageIndex: 1 },
      { name: 'Noir Black', hex: '#1C1B1A', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop', // Studio blazer model
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop', // Model portrait luxury
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1200&auto=format&fit=crop', // Texture / detail
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop'  // Editorial atmosphere
    ],
    tags: ['blazer', 'wool', 'tailoring', 'outerwear', 'best seller'],
    createdAt: '2026-08-01'
  },
  {
    id: 'prod-w-02',
    handle: 'mira-tailored-trousers',
    name: 'Mira Tailored Trousers',
    subtitle: 'High-waisted wide-leg cut',
    category: 'women',
    collection: 'Tailoring & Outerwear',
    price: 129,
    compareAtPrice: 149,
    rating: 4.8,
    reviewsCount: 26,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
    stockCount: 14,
    sku: 'VEL-W-TRS-002',
    description: 'High-waisted trousers with crisp front pleats, slant side pockets, and an elongated wide-leg silhouette that pairs seamlessly with minimalist loafers or structured boots.',
    details: [
      'High-rise waist with concealed zip and bar closure',
      'Deep pressed front pleats',
      'Clean welt back pockets',
      'Subtle internal waist adjuster tab'
    ],
    materials: '70% Wool Gabardine, 28% Viscose, 2% Elastane for slight comfort stretch.',
    fit: 'High rise, wide leg silhouette. Inseam: 82cm.',
    care: 'Dry clean or gentle hand wash cold. Dry flat.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal', hex: '#D7CEC2', imageIndex: 0 },
      { name: 'Charcoal Noir', hex: '#2A2928', imageIndex: 1 },
      { name: 'Warm Taupe', hex: '#9E9484', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['trousers', 'pants', 'tailoring', 'office', 'new'],
    createdAt: '2026-08-04'
  },
  {
    id: 'prod-w-03',
    handle: 'sofia-knit-dress',
    name: 'Sofia Ribbed Knit Dress',
    subtitle: 'Fine merino wool and silk',
    category: 'women',
    collection: 'Cashmere & Knitwear',
    price: 149,
    compareAtPrice: 179,
    rating: 5.0,
    reviewsCount: 42,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 5,
    sku: 'VEL-W-DRS-003',
    description: 'An understated midi dress knitted in delicate ribbed stitch from extra-fine Australian Merino wool and mulberry silk. Features a high mock neck and subtle side vent.',
    details: [
      'Subtle mock-neck collar',
      'Engineered ribbing that flatters natural contours',
      'Side walking split at calf length',
      'Seamless knitted sleeve cuffs'
    ],
    materials: '75% Extra-Fine Merino Wool, 25% Mulberry Silk.',
    fit: 'Form-fitting through bodice and waist with gentle drape at hem. Stretches comfortably.',
    care: 'Hand wash cold using wool detergent. Reshape while damp and dry flat.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Ecru Ivory', hex: '#F0EBE1', imageIndex: 0 },
      { name: 'Muted Taupe', hex: '#A3998D', imageIndex: 1 },
      { name: 'Espresso', hex: '#3B332B', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['dress', 'knitwear', 'merino', 'midi', 'best seller'],
    createdAt: '2026-07-20'
  },
  {
    id: 'prod-w-04',
    handle: 'alba-leather-shoulder-bag',
    name: 'Alba Leather Shoulder Bag',
    subtitle: 'Full-grain Italian calfskin',
    category: 'accessories',
    collection: 'Leather Goods',
    price: 179,
    compareAtPrice: 210,
    rating: 4.9,
    reviewsCount: 54,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 9,
    sku: 'VEL-A-BAG-004',
    description: 'Sculptural shoulder bag crafted from buttery full-grain Italian calfskin with brushed pale brass hardware and magnetic fold-over flap.',
    details: [
      'Adjustable leather shoulder strap for crossbody or shoulder carry',
      'Concealed dual magnetic snap closure',
      'Internal slip compartment and zip pocket',
      'Protective brass base studs',
      'Debossed subtle VELORA monogram'
    ],
    materials: '100% Certified Italian Calfskin Leather. Microfiber suede interior lining.',
    fit: 'Dimensions: W 28cm x H 18cm x D 9cm. Strap drop: 24-48cm.',
    care: 'Store in provided cotton dust bag. Treat with neutral leather balm periodically.',
    sizes: ['One Size'],
    colors: [
      { name: 'Butter Sand', hex: '#D2C1AC', imageIndex: 0 },
      { name: 'Rich Espresso', hex: '#382D24', imageIndex: 1 },
      { name: 'Pure Noir', hex: '#171615', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['bag', 'leather', 'accessories', 'handbag', 'best seller'],
    createdAt: '2026-07-28'
  },
  {
    id: 'prod-w-05',
    handle: 'celeste-cashmere-turtleneck',
    name: 'Celeste Cashmere Turtleneck',
    subtitle: 'Grade-A Inner Mongolian cashmere',
    category: 'essentials',
    collection: 'Cashmere & Knitwear',
    price: 165,
    compareAtPrice: 195,
    rating: 4.9,
    reviewsCount: 31,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 11,
    sku: 'VEL-W-KNIT-005',
    description: 'An indulgent, ultra-soft knit spun from 2-ply 100% Grade-A Mongolian cashmere with a ribbed rollneck and relaxed raglan sleeves.',
    details: [
      '2-ply yarn for optimal warmth without bulk',
      'Comfortable non-restrictive rollneck',
      'Fine ribbed hem and cuff trims',
      'Pilling-resistant dense gauge knit'
    ],
    materials: '100% Sustainable Grade-A Mongolian Cashmere.',
    fit: 'Slightly relaxed boxy drape. Falls at high hip.',
    care: 'Hand wash in lukewarm water with cashmere shampoo or dry clean.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Oatmeal', hex: '#D6CBC0', imageIndex: 0 },
      { name: 'Chalk White', hex: '#FAF7F0', imageIndex: 1 },
      { name: 'Dark Slate', hex: '#3E4146', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['cashmere', 'knit', 'sweater', 'turtleneck', 'essentials'],
    createdAt: '2026-08-03'
  },
  {
    id: 'prod-w-06',
    handle: 'camilla-silk-slip-skirt',
    name: 'Camilla Silk Slip Skirt',
    subtitle: 'Heavyweight mulberry silk satin',
    category: 'women',
    collection: 'Silk & Essentials',
    price: 119,
    compareAtPrice: 139,
    rating: 4.7,
    reviewsCount: 19,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
    stockCount: 16,
    sku: 'VEL-W-SKT-006',
    description: 'Cut on the bias for an effortless liquid drape, this midi skirt is cut from 19-momme pure mulberry silk with a concealed elasticated waistband.',
    details: [
      'Bias cut for fluid silhouette and flattering drape',
      'Discreet flat elastic waistband',
      'French seamed interior finish',
      'Hits at mid-calf'
    ],
    materials: '100% 19-Momme Grade-6A Mulberry Silk.',
    fit: 'Bias cut molds gently to hips. True to size.',
    care: 'Hand wash cold or gentle machine wash inside mesh bag with silk detergent.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne Beige', hex: '#E2D5C3', imageIndex: 0 },
      { name: 'Midnight Noir', hex: '#16181B', imageIndex: 1 },
      { name: 'Olive Gray', hex: '#6E7065', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['skirt', 'silk', 'slip', 'women', 'tailored'],
    createdAt: '2026-08-08'
  },

  // -------------------------------------------------------------
  // MEN'S COLLECTION
  // -------------------------------------------------------------
  {
    id: 'prod-m-01',
    handle: 'luca-overshirt',
    name: 'Luca Structured Overshirt',
    subtitle: 'Heavy brushed organic cotton twill',
    category: 'men',
    collection: 'Outerwear & Layering',
    price: 139,
    compareAtPrice: 165,
    rating: 4.9,
    reviewsCount: 45,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 12,
    sku: 'VEL-M-OVS-001',
    description: 'An architectural layering staple crafted in heavyweight 380gsm organic brushed cotton twill with dual chest patch pockets and matte horn buttons.',
    details: [
      'Straight boxy cut with subtle drop shoulders',
      'Dual chest flap pockets with concealed buttons',
      'Buttoned sleeve cuffs and curved hem',
      'Pre-washed for vintage softened hand-feel'
    ],
    materials: '100% GOTS-Certified Heavyweight Organic Cotton Twill (380 GSM).',
    fit: 'Relaxed boxy cut designed for layering over t-shirts and light sweaters.',
    care: 'Machine wash 30°C delicate. Hang to dry in shade.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Stone Sand', hex: '#CBC2B4', imageIndex: 0 },
      { name: 'Washed Olive', hex: '#636554', imageIndex: 1 },
      { name: 'Dark Ink', hex: '#1C2026', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop', // Men stylish overshirt model
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop', // Editorial tailoring
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop', // Close up shirt fabric
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop'  // Portrait aesthetic
    ],
    tags: ['overshirt', 'jacket', 'cotton', 'men', 'layering', 'best seller'],
    createdAt: '2026-08-02'
  },
  {
    id: 'prod-m-02',
    handle: 'matteo-relaxed-shirt',
    name: 'Matteo Relaxed Linen Shirt',
    subtitle: 'Normandy long-staple flax linen',
    category: 'men',
    collection: 'Shirting',
    price: 89,
    compareAtPrice: 110,
    rating: 4.8,
    reviewsCount: 34,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 18,
    sku: 'VEL-M-SHT-002',
    description: 'Spun from airy French flax linen with a camp collar and mother-of-pearl buttons. Breathable, durable, and naturally softens with every wash.',
    details: [
      'Classic camp Cuban collar',
      'Genuine mother-of-pearl button placket',
      'Side seam reinforcement gussets',
      'Garment dyed for nuanced tonal depth'
    ],
    materials: '100% Pure Normandy Flax Linen (160 GSM).',
    fit: 'Relaxed casual fit with straight hem.',
    care: 'Machine wash warm with like colors. Line dry.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Crisp Chalk', hex: '#F6F3EC', imageIndex: 0 },
      { name: 'Oatmeal Taupe', hex: '#BFB5A5', imageIndex: 1 },
      { name: 'Deep Sage', hex: '#7A8072', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['shirt', 'linen', 'men', 'summer', 'essentials'],
    createdAt: '2026-07-15'
  },
  {
    id: 'prod-m-03',
    handle: 'adrian-wool-coat',
    name: 'Adrian Wool Overcoat',
    subtitle: 'Double-faced Melton wool',
    category: 'men',
    collection: 'Outerwear & Layering',
    price: 249,
    compareAtPrice: 295,
    rating: 5.0,
    reviewsCount: 29,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 6,
    sku: 'VEL-M-COT-003',
    description: 'A benchmark investment piece. Longline single-breasted overcoat tailored from heavy Melton wool with unpadded shoulders for a modern, fluid silhouette.',
    details: [
      'Single-breasted 3-button closure',
      'Notched lapel with throat tab',
      'Welt handwarmer pockets and deep interior passport pocket',
      'Satin-lined sleeves for smooth on-and-off layering',
      'Single center vent'
    ],
    materials: '80% Recycled Melton Wool, 20% Polyamide. Sleeve Lining: 100% Viscose.',
    fit: 'Tailored overcoat fit. Length reaches just below knee.',
    care: 'Professional dry clean only.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Camel Tan', hex: '#B89772', imageIndex: 0 },
      { name: 'Charcoal Melange', hex: '#373A3E', imageIndex: 1 },
      { name: 'Espresso Brown', hex: '#3D3128', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['coat', 'overcoat', 'wool', 'men', 'winter', 'best seller'],
    createdAt: '2026-08-05'
  },
  {
    id: 'prod-m-04',
    handle: 'marco-straight-trousers',
    name: 'Marco Straight Trousers',
    subtitle: 'Italian stretch cotton gabardine',
    category: 'men',
    collection: 'Tailoring & Outerwear',
    price: 119,
    compareAtPrice: 135,
    rating: 4.8,
    reviewsCount: 22,
    isNewArrival: false,
    isBestSeller: false,
    inStock: true,
    stockCount: 15,
    sku: 'VEL-M-TRS-004',
    description: 'Clean mid-rise trousers with a straight leg profile, discreet ticket pocket, and a clean hook-and-eye waist closure.',
    details: [
      'Mid-rise waist with internal grip band',
      'Dual slash side pockets and welt back pockets',
      'Unfinished hem allows custom bespoke tailoring'
    ],
    materials: '97% Compact Organic Cotton, 3% Elastane.',
    fit: 'Straight leg cut from hip to ankle. Mid rise.',
    care: 'Machine wash cold inside out. Warm iron if needed.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Stone Grey', hex: '#BFB9AE', imageIndex: 0 },
      { name: 'Dark Navy', hex: '#1E2530', imageIndex: 1 },
      { name: 'Olive Khaki', hex: '#585C4F', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['trousers', 'pants', 'men', 'gabardine'],
    createdAt: '2026-07-10'
  },
  {
    id: 'prod-m-05',
    handle: 'julian-merino-crewneck',
    name: 'Julian Merino Crewneck',
    subtitle: '100% fine Italian spun yarn',
    category: 'essentials',
    collection: 'Cashmere & Knitwear',
    price: 109,
    compareAtPrice: 129,
    rating: 4.9,
    reviewsCount: 39,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 20,
    sku: 'VEL-M-KNT-005',
    description: 'A year-round essential knit in 14-gauge Italian merino wool. Temperature regulating, naturally odor-resistant, and pill-resistant.',
    details: [
      'Micro-ribbed crew neckline',
      'Fully fashioned shoulder saddle construction',
      'Ultra-fine yarn for lightweight thermal comfort'
    ],
    materials: '100% Extra-fine Merino Wool (Zegna Baruffa lane).',
    fit: 'Slim tailored fit. Size up for a relaxed fit.',
    care: 'Hand wash cold or wool cycle. Dry flat.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Oatmeal', hex: '#CEC5B7', imageIndex: 0 },
      { name: 'Charcoal', hex: '#313337', imageIndex: 1 },
      { name: 'Midnight', hex: '#161922', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['sweater', 'merino', 'crewneck', 'men', 'essentials'],
    createdAt: '2026-07-22'
  },

  // -------------------------------------------------------------
  // ACCESSORIES COLLECTION
  // -------------------------------------------------------------
  {
    id: 'prod-a-01',
    handle: 'vela-leather-belt',
    name: 'Vela Leather Belt',
    subtitle: 'Hand-burnished vegetable-tanned bridle leather',
    category: 'accessories',
    collection: 'Leather Goods',
    price: 59,
    compareAtPrice: 75,
    rating: 4.8,
    reviewsCount: 41,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 22,
    sku: 'VEL-A-BLT-001',
    description: '30mm classic leather belt handmade in Florence using vegetable-tanned Tuscan leather and a brushed solid brass buckle.',
    details: [
      '30mm belt width suitable for formal trousers and denim',
      'Solid brushed brass hardware buckle',
      'Beveled and burnished edges',
      '5-hole adjustment spacing'
    ],
    materials: '100% Full-grain Tuscan Vegetable-Tanned Cowhide.',
    fit: 'Order your waist size plus 2 inches for optimal fit.',
    care: 'Condition with beeswax leather cream yearly.',
    sizes: ['80cm', '85cm', '90cm', '95cm', '100cm'],
    colors: [
      { name: 'Cognac Tan', hex: '#875132', imageIndex: 0 },
      { name: 'Dark Chocolate', hex: '#3B291D', imageIndex: 1 },
      { name: 'Pitch Black', hex: '#141414', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['belt', 'leather', 'accessories', 'essentials'],
    createdAt: '2026-07-12'
  },
  {
    id: 'prod-a-02',
    handle: 'aura-minimal-watch',
    name: 'Aura Minimal Watch',
    subtitle: 'Sapphire crystal & Swiss quartz movement',
    category: 'accessories',
    collection: 'Timepieces & Eyewear',
    price: 149,
    compareAtPrice: 185,
    rating: 5.0,
    reviewsCount: 62,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 7,
    sku: 'VEL-A-WTC-002',
    description: 'An architectural 38mm timepiece with an ultra-slim 6.8mm stainless steel casing, scratch-resistant sapphire crystal, and interchangeable Italian calfskin strap.',
    details: [
      '38mm diameter, 6.8mm profile case',
      'Swiss Ronda 762 quartz movement (accuracy: -10/+20 sec/mo)',
      'Anti-reflective coated sapphire crystal glass',
      '5 ATM water resistance (50 meters)',
      'Quick-release leather strap pin'
    ],
    materials: '316L Surgical Stainless Steel casing. Genuine Italian leather strap.',
    fit: 'Unisex 38mm dial fits wrists 145mm to 205mm.',
    care: 'Avoid hot water and saunas. Wipe clean with microfiber cloth.',
    sizes: ['38mm Dial'],
    colors: [
      { name: 'Brushed Silver / Ecru', hex: '#C7C5BF', imageIndex: 0 },
      { name: 'Brushed Gold / Black', hex: '#CCA668', imageIndex: 1 },
      { name: 'All Noir', hex: '#1C1C1D', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['watch', 'timepiece', 'accessories', 'luxury', 'best seller'],
    createdAt: '2026-08-01'
  },
  {
    id: 'prod-a-03',
    handle: 'nova-leather-wallet',
    name: 'Nova Bifold Leather Wallet',
    subtitle: 'Slim profile with RFID shielding',
    category: 'accessories',
    collection: 'Leather Goods',
    price: 69,
    compareAtPrice: 85,
    rating: 4.8,
    reviewsCount: 37,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 19,
    sku: 'VEL-A-WLT-003',
    description: 'Precision folded cardholder and wallet holding up to 8 cards plus unfolded bank notes in a slim 8mm silhouette.',
    details: [
      '6 dedicated card slots + 2 hidden receipt compartments',
      'Full length bill fold compartment',
      'Integrated RFID-blocking mesh lining',
      'Hand-stitched perimeter with waxed linen thread'
    ],
    materials: '100% Full Grain Nappa Leather.',
    fit: 'Dimensions: 10.5cm x 8.5cm x 0.8cm (closed).',
    care: 'Wipe clean with a damp soft cloth.',
    sizes: ['One Size'],
    colors: [
      { name: 'Oatmeal Sand', hex: '#C7BDAD', imageIndex: 0 },
      { name: 'Dark Caramel', hex: '#7D4D2B', imageIndex: 1 },
      { name: 'Matte Charcoal', hex: '#262627', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['wallet', 'leather', 'cardholder', 'accessories'],
    createdAt: '2026-07-18'
  },
  {
    id: 'prod-a-04',
    handle: 'siena-sunglasses',
    name: 'Siena Acetate Sunglasses',
    subtitle: 'Handcrafted Italian Mazzucchelli acetate',
    category: 'accessories',
    collection: 'Timepieces & Eyewear',
    price: 89,
    compareAtPrice: 110,
    rating: 4.9,
    reviewsCount: 28,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
    stockCount: 11,
    sku: 'VEL-A-SGL-004',
    description: 'Sculpted rectangular silhouette crafted from plant-derived Italian acetate with polarized category 3 UV400 lenses.',
    details: [
      '100% UVA/UVB Category 3 optical protection',
      '5-barrel OBE German hinges for lifelong tension',
      'Includes custom hard case and microfiber cleaning cloth'
    ],
    materials: 'Mazzucchelli 1849 Bio-Acetate frames with polarized nylon lenses.',
    fit: 'Frame width: 142mm. Bridge: 20mm. Temple length: 145mm.',
    care: 'Clean with warm water and microfiber cloth. Store in protective case.',
    sizes: ['One Size'],
    colors: [
      { name: 'Tortoiseshell Amber', hex: '#634426', imageIndex: 0 },
      { name: 'Polished Black', hex: '#161616', imageIndex: 1 },
      { name: 'Translucent Champagne', hex: '#D6C8B4', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['sunglasses', 'eyewear', 'acetate', 'accessories', 'summer'],
    createdAt: '2026-08-06'
  },
  {
    id: 'prod-a-05',
    handle: 'claire-silk-scarf',
    name: 'Claire Hand-Rolled Silk Scarf',
    subtitle: 'Architectural monochrome motif',
    category: 'accessories',
    collection: 'Silk & Essentials',
    price: 79,
    compareAtPrice: 95,
    rating: 4.9,
    reviewsCount: 18,
    isNewArrival: false,
    isBestSeller: false,
    inStock: true,
    stockCount: 14,
    sku: 'VEL-A-SCF-005',
    description: '70cm x 70cm square scarf screen-printed on lustrous 14mm silk twill with artisanal hand-rolled and hand-sewn edges.',
    details: [
      '70 x 70 cm square format',
      'Traditional hand-rolled hem finish',
      'Original geometric architectural print'
    ],
    materials: '100% Mulberry Silk Twill (14 Momme).',
    fit: '70 x 70 cm.',
    care: 'Dry clean only or delicate cold hand wash.',
    sizes: ['70x70cm'],
    colors: [
      { name: 'Ivory / Charcoal Motif', hex: '#ECE7DC', imageIndex: 0 },
      { name: 'Sand / Mocha Motif', hex: '#B8A892', imageIndex: 1 }
    ],
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['scarf', 'silk', 'accessories', 'print'],
    createdAt: '2026-07-29'
  },

  // -------------------------------------------------------------
  // ESSENTIALS COLLECTION
  // -------------------------------------------------------------
  {
    id: 'prod-e-01',
    handle: 'monaco-heavyweight-tee',
    name: 'Monaco Heavyweight T-Shirt',
    subtitle: '260 GSM Supima organic jersey',
    category: 'essentials',
    collection: 'Everyday Essentials',
    price: 49,
    compareAtPrice: 59,
    rating: 4.9,
    reviewsCount: 88,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 40,
    sku: 'VEL-E-TEE-001',
    description: 'The foundation of the modern wardrobe. Dense, non-sheer 260 GSM Supima cotton with a compact rib collar that maintains its shape wash after wash.',
    details: [
      '260 GSM extra-long staple Supima cotton',
      'Twin-needle reinforced stitching on hem and cuffs',
      'Pre-shrunk fabric to minimize shrinkage',
      'Seamless tubular side body construction'
    ],
    materials: '100% Certified Organic Supima Cotton.',
    fit: 'Relaxed boxy fit with slightly longer sleeves.',
    care: 'Machine wash cold inside out. Tumble dry low or line dry.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Warm Ivory', hex: '#F7F3EB', imageIndex: 0 },
      { name: 'Slate Noir', hex: '#1B1C1E', imageIndex: 1 },
      { name: 'Oatmeal Melange', hex: '#D1C8BA', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['t-shirt', 'tee', 'cotton', 'essentials', 'unisex', 'best seller'],
    createdAt: '2026-06-15'
  },
  {
    id: 'prod-e-02',
    handle: 'verona-merino-throw',
    name: 'Verona Merino Wool Throw',
    subtitle: 'Jacquard woven fringed blanket',
    category: 'essentials',
    collection: 'Living & Lifestyle',
    price: 139,
    compareAtPrice: 169,
    rating: 5.0,
    reviewsCount: 24,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
    stockCount: 8,
    sku: 'VEL-E-BLN-002',
    description: 'Generously proportioned 140x190cm interior blanket woven from pure Scandinavian merino wool in an understated bidirectional melange weave with twisted fringe edging.',
    details: [
      '140cm x 190cm (55" x 75")',
      'Traditional rolled fringe border',
      'Super-soft brushed finish on both sides',
      'Breathable and naturally insulating'
    ],
    materials: '100% Scandinavian Pure New Merino Wool.',
    fit: '140 x 190 cm.',
    care: 'Dry clean only or delicate cold wool wash with gentle spin.',
    sizes: ['140x190cm'],
    colors: [
      { name: 'Oatmeal & Ecru', hex: '#D8D0C3', imageIndex: 0 },
      { name: 'Charcoal & Sand', hex: '#4B4946', imageIndex: 1 }
    ],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['blanket', 'throw', 'merino', 'lifestyle', 'home', 'essentials'],
    createdAt: '2026-08-07'
  },
  {
    id: 'prod-e-03',
    handle: 'ambiance-ceramic-candle',
    name: 'Santal & Fig Ceramic Candle',
    subtitle: 'Hand-poured coconut soy wax with wood wick',
    category: 'essentials',
    collection: 'Living & Lifestyle',
    price: 45,
    compareAtPrice: 55,
    rating: 4.9,
    reviewsCount: 52,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 25,
    sku: 'VEL-E-CND-003',
    description: 'Bespoke home fragrance with olfactory notes of French wild fig, charred sandalwood, warm amber, and crushed cardamom. Poured in a reusable handmade ceramic vessel.',
    details: [
      '300g / 10.5 oz net weight (approx. 65 hours burn time)',
      'FSC-certified crackling wooden wick',
      'Clean burning sustainable coconut-soy wax blend',
      'Matte stoneware ceramic cup reusable as espresso cup or brush holder'
    ],
    materials: 'Natural Coconut-Soy Wax, Fine Fragrance & Essential Oils, Ceramic Stoneware.',
    fit: '300g vessel.',
    care: 'Trim wooden wick to 5mm before each lighting. Burn for 2-3 hours initially.',
    sizes: ['300g (65h)'],
    colors: [
      { name: 'Raw Matte Bisque', hex: '#DFD8CC', imageIndex: 0 },
      { name: 'Charcoal Basalt', hex: '#333333', imageIndex: 1 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['candle', 'fragrance', 'home', 'lifestyle', 'sandalwood'],
    createdAt: '2026-07-05'
  },
  {
    id: 'prod-w-07',
    handle: 'geneva-wool-trench',
    name: 'Geneva Double-Breasted Trench',
    subtitle: 'Water-repellent wool blend twill',
    category: 'women',
    collection: 'Tailoring & Outerwear',
    price: 269,
    compareAtPrice: 320,
    rating: 5.0,
    reviewsCount: 21,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 4,
    sku: 'VEL-W-TRN-007',
    description: 'A contemporary reimagining of the classic European trench coat. Crafted in heavy structured wool twill with raglan sleeves, storm flaps, and a wide matching waist belt.',
    details: [
      'Oversized storm flap and gun flap',
      'Detachable waist belt with leather-covered buckle',
      'Adjustable wrist cuff belts',
      'Deep welt storm pockets'
    ],
    materials: '75% Virgin Wool, 20% Polyamide, 5% Elastane.',
    fit: 'Fluid relaxed fit. Model is 178cm wearing size S.',
    care: 'Dry clean only.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Oat Sand', hex: '#D6CAB8', imageIndex: 0 },
      { name: 'Deep Espresso', hex: '#372E25', imageIndex: 1 }
    ],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['trench', 'coat', 'outerwear', 'women', 'luxury'],
    createdAt: '2026-08-09'
  },
  {
    id: 'prod-m-06',
    handle: 'bruno-cashmere-scarf',
    name: 'Bruno Ribbed Cashmere Scarf',
    subtitle: 'Pure 4-ply Mongolian cashmere',
    category: 'accessories',
    collection: 'Cashmere & Knitwear',
    price: 99,
    compareAtPrice: 120,
    rating: 4.9,
    reviewsCount: 35,
    isNewArrival: false,
    isBestSeller: true,
    inStock: true,
    stockCount: 16,
    sku: 'VEL-A-SCF-006',
    description: 'Sumptuously soft ribbed knit scarf measuring 185cm x 35cm, designed to be looped comfortably or styled effortlessly over coats.',
    details: [
      '185cm length x 35cm width',
      'Substantial 4-ply gauge knit',
      'Clean ribbed edge finish'
    ],
    materials: '100% Grade-A Pure Mongolian Cashmere.',
    fit: '185 x 35 cm.',
    care: 'Hand wash cold or dry clean.',
    sizes: ['One Size'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#C9BEAF', imageIndex: 0 },
      { name: 'Charcoal Melange', hex: '#3E4145', imageIndex: 1 },
      { name: 'Midnight', hex: '#1C1F26', imageIndex: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['scarf', 'cashmere', 'accessories', 'winter', 'men'],
    createdAt: '2026-07-25'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'women',
    name: 'Women',
    tagline: 'Refined Tailoring & Silk',
    description: 'Structured silhouettes, pure silk staples, and architectural outerwear designed for modern living.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    itemCount: 8
  },
  {
    id: 'men',
    name: 'Men',
    tagline: 'Contemporary European Staples',
    description: 'Clean overshirts, tailored trousers, and Melton wool coats crafted with exceptional precision.',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
    itemCount: 6
  },
  {
    id: 'accessories',
    name: 'Accessories',
    tagline: 'Artisanal Italian Leather & Watches',
    description: 'Full-grain calfskin bags, Tuscan belts, sapphire timepieces, and hand-rolled silk scarves.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    itemCount: 7
  },
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'Timeless Foundations & Living',
    description: 'Heavyweight Supima tees, Mongolian cashmere knits, and hand-poured olfactory home fragrances.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop',
    itemCount: 5
  }
];
