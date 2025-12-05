<script setup lang="ts">
import {
  CalendarIcon,
  BuildingLibraryIcon,
  HomeIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  MapIcon,
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'
import { mockProperties } from '~/data/properties'
import { upcomingAuctions } from '~/data/auctions'
import { propertyCategories } from '~/data/categories'

// SEO
useHead({
  title: 'Upcoming Property Auctions | JTR Auction House',
  meta: [
    { name: 'description', content: 'Browse upcoming property auctions from major Malaysian banks including RHB, LPPSA, Bank Islam, Affin, BSN and more. Find your ideal auction property.' }
  ]
})

// Bank/Institution quick links for sidebar
const bankLinks = [
  { id: 'rhb', name: 'RHB Bank', count: 45, color: 'bg-blue-600' },
  { id: 'lppsa', name: 'LPPSA', count: 28, color: 'bg-green-600' },
  { id: 'bank-islam', name: 'Bank Islam', count: 22, color: 'bg-teal-600' },
  { id: 'affin', name: 'Affin Bank', count: 32, color: 'bg-purple-600' },
  { id: 'bsn', name: 'BSN', count: 18, color: 'bg-orange-600' },
  { id: 'high-court', name: 'High Court', count: 15, color: 'bg-red-600' },
  { id: 'land-office', name: 'Land Office', count: 12, color: 'bg-amber-600' },
  { id: 'owner-sale', name: 'Owner Sale', count: 8, color: 'bg-secondary-500' }
]

// Get upcoming auctions grouped by type
const physicalAuctions = upcomingAuctions.filter(a => a.type === 'physical')
const eBiddingAuctions = upcomingAuctions.filter(a => a.type === 'ebidding')

// Format date helper
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Navigate to filtered properties
const navigateToBank = (bankId: string) => {
  navigateTo({
    path: '/properties',
    query: { bank: bankId }
  })
}

const navigateToCategory = (slug: string) => {
  navigateTo({
    path: '/properties',
    query: { type: slug }
  })
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="relative section-container py-16 lg:py-24">
        <div class="max-w-3xl">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            UPCOMING PROPERTY AUCTIONS
          </h1>
          <p class="text-lg md:text-xl text-primary-100 mb-8">
            Browse auction properties from major Malaysian banks and financial institutions.
            Find your ideal property at competitive reserve prices.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/properties">
              <BaseButton variant="secondary" size="lg">
                View All Properties
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/ebidding">
              <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary-600">
                eBidding Guide
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="section-container py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar - Bank Quick Links -->
        <aside class="lg:w-72 flex-shrink-0">
          <div class="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
            <h2 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BuildingLibraryIcon class="w-5 h-5 text-primary-500" />
              Browse by Institution
            </h2>
            <nav class="space-y-2">
              <button
                v-for="bank in bankLinks"
                :key="bank.id"
                @click="navigateToBank(bank.id)"
                class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
              >
                <div class="flex items-center gap-3">
                  <span :class="[bank.color, 'w-2 h-2 rounded-full']"></span>
                  <span class="text-sm font-medium text-slate-700 group-hover:text-primary-500">
                    {{ bank.name }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {{ bank.count }}
                  </span>
                  <ChevronRightIcon class="w-4 h-4 text-slate-400 group-hover:text-primary-500" />
                </div>
              </button>
            </nav>

            <!-- View All Button -->
            <div class="mt-6 pt-6 border-t border-slate-200">
              <NuxtLink to="/properties" class="block">
                <BaseButton variant="primary" size="sm" block>
                  View All Auctions
                </BaseButton>
              </NuxtLink>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 min-w-0">
          <!-- Upcoming Physical Auctions -->
          <section class="mb-12">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CalendarIcon class="w-6 h-6 text-primary-500" />
                Physical Auction Dates
              </h2>
              <NuxtLink to="/properties?type=physical" class="text-sm text-primary-500 hover:text-primary-600 font-medium">
                View All
              </NuxtLink>
            </div>

            <div class="space-y-4">
              <div
                v-for="auction in physicalAuctions"
                :key="auction.id"
                class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                        {{ formatDate(auction.date) }}
                      </div>
                      <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        Physical Auction
                      </span>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ auction.bank }}</h3>
                    <div class="flex items-center gap-4 text-sm text-slate-600">
                      <span class="flex items-center gap-1">
                        <MapPinIcon class="w-4 h-4" />
                        {{ auction.venue }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-primary-500">{{ auction.propertyCount }}</div>
                      <div class="text-xs text-slate-500">Properties</div>
                    </div>
                    <NuxtLink :to="`/properties?bank=${auction.bank.toLowerCase().replace(' ', '-')}`">
                      <BaseButton variant="outline" size="sm">
                        View Properties
                      </BaseButton>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- eBidding Auctions -->
          <section class="mb-12">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <svg class="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                eBidding Auctions
              </h2>
              <NuxtLink to="/ebidding" class="text-sm text-purple-500 hover:text-purple-600 font-medium">
                Learn About eBidding
              </NuxtLink>
            </div>

            <div class="space-y-4">
              <div
                v-for="auction in eBiddingAuctions"
                :key="auction.id"
                class="bg-white border border-purple-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                        {{ formatDate(auction.date) }}
                      </div>
                      <span class="badge-ebidding">
                        eBIDDING
                      </span>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ auction.bank }}</h3>
                    <div class="flex items-center gap-4 text-sm text-slate-600">
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        {{ auction.venue }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-purple-600">{{ auction.propertyCount }}</div>
                      <div class="text-xs text-slate-500">Properties</div>
                    </div>
                    <NuxtLink :to="`/properties?saleType=ebidding`">
                      <BaseButton variant="outline" size="sm" class="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                        View Properties
                      </BaseButton>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- eBidding CTA -->
            <div class="mt-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 class="text-lg font-semibold text-slate-900 mb-1">New to Online Bidding?</h3>
                  <p class="text-sm text-slate-600">Learn how to register and participate in eBidding auctions.</p>
                </div>
                <NuxtLink to="/ebidding">
                  <BaseButton variant="primary" size="sm" class="bg-purple-600 hover:bg-purple-700">
                    eBidding Guide
                  </BaseButton>
                </NuxtLink>
              </div>
            </div>
          </section>

          <!-- Browse by Category -->
          <section>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Browse by Property Category</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                v-for="category in propertyCategories"
                :key="category.id"
                @click="navigateToCategory(category.slug)"
                class="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-center group"
              >
                <div class="flex justify-center mb-3">
                  <div class="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <HomeIcon v-if="category.icon === 'HomeIcon'" class="w-6 h-6 text-primary-500 group-hover:text-white" />
                    <BuildingOfficeIcon v-else-if="category.icon === 'BuildingOfficeIcon'" class="w-6 h-6 text-primary-500 group-hover:text-white" />
                    <BuildingStorefrontIcon v-else-if="category.icon === 'BuildingStorefrontIcon'" class="w-6 h-6 text-primary-500 group-hover:text-white" />
                    <MapIcon v-else class="w-6 h-6 text-primary-500 group-hover:text-white" />
                  </div>
                </div>
                <h3 class="font-semibold text-slate-900 mb-1">{{ category.name }}</h3>
                <p class="text-sm text-slate-500">{{ category.count }}+ listings</p>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="bg-primary-500 text-white py-12">
      <div class="section-container">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 class="text-2xl font-bold mb-2">Looking to Sell Your Property?</h2>
            <p class="text-primary-100">Get the best price through our professional auction services</p>
          </div>
          <div class="flex gap-4">
            <NuxtLink to="/salebyowner">
              <BaseButton variant="secondary" size="lg">
                Learn More
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/contact">
              <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
