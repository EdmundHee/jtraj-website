import type { Property } from '~/types'

export const mockProperties: Property[] = [
  {
    id: '1',
    title: '3 Bedroom Condominium at Vista Komanwel',
    description: 'Spacious 3-bedroom condominium unit with stunning city views. Well-maintained with modern fittings. Located in prime Petaling Jaya area with easy access to highways and amenities.',
    propertyType: 'condominium',
    address: 'Jalan SS2/75, Petaling Jaya',
    location: 'Petaling Jaya',
    state: 'Selangor',
    reservePrice: 350000,
    originalPrice: 420000,
    auctionDate: '2024-12-15',
    auctionTime: '10:30 AM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'RHB Bank',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop1-1/800/600',
      'https://picsum.photos/seed/prop1-2/800/600',
      'https://picsum.photos/seed/prop1-3/800/600',
      'https://picsum.photos/seed/prop1-4/800/600'
    ],
    badges: [
      { type: 'reduced', label: 'REDUCED' },
      { type: 'hot', label: 'HOT' }
    ],
    specifications: {
      builtUpArea: '1,200 sqft',
      bedrooms: 3,
      bathrooms: 2,
      carParks: 2,
      tenure: 'leasehold-99',
      lotNumber: 'PTB-12345',
      titleType: 'Strata',
      yearBuilt: 2010,
      furnishing: 'partially-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '245 KB' },
      { id: '2', name: 'Property Information', url: '#', type: 'pdf', size: '180 KB' }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Semi-Detached House in Shah Alam',
    description: '2-storey semi-detached house in established residential area. Spacious layout perfect for families. Near schools, shopping centers, and public transport.',
    propertyType: 'residential',
    address: 'Jalan Setia 8/2, Seksyen 8, Shah Alam',
    location: 'Shah Alam',
    state: 'Selangor',
    reservePrice: 580000,
    auctionDate: '2024-12-18',
    auctionTime: '2:00 PM',
    auctionVenue: 'Online eBidding Platform',
    bank: 'BSN',
    saleType: 'ebidding',
    images: [
      'https://picsum.photos/seed/prop2-1/800/600',
      'https://picsum.photos/seed/prop2-2/800/600',
      'https://picsum.photos/seed/prop2-3/800/600'
    ],
    badges: [
      { type: 'ebidding', label: 'eBIDDING' }
    ],
    specifications: {
      landArea: '3,000 sqft',
      builtUpArea: '2,400 sqft',
      bedrooms: 4,
      bathrooms: 3,
      carParks: 2,
      tenure: 'freehold',
      lotNumber: 'HS(D) 89456',
      titleType: 'Individual',
      yearBuilt: 2008,
      furnishing: 'unfurnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '320 KB' }
    ],
    featured: true
  },
  {
    id: '3',
    title: '2-Storey Commercial Shop Lot - KL City',
    description: 'Prime commercial property in busy KL city center. High foot traffic area. Suitable for retail, F&B, or office use. Corner lot with excellent visibility.',
    propertyType: 'commercial',
    address: 'Jalan Tun Razak, Kuala Lumpur',
    location: 'Kuala Lumpur',
    state: 'Kuala Lumpur',
    reservePrice: 1200000,
    auctionDate: '2024-12-20',
    auctionTime: '11:00 AM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'Affin Bank',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop3-1/800/600',
      'https://picsum.photos/seed/prop3-2/800/600',
      'https://picsum.photos/seed/prop3-3/800/600',
      'https://picsum.photos/seed/prop3-4/800/600',
      'https://picsum.photos/seed/prop3-5/800/600'
    ],
    badges: [
      { type: 'hot', label: 'HOT' },
      { type: 'featured', label: 'FEATURED' }
    ],
    specifications: {
      landArea: '1,600 sqft',
      builtUpArea: '3,200 sqft',
      tenure: 'freehold',
      lotNumber: 'GM-45678',
      titleType: 'Master Title',
      yearBuilt: 2005
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '290 KB' },
      { id: '2', name: 'Title Search', url: '#', type: 'pdf', size: '156 KB' }
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Apartment Unit in Georgetown, Penang',
    description: 'Cozy apartment in heritage Georgetown area. Close to tourist attractions and local amenities. Good rental potential.',
    propertyType: 'apartment',
    address: 'Jalan Macalister, Georgetown',
    location: 'Georgetown',
    state: 'Penang',
    reservePrice: 280000,
    auctionDate: '2024-12-22',
    auctionTime: '3:30 PM',
    auctionVenue: 'JTR Penang Office',
    bank: 'LPPSA',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop4-1/800/600',
      'https://picsum.photos/seed/prop4-2/800/600',
      'https://picsum.photos/seed/prop4-3/800/600'
    ],
    badges: [
      { type: 'new', label: 'NEW' }
    ],
    specifications: {
      builtUpArea: '950 sqft',
      bedrooms: 2,
      bathrooms: 2,
      carParks: 1,
      tenure: 'leasehold-99',
      lotNumber: 'PTD-78901',
      titleType: 'Strata',
      yearBuilt: 2012,
      furnishing: 'fully-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '210 KB' }
    ],
    featured: true
  },
  {
    id: '5',
    title: 'Agricultural Land in Kuala Kangsar, Perak',
    description: 'Flat agricultural land suitable for farming or plantation. Good soil quality with water access. Strategic location near main road.',
    propertyType: 'land',
    address: 'Kampung Sungai Durian, Kuala Kangsar',
    location: 'Kuala Kangsar',
    state: 'Perak',
    reservePrice: 150000,
    auctionDate: '2024-12-25',
    auctionTime: '10:00 AM',
    auctionVenue: 'Online eBidding Platform',
    bank: 'High Court',
    saleType: 'high-court',
    images: [
      'https://picsum.photos/seed/prop5-1/800/600',
      'https://picsum.photos/seed/prop5-2/800/600'
    ],
    badges: [],
    specifications: {
      landArea: '5 acres',
      tenure: 'freehold',
      lotNumber: 'PT-12345',
      titleType: 'Individual'
    },
    documents: [
      { id: '1', name: 'Auction Notice', url: '#', type: 'pdf', size: '198 KB' }
    ]
  },
  {
    id: '6',
    title: 'Industrial Factory in Klang',
    description: 'Detached factory with high ceiling and heavy loading capacity. Strategic location in Klang industrial area with easy highway access.',
    propertyType: 'industrial',
    address: 'Kawasan Perindustrian Klang Jaya',
    location: 'Klang',
    state: 'Selangor',
    reservePrice: 2500000,
    auctionDate: '2024-12-28',
    auctionTime: '2:30 PM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'BSN',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop6-1/800/600',
      'https://picsum.photos/seed/prop6-2/800/600',
      'https://picsum.photos/seed/prop6-3/800/600'
    ],
    badges: [],
    specifications: {
      landArea: '12,000 sqft',
      builtUpArea: '9,500 sqft',
      tenure: 'leasehold-999',
      lotNumber: 'PT-67890',
      titleType: 'Individual',
      yearBuilt: 2000
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '405 KB' },
      { id: '2', name: 'Site Plan', url: '#', type: 'pdf', size: '1.2 MB' }
    ]
  },
  {
    id: '7',
    title: 'Luxury Condominium at KLCC',
    description: 'Premium condominium unit with breathtaking KLCC and city skyline views. Full facilities including pool, gym, and 24-hour security.',
    propertyType: 'condominium',
    address: 'Persiaran KLCC',
    location: 'KLCC',
    state: 'Kuala Lumpur',
    reservePrice: 1850000,
    originalPrice: 2200000,
    auctionDate: '2024-12-30',
    auctionTime: '11:30 AM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'RHB Bank',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop7-1/800/600',
      'https://picsum.photos/seed/prop7-2/800/600',
      'https://picsum.photos/seed/prop7-3/800/600',
      'https://picsum.photos/seed/prop7-4/800/600'
    ],
    badges: [
      { type: 'featured', label: 'FEATURED' },
      { type: 'reduced', label: 'REDUCED' }
    ],
    specifications: {
      builtUpArea: '2,100 sqft',
      bedrooms: 4,
      bathrooms: 3,
      carParks: 3,
      tenure: 'freehold',
      lotNumber: 'S-12345',
      titleType: 'Strata',
      yearBuilt: 2015,
      furnishing: 'fully-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '380 KB' }
    ],
    featured: true
  },
  {
    id: '8',
    title: 'Terrace House in Subang Jaya',
    description: 'Well-maintained 2-storey terrace house in established neighborhood. Near LRT station, schools, and shopping centers.',
    propertyType: 'residential',
    address: 'Jalan SS15/4, Subang Jaya',
    location: 'Subang Jaya',
    state: 'Selangor',
    reservePrice: 685000,
    auctionDate: '2025-01-05',
    auctionTime: '10:30 AM',
    auctionVenue: 'Online eBidding Platform',
    bank: 'Bank Islam',
    saleType: 'ebidding',
    images: [
      'https://picsum.photos/seed/prop8-1/800/600',
      'https://picsum.photos/seed/prop8-2/800/600',
      'https://picsum.photos/seed/prop8-3/800/600'
    ],
    badges: [
      { type: 'ebidding', label: 'eBIDDING' },
      { type: 'new', label: 'NEW' }
    ],
    specifications: {
      landArea: '1,540 sqft',
      builtUpArea: '1,850 sqft',
      bedrooms: 4,
      bathrooms: 3,
      carParks: 2,
      tenure: 'freehold',
      lotNumber: 'GRN-45678',
      titleType: 'Individual',
      yearBuilt: 2006,
      furnishing: 'unfurnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '265 KB' }
    ]
  },
  {
    id: '9',
    title: 'Office Suite in Damansara Heights',
    description: 'Modern office suite in prestigious commercial building. Fully fitted with partitions, air-conditioning, and IT infrastructure.',
    propertyType: 'commercial',
    address: 'Jalan Semantan, Damansara Heights',
    location: 'Damansara Heights',
    state: 'Kuala Lumpur',
    reservePrice: 920000,
    auctionDate: '2025-01-08',
    auctionTime: '2:00 PM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'Affin Bank',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop9-1/800/600',
      'https://picsum.photos/seed/prop9-2/800/600'
    ],
    badges: [],
    specifications: {
      builtUpArea: '1,850 sqft',
      carParks: 4,
      tenure: 'freehold',
      lotNumber: 'S-67890',
      titleType: 'Strata',
      yearBuilt: 2018,
      furnishing: 'fully-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '310 KB' }
    ]
  },
  {
    id: '10',
    title: 'Apartment in Johor Bahru City Center',
    description: 'Strategic apartment unit in JB city center. Easy access to CIQ and Singapore. High rental demand from working professionals.',
    propertyType: 'apartment',
    address: 'Jalan Wong Ah Fook, Johor Bahru',
    location: 'Johor Bahru',
    state: 'Johor',
    reservePrice: 320000,
    auctionDate: '2025-01-10',
    auctionTime: '11:00 AM',
    auctionVenue: 'JTR Johor Office',
    bank: 'LPPSA',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop10-1/800/600',
      'https://picsum.photos/seed/prop10-2/800/600',
      'https://picsum.photos/seed/prop10-3/800/600'
    ],
    badges: [],
    specifications: {
      builtUpArea: '1,050 sqft',
      bedrooms: 3,
      bathrooms: 2,
      carParks: 1,
      tenure: 'leasehold-99',
      lotNumber: 'S-11111',
      titleType: 'Strata',
      yearBuilt: 2013,
      furnishing: 'partially-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '225 KB' }
    ]
  },
  {
    id: '11',
    title: '1-Storey Bungalow in Ipoh',
    description: 'Charming single-storey bungalow on large land. Peaceful residential area with mature landscaping. Great potential for renovation.',
    propertyType: 'residential',
    address: 'Jalan Raja Dihilir, Ipoh',
    location: 'Ipoh',
    state: 'Perak',
    reservePrice: 450000,
    auctionDate: '2025-01-12',
    auctionTime: '3:00 PM',
    auctionVenue: 'JTR Ipoh Office',
    bank: 'RHB Bank',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop11-1/800/600',
      'https://picsum.photos/seed/prop11-2/800/600'
    ],
    badges: [],
    specifications: {
      landArea: '6,500 sqft',
      builtUpArea: '2,200 sqft',
      bedrooms: 3,
      bathrooms: 2,
      carParks: 3,
      tenure: 'freehold',
      lotNumber: 'HS(D) 22222',
      titleType: 'Individual',
      yearBuilt: 1985,
      furnishing: 'unfurnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '240 KB' }
    ]
  },
  {
    id: '12',
    title: 'Retail Lot in Melaka Town',
    description: 'Ground floor retail shop in busy Melaka town area. High tourist traffic. Suitable for retail or F&B business.',
    propertyType: 'commercial',
    address: 'Jalan Hang Jebat, Melaka',
    location: 'Melaka',
    state: 'Melaka',
    reservePrice: 580000,
    auctionDate: '2025-01-15',
    auctionTime: '10:00 AM',
    auctionVenue: 'Online eBidding Platform',
    bank: 'BSN',
    saleType: 'ebidding',
    images: [
      'https://picsum.photos/seed/prop12-1/800/600',
      'https://picsum.photos/seed/prop12-2/800/600',
      'https://picsum.photos/seed/prop12-3/800/600'
    ],
    badges: [
      { type: 'ebidding', label: 'eBIDDING' }
    ],
    specifications: {
      builtUpArea: '1,200 sqft',
      tenure: 'freehold',
      lotNumber: 'GM-33333',
      titleType: 'Strata',
      yearBuilt: 2008
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '280 KB' }
    ]
  },
  {
    id: '13',
    title: 'Flat Unit in Cheras',
    description: 'Affordable flat unit in Cheras. Near MRT station and local amenities. Good for first-time buyers or investment.',
    propertyType: 'flat',
    address: 'Taman Cheras, Kuala Lumpur',
    location: 'Cheras',
    state: 'Kuala Lumpur',
    reservePrice: 185000,
    auctionDate: '2025-01-18',
    auctionTime: '2:30 PM',
    auctionVenue: 'JTR Auction Hall, Kuala Lumpur',
    bank: 'Bank Islam',
    saleType: 'bank-auction',
    images: [
      'https://picsum.photos/seed/prop13-1/800/600',
      'https://picsum.photos/seed/prop13-2/800/600'
    ],
    badges: [
      { type: 'hot', label: 'HOT' }
    ],
    specifications: {
      builtUpArea: '700 sqft',
      bedrooms: 3,
      bathrooms: 1,
      carParks: 1,
      tenure: 'leasehold-99',
      lotNumber: 'PTB-44444',
      titleType: 'Strata',
      yearBuilt: 1998,
      furnishing: 'unfurnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '195 KB' }
    ]
  },
  {
    id: '14',
    title: 'Residential Land in Seremban',
    description: 'Flat residential land in developing area. Suitable for building dream home. Near amenities and main road access.',
    propertyType: 'land',
    address: 'Taman Rasah Jaya, Seremban',
    location: 'Seremban',
    state: 'Negeri Sembilan',
    reservePrice: 280000,
    auctionDate: '2025-01-20',
    auctionTime: '11:30 AM',
    auctionVenue: 'JTR Seremban Office',
    bank: 'High Court',
    saleType: 'high-court',
    images: [
      'https://picsum.photos/seed/prop14-1/800/600'
    ],
    badges: [],
    specifications: {
      landArea: '4,500 sqft',
      tenure: 'freehold',
      lotNumber: 'PT-55555',
      titleType: 'Individual'
    },
    documents: [
      { id: '1', name: 'Auction Notice', url: '#', type: 'pdf', size: '175 KB' }
    ]
  },
  {
    id: '15',
    title: 'Service Apartment in Cyberjaya',
    description: 'Modern service apartment in tech hub Cyberjaya. Fully furnished with amenities. Walking distance to offices and universities.',
    propertyType: 'apartment',
    address: 'Persiaran Multimedia, Cyberjaya',
    location: 'Cyberjaya',
    state: 'Selangor',
    reservePrice: 395000,
    auctionDate: '2025-01-22',
    auctionTime: '10:00 AM',
    auctionVenue: 'Online eBidding Platform',
    bank: 'Affin Bank',
    saleType: 'ebidding',
    images: [
      'https://picsum.photos/seed/prop15-1/800/600',
      'https://picsum.photos/seed/prop15-2/800/600',
      'https://picsum.photos/seed/prop15-3/800/600'
    ],
    badges: [
      { type: 'ebidding', label: 'eBIDDING' },
      { type: 'new', label: 'NEW' }
    ],
    specifications: {
      builtUpArea: '780 sqft',
      bedrooms: 2,
      bathrooms: 2,
      carParks: 1,
      tenure: 'freehold',
      lotNumber: 'S-66666',
      titleType: 'Strata',
      yearBuilt: 2019,
      furnishing: 'fully-furnished'
    },
    documents: [
      { id: '1', name: 'Conditions of Sale', url: '#', type: 'pdf', size: '235 KB' }
    ]
  }
]
