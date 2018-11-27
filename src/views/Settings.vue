<template>
  <div class="settings">
    <div
      v-if="!testMode"
      class="settings__timers"
    >
      <div class="settings__element">
        <h2 class="settings__name">Session</h2>
        <settings-control
          @change="SET_SESSION_DURATION"
          :value="sessionTimer"
          :min="sessionMin"
          :max="sessionMax"
        />
      </div>
      <div class="settings__element">
        <h2 class="settings__name">Short Break</h2>
        <settings-control
          @change="SET_BREAK_DURATION"
          :value="breakTimer"
          :min="breakMin"
          :max="breakMax"
        />
      </div>
      <div class="settings__element">
        <h2 class="settings__name">Long Break</h2>
        <settings-control
          @change="SET_LONG_BREAK_DURATION"
          :value="longBreakTimer"
          :min="longBreakMin"
          :max="longBreakMax"
        />
      </div>
    </div>
    <p
      v-if="testMode"
      class="settings__text"
    >Application is running in test mode with very short timers.</p>
    <div class="settings__element">
      <button
        v-if="!testMode"
        @click="$store.dispatch('setTestMode', true)"
        class="settings__button"
      >Set test mode</button>
      <button
        v-else
        @click="$store.dispatch('setTestMode', false)"
        class="settings__button"
      >Quit test mode</button>
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
      'longBreakTimer',
      'testMode'
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
    @media (max-height: 700px) {
      margin-top: 4rem;
    }
  }

  &__text {
    color: #fff;
    font-size: 2rem;
    margin-top: 5rem;
    padding: 0 2rem;
    text-align: center;
  }

  &__name {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    margin-bottom: -1.5rem;

    @media (max-height: 600px) {
      margin-bottom: -1rem;
    }
  }

  &__button {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    outline: none;
    transition: all .3s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: $color-primary;
    }
  }
}
</style>
