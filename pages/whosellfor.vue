<script setup lang="ts">
import {
  BuildingLibraryIcon,
  ScaleIcon,
  UserGroupIcon,
  HomeModernIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  UsersIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Our Services - Who We Sell For | JTR Auction House',
  meta: [
    { name: 'description', content: 'JTR Auction House provides professional auction services for banks, financial institutions, high courts, land offices, corporations, and private individuals across Malaysia.' }
  ]
})

// Client types with descriptions
const clientTypes = [
  {
    id: 'banks',
    title: 'Bank & Financial Institution',
    description: 'We partner with major Malaysian banks including RHB, BSN, Affin Bank, Bank Islam, LPPSA, and many others to auction their foreclosed and repossessed properties.',
    icon: 'BuildingLibraryIcon',
    features: ['Foreclosed properties', 'Repossessed assets', 'Non-performing loans'],
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'high-court',
    title: 'High Court & Land Office',
    description: 'Conducting court-ordered auctions for properties under legal proceedings, ensuring compliance with all judicial requirements and procedures.',
    icon: 'ScaleIcon',
    features: ['Court-ordered sales', 'Legal compliance', 'Transparent process'],
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'insolvency',
    title: 'Insolvency Practitioners',
    description: 'Working with licensed insolvency practitioners and liquidators to auction assets from bankruptcy and winding-up proceedings.',
    icon: 'UserGroupIcon',
    features: ['Bankruptcy assets', 'Liquidation sales', 'Receivership auctions'],
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'individuals',
    title: 'Private Individuals',
    description: 'Helping property owners sell their assets through professional auction services, achieving competitive market prices quickly and transparently.',
    icon: 'HomeModernIcon',
    features: ['Owner sale auctions', 'Quick sale process', 'Market-driven pricing'],
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'asset-managers',
    title: 'Asset Managers',
    description: 'Providing auction services for asset management companies looking to dispose of real estate portfolios and investment properties.',
    icon: 'BriefcaseIcon',
    features: ['Portfolio disposals', 'Investment properties', 'Bulk auctions'],
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'corporations',
    title: 'Corporations',
    description: 'Assisting corporations in auctioning surplus properties, relocating assets, and corporate restructuring property sales.',
    icon: 'BuildingOffice2Icon',
    features: ['Surplus properties', 'Corporate restructuring', 'Relocation sales'],
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 'solicitors',
    title: 'Solicitors & Partner Agents',
    description: 'Collaborating with legal firms and real estate agents to provide comprehensive auction services for their clients properties.',
    icon: 'UsersIcon',
    features: ['Legal firm partnerships', 'Agent collaborations', 'Client referrals'],
    color: 'bg-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'government',
    title: 'Government & Councils',
    description: 'Conducting auctions for government agencies, local councils, and statutory bodies for public asset disposals.',
    icon: 'BuildingOfficeIcon',
    features: ['Public asset sales', 'Government properties', 'Statutory compliance'],
    color: 'bg-slate-500',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  }
]

// Icon component mapping
const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    BuildingLibraryIcon,
    ScaleIcon,
    UserGroupIcon,
    HomeModernIcon,
    BriefcaseIcon,
    BuildingOffice2Icon,
    UsersIcon,
    BuildingOfficeIcon
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
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            OUR SERVICES
          </h1>
          <p class="text-lg md:text-xl text-primary-100 mb-4">
            Who We Sell For
          </p>
          <p class="text-base text-primary-200 max-w-2xl mx-auto">
            For over 39 years, JTR Auction House has been the trusted partner for banks,
            institutions, corporations, and individuals seeking professional property auction services across Malaysia.
          </p>
        </div>
      </div>
    </section>

    <!-- Client Types Grid -->
    <section class="section-container py-16">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Trusted by Leading Institutions
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          We provide comprehensive auction services tailored to meet the specific needs of each client segment.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="client in clientTypes"
          :key="client.id"
          :class="[
            'bg-white rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group',
            client.borderColor
          ]"
        >
          <!-- Card Header with Icon -->
          <div :class="[client.bgColor, 'p-6']">
            <div :class="[client.color, 'w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform']">
              <component :is="getIconComponent(client.icon)" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">
              {{ client.title }}
            </h3>
          </div>

          <!-- Card Body -->
          <div class="p-6">
            <p class="text-sm text-slate-600 mb-4 line-clamp-3">
              {{ client.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2">
              <li
                v-for="feature in client.features"
                :key="feature"
                class="flex items-center gap-2 text-sm text-slate-700"
              >
                <CheckCircleIcon class="w-4 h-4 text-green-500 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="bg-white py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Partner With JTR Auction House?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">39+ Years Experience</h3>
            <p class="text-sm text-slate-600">Malaysia's most established real estate auctioneer since 1985</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Nationwide Coverage</h3>
            <p class="text-sm text-slate-600">Licensed auctioneers in all 16 states of Malaysia</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Proven Track Record</h3>
            <p class="text-sm text-slate-600">Thousands of successful property auctions conducted</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Competitive Prices</h3>
            <p class="text-sm text-slate-600">Market-driven pricing through transparent auction process</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bank Partners Section -->
    <section class="bg-slate-100 py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Banking Partners
          </h2>
          <p class="text-slate-600">
            Trusted by Malaysia's leading financial institutions
          </p>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">RHB Bank</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">BSN</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">Affin Bank</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">Bank Islam</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">LPPSA</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-lg font-bold text-slate-700">AmBank</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-16">
      <div class="section-container text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p class="text-lg text-secondary-100 mb-8 max-w-2xl mx-auto">
          Whether you're a financial institution, corporation, or individual property owner,
          we're here to help you achieve the best results through our professional auction services.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <BaseButton size="lg" class="bg-white text-secondary-600 hover:bg-slate-100">
              Contact Our Team
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/salebyowner">
            <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-secondary-600">
              Sell Your Property
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
