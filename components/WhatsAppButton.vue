<script setup lang="ts">
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'

const whatsappNumber = '60123456789' // Replace with actual number
const whatsappMessage = encodeURIComponent('Hello, I would like to inquire about a property.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    <ChatBubbleLeftRightIcon class="w-6 h-6" />
    <span class="hidden sm:inline text-sm font-medium">Chat with Us</span>
  </a>
</template>
