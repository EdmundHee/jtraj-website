<script setup lang="ts">
import {
  SparklesIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Benefits of Selling at Auction | JTR Auction House',
  meta: [
    { name: 'description', content: 'Discover the advantages of selling your property through auction. Competitive pricing, faster sales, and transparent process.' }
  ]
})

// Benefits list
const benefits = [
  {
    title: 'Competitive Market-Driven Pricing',
    description: 'Auction creates competition among buyers, often resulting in prices above the reserve. The market determines the true value of your property.'
  },
  {
    title: 'Faster Sale Process',
    description: 'Unlike traditional sales that can take months, auction provides a definite sale date. From listing to completion typically takes 6-8 weeks.'
  },
  {
    title: 'No Prolonged Negotiations',
    description: 'Avoid months of back-and-forth negotiations. The auction process is straightforward with clear terms for all parties.'
  },
  {
    title: 'Qualified Buyers Only',
    description: 'Bidders must register and provide deposit, ensuring only serious, financially qualified buyers participate.'
  },
  {
    title: 'Transparency',
    description: 'Open bidding process with clear rules. Both seller and buyers know exactly where they stand throughout.'
  },
  {
    title: 'Professional Marketing',
    description: 'Your property gets extensive exposure through our marketing channels, website, social media, and buyer database.'
  },
  {
    title: '39+ Years of Expertise',
    description: 'Benefit from our decades of experience in the Malaysian property auction market and extensive network.'
  },
  {
    title: 'Binding Sale',
    description: 'Once the hammer falls, the sale is legally binding. No risk of buyers backing out at the last minute.'
  }
]

// Comparison table
const comparison = [
  {
    factor: 'Timeline to Sale',
    auction: '6-8 weeks',
    traditional: '6-12 months'
  },
  {
    factor: 'Price Certainty',
    auction: 'Definite on auction day',
    traditional: 'Uncertain negotiations'
  },
  {
    factor: 'Buyer Commitment',
    auction: 'Deposit upfront, binding sale',
    traditional: 'Can withdraw anytime'
  },
  {
    factor: 'Marketing',
    auction: 'Intensive short campaign',
    traditional: 'Extended, costly'
  },
  {
    factor: 'Negotiations',
    auction: 'None required',
    traditional: 'Multiple rounds'
  },
  {
    factor: 'Transparency',
    auction: 'Open bidding',
    traditional: 'Private negotiations'
  }
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
          <span class="text-slate-900 font-medium">Benefits</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/salebyowner" class="inline-flex items-center gap-2 text-green-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Sale by Owner
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <SparklesIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Benefits of Selling at Auction
          </h1>
        </div>
        <p class="text-lg text-green-100 max-w-2xl">
          Discover why auction is the smart choice for selling your property.
        </p>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="section-container py-12">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon class="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ benefit.title }}</h3>
                <p class="text-slate-600">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="bg-white py-12">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 mb-8 text-center">Auction vs Traditional Sale</h2>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-slate-100">
                  <th class="text-left p-4 font-semibold text-slate-900">Factor</th>
                  <th class="text-left p-4 font-semibold text-green-700">Auction</th>
                  <th class="text-left p-4 font-semibold text-slate-600">Traditional</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparison" :key="row.factor" class="border-b border-slate-200">
                  <td class="p-4 font-medium text-slate-900">{{ row.factor }}</td>
                  <td class="p-4 text-green-700">
                    <div class="flex items-center gap-2">
                      <CheckIcon class="w-5 h-5" />
                      {{ row.auction }}
                    </div>
                  </td>
                  <td class="p-4 text-slate-500">{{ row.traditional }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 class="text-2xl font-bold mb-4">Experience the Auction Advantage</h2>
          <p class="text-secondary-100 mb-6">
            Join thousands of property owners who have successfully sold through auction.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/salebyowner/submit">
              <BaseButton size="lg" class="bg-white text-secondary-600 hover:bg-slate-100">
                Submit Your Property
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/contact">
              <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-secondary-600">
                Contact Us
              </BaseButton>
            </NuxtLink>
          </div>
        </div>

        <!-- Navigation -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/salebyowner/how-to-sell">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              How to Sell
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/salebyowner/faq">
            <BaseButton variant="primary" size="md">
              View FAQ
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
