<template>
  <div>
    <img src="~/assets/test.jpg" alt="">
  </div>
  <div class="wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#imports'

// Using Vue 3 syntax
export default defineNuxtComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>
.wrap {
  @include flex(center, center);
}
</style>
