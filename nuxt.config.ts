// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', 'nuxt-icon', '@nuxtjs/seo'],
  ui: {
    icons: ["mdi"]
  },
  site: {
    url: 'https://pokraska-kazan.ru',
    name: 'Професиональная прокраска',
    description: 'Покраска Казань',
    defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
  },
})
