<script setup lang="ts">
import type { Badge } from '~/types'

interface Props {
  badge: Badge
}

defineProps<Props>()

const badgeClasses = {
  hot: 'badge-hot',
  new: 'badge-new',
  reduced: 'badge-reduced',
  featured: 'badge-featured',
  ebidding: 'badge-ebidding text-xs',
  sold: 'badge bg-gray-600 text-white'
}
</script>

<template>
  <span :class="badgeClasses[badge.type]">
    {{ badge.label }}
  </span>
</template>
