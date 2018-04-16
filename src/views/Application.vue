<template>
    <div class="app">
      <AppNav/>
      <!-- <keep-alive include="timer"> -->
        <router-view/>
      <!-- </keep-alive> -->
    </div>
</template>

<script>
import Timer from '@/components/Timer'
import AppNav from '@/components/AppNav'

export default {
  components: {
    Timer,
    AppNav
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}

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
