<template>
  <div ref="scrollRef" class="global-wrap">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const scrollRef = ref(null)

provide('scrollRef', scrollRef)
</script>

<style lang="scss">
.global-wrap {
  @include flex(flex-start, center, column);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  section {
    @include flex(flex-start, center, column);
    width: 100%;
    padding: 20px;
  }
  code {
    margin: 0 0.2em;
    padding-inline: 0.4em;
    padding-block: 0.2em 0.1em;
    font-size: 12px;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    background: rgba(150, 150, 150, 0.1);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 3px;
  }

  .ant-divider {
    margin: 24px 0 0;
  }
}
</style>