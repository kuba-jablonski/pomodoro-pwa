<template>
  <div class="timer">
    <timer-title/>
    <div class="progress">
      <div class="progress__canvas" ref="progress"/>
    </div>
    <timer-controls/>
    <timer-history/>
  </div>
</template>

<script>
import TimerControls from './TimerControls'
import TimerHistory from './TimerHistory'
import TimerTitle from './TimerTitle'

export default {
  name: 'timer',
  components: {
    TimerControls,
    TimerHistory,
    TimerTitle
  },
  mounted () {
    this.$store.commit('SET_CANVAS_CONTAINER', this.$refs.progress)
    this.$store.commit('DRAW_TIMER')
  }
}
</script>

<style lang="scss" scoped>
.timer {
  height: 100%;
  display: grid;
  grid-template-rows: min-content min-content min-content 1fr;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: end;
  padding-top: 2rem;
}

.progress {
  max-width: 35rem;
  width: 80%;
  background-color: transparent;
}

.timer--landscape {
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  .progress {
    grid-row: 1 / -1;
    width: 80%;
  }
}
</style>
