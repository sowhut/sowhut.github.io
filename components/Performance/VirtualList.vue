<template>
  <a-divider dashed>Here is a Demo for Virtual List</a-divider>
  <section>
    <div ref="container-ref" class="virtual-list-wrapper" @scroll="updateVisibleItems">
      <div :style="{ height: totalHeight + 'px', position: 'relative' }">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.id"
          :style="{
            position: 'absolute',
            top: (startIndex + index) * itemHeight + 'px',
            height: itemHeight + 'px',
            width: '100%',
          }"
          class="virtual-list-item"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, useTemplateRef } from 'vue'

const items = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  title: `Item ${index}`
}))
const itemHeight = 50
const containerRef = useTemplateRef('container-ref')
const startIndex = ref(0)
const visibleItems = ref([])

const totalHeight = computed(() => items.length * itemHeight)

const updateVisibleItems = () => {
  if (containerRef.value) {
    const scrollTop = containerRef.value.scrollTop
    const containerHeight = containerRef.value.clientHeight
    const newStartIndex = Math.floor(scrollTop / itemHeight)
    const visibleCount = Math.ceil(containerHeight / itemHeight)
    startIndex.value = newStartIndex
    visibleItems.value = items.slice(newStartIndex, newStartIndex + visibleCount)
  }
}

onMounted(() => {
  updateVisibleItems()
  window.addEventListener('resize', updateVisibleItems)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleItems)
})
</script>

<style lang="scss" scoped>
.virtual-list-wrapper {
  position: relative;
  max-width: 100%;
  width: 400px;
  height: 500px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  .virtual-list-item {
    @include flex;
    border: 1px solid #ddd;
  }
}
</style>
