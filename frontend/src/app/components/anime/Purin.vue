<template>
  <!-- scale:1 => 320px * 625px -->
  <div class="purin-root"
       :style="{transform: rootPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"
  >

    <elm-l-ft class="elem l-ft"
              :style="{transform: lFtPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-l-ft>
    <elm-r-ft class="elem r-ft"
              :style="{transform: rFtPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-r-ft>
    <elm-sk class="elem sk"
            :style="{transform: skPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-sk>

    <e-cont class="bd-tp-gr"
            :r="bdTpGrPos.r"
            :ox="bdTpGrPos.ox"
            :oy="bdTpGrPos.oy"
            :x="bdTpGrPos.x"
            :y="bdTpGrPos.y"
            :dur="dur">
      <elm-r-am class="elem r-am"
                :style="{transform: rAmPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-r-am>
      <elm-l-am class="elem l-am"
                :style="{transform: lAmPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-l-am>
      <elm-ch class="elem ch"
              :style="{transform: chPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-ch>

      <e-cont class="hd-gr"
              :r="hdGrPos.r"
              :ox="hdGrPos.ox"
              :oy="hdGrPos.oy"
              :x="hdGrPos.x"
              :y="hdGrPos.y"
              :dur="dur">

        <elm-l-er class="elem l-er" :style="{transform: lErPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-l-er>
        <elm-r-er class="elem r-er" :style="{transform: rErPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-r-er>
        <elm-hd class="elem hd" :style="{transform: `translate(-112px, 0px)`}"></elm-hd>
        <elm-es class="elem es" :style="{transform: `translate(-59px, 140px)`}"></elm-es>
        <elm-mth1 v-show="mouthState === 1" class="elem mth1" :style="{transform: `translate(-5px, 203px)`}"></elm-mth1>
        <elm-mth2 v-show="mouthState === 2" class="elem mth2" :style="{transform: `translate(-5px, 200px)`}"></elm-mth2>
        <elm-f-hr class="elem f-hr" :style="{transform: fHrPos, transitionDuration: dur+'ms', transitionTimingFunction: easing }"></elm-f-hr>
      </e-cont>

    </e-cont>

  </div>
</template>

<style scoped>
.elem {
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 100ms 0s ease;
}

.purin-root {
  transform-origin: 0px 550px;
}

.es {
  transform-origin: 59px 19px;
  transform: translate(53px 140px);
}

.l-am {
  transform-origin: 157px 15px;
  transform: translate(-215px, 250px);
}

.r-am {
  transform-origin: 10px 15px;
  transform: translate(45px, 250px);
}

.l-ft {
  transform-origin: 50px 5px;
  transform: translate(-80px, 400px);
}

.r-ft {
  transform-origin: 30px 5px;
  transform: translate(5px, 400px);
}

.sk {
  transform-origin: 139px 10px;
  transform: translate(139px, 10px);
}

.l-er {
  transform-origin: 82px 25px;
  transform: translate(-127px, -5px);
}

.r-er {
  transform-origin: 5px 25px;
  transform: translate(48px, -5px);
}

.f-hr {
  transform-origin: 95px 5px;
  transform: translate(-95px, 10px);
}
</style>

<script>
import ECont from './core/ECont.vue'
import ElmHd from '@/app/assets/svgcomps/Head.svg'
import ElmEs from '@/app/assets/svgcomps/Eyes.svg'
import ElmLEr from '@/app/assets/svgcomps/LEar.svg'
import ElmREr from '@/app/assets/svgcomps/REar.svg'
import ElmFHr from '@/app/assets/svgcomps/FHair.svg'

import ElmCh from '@/app/assets/svgcomps/Chest.svg'
import ElmSk from '@/app/assets/svgcomps/Skirt.svg'
import ElmRAm from '@/app/assets/svgcomps/RArm.svg'
import ElmLAm from '@/app/assets/svgcomps/LArm.svg'
import ElmRFt from '@/app/assets/svgcomps/RFoot.svg'
import ElmLFt from '@/app/assets/svgcomps/LFoot.svg'

import ElmMth1 from '@/app/assets/svgcomps/Mouth1.svg'
import ElmMth2 from '@/app/assets/svgcomps/Mouth2.svg'

export default {
  components: {
    ECont,
    ElmHd,
    ElmEs,
    ElmLEr,
    ElmREr,
    ElmFHr,
    ElmCh,
    ElmSk,
    ElmRAm,
    ElmLAm,
    ElmRFt,
    ElmLFt,
    ElmMth1,
    ElmMth2
  },
  props: {
    hdGrAngle: {
      type: Number,
      default: 0
    },
    bdTpAngle: {
      type: Number,
      default: 0
    },
    dur: {
      type: Number,
      default: 1000
    },
    easing: {
      type: String,
      default: 'ease'
    },
    lAmAngle: {
      type: Number,
      default: 0
    },
    rAmAngle: {
      type: Number,
      default: 0
    },
    lErAngle: {
      type: Number,
      default: 0
    },
    rErAngle: {
      type: Number,
      default: 0
    },
    skAngle: {
      type: Number,
      default: 0
    },
    lFtAngle: {
      type: Number,
      default: 0
    },
    rFtAngle: {
      type: Number,
      default: 0
    },
    lFtDy: {
      type: Number,
      default: 0
    },
    rFtDy: {
      type: Number,
      default: 0
    },
    fHrAngle: {
      type: Number,
      default: 0
    },
    rootDx: {
      type: Number,
      default: 0
    },
    rootDy: {
      type: Number,
      default: 0
    },
    stretch: {
      type: Number,
      default: 1.0
    },
    mouthState: {
      type: Number,
      default: 2
    }
  },
  computed: {
    rootPos () {
      return `translate(${this.rootDx}px, ${this.rootDy}px)`
    },
    hdGrPos () {
      return {
        r: this.hdGrAngle,
        ox: -5,
        oy: 220,
        x: 0,
        y: 0
      }
    },
    bdTpGrPos () {
      return {
        r: this.bdTpAngle,
        ox: -5,
        oy: 320,
        x: 0.3 * this.bdTpAngle,
        y: 0
      }
    },
    fHrPos () {
      return `translate(-95px, 10px) rotate(${-this.fHrAngle}deg)`
    },
    chPos () {
      return 'translate(-72px, 210px)'
    },
    lAmPos () {
      return `translate(${~~(-220 + this.lAmAngle * 0.06)}px, ${~~(245 - this.lAmAngle * 0.06)}px) rotate(${-this.lAmAngle}deg)`
    },
    rAmPos () {
      return `translate(${50}px, ${~~(248 - this.rAmAngle * 0.05)}px) rotate(${this.rAmAngle}deg)`
    },
    lFtPos () {
      return `translate(-${80}px, ${400 + this.lFtDy * 1}px) rotate(${-this.lFtAngle}deg)`
    },
    rFtPos () {
      return `translate(${5}px, ${400 + this.rFtDy * 1}px) rotate(${-this.rFtAngle}deg)`
    },
    skPos () {
      return `translate(-139px, 300px) rotate(${-this.skAngle}deg) scale(${2 - this.stretch}, ${this.stretch})`
    },
    lErPos () {
      return `translate(-127px, -5px) rotate(${-this.lErAngle}deg)`
    },
    rErPos () {
      return `translate(48px, -5px) rotate(${this.rErAngle}deg)`
    }
  }

}
</script>
