<template>
  <div class="purin-action-root">
      <purin :root-dx="rootDx"
             :root-dy="rootDy"
             :hd-gr-angle="hdGrAngle"
             :bd-tp-angle="bdTpAngle"
             :l-am-angle="lAmAngle"
             :r-am-angle="rAmAngle"
             :l-er-angle="lErAngle"
             :r-er-angle="rErAngle"
             :sk-angle="skAngle"
             :l-ft-angle="lFtAngle"
             :r-ft-angle="rFtAngle"
             :f-hr-angle="fHrAngle"
             :l-ft-dy="lFtDy"
             :r-ft-dy="rFtDy"
             :stretch="stretch"
             :mouth-state="mouthState"
             :easing="easing"
             :dur="duration"
      ></purin>
  </div>

</template>

<script>
import Purin from './Purin'
import Time from '@/app/core/Time.js'
export default {
  name: 'PurinAction',
  components: { Purin },
  data () {
    return {
      duration: 1000,
      rootDx: 0,
      rootDy: 0,
      hdGrAngle: 0,
      bdTpAngle: 0,
      lAmAngle: 50,
      rAmAngle: 50,
      lErAngle: 0,
      rErAngle: 0,
      skAngle: 0,
      lFtAngle: 0,
      rFtAngle: 0,
      fHrAngle: 0,
      lFtDy: 0,
      rFtDy: 0,
      stretch: 1,
      mouthState: 2,
      easing: 'ease'
    }
  },
  methods: {
    async tween (props, duration) {
      Object.assign(this.$data, props)
      this.$data.duration = duration
      await Time.wait(duration)
    },
    async greet (duration = 5000) {
      await this.tween({ lAmAngle: 90, rAmAngle: 90, mouthState: 1 }, duration * 0.10)
      await this.tween({ bdTpAngle: 10, hdGrAngle: 5, fHrAngle: 3, lAmAngle: 90, skAngle: 2, rAmAngle: 25, rFtAngle: 3 }, duration * 0.2)
      await this.tween({ bdTpAngle: -10, hdGrAngle: -5, fHrAngle: -3, lAmAngle: 5, skAngle: -1, rAmAngle: 35, lFtAngle: -3 }, duration * 0.3)
      await this.tween({ bdTpAngle: 0, hdGrAngle: 0, fHrAngle: 0, lAmAngle: 90, rAmAngle: 90, rFtAngle: 0, lFtAngle: 0 }, duration * 0.3)
      await this.tween(this.defaultPos(), duration * 0.10)
    },
    async dance (duration = 7000) {
      await this.tween({ bdTpAngle: -10, lAmAngle: 95, rAmAngle: 95, fHrAngle: 5, lFtAngle: 0, rFtAngle: 0, lFtDy: -25, rFtDy: -25, rootDx: -10, rootDy: 25, stretch: 0.90, skAngle: -3, mouthState: 2 }, duration * 0.1)
      await this.tween({ bdTpAngle: 10, lAmAngle: 25, rAmAngle: 75, fHrAngle: -7, lFtAngle: 5, rFtAngle: 5, lFtDy: 0, rFtDy: 0, rootDx: 100, rootDy: -20, stretch: 0.95, skAngle: -3, easing: 'ease-in' }, duration * 0.05)
      await this.tween({ bdTpAngle: 0, lAmAngle: -45, rAmAngle: -45, fHrAngle: -10, lFtAngle: -5, rFtAngle: 10, lFtDy: 0, rFtDy: 2, rootDx: 120, rootDy: -30, stretch: 0.95, easing: 'ease' }, duration * 0.05)
      await this.tween({ bdTpAngle: -5, lAmAngle: -45, rAmAngle: -45, fHrAngle: -5, lFtAngle: 0, rFtAngle: 10, lFtDy: 0, rFtDy: 8, rootDx: 140, rootDy: -35, stretch: 1, easing: 'ease' }, duration * 0.05)
      await this.tween({ bdTpAngle: -5, lAmAngle: -45, rAmAngle: -45, fHrAngle: 0, lFtAngle: 0, rFtAngle: 10, lFtDy: -5, rFtDy: 0, rootDx: 150, rootDy: -25, stretch: 1, easing: 'ease-out' }, duration * 0.05)
      await this.tween({ bdTpAngle: 0, lAmAngle: -45, rAmAngle: -45, fHrAngle: 5, lFtAngle: 0, rFtAngle: 5, lFtDy: -15, rFtDy: -10, rootDx: 150, rootDy: -10, stretch: 1, easing: 'ease-in' }, duration * 0.05)
      await this.tween({ bdTpAngle: 5, lAmAngle: 45, rAmAngle: 55, fHrAngle: 5, lFtAngle: 0, rFtAngle: 5, lFtDy: 0, rFtDy: 0, rootDx: 150, rootDy: 10, stretch: 1, easing: 'ease' }, duration * 0.05)
      // 右着地
      await this.tween({ bdTpAngle: 10, lAmAngle: 95, rAmAngle: 95, fHrAngle: 5, lFtAngle: 0, rFtAngle: 5, lFtDy: -25, rFtDy: -25, rootDx: 150, rootDy: 25, stretch: 0.9, easing: 'ease-out' }, duration * 0.1)
      await this.tween({ bdTpAngle: -10, lAmAngle: 25, rAmAngle: 75, fHrAngle: 7, lFtAngle: 5, rFtAngle: 5, lFtDy: 0, rFtDy: 0, rootDx: 50, rootDy: -20, stretch: 0.95, skAngle: -3, easing: 'ease-in' }, duration * 0.05)
      await this.tween({ bdTpAngle: 0, lAmAngle: -8, rAmAngle: -5, fHrAngle: 10, lFtAngle: -5, rFtAngle: 10, lFtDy: 0, rFtDy: 2, rootDx: 30, rootDy: -30, stretch: 0.95, easing: 'ease' }, duration * 0.05)
      await this.tween({ bdTpAngle: 5, lAmAngle: -35, rAmAngle: -35, fHrAngle: 5, lFtAngle: 0, rFtAngle: 10, lFtDy: 0, rFtDy: 8, rootDx: 10, rootDy: -35, stretch: 1, mouthState: 1, easing: 'ease' }, duration * 0.05)
      await this.tween({ bdTpAngle: 5, lAmAngle: -45, rAmAngle: -45, fHrAngle: 0, lFtAngle: 0, rFtAngle: 10, lFtDy: -5, rFtDy: 0, rootDx: 0, rootDy: -25, stretch: 1, easing: 'ease-out' }, duration * 0.05)
      await this.tween({ bdTpAngle: 0, lAmAngle: -45, rAmAngle: -45, fHrAngle: -5, lFtAngle: 0, rFtAngle: 5, lFtDy: -15, rFtDy: -10, rootDx: 0, rootDy: -10, stretch: 1, easing: 'ease-in' }, duration * 0.05)
      await this.tween({ bdTpAngle: -5, lAmAngle: 45, rAmAngle: 55, fHrAngle: -5, lFtAngle: 0, rFtAngle: 5, lFtDy: -25, rFtDy: -25, rootDx: 0, rootDy: 25, stretch: 0.95, easing: 'ease' }, duration * 0.05)
      await this.tween({ bdTpAngle: 0, lAmAngle: 85, rAmAngle: 95, fHrAngle: -5, lFtAngle: 0, rFtAngle: 5, lFtDy: 0, rFtDy: 0, rootDx: 0, rootDy: 10, stretch: 1, easing: 'ease-out' }, duration * 0.11)
      await this.tween(this.defaultPos(), duration * 0.10)
    },
    async walk (duration = 1500, reputation = 2) {
      for (let i = 0; i < reputation; i++) {
        await this.tween({ bdTpAngle: 5, fHrAngle: 5, lAmAngle: 65, rAmAngle: 35, lFtAngle: 0, rFtAngle: 0, lFtDy: 0, rFtDy: -25, rootDy: 0, stretch: 0.9, easing: 'ease-out' }, duration * 0.35)
        await this.tween({ bdTpAngle: 6, fHrAngle: 5, lAmAngle: 55, rAmAngle: 55, lFtAngle: 0, rFtAngle: 0, lFtDy: 0, rFtDy: 0, rootDy: 0, stretch: 1.0, easing: 'ease-in-out' }, duration * 0.15)
        await this.tween({ bdTpAngle: -5, fHrAngle: -5, lAmAngle: 35, rAmAngle: 65, lFtAngle: 0, rFtAngle: 0, lFtDy: -25, rFtDy: 0, rootDy: 0, stretch: 0.9, easing: 'ease-in-out' }, duration * 0.35)
        await this.tween({ bdTpAngle: -6, fHrAngle: -5, lAmAngle: 55, rAmAngle: 65, lFtAngle: 0, rFtAngle: 0, lFtDy: 0, rFtDy: 0, rootDy: 0, stretch: 1.0, easing: 'ease-in' }, duration * 0.15)
      }
      await this.tween(this.defaultPos(), duration * 0.10)
    },
    defaultPos () {
      return {
        rootDx: 0,
        rootDy: 0,
        hdGrAngle: 0,
        bdTpAngle: 0,
        lAmAngle: 50,
        rAmAngle: 50,
        lErAngle: 0,
        rErAngle: 0,
        skAngle: 0,
        lFtAngle: 0,
        rFtAngle: 0,
        fHrAngle: 0,
        lFtDy: 0,
        rFtDy: 0,
        stretch: 1,
        mouthState: 1,
        easing: 'ease'
      }
    }
  }
}
</script>

<style scoped>

</style>
