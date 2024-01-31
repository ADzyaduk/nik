// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', 'nuxt-icon', '@nuxtjs/seo'],
  ui: {
    icons: 'all'
  },
  site: {
    url: 'https://pokraska-kazan.ru',
    name: 'Професиональная прокраска',
    description: 'Професиональная прокраска',
    defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
  },
})
