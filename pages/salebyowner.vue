<script setup lang="ts">
import {
  HomeIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Sale By Owner - Sell Your Property at Auction | JTR Auction House',
  meta: [
    { name: 'description', content: 'Sell your property through professional auction services. Get the best market price with JTR Auction House - Malaysia\'s trusted auctioneer since 1985.' }
  ]
})

// Navigation cards for owner sale section
const navigationCards = [
  {
    id: 'how-to-sell',
    title: 'How to Sell',
    description: 'Step-by-step guide on selling your property through our auction platform',
    icon: 'DocumentTextIcon',
    href: '/salebyowner/how-to-sell',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'benefits',
    title: 'Benefits of Auction',
    description: 'Discover why auction is the smart choice for selling your property',
    icon: 'SparklesIcon',
    href: '/salebyowner/benefits',
    color: 'bg-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 'submit',
    title: 'Submit Proposal',
    description: 'Ready to sell? Submit your property details for our review',
    icon: 'ClipboardDocumentCheckIcon',
    href: '/salebyowner/submit',
    color: 'bg-secondary-500',
    bgColor: 'bg-secondary-50'
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Find answers to common questions about owner auction sales',
    icon: 'QuestionMarkCircleIcon',
    href: '/salebyowner/faq',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50'
  }
]

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Submit Your Property',
    description: 'Fill out our online form with your property details and documents'
  },
  {
    step: 2,
    title: 'Property Evaluation',
    description: 'Our team will assess your property and determine the reserve price'
  },
  {
    step: 3,
    title: 'Marketing & Promotion',
    description: 'We market your property to our database of interested buyers'
  },
  {
    step: 4,
    title: 'Auction Day',
    description: 'Your property goes to auction with competitive bidding'
  }
]

// Benefits list
const benefits = [
  'Competitive market-driven pricing',
  'Faster sale completion',
  'No long negotiation periods',
  'Transparent process',
  'Professional marketing exposure',
  'Access to qualified buyers',
  '39+ years of auction expertise',
  'Nationwide coverage'
]

// Icon component mapping
const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    HomeIcon,
    DocumentTextIcon,
    QuestionMarkCircleIcon,
    ClipboardDocumentCheckIcon,
    SparklesIcon
  }
  return icons[iconName]
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="relative section-container py-16 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
              <HomeIcon class="w-5 h-5" />
              <span class="text-sm font-medium">Owner Auction Sale</span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              SELL YOUR PROPERTY<br />AT AUCTION
            </h1>
            <p class="text-lg md:text-xl text-primary-100 mb-8">
              Get the best market price for your property through Malaysia's most trusted
              auction platform. Fast, transparent, and professional service since 1985.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/salebyowner/submit">
                <BaseButton variant="secondary" size="lg">
                  Submit Your Property
                </BaseButton>
              </NuxtLink>
              <NuxtLink to="/salebyowner/how-to-sell">
                <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary-600">
                  Learn How It Works
                </BaseButton>
              </NuxtLink>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="hidden lg:block">
            <div class="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center p-4">
                  <div class="text-4xl font-extrabold text-secondary-400 mb-2">39+</div>
                  <div class="text-sm text-primary-200">Years Experience</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-4xl font-extrabold text-secondary-400 mb-2">5000+</div>
                  <div class="text-sm text-primary-200">Properties Sold</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-4xl font-extrabold text-secondary-400 mb-2">16</div>
                  <div class="text-sm text-primary-200">States Covered</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-4xl font-extrabold text-secondary-400 mb-2">500+</div>
                  <div class="text-sm text-primary-200">Monthly Auctions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Cards Section -->
    <section class="section-container py-16">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Owner Auction Sale Guide
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Everything you need to know about selling your property through our auction services
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="card in navigationCards"
          :key="card.id"
          :to="card.href"
          class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
        >
          <div :class="[card.bgColor, 'p-6']">
            <div :class="[card.color, 'w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform']">
              <component :is="getIconComponent(card.icon)" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-lg font-bold text-slate-900">
              {{ card.title }}
            </h3>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-600 mb-4">
              {{ card.description }}
            </p>
            <div class="flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:text-primary-600">
              Learn More
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="bg-white py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Selling your property at auction is simple with our streamlined 4-step process
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="step in processSteps" :key="step.step" class="relative">
              <!-- Step Number -->
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold text-lg mb-4 mx-auto md:mx-0">
                {{ step.step }}
              </div>

              <!-- Connector Line (hidden on mobile and last item) -->
              <div
                v-if="step.step < 4"
                class="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-slate-200"
              ></div>

              <h3 class="text-lg font-semibold text-slate-900 mb-2 text-center md:text-left">
                {{ step.title }}
              </h3>
              <p class="text-sm text-slate-600 text-center md:text-left">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/salebyowner/how-to-sell">
            <BaseButton variant="outline" size="lg">
              View Detailed Guide
              <ChevronRightIcon class="w-5 h-5 ml-2" />
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="bg-slate-100 py-16">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Why Sell at Auction?
            </h2>
            <p class="text-slate-600 mb-8">
              Auction is the smart, transparent way to sell your property. With competitive bidding,
              you can achieve the true market value for your asset.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="benefit in benefits"
                :key="benefit"
                class="flex items-center gap-3"
              >
                <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckIcon class="w-4 h-4 text-green-600" />
                </div>
                <span class="text-sm text-slate-700">{{ benefit }}</span>
              </div>
            </div>

            <div class="mt-8">
              <NuxtLink to="/salebyowner/benefits">
                <BaseButton variant="primary" size="lg">
                  Learn More About Benefits
                </BaseButton>
              </NuxtLink>
            </div>
          </div>

          <!-- Image/Illustration Placeholder -->
          <div class="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
            <div class="text-center">
              <div class="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon class="w-12 h-12 text-white" />
              </div>
              <h3 class="text-xl font-bold text-primary-700 mb-2">Your Property, Our Expertise</h3>
              <p class="text-primary-600">Professional auction services since 1985</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-16">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Ready to Sell Your Property?
          </h2>
          <p class="text-lg text-secondary-100 mb-8">
            Submit your property details today and our team will contact you within 24 hours
            to discuss your auction options.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/salebyowner/submit">
              <BaseButton size="lg" class="bg-white text-secondary-600 hover:bg-slate-100">
                <ClipboardDocumentCheckIcon class="w-5 h-5 mr-2" />
                Submit Property Proposal
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/contact">
              <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-secondary-600">
                <PhoneIcon class="w-5 h-5 mr-2" />
                Contact Us
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-white py-12">
      <div class="section-container">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-xl font-semibold text-slate-900 mb-4">Have Questions?</h3>
          <p class="text-slate-600 mb-6">
            Our team is ready to help you with any questions about selling your property at auction.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+60312345678" class="flex items-center justify-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
              <PhoneIcon class="w-5 h-5" />
              +603-1234 5678
            </a>
            <a href="https://wa.me/60146793560" target="_blank" class="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium">
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
