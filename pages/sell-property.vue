<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-16">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Sell Your Property</h1>
          <p class="text-xl text-green-100 mb-8">
            List your property for auction with Malaysia's leading auction house
          </p>
          <div class="flex flex-wrap justify-center gap-8 text-sm">
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-green-300" />
              <span>Free Property Valuation</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-green-300" />
              <span>Professional Marketing</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-green-300" />
              <span>39+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="section-container">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Form Section -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-sm p-8">
              <h2 class="text-2xl font-bold text-slate-900 mb-2">Property Submission Form</h2>
              <p class="text-slate-600 mb-8">Fill in the details below and our team will contact you within 24 hours.</p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Contact Information -->
                <div>
                  <h3 class="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">Contact Information</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        required
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., 012-345 6789"
                      />
                    </div>
                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <!-- Property Information -->
                <div>
                  <h3 class="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">Property Information</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Property Type *</label>
                      <select
                        v-model="form.propertyType"
                        required
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="apartment">Apartment / Condo</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="land">Land</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">State *</label>
                      <select
                        v-model="form.state"
                        required
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select state</option>
                        <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                      </select>
                    </div>
                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Property Address *</label>
                      <textarea
                        v-model="form.address"
                        required
                        rows="2"
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Full address of the property"
                      ></textarea>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Built-up Size (sq ft)</label>
                      <input
                        v-model="form.builtUp"
                        type="text"
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., 1,200"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Land Size (sq ft)</label>
                      <input
                        v-model="form.landSize"
                        type="text"
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., 2,400"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Expected Price (RM)</label>
                      <input
                        v-model="form.expectedPrice"
                        type="text"
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., 500,000"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">Title Type</label>
                      <select
                        v-model="form.titleType"
                        class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select title type</option>
                        <option value="freehold">Freehold</option>
                        <option value="leasehold">Leasehold</option>
                        <option value="malay-reserve">Malay Reserve</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Additional Details -->
                <div>
                  <h3 class="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">Additional Details</h3>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Reason for Selling / Additional Information</label>
                    <textarea
                      v-model="form.additionalInfo"
                      rows="4"
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tell us more about your property and why you want to sell..."
                    ></textarea>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ isSubmitting ? 'Submitting...' : 'Submit Property for Review' }}
                  </button>
                  <p class="text-sm text-slate-500 text-center mt-4">
                    By submitting, you agree to be contacted by our team regarding your property.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Why Sell With Us -->
            <div class="bg-white rounded-2xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Why Sell With JTR?</h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ClockIcon class="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 class="font-medium text-slate-900">Quick Sale</h4>
                    <p class="text-sm text-slate-600">Sell your property within weeks, not months</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CurrencyDollarIcon class="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 class="font-medium text-slate-900">Best Market Price</h4>
                    <p class="text-sm text-slate-600">Competitive bidding ensures maximum value</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MegaphoneIcon class="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 class="font-medium text-slate-900">Wide Exposure</h4>
                    <p class="text-sm text-slate-600">Access to our extensive buyer network</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheckIcon class="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 class="font-medium text-slate-900">Trusted Process</h4>
                    <p class="text-sm text-slate-600">39+ years of professional service</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
              <h3 class="text-lg font-semibold mb-4">Need Help?</h3>
              <p class="text-slate-300 text-sm mb-4">
                Our team is ready to assist you with any questions about selling your property.
              </p>
              <div class="space-y-3">
                <a href="tel:+60322749999" class="flex items-center gap-3 text-white hover:text-green-300 transition-colors">
                  <PhoneIcon class="w-5 h-5" />
                  <span>03-2274 9999</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=60146793560" target="_blank" class="flex items-center gap-3 text-white hover:text-green-300 transition-colors">
                  <ChatBubbleLeftRightIcon class="w-5 h-5" />
                  <span>WhatsApp: 014-679 3560</span>
                </a>
              </div>
            </div>

            <!-- Related Links -->
            <div class="bg-white rounded-2xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Learn More</h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/salebyowner" class="text-green-600 hover:text-green-700 flex items-center gap-2">
                    <ArrowRightIcon class="w-4 h-4" />
                    Owner Auction Sale Guide
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/salebyowner/benefits" class="text-green-600 hover:text-green-700 flex items-center gap-2">
                    <ArrowRightIcon class="w-4 h-4" />
                    Benefits of Selling by Auction
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/salebyowner/faq" class="text-green-600 hover:text-green-700 flex items-center gap-2">
                    <ArrowRightIcon class="w-4 h-4" />
                    Frequently Asked Questions
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/whosellfor" class="text-green-600 hover:text-green-700 flex items-center gap-2">
                    <ArrowRightIcon class="w-4 h-4" />
                    Our Services
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'

const states = [
  'Johor',
  'Kedah',
  'Kelantan',
  'Kuala Lumpur',
  'Labuan',
  'Melaka',
  'Negeri Sembilan',
  'Pahang',
  'Perak',
  'Perlis',
  'Pulau Pinang',
  'Putrajaya',
  'Sabah',
  'Sarawak',
  'Selangor',
  'Terengganu',
]

const form = ref({
  name: '',
  phone: '',
  email: '',
  propertyType: '',
  state: '',
  address: '',
  builtUp: '',
  landSize: '',
  expectedPrice: '',
  titleType: '',
  additionalInfo: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))

  alert('Thank you for your submission! Our team will contact you within 24 hours.')

  // Reset form
  form.value = {
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    state: '',
    address: '',
    builtUp: '',
    landSize: '',
    expectedPrice: '',
    titleType: '',
    additionalInfo: '',
  }

  isSubmitting.value = false
}

useHead({
  title: 'Sell Your Property - JTR Auction House',
  meta: [
    {
      name: 'description',
      content: 'Submit your property for auction with JTR Auction House. Free valuation, professional marketing, and 39+ years of trusted service in Malaysia.',
    },
  ],
})
</script>
