<script setup lang="ts">
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-slate-200">
    <!-- Top Bar -->
    <div class="hidden md:block bg-primary-500 text-white">
      <div class="section-container py-2">
        <div class="flex justify-between items-center text-xs">
          <p>Malaysia's Premier Real Estate Auctioneer Since 1985</p>
          <div class="flex items-center gap-4">
            <a href="tel:+60312345678" class="flex items-center gap-1 hover:underline">
              <PhoneIcon class="w-3.5 h-3.5" />
              +603-1234 5678
            </a>
            <a href="mailto:info@jtr.com.my" class="flex items-center gap-1 hover:underline">
              <EnvelopeIcon class="w-3.5 h-3.5" />
              info@jtr.com.my
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="section-container">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <div class="text-2xl font-bold text-primary-500">
            JTR <span class="text-secondary-500">AUCTION</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            to="/properties"
            class="nav-link"
            active-class="nav-link-active"
          >
            Properties
          </NuxtLink>
          <NuxtLink
            to="/ebidding"
            class="nav-link"
            active-class="nav-link-active"
          >
            eBidding
          </NuxtLink>
          <NuxtLink
            to="/sell-property"
            class="nav-link"
            active-class="nav-link-active"
          >
            Sell Property
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            active-class="nav-link-active"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="nav-link"
            active-class="nav-link-active"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <button class="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-primary-500 transition-colors">
            <MagnifyingGlassIcon class="w-5 h-5" />
            <span class="hidden lg:inline">Search</span>
          </button>

          <NuxtLink to="/login" class="hidden md:block">
            <BaseButton variant="primary" size="sm">
              Login
            </BaseButton>
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 text-slate-600"
            @click="toggleMobileMenu"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-slate-200"
      >
        <div class="section-container py-4 space-y-1">
          <NuxtLink
            to="/properties"
            class="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            @click="closeMobileMenu"
          >
            Properties
          </NuxtLink>
          <NuxtLink
            to="/ebidding"
            class="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            @click="closeMobileMenu"
          >
            eBidding
          </NuxtLink>
          <NuxtLink
            to="/sell-property"
            class="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            @click="closeMobileMenu"
          >
            Sell Property
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            @click="closeMobileMenu"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>
          <div class="pt-4 border-t border-slate-200">
            <NuxtLink to="/login" @click="closeMobileMenu">
              <BaseButton variant="primary" size="md" block>
                Login / Register
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
