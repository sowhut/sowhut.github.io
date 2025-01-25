<template>
  <a-page-header
    title="Here is a self-practice project"
    sub-title="made by Yang.Yang"
    :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
    style="width: 100%;"
  >
    <template #breadcrumb>
      <a-breadcrumb :routes="routes">
        <template #itemRender="{ route }">
          <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
          <NuxtLink v-else :to="route.path">{{ route.breadcrumbName }}</NuxtLink>
        </template>
      </a-breadcrumb>
    </template>
  </a-page-header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const routes = computed(() => {
  const matched = $route.matched
  const homeItem = {
    path: '/',
    breadcrumbName: '首页'
  }
  if ($route.path === '/') return [homeItem]
  return [homeItem, ...(matched.map(item => ({
      path: item.path,
      breadcrumbName: item.name as string
    })
  ))]
})
</script>
