// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  pinia: {
    autoImports: ['defineStore']
  },

  i18n: {
    defaultLocale: 'zh',
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
    ],
    strategy: 'no_prefix',
    vueI18n: './nuxt-i18n.js'
  },

  typescript: {
    typeCheck: true
  }
})
