<script setup lang="ts">
import { ChevronLeftIcon, HeartIcon, ShareIcon, PrinterIcon, MapPinIcon, CalendarIcon, ClockIcon, BuildingOfficeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import { mockProperties } from '~/data/properties'

const route = useRoute()
const propertyId = route.params.id as string

// Find property by ID
const property = mockProperties.find(p => p.id === propertyId)

// Redirect if property not found
if (!property) {
  throw createError({ statusCode: 404, statusMessage: 'Property Not Found' })
}

// Gallery state
const currentImageIndex = ref(0)
const isFavorite = ref(property.isFavorite || false)

// Active tab
const activeTab = ref('overview')

// Inquiry form
const inquiryForm = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  preferredContactMethod: 'email'
})

const submitInquiry = () => {
  alert(`Inquiry submitted for ${property.title}`)
  inquiryForm.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContactMethod: 'email'
  }
}

// Similar properties
const similarProperties = mockProperties
  .filter(p => p.id !== propertyId && p.state === property.state)
  .slice(0, 3)

// Format price
const formattedPrice = new Intl.NumberFormat('en-MY', {
  style: 'currency',
  currency: 'MYR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}).format(property.reservePrice)

// Format date
const formattedDate = new Date(property.auctionDate).toLocaleDateString('en-MY', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

// Days until auction
const daysUntilAuction = computed(() => {
  const today = new Date()
  const auctionDate = new Date(property.auctionDate)
  const diffTime = auctionDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
})

useHead({
  title: `${property.title} - JTR Auction House`,
  meta: [
    { name: 'description', content: property.description }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-3">
        <NuxtLink to="/properties" class="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600">
          <ChevronLeftIcon class="w-4 h-4" />
          Back to Listings
        </NuxtLink>
      </div>
    </div>

    <!-- Property Title Section -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="flex flex-wrap gap-2 mb-2">
              <BaseBadge
                v-for="badge in property.badges"
                :key="badge.type"
                :badge="badge"
              />
            </div>
            <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              {{ property.title }}
            </h1>
            <p class="text-slate-600 flex items-center gap-2">
              <MapPinIcon class="w-5 h-5" />
              {{ property.address }}
            </p>
          </div>
          <div class="flex gap-2">
            <button
              @click="isFavorite = !isFavorite"
              class="p-2 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              <HeartIconSolid v-if="isFavorite" class="w-6 h-6 text-red-500" />
              <HeartIcon v-else class="w-6 h-6 text-slate-600" />
            </button>
            <button class="p-2 border border-slate-300 rounded-lg hover:bg-slate-50">
              <ShareIcon class="w-6 h-6 text-slate-600" />
            </button>
            <button class="p-2 border border-slate-300 rounded-lg hover:bg-slate-50">
              <PrinterIcon class="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="section-container py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Images & Details -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Image Gallery -->
          <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <!-- Main Image -->
            <div class="aspect-[16/10] relative">
              <img
                :src="property.images[currentImageIndex]"
                :alt="`${property.title} - Image ${currentImageIndex + 1}`"
                class="w-full h-full object-cover"
              />
              <!-- Navigation Arrows -->
              <button
                v-if="currentImageIndex > 0"
                @click="currentImageIndex--"
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronLeftIcon class="w-6 h-6" />
              </button>
              <button
                v-if="currentImageIndex < property.images.length - 1"
                @click="currentImageIndex++"
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronLeftIcon class="w-6 h-6 rotate-180" />
              </button>
              <!-- Image Counter -->
              <div class="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {{ currentImageIndex + 1 }} / {{ property.images.length }}
              </div>
            </div>
            <!-- Thumbnails -->
            <div class="p-4 flex gap-2 overflow-x-auto">
              <button
                v-for="(image, index) in property.images"
                :key="index"
                @click="currentImageIndex = index"
                :class="[
                  'w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all',
                  currentImageIndex === index ? 'border-primary-500' : 'border-slate-200 hover:border-slate-300'
                ]"
              >
                <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- Property Tabs -->
          <div class="bg-white rounded-lg border border-slate-200">
            <!-- Tab Headers -->
            <div class="border-b border-slate-200 overflow-x-auto">
              <div class="flex">
                <button
                  @click="activeTab = 'overview'"
                  :class="[
                    'px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap',
                    activeTab === 'overview' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-600 hover:text-slate-900'
                  ]"
                >
                  Overview
                </button>
                <button
                  @click="activeTab = 'specifications'"
                  :class="[
                    'px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap',
                    activeTab === 'specifications' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-600 hover:text-slate-900'
                  ]"
                >
                  Specifications
                </button>
                <button
                  @click="activeTab = 'documents'"
                  :class="[
                    'px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap',
                    activeTab === 'documents' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-600 hover:text-slate-900'
                  ]"
                >
                  Documents
                </button>
                <button
                  @click="activeTab = 'terms'"
                  :class="[
                    'px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap',
                    activeTab === 'terms' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-600 hover:text-slate-900'
                  ]"
                >
                  Terms & Conditions
                </button>
              </div>
            </div>

            <!-- Tab Content -->
            <div class="p-6">
              <!-- Overview Tab -->
              <div v-if="activeTab === 'overview'" class="space-y-4">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Description</h3>
                  <p class="text-slate-700 leading-relaxed">{{ property.description }}</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Location</h3>
                  <p class="text-slate-700">{{ property.location }}, {{ property.state }}</p>
                </div>
              </div>

              <!-- Specifications Tab -->
              <div v-if="activeTab === 'specifications'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-if="property.specifications.landArea">
                  <span class="text-sm text-slate-500">Land Area</span>
                  <p class="font-medium">{{ property.specifications.landArea }}</p>
                </div>
                <div v-if="property.specifications.builtUpArea">
                  <span class="text-sm text-slate-500">Built-up Area</span>
                  <p class="font-medium">{{ property.specifications.builtUpArea }}</p>
                </div>
                <div v-if="property.specifications.bedrooms">
                  <span class="text-sm text-slate-500">Bedrooms</span>
                  <p class="font-medium">{{ property.specifications.bedrooms }}</p>
                </div>
                <div v-if="property.specifications.bathrooms">
                  <span class="text-sm text-slate-500">Bathrooms</span>
                  <p class="font-medium">{{ property.specifications.bathrooms }}</p>
                </div>
                <div v-if="property.specifications.carParks">
                  <span class="text-sm text-slate-500">Car Parks</span>
                  <p class="font-medium">{{ property.specifications.carParks }}</p>
                </div>
                <div v-if="property.specifications.tenure">
                  <span class="text-sm text-slate-500">Tenure</span>
                  <p class="font-medium capitalize">{{ property.specifications.tenure.replace(/-/g, ' ') }}</p>
                </div>
                <div v-if="property.specifications.lotNumber">
                  <span class="text-sm text-slate-500">Lot Number</span>
                  <p class="font-medium">{{ property.specifications.lotNumber }}</p>
                </div>
                <div v-if="property.specifications.titleType">
                  <span class="text-sm text-slate-500">Title Type</span>
                  <p class="font-medium">{{ property.specifications.titleType }}</p>
                </div>
                <div v-if="property.specifications.yearBuilt">
                  <span class="text-sm text-slate-500">Year Built</span>
                  <p class="font-medium">{{ property.specifications.yearBuilt }}</p>
                </div>
                <div v-if="property.specifications.furnishing">
                  <span class="text-sm text-slate-500">Furnishing</span>
                  <p class="font-medium capitalize">{{ property.specifications.furnishing.replace(/-/g, ' ') }}</p>
                </div>
              </div>

              <!-- Documents Tab -->
              <div v-if="activeTab === 'documents'" class="space-y-3">
                <div
                  v-for="doc in property.documents"
                  :key="doc.id"
                  class="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <div>
                    <p class="font-medium">{{ doc.name }}</p>
                    <p class="text-sm text-slate-500">{{ doc.size }}</p>
                  </div>
                  <BaseButton variant="outline" size="sm">
                    Download
                  </BaseButton>
                </div>
              </div>

              <!-- Terms Tab -->
              <div v-if="activeTab === 'terms'" class="prose prose-sm max-w-none">
                <h3>General Terms & Conditions</h3>
                <ul>
                  <li>All bids are subject to approval by the financial institution.</li>
                  <li>A deposit of 10% of the reserve price is required on the fall of hammer.</li>
                  <li>Balance payment to be made within 120 days from auction date.</li>
                  <li>Property is sold on "as is where is" basis.</li>
                  <li>All statutory fees, quit rent, and assessment to be borne by the purchaser.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Inquiry Form -->
          <div class="bg-white rounded-lg border border-slate-200 p-6">
            <h3 class="font-semibold text-lg mb-4">Make an Inquiry</h3>
            <form @submit.prevent="submitInquiry" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput
                  v-model="inquiryForm.name"
                  label="Full Name"
                  required
                />
                <BaseInput
                  v-model="inquiryForm.email"
                  type="email"
                  label="Email"
                  required
                />
              </div>
              <BaseInput
                v-model="inquiryForm.phone"
                type="tel"
                label="Phone Number"
                required
              />
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-1.5">Message</label>
                <textarea
                  v-model="inquiryForm.message"
                  rows="4"
                  class="input"
                  placeholder="Your message or questions..."
                  required
                ></textarea>
              </div>
              <BaseButton type="submit" variant="primary" size="lg" block>
                Submit Inquiry
              </BaseButton>
            </form>
          </div>
        </div>

        <!-- Right Column - Auction Info (Sticky) -->
        <aside class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- Auction Details Card -->
            <div class="bg-white rounded-lg border border-slate-200 p-6">
              <div class="mb-6">
                <p class="text-sm text-slate-500 mb-1">Reserve Price</p>
                <div class="flex items-baseline gap-2">
                  <p class="text-3xl font-bold text-primary-500">{{ formattedPrice }}</p>
                </div>
                <p v-if="property.originalPrice" class="text-sm text-slate-500 line-through mt-1">
                  RM {{ property.originalPrice.toLocaleString() }}
                </p>
              </div>

              <div class="space-y-4 mb-6">
                <div class="flex items-start gap-3">
                  <CalendarIcon class="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p class="text-sm text-slate-500">Auction Date</p>
                    <p class="font-medium">{{ formattedDate }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <ClockIcon class="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p class="text-sm text-slate-500">Auction Time</p>
                    <p class="font-medium">{{ property.auctionTime }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <BuildingOfficeIcon class="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p class="text-sm text-slate-500">Bank</p>
                    <p class="font-medium">{{ property.bank }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <MapPinIcon class="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p class="text-sm text-slate-500">Venue</p>
                    <p class="font-medium text-sm">{{ property.auctionVenue }}</p>
                  </div>
                </div>
              </div>

              <div v-if="daysUntilAuction > 0" class="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                <p class="text-sm text-primary-700 font-medium">
                  Auction in {{ daysUntilAuction }} days
                </p>
              </div>

              <div class="space-y-3">
                <BaseButton variant="primary" size="lg" block>
                  Register to Bid
                </BaseButton>
                <BaseButton variant="outline" size="md" block>
                  <PhoneIcon class="w-5 h-5 inline mr-2" />
                  Call Us
                </BaseButton>
                <BaseButton variant="ghost" size="md" block>
                  <EnvelopeIcon class="w-5 h-5 inline mr-2" />
                  Email Inquiry
                </BaseButton>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="bg-slate-100 rounded-lg p-4 text-sm text-slate-700">
              <p class="font-medium mb-2">Need Help?</p>
              <p class="text-slate-600">Contact our team for property viewing arrangements or auction registration assistance.</p>
            </div>
          </div>
        </aside>
      </div>

      <!-- Similar Properties -->
      <section v-if="similarProperties.length > 0" class="mt-16">
        <h2 class="text-2xl font-bold mb-6">Similar Properties</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PropertyCard
            v-for="property in similarProperties"
            :key="property.id"
            :property="property"
          />
        </div>
      </section>
    </div>
  </div>
</template>
