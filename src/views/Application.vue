<template>
  <overdrive class="app-container" id="element" :duration="200">
    <div class="app">
      <AppNav/>
      <!-- <keep-alive include="timer"> -->
        <router-view/>
      <!-- </keep-alive> -->
    </div>
  </overdrive>
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
  height: 100%;
  background-color: $color-primary;

  display: grid;
  grid-template-rows: 5rem 1fr;
}
</style>
