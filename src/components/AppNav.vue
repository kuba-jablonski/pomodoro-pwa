<template>
  <nav class="nav">
    <router-link to="/" tag="a" class="nav__link">
      <svg class="nav__icon">
        <use :xlink:href="`${baseUrl}sprite.svg#icon-alarm`"></use>
      </svg>
    </router-link>
    <router-link to="/settings" tag="a" class="nav__link">
      <svg class="nav__icon">
        <use :xlink:href="`${baseUrl}sprite.svg#icon-cog`"></use>
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  background-color: transparent;

  &__link {
    flex: 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(#fff, .1);
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid rgba(#fff, .1);
    }
  }

  &__icon {
    height: 3rem;
    width: 3rem;
    fill: rgba(#000, .1);
  }
}

.router-link-exact-active {
  .nav__icon {
    fill: #fff;
  }
}
</style>
