<script setup lang="ts">
import {
  BookOpenIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Guides & Resources | JTR Auction House',
  meta: [
    { name: 'description', content: 'Comprehensive guides and resources for property auction buyers. Learn about the auction process, bidding tips, payment terms, and more.' }
  ]
})

// Guide categories
const guides = [
  {
    id: 'auction-guide',
    title: 'Auction Guide',
    description: 'Complete guide to participating in property auctions from start to finish',
    icon: BookOpenIcon,
    href: '/guides/auction-guide',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'bidding-tips',
    title: 'Bidding Tips',
    description: 'Professional tips and strategies for successful auction bidding',
    icon: LightBulbIcon,
    href: '/guides/bidding-tips',
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    description: 'Understanding deposit requirements, payment timelines, and financing options',
    icon: CurrencyDollarIcon,
    href: '/guides/payment-terms',
    color: 'bg-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 'conditions-of-sale',
    title: 'Conditions of Sale',
    description: 'Legal conditions and buyer responsibilities when purchasing auction properties',
    icon: DocumentTextIcon,
    href: '/guides/conditions-of-sale',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'dos-and-donts',
    title: "Do's and Don'ts",
    description: 'Essential do\'s and don\'ts for first-time auction participants',
    icon: CheckBadgeIcon,
    href: '/guides/dos-and-donts',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50'
  },
  {
    id: 'common-mistakes',
    title: 'Common Mistakes',
    description: 'Avoid these common pitfalls that auction buyers often make',
    icon: ExclamationTriangleIcon,
    href: '/guides/common-mistakes',
    color: 'bg-red-500',
    bgColor: 'bg-red-50'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="section-container py-16 lg:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            GUIDES & RESOURCES
          </h1>
          <p class="text-lg md:text-xl text-primary-100">
            Everything you need to know about buying property at auction.
            Our comprehensive guides will help you navigate the auction process with confidence.
          </p>
        </div>
      </div>
    </section>

    <!-- Guides Grid -->
    <section class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="guide in guides"
          :key="guide.id"
          :to="guide.href"
          class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
        >
          <div :class="[guide.bgColor, 'p-6']">
            <div :class="[guide.color, 'w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform']">
              <component :is="guide.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900">
              {{ guide.title }}
            </h3>
          </div>
          <div class="p-6">
            <p class="text-slate-600 mb-4">
              {{ guide.description }}
            </p>
            <div class="flex items-center gap-2 text-primary-500 font-medium group-hover:text-primary-600">
              Read Guide
              <ChevronRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-white py-16">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Need More Help?
          </h2>
          <p class="text-slate-600 mb-8">
            Our team is ready to assist you with any questions about the auction process.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact">
              <BaseButton variant="primary" size="lg">
                Contact Us
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/ebidding">
              <BaseButton variant="outline" size="lg">
                eBidding Guide
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
