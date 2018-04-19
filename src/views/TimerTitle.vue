<template>
  <h2 class="task">{{ task }}</h2>
</template>

<script>
export default {
  computed: {
    task () {
      return this.$store.getters.task
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  font-size: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  text-align: center;
}
</style>
