<template>
  <div class="wrap">
    <h1>404 Not Found</h1>
    <p>route.path:<code>{{ $route.path }}</code></p>
    <NuxtLink to="/">
      <a-button type="primary">返回首页</a-button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRequestEvent, setResponseStatus } from 'nuxt/app'
import { useRoute } from 'vue-router'

const event = useRequestEvent()
if (event) {
  setResponseStatus(event, 404, 'Page Not Found')
}

const $route = useRoute()
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  @include flex(center, center, column);
}
</style>
