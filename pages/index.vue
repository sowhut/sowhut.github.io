<template>
  <GlobalHeader />

  <!-- 项目依赖 -->
  <a-divider dashed>Here are mainly dependencies of this project</a-divider>
  <section>
    <a-space>
      <a-tag color="#00DC81">Nuxt@3.9.3</a-tag>
      <a-tag color="#3FB883">Vue@3.5.13</a-tag>
      <a-tag color="#55acee">Ant Design Vue@3.2.6</a-tag>
      <a-tag color="#3077C6">Typescript</a-tag>
    </a-space>
  </section>
  
  <!-- 展示Router的各种用法 -->
  <IndexRouters />

  <!-- 性能优化展示 -->
  <IndexPerformance />
  
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
import IndexRouters from '@/components/IndexRouters.vue'
import IndexPerformance from '@/components/IndexPerformance.vue'

</script>

<style lang="scss" scoped>

</style>
