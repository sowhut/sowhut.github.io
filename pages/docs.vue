<template>
  <GlobalHeader />

  <a-divider dashed>这里是 docs 巢状路由</a-divider>
  <section>
    <p>route.name: <code>{{ $route.name }}</code></p>
    <a-flex justify="center" gap="middle">
      <NuxtLink to="/docs/doc-1">前往 doc-1</NuxtLink>
      <NuxtLink to="/docs/doc-2">前往 doc-2</NuxtLink>
    </a-flex>
  </section>

  <a-divider dashed>以上相当于 Layout , 以下是 docs 的子路由</a-divider>
  <NuxtPage />
</template>

<script setup>
import GlobalHeader from '@/components/GlobalHeader.vue'

const $route = useRoute()
</script>
