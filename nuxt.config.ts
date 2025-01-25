import { defineNuxtConfig } from 'nuxt/config'
  // nuxt.config.ts
export default defineNuxtConfig({
  // 替代原来的 target: 'static'
  ssr: false,

  app: {
    baseURL: '/',  // 替代原来的 router.base
    head: {
      title: 'sowhut.github.io',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  css: ['ant-design-vue/dist/reset.css'],

  modules: [
    // 在这里添加需要的模块
  ],

  components: true,
  build: {},

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/mixins.scss" as *;'
        }
      }
    }
  },
})