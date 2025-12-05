<script setup lang="ts">
import {
  BookOpenIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ArrowLeftIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Auction Guide - How to Buy Property at Auction | JTR Auction House',
  meta: [
    { name: 'description', content: 'Complete guide to buying property at auction in Malaysia. Learn about pre-auction preparation, bidding process, and post-auction procedures.' }
  ]
})

// Guide sections
const guideSections = [
  {
    title: 'Before the Auction',
    steps: [
      {
        title: 'Research the Property',
        description: 'Thoroughly research the property including location, market value, and any encumbrances. Visit the site if possible.'
      },
      {
        title: 'Obtain Auction Documents',
        description: 'Get copies of the Proclamation of Sale, Conditions of Sale, and any other relevant documents from the auctioneer.'
      },
      {
        title: 'Conduct Due Diligence',
        description: 'Perform a title search, check for caveats, and verify the property\'s legal status with the land office.'
      },
      {
        title: 'Arrange Financing',
        description: 'Get pre-approved for a loan if needed. Ensure you have funds ready for the 10% deposit on auction day.'
      },
      {
        title: 'Register as a Bidder',
        description: 'Register with the auctioneer before the auction. For eBidding, complete online registration and deposit.'
      }
    ]
  },
  {
    title: 'During the Auction',
    steps: [
      {
        title: 'Arrive Early',
        description: 'Arrive at the auction venue early to complete any registration requirements and familiarize yourself with the process.'
      },
      {
        title: 'Bring Required Documents',
        description: 'Bring your IC, banker\'s draft/cash for deposit, and authorization letter if bidding on behalf of others.'
      },
      {
        title: 'Set Your Maximum Bid',
        description: 'Determine your maximum bid beforehand and stick to it. Don\'t let emotions drive you to overbid.'
      },
      {
        title: 'Bid Confidently',
        description: 'When bidding, signal clearly to the auctioneer. All bids are legally binding once accepted.'
      },
      {
        title: 'Win the Bid',
        description: 'If successful, you\'ll be required to sign the Memorandum of Contract and pay the deposit immediately.'
      }
    ]
  },
  {
    title: 'After the Auction',
    steps: [
      {
        title: 'Pay the Deposit',
        description: 'Pay 10% of the purchase price (including any deposit already paid) on the same day of the auction.'
      },
      {
        title: 'Appoint a Solicitor',
        description: 'Engage a solicitor to handle the legal transfer of the property. They will prepare the necessary documents.'
      },
      {
        title: 'Pay the Balance',
        description: 'Pay the remaining 90% within the stipulated period (usually 90-120 days) as stated in the Conditions of Sale.'
      },
      {
        title: 'Complete Transfer',
        description: 'Once all payments are made, your solicitor will complete the title transfer and registration.'
      },
      {
        title: 'Take Possession',
        description: 'After transfer completion, you can take possession of the property. Handle any existing occupants legally.'
      }
    ]
  }
]

// Key tips
const keyTips = [
  'Always view the property before bidding if possible',
  'Never bid without proper due diligence',
  'Ensure you have financing arrangements in place',
  'Read all conditions of sale carefully',
  'Understand all costs involved including stamp duty and legal fees',
  'Be prepared to handle existing tenants or occupants',
  'Keep all documentation safe and organized',
  'Consult professionals (lawyers, bankers) when in doubt'
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
          <span class="text-slate-900 font-medium">Auction Guide</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/guides" class="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Guides
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <BookOpenIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Auction Guide
          </h1>
        </div>
        <p class="text-lg text-blue-100 max-w-2xl">
          A comprehensive guide to buying property at auction in Malaysia.
          Learn everything from preparation to completion.
        </p>
      </div>
    </section>

    <!-- Guide Content -->
    <section class="section-container py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Guide Sections -->
        <div class="space-y-12">
          <div v-for="(section, sectionIndex) in guideSections" :key="section.title">
            <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {{ sectionIndex + 1 }}
              </span>
              {{ section.title }}
            </h2>

            <div class="space-y-4">
              <div
                v-for="(step, stepIndex) in section.steps"
                :key="step.title"
                class="bg-white rounded-xl border border-slate-200 p-6"
              >
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600">
                    {{ sectionIndex + 1 }}.{{ stepIndex + 1 }}
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ step.title }}</h3>
                    <p class="text-slate-600">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Tips -->
        <div class="mt-16 bg-amber-50 rounded-xl border border-amber-200 p-8">
          <h2 class="text-xl font-bold text-slate-900 mb-6">Key Tips to Remember</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="tip in keyTips"
              :key="tip"
              class="flex items-start gap-3"
            >
              <CheckCircleIcon class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span class="text-slate-700">{{ tip }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/guides">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              Back to Guides
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/guides/bidding-tips">
            <BaseButton variant="primary" size="md">
              Next: Bidding Tips
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
