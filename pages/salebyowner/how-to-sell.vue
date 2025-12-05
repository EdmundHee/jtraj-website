<script setup lang="ts">
import {
  DocumentTextIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'How to Sell Your Property at Auction | JTR Auction House',
  meta: [
    { name: 'description', content: 'Step-by-step guide on how to sell your property through JTR Auction House. Learn about the process, requirements, and timeline.' }
  ]
})

// Selling process steps
const sellingSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Contact us for a free consultation. We will discuss your property, your goals, and determine if auction is the right method for your sale.',
    timeline: 'Day 1'
  },
  {
    step: 2,
    title: 'Property Evaluation',
    description: 'Our team will visit and assess your property. We will provide a market analysis and recommend a reserve price based on current market conditions.',
    timeline: 'Days 2-5'
  },
  {
    step: 3,
    title: 'Agreement & Documentation',
    description: 'Sign the auction agreement and provide necessary documents including title deed, IC copy, and property photos.',
    timeline: 'Days 5-7'
  },
  {
    step: 4,
    title: 'Marketing Campaign',
    description: 'We market your property through our website, social media, email database, and partner networks. Property viewings are arranged for interested buyers.',
    timeline: '2-4 weeks'
  },
  {
    step: 5,
    title: 'Auction Day',
    description: 'Your property goes to auction. Our experienced auctioneer conducts the sale with competitive bidding to achieve the best price.',
    timeline: 'Auction date'
  },
  {
    step: 6,
    title: 'Sale Completion',
    description: 'Upon successful sale, we handle the paperwork. The buyer pays the balance within the stipulated period, and ownership is transferred.',
    timeline: '90-120 days'
  }
]

// Required documents
const requiredDocuments = [
  'Original title deed or certified copy',
  'NRIC of owner(s)',
  'Sales & Purchase Agreement (if applicable)',
  'Latest quit rent and assessment receipts',
  'Property photos (we can assist with professional photography)',
  'Letter of consent from mortgagee (if property has loan)',
  'Strata title documents (for stratified properties)',
  'Power of Attorney (if owner cannot attend)'
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-4">
        <div class="flex items-center gap-2 text-sm">
          <NuxtLink to="/salebyowner" class="text-slate-500 hover:text-primary-500">
            Sale by Owner
          </NuxtLink>
          <ChevronRightIcon class="w-4 h-4 text-slate-400" />
          <span class="text-slate-900 font-medium">How to Sell</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/salebyowner" class="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Sale by Owner
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <DocumentTextIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            How to Sell Your Property
          </h1>
        </div>
        <p class="text-lg text-blue-100 max-w-2xl">
          A comprehensive guide to selling your property through our professional auction services.
        </p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-slate-900 mb-8">The Selling Process</h2>

        <div class="space-y-6">
          <div
            v-for="step in sellingSteps"
            :key="step.step"
            class="flex gap-6"
          >
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {{ step.step }}
              </div>
            </div>
            <div class="flex-1 bg-white rounded-xl border border-slate-200 p-6">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 class="text-lg font-semibold text-slate-900">{{ step.title }}</h3>
                <span class="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-fit">
                  {{ step.timeline }}
                </span>
              </div>
              <p class="text-slate-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Required Documents -->
    <section class="bg-white py-12">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
          <div class="bg-slate-50 rounded-xl border border-slate-200 p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="doc in requiredDocuments"
                :key="doc"
                class="flex items-start gap-3"
              >
                <CheckCircleIcon class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span class="text-slate-700">{{ doc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 class="text-2xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p class="text-secondary-100 mb-6">
            Submit your property details and we'll contact you within 24 hours.
          </p>
          <NuxtLink to="/salebyowner/submit">
            <BaseButton size="lg" class="bg-white text-secondary-600 hover:bg-slate-100">
              Submit Your Property
            </BaseButton>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/salebyowner">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              Back to Sale by Owner
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/salebyowner/benefits">
            <BaseButton variant="primary" size="md">
              View Benefits
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
