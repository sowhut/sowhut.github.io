<template>
  <div class="parallax-wrapper">
    <div ref="parallaxRef" class="parallax-section">
      <!-- 视差滚动效果 -->
      <div 
        v-for="(layer, index) in parallaxLayers" 
        :key="index"
        :style="{ transform: `translateY(${layer.speed * scrollY}px)` }"
        class="parallax-layer"
      >
        {{ layer.content }}
      </div>
    </div>
    
    <!-- GSAP 动画示例 -->
    <div ref="animatedElement" class="gsap-demo">
      <h3>GSAP动画展示</h3>
    </div>
  </div>
</template>

<!-- <script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollY = ref(0)
const parallaxRef = ref(null)
const animatedElement = ref(null)

const parallaxLayers = [
  { speed: 0.2, content: 'Layer 1' },
  { speed: 0.4, content: 'Layer 2' },
  { speed: 0.6, content: 'Layer 3' }
]

onMounted(() => {
  // GSAP动画设置
  gsap.to(animatedElement.value, {
    scrollTrigger: {
      trigger: animatedElement.value,
      start: "top center",
      end: "bottom center",
      scrub: 1
    },
    y: 100,
    opacity: 1,
    duration: 1
  })

  const scrollRef = inject('scrollRef')
  // 视差滚动效果
  scrollRef.value.addEventListener('scroll', (e) => {
    scrollY.value = e.target.scrollTop
  })
})
</script> -->

<style scoped>
.parallax-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  min-height: 300px;
}
.parallax-section {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  transition: transform 0.1s ease-out;
}

.gsap-demo {
  opacity: 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
}
</style>