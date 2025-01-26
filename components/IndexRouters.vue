<template>
  <a-divider dashed>Here are examples of using VueRouter in Nuxt</a-divider>
  <section>
    <a-space>
      <a-button type="primary" @click="goToUserPage">动态路由</a-button>
      <RouterLink to="/docs">
        <a-button type="primary">巢状路由</a-button>
      </RouterLink>
      <NuxtLink to="/posts">
        <a-button type="primary">多层路由</a-button>
      </NuxtLink>
      <NuxtLink to="/omg">
        <a-button type="primary">404页面</a-button>
      </NuxtLink>
    </a-space>
  </section>
</template>

<script lang="ts" setup>
import { navigateTo } from 'nuxt/app'

const goToUserPage = () => {
  navigateTo({
    name: 'users-id',
    params: {
      id: Math.random().toString(36).substring(2, 15)
    }
  })
}
</script>
