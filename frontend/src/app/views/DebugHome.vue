<template>
  <div class="debug">
    <div class="raw">
      <div class="controls">
        <label>rootDx: <input type="range" min="-30" max="30" v-model.number="rootDx"> {{rootDx}}</label>
        <label>rootDy: <input type="range" min="-30" max="30" v-model.number="rootDy"> {{rootDy}}</label>
        <label>hdAngle: <input type="range" min="-30" max="30" v-model.number="hdGrAngle"> {{hdGrAngle}}</label>
        <label>fHrAngle: <input type="range" min="-10" max="10" v-model.number="fHrAngle"> {{fHrAngle}}</label>
        <label>lErAngle: <input type="range" min="-20" max="20" v-model.number="lErAngle"> {{lErAngle}}</label>
        <label>rErAngle: <input type="range" min="-20" max="20" v-model.number="rErAngle"> {{rErAngle}}</label>
        <label>bdTpAngle: <input type="range" min="-30" max="30" v-model.number="bdTpAngle"> {{bdTpAngle}}</label>
        <label>lAmAngle: <input type="range" min="-100" max="150" v-model.number="lAmAngle"> {{lAmAngle}}</label>
        <label>rAmAngle: <input type="range" min="-100" max="150" v-model.number="rAmAngle"> {{rAmAngle}}</label>
        <label>skAngle: <input type="range" min="-10" max="10" v-model.number="skAngle"> {{skAngle}}</label>
        <label>lFtAngle: <input type="range" min="-10" max="10" v-model.number="lFtAngle"> {{lFtAngle}}</label>
        <label>rFtAngle: <input type="range" min="-10" max="10" v-model.number="rFtAngle"> {{rFtAngle}}</label>
        <label>lFtDy: <input type="range" min="-100" max="100" v-model.number="lFtDy"> {{lFtDy}}</label>
        <label>rFtDy: <input type="range" min="-100" max="100" v-model.number="rFtDy"> {{rFtDy}}</label>
        <label>stretch: <input type="range" step = "0.1" min="0.5" max="1.1" v-model.number="stretch"> {{stretch}}</label>
        <label>mouth: <input type="radio" value="1" v-model.number="mouthState">smile &nbsp; <input type="radio" value="2"  v-model.number="mouthState">open &nbsp;</label>
        <button class="button-primary" @click="doAction('greet')">greet</button>
        <button class="button-primary" @click="doAction('dance')">dance</button>
        <button class="button-primary" @click="doAction('walk')">walk</button>
      </div>
      <div class="stages">
        <div class="stage1">
          <h6>stage1</h6>
          <e-cont :s="0.35" :x="200" :y="50" :debug="false">
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
            ></purin>
          </e-cont>
        </div>
        <div class="stage2">
          <h6>stage2</h6>
          <e-cont :s="0.5" :x="200" :y="50" :debug="false">
            <purin-action ref="purin"></purin-action>
          </e-cont>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ECont from '../components/anime/core/ECont.vue'
import Purin from '../components/anime/Purin.vue'
import PurinAction from '../components/anime/PurinAction'

export default {
  name: 'Debug',
  components: {
    PurinAction,
    ECont,
    Purin
  },
  data () {
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
      stretch: 1.0,
      mouthState: 2,
      easing: 'ease'
    }
  },
  methods: {
    doAction (action) {
      console.log(action)
      const pa = this.$refs.purin
      if (action === 'greet') pa.greet()
      else if (action === 'dance') pa.dance()
      else if (action === 'walk') pa.walk()
    }
  }
}
</script>

<style scoped>

.controls {
  display: inline-block;
  vertical-align: top;
  width: 300px;
}

.controls input {
  margin-bottom: 1.0rem;
}

.controls label {
  font-size: 8pt;
  display: block;
}

.stages {
  display: inline-block;
  vertical-align: top;
  width: 500px;
}

.stage1 {
  position: relative;
  height: 300px;
  background-color: lavender;
}

.stage2 {
  position: relative;
  height: 400px;
  background-color: mintcream;
}

</style>
