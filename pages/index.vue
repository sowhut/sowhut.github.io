<template>
  <GlobalHeader />

  <a-divider dashed>Here are mainly dependencies of this project</a-divider>
  <section>
    <a-tag color="#00DC81">Nuxt@3.9.3</a-tag>
    <a-tag color="#3FB883">Vue@3.5.13</a-tag>
    <a-tag color="#55acee">Ant Design Vue@3.2.6</a-tag>
  </section>
  
  <a-divider dashed>Here are examples of using VueRouter in Nuxt</a-divider>
  <section>
    <!-- 展示Router的各种用法 -->
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

  <div class="wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script lang="ts" setup>
import { navigateTo } from 'nuxt/app'
import GlobalHeader from '@/components/GlobalHeader.vue'

const goToUserPage = () => {
  navigateTo({
    name: 'users-id',
    params: {
      id: Math.random().toString(36).substring(2, 15)
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
