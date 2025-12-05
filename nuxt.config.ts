// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-05',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'JTR Auction House - Malaysia\'s Premier Real Estate Auctioneer',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Malaysia\'s trusted real estate auctioneer since 1985. Browse bank auction properties, upcoming auctions, and eBidding opportunities.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true
  }
})
