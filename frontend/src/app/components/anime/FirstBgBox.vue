<template>
  <div class="first-bg-box" :style="divRect">
    <svg xmlns="http://www.w3.org/2000/svg" :width="w" :height="h" :viewBox="viewBox" >
      <rect x="0" y="0" :width="w" :height="h"
            fill="#ffefdf" stroke="#ffc2c2" stroke-width="100" rx="30"/>
    </svg>
    <e-cont class="econt-purin" :s="purinS" :x="purinX" :y="purinY" :debug="false" :oy="625">
      <purin-action ref="purin"></purin-action>
    </e-cont>
  </div>
</template>

<script>
import ECont from './core/ECont.vue'
import PurinAction from './PurinAction'
import Time from '@/app/core/Time.js'

export default {
  name: 'FirstBgBox',
  components: {
    ECont,
    PurinAction
  },
  props: {
    w: {
      type: Number,
      default: 100
    },
    h: {
      type: Number,
      default: 100
    }
  },
  computed: {
    divRect () {
      return `width: ${this.w}px; height: ${this.h}px`
    },
    viewBox () {
      return `0 0 ${this.w} ${this.h}`
    },
    purinS () {
      return this.w > this.h ? this.h * 0.7 / 625 : this.h * 0.8 / 625
    },
    purinX () {
      return this.w > this.h ? this.w * 0.25 : this.w * 0.5
    },
    purinY () {
      return this.w > this.h ? this.h - 625 - 50 : this.h - 625 + 200
    }
  },
  methods: {
    async loopAnimation () {
      const purin = this.$refs.purin
      await purin.greet(5000)
      await purin.walk(1500, 4) // 6000
      await Time.wait(500)
      await purin.dance(7000)
      await purin.walk(1500, 4) // 6000
    }
  },
  mounted () {
    this.loopAnimation()
    window.setInterval(() => {
      this.loopAnimation()
    }, 25000)
  }
}
</script>

<style scoped>
.first-bg-box {
  background-color: #ffefdf;
  overflow: hidden;
}

</style>
