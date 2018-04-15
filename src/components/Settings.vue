<template>
  <div class="settings">
    <div class="settings__element">
      <h2 class="settings__name">Session</h2>
      <settings-control @change="SET_SESSION_DURATION" :value="sessionTimer" :min="sessionMin" :max="sessionMax"/>
    </div>
    <div class="settings__element">
      <h2 class="settings__name">Short Break</h2>
      <settings-control @change="SET_BREAK_DURATION" :value="breakTimer" :min="breakMin" :max="breakMax"/>
    </div>
    <div class="settings__element">
      <h2 class="settings__name">Long Break</h2>
      <settings-control @change="SET_LONG_BREAK_DURATION" :value="longBreakTimer" :min="longBreakMin" :max="longBreakMax"/>
    </div>
  </div>
</template>

<script>
import SettingsControl from './SettingsControl'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    SettingsControl
  },
  data () {
    return {
      sessionMin: 15 * 60,
      sessionMax: 60 * 60,
      breakMin: 1 * 60,
      breakMax: 15 * 60,
      longBreakMin: 5 * 60,
      longBreakMax: 30 * 60
    }
  },
  computed: {
    ...mapState([
      'sessionTimer',
      'breakTimer',
      'longBreakTimer'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_SESSION_DURATION',
      'SET_BREAK_DURATION',
      'SET_LONG_BREAK_DURATION'
    ])
  }
}
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__element {
    margin-top: 5rem;
  }

  &__name {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    margin-bottom: -1.5rem;
  }
}
</style>
