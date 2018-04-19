<template>
  <div class="app">
    <AppNav/>
    <router-view/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'

export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
@import "sass/_base";
@import "sass/_typography";

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primary;
  min-height: 100vh;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100%;
  max-height: 90rem;
  max-width: 70rem;
  background-color: $color-primary;

  display: grid;
  grid-template-rows: 5rem 1fr;
}
</style>
