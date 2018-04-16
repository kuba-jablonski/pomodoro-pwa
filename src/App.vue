<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "sass/_base";
@import "sass/_typography";
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: $color-primary;
}
</style>
