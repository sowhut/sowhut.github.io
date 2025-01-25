<template>
  <a-page-header
      title="Here is a self-practice project"
      sub-title="made by Yang.Yang"
      :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
      :breadcrumb="{ routes }"
    ></a-page-header>
  <h2>
    Here is a self-practice project made by Yang.Yang
  </h2>
  <a-divider dashed>Text</a-divider>
  <div>
    <quote>123</quote>
  </div>
  <!-- <div>
    <img src="~/assets/test.jpg" alt="">
  </div> -->
  <div class="wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script lang="ts" setup>

const routes = []
</script>

<style lang="scss" scoped>
.wrap {
  @include flex(center, center);
}
</style>
