<template>
  <!-- 图片懒加载示例 -->
  <a-divider dashed>
    Here is a Demo for Lazy Load Images
    <br/>
    <span class="text-sm text-gray-500">
      懒加载 + 自定义指令v-lazy
    </span>
  </a-divider>
  <section>
    <div class="lazy-image-wrapper">
      <div v-for="id in 100" :key="id">
        <div class="icon-loading bg-gray-100">
          <loading-outlined />
        </div>
        <img
          v-lazy="`https://picsum.photos/seed/${id}/800`"
          :alt="`Lazy loaded image ${id}`"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { DirectiveBinding } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'

// 自定义图片懒加载指令
const vLazy = {
  mounted: (el: HTMLImageElement, binding: DirectiveBinding) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = binding.value
          observer.unobserve(el)
        }
      })
    })
    observer.observe(el)
  }
}
</script>

<style lang="scss" scoped>
.lazy-image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  @include flex(space-between, flex-start);
  flex-wrap: wrap;
  > div {
    position: relative;
    width: 33.33%;
    height: 0;
    padding-bottom: 33.33%;
    img, .icon-loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 30px);
      height: calc(100% - 30px);
    }
    .icon-loading {
      @include flex;
      border-radius: 10px;
    }
  }
}
</style>

