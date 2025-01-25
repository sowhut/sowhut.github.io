<template>
  <GlobalHeader />

  <a-divider dashed>这里是 users 动态路由页面</a-divider>
  <section>
    <p>route.name: <code>{{ $route.name }}</code></p>
    <p>route.params: <code>{{ $route.params }}</code></p>
  </section>
</template>

<script setup>
import GlobalHeader from '@/components/GlobalHeader.vue'

const $route = useRoute()
</script>
