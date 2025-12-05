<script setup lang="ts">
import { MagnifyingGlassIcon, HomeIcon, BuildingOfficeIcon, BuildingStorefrontIcon, MapIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { mockProperties } from '~/data/properties'
import { propertyCategories } from '~/data/categories'
import { upcomingAuctions } from '~/data/auctions'

// Get featured properties
const featuredProperties = mockProperties.filter(p => p.featured).slice(0, 4)

// Hero search form
const searchLocation = ref('')
const searchPropertyType = ref('')
const searchPriceRange = ref('')

const handleSearch = () => {
  navigateTo({
    path: '/properties',
    query: {
      location: searchLocation.value,
      type: searchPropertyType.value,
      price: searchPriceRange.value
    }
  })
}

// Statistics counter with animation
const stats = [
  { label: 'Properties Sold', value: 5000, suffix: '+' },
  { label: 'Years Experience', value: 39, suffix: '+' },
  { label: 'States Covered', value: 16, suffix: '' },
  { label: 'Monthly Auctions', value: 500, suffix: '+' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative section-container py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-500">
            MALAYSIA'S PREMIER<br />REAL ESTATE AUCTION HOUSE
          </h1>
          <p class="text-lg md:text-xl text-primary-100">
            Trusted Since 1985 | 39+ Years Experience
          </p>

          <!-- Quick Search Form -->
          <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-slate-900">
            <h2 class="text-xl font-semibold mb-6 text-center">Quick Property Search</h2>
            <form @submit.prevent="handleSearch" class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <select v-model="searchLocation" class="input">
                  <option value="">All Locations</option>
                  <option value="kl">Kuala Lumpur</option>
                  <option value="selangor">Selangor</option>
                  <option value="penang">Penang</option>
                  <option value="johor">Johor</option>
                </select>
              </div>
              <div>
                <select v-model="searchPropertyType" class="input">
                  <option value="">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="condominium">Condominium</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div>
                <select v-model="searchPriceRange" class="input">
                  <option value="">All Prices</option>
                  <option value="0-200000">Below RM 200K</option>
                  <option value="200000-500000">RM 200K - RM 500K</option>
                  <option value="500000-1000000">RM 500K - RM 1M</option>
                  <option value="1000000-">Above RM 1M</option>
                </select>
              </div>
              <div class="md:col-span-3">
                <BaseButton type="submit" variant="primary" size="lg" block>
                  <MagnifyingGlassIcon class="w-5 h-5 inline mr-2" />
                  Search Properties
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Counter Section -->
    <section class="bg-slate-50 py-12 lg:py-16">
      <div class="section-container">
        <h2 class="text-3xl font-bold text-center mb-12">Our Track Record</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl lg:text-5xl font-extrabold text-primary-500 mb-2">
              {{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-sm lg:text-base text-slate-600 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties Section -->
    <section class="py-12 lg:py-16">
      <div class="section-container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold">Featured Auction Properties</h2>
          <NuxtLink to="/properties">
            <BaseButton variant="outline" size="sm">
              View All
            </BaseButton>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <PropertyCard
            v-for="property in featuredProperties"
            :key="property.id"
            :property="property"
          />
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/properties">
            <BaseButton variant="primary" size="lg">
              View All Properties
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Browse by Category Section -->
    <section class="bg-slate-50 py-12 lg:py-16">
      <div class="section-container">
        <h2 class="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <NuxtLink
            v-for="category in propertyCategories"
            :key="category.id"
            :to="`/properties?type=${category.slug}`"
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
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Upcoming Auctions Section -->
    <section class="py-12 lg:py-16">
      <div class="section-container">
        <h2 class="text-3xl font-bold text-center mb-12">Upcoming Auction Dates</h2>
        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="auction in upcomingAuctions.slice(0, 5)"
            :key="auction.id"
            class="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div class="text-lg font-bold text-primary-500">
                  {{ new Date(auction.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' }) }}
                </div>
                <div class="text-sm text-slate-600 mt-1">{{ auction.bank }}</div>
                <div class="text-sm text-slate-500">{{ auction.venue }}</div>
              </div>
              <div class="flex items-center gap-4">
                <div class="text-sm font-medium text-slate-700">
                  {{ auction.propertyCount }} Properties
                </div>
                <span v-if="auction.type === 'ebidding'" class="badge-ebidding">
                  eBIDDING
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/properties?upcoming=true">
            <BaseButton variant="outline" size="lg">
              View Full Calendar
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="bg-primary-500 text-white py-12 lg:py-16">
      <div class="section-container">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose JTR Auction House</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Trusted Since 1985</h3>
            <p class="text-primary-100 text-sm">Malaysia's longest running real estate auction house</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Licensed Auctioneers</h3>
            <p class="text-primary-100 text-sm">Licensed in all 16 states of Malaysia</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Transparent Process</h3>
            <p class="text-primary-100 text-sm">Clear procedures and fair auction system</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Online eBidding</h3>
            <p class="text-primary-100 text-sm">Bid from anywhere with our online bidding platform</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-16">
      <div class="section-container text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Looking to Sell Your Property via Auction?</h2>
        <p class="text-lg text-secondary-100 mb-8 max-w-2xl mx-auto">
          Get the best price through our professional auction services
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/sell-property">
            <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-secondary-600">
              Learn More
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/sell-property#submit">
            <BaseButton size="lg" class="bg-white text-secondary-600 hover:bg-slate-100">
              Submit Your Property
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
