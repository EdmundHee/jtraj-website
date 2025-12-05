<script setup lang="ts">
import {
  ComputerDesktopIcon,
  UserPlusIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  PlayCircleIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'eBidding - Online Auction Platform | JTR Auction House',
  meta: [
    { name: 'description', content: 'Learn how to participate in online property auctions through eBidding. Registration guide, terms and conditions, and step-by-step instructions for Malaysian property auctions.' }
  ]
})

// eBidding portal URL
const eBiddingPortalUrl = 'https://www.auctionsale.com.my'

// Navigation sections
const guideSections = [
  {
    id: 'overview',
    title: 'What is eBidding?',
    icon: 'ComputerDesktopIcon',
    description: 'Learn about online property auction bidding',
    href: '#overview'
  },
  {
    id: 'register',
    title: 'Registration Guide',
    icon: 'UserPlusIcon',
    description: 'Step-by-step account creation process',
    href: '#registration'
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    icon: 'DocumentTextIcon',
    description: 'Important rules and requirements',
    href: '#terms'
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: 'QuestionMarkCircleIcon',
    description: 'Common questions answered',
    href: '#faq'
  }
]

// Benefits of eBidding
const benefits = [
  {
    title: 'Bid from Anywhere',
    description: 'Participate in auctions from the comfort of your home or office',
    icon: GlobeAltIcon
  },
  {
    title: 'Real-time Bidding',
    description: 'See live updates and bid in real-time against other participants',
    icon: ClockIcon
  },
  {
    title: 'Secure Platform',
    description: 'Bank-grade security ensures your information is protected',
    icon: ShieldCheckIcon
  },
  {
    title: 'Mobile Friendly',
    description: 'Access the platform on any device - desktop, tablet, or mobile',
    icon: DevicePhoneMobileIcon
  }
]

// Registration steps
const registrationSteps = [
  {
    step: 1,
    title: 'Visit the eBidding Portal',
    description: 'Go to auctionsale.com.my and click on "Register" button'
  },
  {
    step: 2,
    title: 'Fill Registration Form',
    description: 'Provide your personal details including IC number, contact information, and create a password'
  },
  {
    step: 3,
    title: 'Upload Documents',
    description: 'Upload required documents: IC copy, proof of address, and bank statement'
  },
  {
    step: 4,
    title: 'Verify Your Account',
    description: 'Check your email and click the verification link to activate your account'
  },
  {
    step: 5,
    title: 'Pay Registration Deposit',
    description: 'Pay the required deposit to enable bidding on properties'
  },
  {
    step: 6,
    title: 'Start Bidding',
    description: 'Once approved, you can start participating in online auctions'
  }
]

// Required documents
const requiredDocuments = [
  'Copy of NRIC (front and back)',
  'Proof of residential address (utility bill or bank statement)',
  'Bank statement (within last 3 months)',
  'Letter of Authorization (if bidding on behalf of company)',
  'Company registration documents (if applicable)'
]

// Terms and conditions
const termsConditions = [
  {
    title: 'Eligibility',
    content: 'Must be a Malaysian citizen or permanent resident aged 18 years and above. Foreign nationals must comply with state regulations for property purchase.'
  },
  {
    title: 'Registration Deposit',
    content: 'A refundable deposit is required before bidding. The amount varies based on the property reserve price. Deposits will be refunded within 14 working days for unsuccessful bidders.'
  },
  {
    title: 'Bidding Rules',
    content: 'All bids are legally binding. The highest bidder at the close of auction will be declared the successful purchaser. Bid increments are predetermined and displayed on the platform.'
  },
  {
    title: 'Payment Terms',
    content: 'Successful bidder must pay 10% of the purchase price (less deposit) within the same day of auction. The balance 90% must be paid within 90-120 days as per conditions of sale.'
  },
  {
    title: 'Technical Requirements',
    content: 'Stable internet connection required. Recommended browsers: Chrome, Firefox, Safari, or Edge. The platform is not responsible for connection issues on the bidder\'s end.'
  }
]

// FAQ items
const faqItems = [
  {
    question: 'What is eBidding?',
    answer: 'eBidding is an online auction platform that allows you to participate in property auctions remotely through the internet, without physically attending the auction venue.'
  },
  {
    question: 'How do I register for eBidding?',
    answer: 'Visit auctionsale.com.my, click Register, fill in your details, upload required documents, and pay the registration deposit. Once verified, you can start bidding.'
  },
  {
    question: 'What deposit is required?',
    answer: 'The deposit amount varies based on the property reserve price. Generally, it ranges from RM5,000 to RM50,000. This deposit is fully refundable if you are not the successful bidder.'
  },
  {
    question: 'Can I cancel my bid?',
    answer: 'No, all bids placed are final and legally binding. Please ensure you have done your due diligence before placing any bid.'
  },
  {
    question: 'What happens if I win the auction?',
    answer: 'You will need to pay 10% of the purchase price (less your deposit) on the same day. The balance 90% must be paid within the stipulated period as per the conditions of sale.'
  },
  {
    question: 'Is eBidding available for all properties?',
    answer: 'Not all properties are available for eBidding. Look for the "eBidding" badge on property listings to identify properties that support online bidding.'
  }
]

// Expand/collapse state for FAQ
const expandedFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

// Icon component mapping
const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    ComputerDesktopIcon,
    UserPlusIcon,
    DocumentTextIcon,
    QuestionMarkCircleIcon,
    PlayCircleIcon
  }
  return icons[iconName]
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-purple-700 to-purple-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="relative section-container py-16 lg:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <ComputerDesktopIcon class="w-5 h-5" />
            <span class="text-sm font-medium">Online Auction Platform</span>
          </div>
          <h1 class="text-amber-400 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            eBIDDING
          </h1>
          <p class="text-lg md:text-xl text-purple-100 mb-8">
            Bid on property auctions online from anywhere in Malaysia.
            Our secure platform makes participating in auctions easier than ever.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a :href="eBiddingPortalUrl" target="_blank" rel="noopener noreferrer">
              <button class="group inline-flex items-center gap-2 bg-white text-purple-700 font-bold text-base px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(124,58,237,0.3)] hover:bg-purple-50 hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Go to eBidding Portal
                <ArrowTopRightOnSquareIcon class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </a>
            <a href="#registration">
              <BaseButton variant="outline" size="lg" class="border-white/80 text-white hover:bg-white hover:text-purple-700">
                Registration Guide
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="section-container py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a
          v-for="section in guideSections"
          :key="section.id"
          :href="section.href"
          class="bg-white rounded-xl border border-slate-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all group"
        >
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
            <component :is="getIconComponent(section.icon)" class="w-6 h-6 text-purple-600 group-hover:text-white" />
          </div>
          <h3 class="font-semibold text-slate-900 mb-1">{{ section.title }}</h3>
          <p class="text-sm text-slate-500">{{ section.description }}</p>
        </a>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="bg-white py-16">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            What is eBidding?
          </h2>
          <p class="text-slate-600">
            eBidding is our online auction platform that allows you to participate in property auctions
            from anywhere with an internet connection. No need to physically attend the auction venue -
            simply register, pay your deposit, and start bidding in real-time.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="benefit.icon" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-slate-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Guide Section -->
    <section id="registration" class="py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How to Register for eBidding
          </h2>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Follow these simple steps to create your eBidding account and start participating in online auctions
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Steps -->
          <div class="space-y-6">
            <div
              v-for="step in registrationSteps"
              :key="step.step"
              class="flex gap-6 items-start"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ step.step }}
              </div>
              <div class="flex-1 bg-white rounded-xl border border-slate-200 p-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ step.title }}</h3>
                <p class="text-slate-600">{{ step.description }}</p>
              </div>
            </div>
          </div>

          <!-- Required Documents -->
          <div class="mt-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h3 class="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <DocumentTextIcon class="w-5 h-5 text-purple-600" />
              Required Documents
            </h3>
            <ul class="space-y-3">
              <li
                v-for="doc in requiredDocuments"
                :key="doc"
                class="flex items-start gap-3"
              >
                <CheckIcon class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span class="text-slate-700">{{ doc }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="mt-8 text-center">
            <a :href="eBiddingPortalUrl" target="_blank" rel="noopener noreferrer">
              <BaseButton variant="primary" size="lg" class="bg-purple-600 hover:bg-purple-700">
                Register Now
                <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-2" />
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Terms & Conditions Section -->
    <section id="terms" class="bg-white py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Terms & Conditions
          </h2>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Please read and understand these terms before participating in eBidding auctions
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div
            v-for="term in termsConditions"
            :key="term.title"
            class="bg-slate-50 rounded-xl p-6 border border-slate-200"
          >
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ term.title }}</h3>
            <p class="text-slate-600">{{ term.content }}</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-slate-500">
            For complete terms and conditions, please refer to the eBidding platform.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqItems"
            :key="index"
            class="bg-white rounded-xl border border-slate-200 overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 pr-4">{{ faq.question }}</span>
              <ChevronRightIcon
                class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform"
                :class="{ 'rotate-90': expandedFaq === index }"
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
              <div v-if="expandedFaq === index" class="px-6 pb-6">
                <p class="text-slate-600">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Bidding Online?
          </h2>
          <p class="text-lg text-purple-100 mb-8">
            Create your eBidding account today and start participating in property auctions from anywhere in Malaysia.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="eBiddingPortalUrl" target="_blank" rel="noopener noreferrer">
              <button class="group inline-flex items-center gap-2 bg-white text-purple-700 font-bold text-base px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(124,58,237,0.3)] hover:bg-purple-50 hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Go to eBidding Portal
                <ArrowTopRightOnSquareIcon class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </a>
            <NuxtLink to="/properties?saleType=ebidding">
              <BaseButton variant="outline" size="lg" class="border-white/80 text-white hover:bg-white hover:text-purple-700">
                Browse eBidding Properties
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
          <h3 class="text-xl font-semibold text-slate-900 mb-4">Need Help with eBidding?</h3>
          <p class="text-slate-600 mb-6">
            Our team is available to assist you with any questions about online bidding.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact">
              <BaseButton variant="outline" size="md">
                Contact Us
              </BaseButton>
            </NuxtLink>
            <a href="https://wa.me/60146793560" target="_blank">
              <BaseButton variant="primary" size="md" class="bg-green-600 hover:bg-green-700">
                WhatsApp Support
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
