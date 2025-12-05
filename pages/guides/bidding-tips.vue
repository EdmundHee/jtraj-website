<script setup lang="ts">
import {
  LightBulbIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Bidding Tips - Strategies for Successful Auction Bidding | JTR Auction House',
  meta: [
    { name: 'description', content: 'Professional bidding tips and strategies for property auctions. Learn how to bid smartly and avoid common pitfalls.' }
  ]
})

// Bidding tips
const biddingTips = [
  {
    title: 'Do Your Homework',
    description: 'Research the property thoroughly before the auction. Know the market value, comparable sales in the area, and any issues with the property. This helps you set a realistic budget.',
    icon: '1'
  },
  {
    title: 'Set Your Maximum Bid',
    description: 'Determine your maximum bid beforehand based on your research and financial capacity. Write it down and commit to not exceeding it, no matter how competitive the bidding gets.',
    icon: '2'
  },
  {
    title: 'Factor in All Costs',
    description: 'Remember that the purchase price is not the only cost. Include stamp duty (varies by state), legal fees (usually 1-2%), renovation costs, and any outstanding charges.',
    icon: '3'
  },
  {
    title: 'Arrange Financing Early',
    description: 'Get loan pre-approval before attending the auction. You typically have only 90-120 days to pay the balance, so having financing ready is crucial.',
    icon: '4'
  },
  {
    title: 'Attend Auctions First',
    description: 'If you\'re new to auctions, attend a few as an observer first. This helps you understand the process, pace, and atmosphere without the pressure of bidding.',
    icon: '5'
  },
  {
    title: 'Start Slow, Stay Calm',
    description: 'Don\'t be the first to bid. Let others start and observe the competition. Stay calm throughout - emotional bidding often leads to overpaying.',
    icon: '6'
  },
  {
    title: 'Bid in Odd Numbers',
    description: 'Consider bidding in odd amounts (e.g., RM303,000 instead of RM300,000). This can throw off competitors who think in round numbers.',
    icon: '7'
  },
  {
    title: 'Watch the Competition',
    description: 'Pay attention to other bidders. Are they hesitating? Are they reaching their limit? This information can help you decide when to bid more aggressively.',
    icon: '8'
  }
]

// Common mistakes
const commonMistakes = [
  'Bidding without viewing the property',
  'Not reading the Conditions of Sale',
  'Ignoring outstanding charges and fees',
  'Getting caught up in bidding wars',
  'Not having financing arranged',
  'Underestimating renovation costs',
  'Failing to check for encumbrances',
  'Not setting a maximum budget'
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-4">
        <div class="flex items-center gap-2 text-sm">
          <NuxtLink to="/guides" class="text-slate-500 hover:text-primary-500">
            Guides
          </NuxtLink>
          <ChevronRightIcon class="w-4 h-4 text-slate-400" />
          <span class="text-slate-900 font-medium">Bidding Tips</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-amber-500 to-amber-700 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/guides" class="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Guides
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <LightBulbIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Bidding Tips
          </h1>
        </div>
        <p class="text-lg text-amber-100 max-w-2xl">
          Professional strategies and tips to help you bid smartly and successfully at property auctions.
        </p>
      </div>
    </section>

    <!-- Tips Content -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="tip in biddingTips"
            :key="tip.title"
            class="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                {{ tip.icon }}
              </span>
              <h3 class="text-lg font-semibold text-slate-900">{{ tip.title }}</h3>
            </div>
            <p class="text-slate-600">{{ tip.description }}</p>
          </div>
        </div>

        <!-- Common Mistakes to Avoid -->
        <div class="mt-12 bg-red-50 rounded-xl border border-red-200 p-8">
          <div class="flex items-center gap-3 mb-6">
            <ExclamationTriangleIcon class="w-6 h-6 text-red-600" />
            <h2 class="text-xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="mistake in commonMistakes"
              :key="mistake"
              class="flex items-start gap-3"
            >
              <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-slate-700">{{ mistake }}</span>
            </div>
          </div>
        </div>

        <!-- Pro Tips Box -->
        <div class="mt-12 bg-green-50 rounded-xl border border-green-200 p-8">
          <div class="flex items-center gap-3 mb-4">
            <CheckCircleIcon class="w-6 h-6 text-green-600" />
            <h2 class="text-xl font-bold text-slate-900">Pro Tip</h2>
          </div>
          <p class="text-slate-700">
            Consider attending 2-3 auctions as an observer before bidding on your first property.
            This will help you understand the pace, learn the auctioneer's style, and build confidence
            for when you're ready to bid.
          </p>
        </div>

        <!-- Navigation -->
        <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/guides/auction-guide">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              Previous: Auction Guide
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/guides/payment-terms">
            <BaseButton variant="primary" size="md">
              Next: Payment Terms
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
