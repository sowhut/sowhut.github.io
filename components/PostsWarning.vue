<template>
  <section>
    <p>route.name: <code>{{ $route.name }}</code></p>
    <p>route.params: <code>{{ $route.params }}</code></p>
    <a-alert type="warning">
      <template #message>
        注意: 这里跟 <NuxtLink to="/posts">/posts</NuxtLink> 是同级页面，并非嵌套关系
      </template>
    </a-alert>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>
