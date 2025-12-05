<script setup lang="ts">
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const newsletterEmail = ref('')

const handleNewsletterSubmit = () => {
  alert(`Newsletter subscription for: ${newsletterEmail.value}`)
  newsletterEmail.value = ''
}
</script>

<template>
  <footer class="bg-slate-900 text-white">
    <!-- Main Footer -->
    <div class="section-container py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- About Column -->
        <div class="space-y-4">
          <div class="text-2xl font-bold">
            JTR <span class="text-secondary-500">AUCTION</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            Malaysia's premier real estate auctioneer since 1985.
            Trusted by major banks and institutions nationwide.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/properties" class="text-sm text-slate-400 hover:text-white transition-colors">
                Property Search
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/properties?upcoming=true" class="text-sm text-slate-400 hover:text-white transition-colors">
                Upcoming Auctions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ebidding" class="text-sm text-slate-400 hover:text-white transition-colors">
                eBidding
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sell-property" class="text-sm text-slate-400 hover:text-white transition-colors">
                Sell Property
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-sm text-slate-400 hover:text-white transition-colors">
                About Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                Auction Guide
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                Bidding Tips
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                Payment Terms
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex items-start gap-3">
              <MapPinIcon class="w-5 h-5 flex-shrink-0 text-slate-500 mt-0.5" />
              <span>123 Jalan Auction,<br />50000 Kuala Lumpur</span>
            </li>
            <li class="flex items-center gap-3">
              <PhoneIcon class="w-5 h-5 flex-shrink-0 text-slate-500" />
              <a href="tel:+60312345678" class="hover:text-white transition-colors">+603-1234 5678</a>
            </li>
            <li class="flex items-center gap-3">
              <EnvelopeIcon class="w-5 h-5 flex-shrink-0 text-slate-500" />
              <a href="mailto:info@jtr.com.my" class="hover:text-white transition-colors">info@jtr.com.my</a>
            </li>
          </ul>

          <!-- Newsletter -->
          <div class="mt-6">
            <h4 class="text-sm font-medium mb-2">Newsletter</h4>
            <form class="flex gap-2" @submit.prevent="handleNewsletterSubmit">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Your email"
                class="flex-1 px-3 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-400"
                required
              />
              <button type="submit" class="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bank Partners -->
      <div class="mt-12 pt-8 border-t border-slate-800">
        <p class="text-xs text-slate-500 uppercase tracking-wider mb-4 text-center">Trusted By</p>
        <div class="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          <div class="text-slate-500 text-sm font-semibold">RHB</div>
          <div class="text-slate-500 text-sm font-semibold">BSN</div>
          <div class="text-slate-500 text-sm font-semibold">AFFIN</div>
          <div class="text-slate-500 text-sm font-semibold">LPPSA</div>
          <div class="text-slate-500 text-sm font-semibold">BANK ISLAM</div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-slate-950">
      <div class="section-container py-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2024 JTR Auction House. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
