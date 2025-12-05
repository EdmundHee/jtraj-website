import type { AuctionEvent } from '~/types'

export const upcomingAuctions: AuctionEvent[] = [
  {
    id: '1',
    date: '2024-12-15',
    bank: 'RHB Bank',
    venue: 'JTR Auction Hall, Kuala Lumpur',
    propertyCount: 45,
    type: 'physical'
  },
  {
    id: '2',
    date: '2024-12-18',
    bank: 'BSN Properties',
    venue: 'Online eBidding Platform',
    propertyCount: 28,
    type: 'ebidding'
  },
  {
    id: '3',
    date: '2024-12-20',
    bank: 'LPPSA Auction',
    venue: 'JTR Auction Hall, Kuala Lumpur',
    propertyCount: 15,
    type: 'physical'
  },
  {
    id: '4',
    date: '2024-12-22',
    bank: 'Affin Bank',
    venue: 'JTR Regional Office',
    propertyCount: 32,
    type: 'hybrid'
  },
  {
    id: '5',
    date: '2024-12-25',
    bank: 'High Court Auction',
    venue: 'Online eBidding Platform',
    propertyCount: 18,
    type: 'ebidding'
  },
  {
    id: '6',
    date: '2024-12-28',
    bank: 'Bank Islam',
    venue: 'JTR Auction Hall, Kuala Lumpur',
    propertyCount: 22,
    type: 'physical'
  },
  {
    id: '7',
    date: '2024-12-30',
    bank: 'RHB Bank',
    venue: 'JTR Auction Hall, Kuala Lumpur',
    propertyCount: 38,
    type: 'physical'
  }
]
