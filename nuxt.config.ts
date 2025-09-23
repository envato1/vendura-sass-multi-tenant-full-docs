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
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'vendura-sass-multi-tenant-full-docs',
        owner: 'envato1',
        url: 'https://github.com/envato1/vendura-sass-multi-tenant-full-docs'
      }
    }
  },
  routeRules: {
    '/**': { prerender: true }
  }
})