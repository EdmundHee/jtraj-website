<script setup lang="ts">
import { MagnifyingGlassIcon, FunnelIcon, Squares2X2Icon, ListBulletIcon, MapIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { mockProperties } from '~/data/properties'
import { banks } from '~/data/banks'
import { malaysianStates } from '~/data/states'
import type { Property, ViewMode, SortOption } from '~/types'

// View mode
const viewMode = ref<ViewMode>('grid')

// Filters
const searchQuery = ref('')
const selectedBanks = ref<string[]>([])
const selectedStates = ref<string[]>([])
const selectedPropertyTypes = ref<string[]>([])
const priceMin = ref<number | null>(null)
const priceMax = ref<number | null>(null)
const selectedSaleTypes = ref<string[]>([])
const sortBy = ref<SortOption>('auction-date')

// Mobile filter state
const showMobileFilters = ref(false)

// Computed filtered properties
const filteredProperties = computed(() => {
  let results = [...mockProperties]

  // Search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.address.toLowerCase().includes(query)
    )
  }

  // Bank filter
  if (selectedBanks.value.length > 0) {
    results = results.filter(p => selectedBanks.value.includes(p.bank))
  }

  // State filter
  if (selectedStates.value.length > 0) {
    results = results.filter(p => selectedStates.value.includes(p.state))
  }

  // Property type filter
  if (selectedPropertyTypes.value.length > 0) {
    results = results.filter(p => selectedPropertyTypes.value.includes(p.propertyType))
  }

  // Price range filter
  if (priceMin.value !== null) {
    results = results.filter(p => p.reservePrice >= priceMin.value!)
  }
  if (priceMax.value !== null) {
    results = results.filter(p => p.reservePrice <= priceMax.value!)
  }

  // Sale type filter
  if (selectedSaleTypes.value.length > 0) {
    results = results.filter(p => selectedSaleTypes.value.includes(p.saleType))
  }

  // Sorting
  if (sortBy.value === 'auction-date') {
    results.sort((a, b) => new Date(a.auctionDate).getTime() - new Date(b.auctionDate).getTime())
  } else if (sortBy.value === 'price-low') {
    results.sort((a, b) => a.reservePrice - b.reservePrice)
  } else if (sortBy.value === 'price-high') {
    results.sort((a, b) => b.reservePrice - a.reservePrice)
  } else if (sortBy.value === 'featured') {
    results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }

  return results
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(12)
const totalPages = computed(() => Math.ceil(filteredProperties.value.length / itemsPerPage.value))
const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProperties.value.slice(start, end)
})

// Clear all filters
const clearFilters = () => {
  searchQuery.value = ''
  selectedBanks.value = []
  selectedStates.value = []
  selectedPropertyTypes.value = []
  priceMin.value = null
  priceMax.value = null
  selectedSaleTypes.value = []
  currentPage.value = 1
}

// Property types
const propertyTypes = [
  { value: 'residential', label: 'Residential' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condominium', label: 'Condominium' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'land', label: 'Land' },
  { value: 'flat', label: 'Flats' }
]

// Sale types
const saleTypes = [
  { value: 'bank-auction', label: 'Bank Auction' },
  { value: 'high-court', label: 'High Court' },
  { value: 'land-office', label: 'Land Office' },
  { value: 'ebidding', label: 'eBidding' },
  { value: 'owner-sale', label: 'Owner Sale' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Page Header -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-6">
        <h1 class="text-2xl lg:text-3xl font-bold text-slate-900">Property Listings</h1>
        <p class="mt-1 text-slate-600">Find your ideal auction property</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="section-container py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar (Desktop) -->
        <aside class="hidden lg:block w-72 flex-shrink-0">
          <div class="bg-white rounded-lg border border-slate-200 p-6 sticky top-24">
            <div class="flex items-center justify-between mb-4">
              <h2 class="font-semibold text-lg">Filters</h2>
              <button
                @click="clearFilters"
                class="text-sm text-primary-500 hover:text-primary-600"
              >
                Clear All
              </button>
            </div>

            <div class="space-y-6">
              <!-- Bank Filter -->
              <div>
                <h3 class="font-medium text-sm text-slate-900 mb-3">Bank/Institution</h3>
                <div class="space-y-2 max-h-48 overflow-y-auto">
                  <label
                    v-for="bank in banks"
                    :key="bank.id"
                    class="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      v-model="selectedBanks"
                      type="checkbox"
                      :value="bank.name"
                      class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span class="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      {{ bank.name }}
                      <span class="text-slate-400 ml-1">({{ bank.propertyCount }})</span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200"></div>

              <!-- State Filter -->
              <div>
                <h3 class="font-medium text-sm text-slate-900 mb-3">State/Location</h3>
                <div class="space-y-2 max-h-48 overflow-y-auto">
                  <label
                    v-for="state in malaysianStates.slice(0, 8)"
                    :key="state.id"
                    class="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      v-model="selectedStates"
                      type="checkbox"
                      :value="state.name"
                      class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span class="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      {{ state.name }}
                      <span class="text-slate-400 ml-1">({{ state.propertyCount }})</span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200"></div>

              <!-- Property Type Filter -->
              <div>
                <h3 class="font-medium text-sm text-slate-900 mb-3">Property Type</h3>
                <div class="space-y-2">
                  <label
                    v-for="type in propertyTypes"
                    :key="type.value"
                    class="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      v-model="selectedPropertyTypes"
                      type="checkbox"
                      :value="type.value"
                      class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span class="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      {{ type.label }}
                    </span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200"></div>

              <!-- Price Range Filter -->
              <div>
                <h3 class="font-medium text-sm text-slate-900 mb-3">Price Range (RM)</h3>
                <div class="space-y-3">
                  <input
                    v-model.number="priceMin"
                    type="number"
                    placeholder="Min Price"
                    class="input text-sm"
                  />
                  <input
                    v-model.number="priceMax"
                    type="number"
                    placeholder="Max Price"
                    class="input text-sm"
                  />
                </div>
              </div>

              <div class="border-t border-slate-200"></div>

              <!-- Sale Type Filter -->
              <div>
                <h3 class="font-medium text-sm text-slate-900 mb-3">Sale Type</h3>
                <div class="space-y-2">
                  <label
                    v-for="type in saleTypes"
                    :key="type.value"
                    class="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      v-model="selectedSaleTypes"
                      type="checkbox"
                      :value="type.value"
                      class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span class="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      {{ type.label }}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Results Area -->
        <main class="flex-1 min-w-0">
          <!-- Search Bar & View Toggle -->
          <div class="bg-white rounded-lg border border-slate-200 p-4 mb-6">
            <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <!-- Search -->
              <div class="flex-1 relative">
                <MagnifyingGlassIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by keyword, address, lot no..."
                  class="input pl-10"
                />
              </div>

              <!-- Sort & View Toggle -->
              <div class="flex gap-2">
                <!-- Mobile Filter Button -->
                <button
                  @click="showMobileFilters = true"
                  class="lg:hidden btn-outline flex items-center gap-2"
                >
                  <FunnelIcon class="w-5 h-5" />
                  Filters
                </button>

                <!-- Sort -->
                <select v-model="sortBy" class="input text-sm">
                  <option value="auction-date">Auction Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="featured">Featured</option>
                </select>

                <!-- View Mode -->
                <div class="hidden sm:flex border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    @click="viewMode = 'grid'"
                    :class="[
                      'px-3 py-2 transition-colors',
                      viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'
                    ]"
                  >
                    <Squares2X2Icon class="w-5 h-5" />
                  </button>
                  <button
                    @click="viewMode = 'list'"
                    :class="[
                      'px-3 py-2 border-l border-slate-300 transition-colors',
                      viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'
                    ]"
                  >
                    <ListBulletIcon class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Results Count -->
            <div class="mt-4 text-sm text-slate-600">
              Showing {{ paginatedProperties.length }} of {{ filteredProperties.length }} properties
            </div>
          </div>

          <!-- Results Grid/List -->
          <div v-if="paginatedProperties.length > 0">
            <!-- Grid View -->
            <div
              v-if="viewMode === 'grid'"
              class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <PropertyCard
                v-for="property in paginatedProperties"
                :key="property.id"
                :property="property"
              />
            </div>

            <!-- List View -->
            <div v-else class="space-y-4">
              <div
                v-for="property in paginatedProperties"
                :key="property.id"
                class="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex gap-4">
                  <div class="w-48 h-36 flex-shrink-0">
                    <img
                      :src="property.images[0]"
                      :alt="property.title"
                      class="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-lg text-slate-900 mb-2">
                      {{ property.title }}
                    </h3>
                    <p class="text-sm text-slate-600 mb-2">{{ property.address }}</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <BaseBadge
                        v-for="badge in property.badges"
                        :key="badge.type"
                        :badge="badge"
                      />
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-xs text-slate-500">Reserve Price</p>
                        <p class="text-xl font-bold text-primary-500">
                          RM {{ property.reservePrice.toLocaleString() }}
                        </p>
                      </div>
                      <div class="text-right">
                        <p class="text-sm text-slate-600">{{ property.bank }}</p>
                        <p class="text-xs text-slate-500">
                          {{ new Date(property.auctionDate).toLocaleDateString('en-MY') }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <NuxtLink :to="`/properties/${property.id}`">
                      <BaseButton variant="outline" size="sm">
                        View Details
                      </BaseButton>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-8 flex items-center justify-between">
              <div class="text-sm text-slate-600">
                Page {{ currentPage }} of {{ totalPages }}
              </div>
              <div class="flex gap-2">
                <BaseButton
                  variant="outline"
                  size="sm"
                  :disabled="currentPage === 1"
                  @click="currentPage--"
                >
                  Previous
                </BaseButton>
                <BaseButton
                  variant="outline"
                  size="sm"
                  :disabled="currentPage === totalPages"
                  @click="currentPage++"
                >
                  Next
                </BaseButton>
              </div>
            </div>
          </div>

          <!-- No Results -->
          <div v-else class="text-center py-12">
            <p class="text-lg text-slate-600 mb-4">No properties found matching your criteria</p>
            <BaseButton variant="outline" @click="clearFilters">
              Clear Filters
            </BaseButton>
          </div>
        </main>
      </div>
    </div>

    <!-- Mobile Filters Modal -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showMobileFilters"
        class="fixed inset-0 z-50 bg-black/50 lg:hidden"
        @click="showMobileFilters = false"
      >
        <div
          class="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl overflow-y-auto"
          @click.stop
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="font-semibold text-lg">Filters</h2>
              <button @click="showMobileFilters = false">
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>

            <!-- Same filters as desktop sidebar -->
            <div class="space-y-6">
              <!-- Copy the filter sections from desktop sidebar here -->
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
