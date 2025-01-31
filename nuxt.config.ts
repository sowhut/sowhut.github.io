import { defineNuxtConfig } from 'nuxt/config'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
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
    '@nuxtjs/tailwindcss'
  ],

  components: true,
  build: {},

  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({
          importStyle: false,
        })],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/mixins.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2025-01-25',
})