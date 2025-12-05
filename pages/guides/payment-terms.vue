<script setup lang="ts">
import {
  CurrencyDollarIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Payment Terms - Auction Payment Guide | JTR Auction House',
  meta: [
    { name: 'description', content: 'Understand payment terms for auction properties. Learn about deposits, payment schedules, and financing options for auction purchases.' }
  ]
})

// Payment breakdown
const paymentBreakdown = [
  {
    title: 'Registration Deposit',
    percentage: 'Varies',
    amount: 'RM5,000 - RM50,000',
    timing: 'Before auction',
    description: 'Required to register as a bidder. Amount depends on property reserve price. Refundable if unsuccessful.'
  },
  {
    title: 'Auction Day Deposit',
    percentage: '10%',
    amount: 'Of purchase price',
    timing: 'Same day',
    description: 'If successful, pay 10% of purchase price (less any deposit already paid) on the auction day itself.'
  },
  {
    title: 'Balance Payment',
    percentage: '90%',
    amount: 'Of purchase price',
    timing: '90-120 days',
    description: 'Remaining balance must be paid within the stipulated period as stated in the Conditions of Sale.'
  }
]

// Additional costs
const additionalCosts = [
  {
    title: 'Stamp Duty',
    description: 'Based on property value - varies by state. Generally 1-4% depending on purchase price tier.'
  },
  {
    title: 'Legal Fees',
    description: 'Typically 1-2% of purchase price for transfer and loan documentation.'
  },
  {
    title: 'Auctioneer Fees',
    description: 'Usually paid by the seller, but verify in Conditions of Sale.'
  },
  {
    title: 'Outstanding Charges',
    description: 'May include quit rent, assessment, maintenance fees - check before bidding.'
  },
  {
    title: 'Real Property Gains Tax',
    description: 'If applicable to the transaction, based on holding period.'
  }
]

// Payment methods
const paymentMethods = [
  'Bank Draft / Banker\'s Cheque',
  'Cashier\'s Order',
  'Online Bank Transfer (for registered accounts)',
  'Cash (for deposit only, subject to limits)'
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
          <span class="text-slate-900 font-medium">Payment Terms</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/guides" class="inline-flex items-center gap-2 text-green-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Guides
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <CurrencyDollarIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Payment Terms
          </h1>
        </div>
        <p class="text-lg text-green-100 max-w-2xl">
          Understanding the payment structure and timeline for purchasing auction properties.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Payment Breakdown -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Payment Structure</h2>
          <div class="space-y-6">
            <div
              v-for="(payment, index) in paymentBreakdown"
              :key="payment.title"
              class="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div class="flex-shrink-0">
                  <span class="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg">
                    {{ index + 1 }}
                  </span>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ payment.title }}</h3>
                  <p class="text-slate-600">{{ payment.description }}</p>
                </div>
                <div class="flex flex-col items-start md:items-end gap-1 md:text-right">
                  <span class="text-2xl font-bold text-green-600">{{ payment.percentage }}</span>
                  <span class="text-sm text-slate-500">{{ payment.amount }}</span>
                  <span class="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">{{ payment.timing }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Important Notice -->
        <div class="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-12">
          <div class="flex gap-4">
            <InformationCircleIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 class="font-semibold text-slate-900 mb-2">Important Notice</h3>
              <p class="text-slate-700">
                Payment terms may vary depending on the bank or institution conducting the auction.
                Always refer to the specific Conditions of Sale document for the property you are bidding on.
                Late payment may result in forfeiture of deposit and cancellation of sale.
              </p>
            </div>
          </div>
        </div>

        <!-- Additional Costs -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Additional Costs to Consider</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="cost in additionalCosts"
              :key="cost.title"
              class="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 class="font-semibold text-slate-900 mb-2">{{ cost.title }}</h3>
              <p class="text-sm text-slate-600">{{ cost.description }}</p>
            </div>
          </div>
        </div>

        <!-- Payment Methods -->
        <div class="bg-slate-100 rounded-xl p-8 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Accepted Payment Methods</h2>
          <ul class="space-y-3">
            <li
              v-for="method in paymentMethods"
              :key="method"
              class="flex items-center gap-3"
            >
              <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-slate-700">{{ method }}</span>
            </li>
          </ul>
        </div>

        <!-- Navigation -->
        <div class="flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/guides/bidding-tips">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              Previous: Bidding Tips
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/guides/conditions-of-sale">
            <BaseButton variant="primary" size="md">
              Next: Conditions of Sale
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
