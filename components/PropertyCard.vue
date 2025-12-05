<script setup lang="ts">
import { MapPinIcon, CalendarIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import type { Property } from '~/types'

interface Props {
  property: Property
}

const props = defineProps<Props>()

const isFavorite = ref(props.property.isFavorite || false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(props.property.reservePrice)
})

const formattedDate = computed(() => {
  return new Date(props.property.auctionDate).toLocaleDateString('en-MY', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
})
</script>

<template>
  <article class="property-card">
    <!-- Image Container with Badges -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <NuxtLink :to="`/properties/${property.id}`">
        <img
          :src="property.images[0]"
          :alt="property.title"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </NuxtLink>

      <!-- Status Badges (top-left) -->
      <div v-if="property.badges.length > 0" class="absolute top-3 left-3 flex flex-wrap gap-2">
        <BaseBadge
          v-for="badge in property.badges"
          :key="badge.type"
          :badge="badge"
        />
      </div>

      <!-- Favorite Button -->
      <button
        class="absolute bottom-3 right-3 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
        @click="toggleFavorite"
      >
        <HeartIconSolid
          v-if="isFavorite"
          class="w-5 h-5 text-red-500"
        />
        <HeartIcon
          v-else
          class="w-5 h-5 text-slate-600 hover:text-red-500"
        />
      </button>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <!-- Property Type & Title -->
      <div class="space-y-1">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">
          {{ property.propertyType }}
        </p>
        <NuxtLink :to="`/properties/${property.id}`">
          <h3 class="text-base font-semibold text-slate-900 line-clamp-2 hover:text-primary-500 transition-colors">
            {{ property.title }}
          </h3>
        </NuxtLink>
        <p class="text-sm text-slate-600 flex items-center gap-1">
          <MapPinIcon class="w-4 h-4" />
          {{ property.location }}, {{ property.state }}
        </p>
      </div>

      <!-- Price -->
      <div class="pt-2 border-t border-slate-100">
        <p class="text-xs text-slate-500 mb-1">Reserve Price</p>
        <div class="flex items-baseline gap-2">
          <p class="text-lg font-bold text-primary-500">{{ formattedPrice }}</p>
          <p v-if="property.originalPrice" class="text-sm text-slate-400 line-through">
            RM {{ property.originalPrice.toLocaleString() }}
          </p>
        </div>
      </div>

      <!-- Auction Info -->
      <div class="flex items-center justify-between pt-2 border-t border-slate-100">
        <div class="flex items-center gap-1.5 text-sm text-slate-600">
          <CalendarIcon class="w-4 h-4" />
          <span>{{ formattedDate }}</span>
        </div>
        <span class="text-xs font-medium text-slate-600">
          {{ property.bank }}
        </span>
      </div>

      <!-- CTA -->
      <NuxtLink :to="`/properties/${property.id}`">
        <BaseButton variant="primary" size="sm" block>
          View Details
        </BaseButton>
      </NuxtLink>
    </div>
  </article>
</template>
