// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  typescript: {
    typeCheck: true
  }
})
