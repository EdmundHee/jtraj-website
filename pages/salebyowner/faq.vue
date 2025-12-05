<script setup lang="ts">
import {
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'FAQ - Owner Sale Questions | JTR Auction House',
  meta: [
    { name: 'description', content: 'Frequently asked questions about selling your property through JTR Auction House. Get answers to common queries.' }
  ]
})

// FAQ categories
const faqCategories = [
  {
    title: 'Getting Started',
    faqs: [
      {
        question: 'How do I start the process of selling my property at auction?',
        answer: 'Simply submit your property details through our online form or contact us directly. Our team will evaluate your property and discuss the auction process with you. The initial consultation is free and comes with no obligation.'
      },
      {
        question: 'Is there a minimum property value required?',
        answer: 'We accept properties across a wide range of values. During our initial consultation, we will assess whether auction is the right selling method for your specific property based on various factors including location, type, and market conditions.'
      },
      {
        question: 'How long does the entire process take?',
        answer: 'From submission to auction day typically takes 4-6 weeks, depending on the property and market conditions. After a successful auction, the completion (balance payment and transfer) takes an additional 90-120 days.'
      }
    ]
  },
  {
    title: 'Costs & Fees',
    faqs: [
      {
        question: 'What fees do I need to pay as a seller?',
        answer: 'The seller typically pays an auctioneer commission (usually a percentage of the sale price) upon successful sale. The exact rate will be discussed and agreed upon before listing. There are no upfront fees for listing your property.'
      },
      {
        question: 'What if my property doesn\'t sell at auction?',
        answer: 'If your property does not sell at the first auction, we can discuss options including re-auctioning at a revised reserve price or exploring other selling methods. There is no penalty for an unsuccessful auction.'
      },
      {
        question: 'Who pays for the marketing costs?',
        answer: 'Basic marketing is included in our service. This includes listing on our website, inclusion in our auction catalog, and promotion to our buyer database. Additional premium marketing options are available at extra cost.'
      }
    ]
  },
  {
    title: 'The Auction Process',
    faqs: [
      {
        question: 'How is the reserve price determined?',
        answer: 'We conduct a thorough market analysis and property evaluation to recommend a reserve price. The final reserve price is agreed upon by you. This is the minimum price at which your property will be sold.'
      },
      {
        question: 'Can I set conditions on the sale?',
        answer: 'Yes, certain conditions can be included in the Conditions of Sale document. However, unusual or restrictive conditions may affect buyer interest. We will advise you on standard market practices.'
      },
      {
        question: 'Do I need to be present at the auction?',
        answer: 'While not mandatory, we recommend attending if possible. Alternatively, you can appoint a representative with a letter of authorization to act on your behalf.'
      },
      {
        question: 'What happens on auction day?',
        answer: 'Your property will be announced and bidding will commence from the reserve price. Interested buyers will bid against each other. The highest bidder above the reserve price wins and must pay a 10% deposit immediately.'
      }
    ]
  },
  {
    title: 'After the Auction',
    faqs: [
      {
        question: 'When do I receive the money from the sale?',
        answer: 'You receive the 10% deposit (less any agreed fees) shortly after the auction. The balance 90% is paid upon completion, typically 90-120 days after the auction.'
      },
      {
        question: 'What if the buyer doesn\'t complete the purchase?',
        answer: 'The buyer\'s deposit is forfeited according to the Conditions of Sale. You retain the deposit as compensation, and the property may be re-auctioned or sold through other means.'
      },
      {
        question: 'Who handles the legal work?',
        answer: 'Both parties typically appoint their own solicitors. The buyer\'s solicitor prepares the transfer documents, and your solicitor reviews and finalizes the transaction on your behalf.'
      }
    ]
  }
]

// Expand state
const expandedItems = ref<Set<string>>(new Set())

const toggleItem = (id: string) => {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id)
  } else {
    expandedItems.value.add(id)
  }
}

const isExpanded = (id: string) => expandedItems.value.has(id)
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
          <span class="text-slate-900 font-medium">FAQ</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/salebyowner" class="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Sale by Owner
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <QuestionMarkCircleIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Frequently Asked Questions
          </h1>
        </div>
        <p class="text-lg text-purple-100 max-w-2xl">
          Find answers to common questions about selling your property through auction.
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="section-container py-12">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-8">
          <div v-for="category in faqCategories" :key="category.title">
            <h2 class="text-xl font-bold text-slate-900 mb-4">{{ category.title }}</h2>
            <div class="space-y-3">
              <div
                v-for="(faq, index) in category.faqs"
                :key="`${category.title}-${index}`"
                class="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  @click="toggleItem(`${category.title}-${index}`)"
                  class="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span class="font-medium text-slate-900 pr-4">{{ faq.question }}</span>
                  <ChevronDownIcon
                    class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform"
                    :class="{ 'rotate-180': isExpanded(`${category.title}-${index}`) }"
                  />
                </button>
                <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-96"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div
                    v-if="isExpanded(`${category.title}-${index}`)"
                    class="px-5 pb-5"
                  >
                    <p class="text-slate-600">{{ faq.answer }}</p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <!-- Still Have Questions -->
        <div class="mt-12 bg-primary-50 rounded-xl border border-primary-200 p-8 text-center">
          <h2 class="text-xl font-bold text-slate-900 mb-2">Still Have Questions?</h2>
          <p class="text-slate-600 mb-6">
            Our team is ready to help you with any additional questions about selling your property.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact">
              <BaseButton variant="primary" size="md">
                Contact Us
              </BaseButton>
            </NuxtLink>
            <a href="https://wa.me/60146793560" target="_blank">
              <BaseButton variant="outline" size="md" class="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                WhatsApp Us
              </BaseButton>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <NuxtLink to="/salebyowner/benefits">
            <BaseButton variant="outline" size="md">
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              View Benefits
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/salebyowner/submit">
            <BaseButton variant="primary" size="md">
              Submit Your Property
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
