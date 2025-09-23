export default defineNuxtConfig({
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
})