export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL || '/',
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'French',
    }],
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  routeRules: {
    '/**': { prerender: true }
  }
})