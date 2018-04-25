<template>
  <div class="settings-control">
    <button @click="$emit('change', value - 60)" :disabled="value <= min" class="settings-control__btn">
      <svg class="settings-control__icon">
        <use :xlink:href="`${baseUrl}sprite.svg#icon-chevron-thin-left`"></use>
      </svg>
    </button>
    <span class="settings-control__display">{{ value | secToMin }}</span>
    <button @click="$emit('change', value + 60)" :disabled="value >= max" class="settings-control__btn">
      <svg class="settings-control__icon">
        <use :xlink:href="`${baseUrl}sprite.svg#icon-chevron-thin-right`"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['value', 'min', 'max'],
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  filters: {
    secToMin (value) {
      return value / 60
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-control {
  display: flex;
  align-items: center;

  &__display {
    display: block;
    color: #fff;
    font-size: 8rem;
    width: 10rem;
    text-align: center;

    @media (max-height: 600px) {
      font-size: 5rem;
    }
  }

  &__btn {
    background-color: transparent;
    border: none;
    outline: none;
    height: 8rem;
    width: 8rem;

    @media (max-height: 600px) {
      height: 5rem;
      width: 5rem;
    }

    &:hover,
    &:active {
      background-color: rgba(#fff, .1);
    }
  }

  &__btn:disabled &__icon {
    fill: rgba(#000, .1);
  }

  &__btn:disabled:hover {
    background-color: transparent;
  }

  &__icon {
    width: 5rem;
    height: 5rem;
    fill: #fff;

    @media (max-height: 600px) {
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
