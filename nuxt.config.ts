// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  ssr: true,
  modules: [
    "@nuxtjs/i18n",
  ],
  i18n:{
    strategy: "prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.ts",
      },
      {
        code: "hi",
        name: "हिंदी",
        file: "hi.ts",
      },
    ],
    langDir: "locales",
    lazy: true,
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
});
