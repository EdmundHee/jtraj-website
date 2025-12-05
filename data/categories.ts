import type { PropertyCategory } from '~/types'

export const propertyCategories: PropertyCategory[] = [
  {
    id: 'residential',
    name: 'Residential',
    icon: 'HomeIcon',
    count: 250,
    slug: 'residential'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: 'BuildingOfficeIcon',
    count: 120,
    slug: 'commercial'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: 'BuildingStorefrontIcon',
    count: 45,
    slug: 'industrial'
  },
  {
    id: 'land',
    name: 'Land',
    icon: 'Squares2X2Icon',
    count: 80,
    slug: 'land'
  },
  {
    id: 'condominium',
    name: 'Condominium',
    icon: 'BuildingOffice2Icon',
    count: 180,
    slug: 'condominium'
  },
  {
    id: 'apartment',
    name: 'Apartment / Flat',
    icon: 'HomeModernIcon',
    count: 95,
    slug: 'apartment'
  }
]
