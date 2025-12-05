export interface Property {
  id: string
  title: string
  description: string
  propertyType: 'residential' | 'commercial' | 'industrial' | 'land' | 'condominium' | 'apartment' | 'flat'
  address: string
  location: string
  state: string
  reservePrice: number
  originalPrice?: number
  auctionDate: string
  auctionTime: string
  auctionVenue: string
  bank: string
  bankLogo?: string
  saleType: 'bank-auction' | 'high-court' | 'land-office' | 'owner-sale' | 'ebidding'
  images: string[]
  badges: Badge[]
  specifications: PropertySpecifications
  documents: Document[]
  coordinates?: {
    lat: number
    lng: number
  }
  featured?: boolean
  isFavorite?: boolean
}

export interface PropertySpecifications {
  landArea?: string
  builtUpArea?: string
  bedrooms?: number
  bathrooms?: number
  carParks?: number
  tenure?: 'freehold' | 'leasehold' | 'leasehold-99' | 'leasehold-999'
  lotNumber?: string
  titleType?: string
  yearBuilt?: number
  furnishing?: 'fully-furnished' | 'partially-furnished' | 'unfurnished'
}

export interface Badge {
  type: 'hot' | 'new' | 'reduced' | 'featured' | 'ebidding' | 'sold'
  label: string
}

export interface Document {
  id: string
  name: string
  url: string
  type: 'pdf' | 'image'
  size: string
}

export interface Bank {
  id: string
  name: string
  logo: string
  propertyCount: number
}

export interface State {
  id: string
  name: string
  propertyCount: number
}

export interface PropertyCategory {
  id: string
  name: string
  icon: string
  count: number
  slug: string
}

export interface AuctionEvent {
  id: string
  date: string
  bank: string
  venue: string
  propertyCount: number
  type: 'physical' | 'ebidding' | 'hybrid'
}

export interface FilterOptions {
  banks: string[]
  states: string[]
  propertyTypes: string[]
  priceRange: {
    min: number
    max: number
  }
  dateRange: {
    from: string | null
    to: string | null
  }
  saleTypes: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  propertyId?: string
  subject?: string
}

export interface InquiryForm extends ContactForm {
  preferredContactMethod: 'email' | 'phone' | 'whatsapp'
  preferredTime?: string
}

export type ViewMode = 'grid' | 'list' | 'map'
export type SortOption = 'auction-date' | 'price-low' | 'price-high' | 'newest' | 'featured'
