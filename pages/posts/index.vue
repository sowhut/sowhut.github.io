<template>
  <GlobalHeader />

  <a-divider dashed>/pages/posts/index.vue</a-divider>
  <section>
    <p>route.name: <code>{{ $route.name }}</code></p>
    <a-flex vertical gap="middle">
      <NuxtLink to="/posts/8">前往指定的文章</NuxtLink>
      <NuxtLink to="/posts/8/comments/1">前往指定的文章留言</NuxtLink>
      <NuxtLink to="/posts/top-3">前往 Top 3</NuxtLink>
      <NuxtLink to="/posts/top-10">前往 Top 10</NuxtLink>
    </a-flex>
  </section>
</template>

<script setup>
import GlobalHeader from '@/components/GlobalHeader.vue'

const $route = useRoute()
</script>
