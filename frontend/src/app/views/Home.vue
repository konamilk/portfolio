<template>
  <div class="home">
    <div class="first" :style="pageRect">
      <div class="first-body-block" :style="firstBodyBlockStyle">
        <transition appear>
          <h1 v-show="show1">Pi:no's Portfolio</h1>
        </transition>
        <transition appear>
          <p v-show="show2">Java and PHP engineer</p>
        </transition>
      </div>
      <first-bg-box :w="width" :h="height"></first-bg-box>
    </div>
    <div class="second">
      <div class="container">
        <div class="docs-header">
          &nbsp;
        </div>
        <!-- profile -->
        <div class="docs-section" v-observe-visibility="visibilityChanged3" :style="visibilityStyle3">
          <div class="row" v-show="show3">
            <div class="eight columns">
              <h4><i class="el-icon-ice-cream-round" /> Profile</h4>
              <p>はじめまして。Pi:noと申します。</p>
              <p>Web系(Java)、業務系で活躍しているエンジニアです。</p>
              <p>Web屋さんにジョブチェンジ転職したいため、PHPとVue.jsを足がかりにスキルチェンジ実施中。</p>
              <p>設計が好き。DDD(ドメイン駆動設計)に無限の可能性を感じるんだ。</p>
              <el-collapse>
                <el-collapse-item title="主な経歴">
                  <ul>
                    <li>金融業：インターネットバンキング バックエンド開発(Java, C) [2015-2018]</li>
                    <li>情報サービス業：ETLツール(Adobe Campaign)を用いた業務基盤の開発(Oracle, javascript) [2019-]</li>
                  </ul>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
        <!-- skill map -->
        <div class="docs-section" v-observe-visibility="visibilityChanged4" :style="visibilityStyle4">
          <div v-show="show4">
            <h4><i class="el-icon-cold-drink"> Development Skills</i></h4>
            <div v-if="isMobile">
              <img src="/img/skills_vertical.svg">
            </div>
            <div v-else>
              <img src="/img/skills_horizontal.svg" style="object-fit: cover">
            </div>
          </div>
        </div>
        <!-- contact -->
        <div class="docs-section"  v-observe-visibility="visibilityChanged5" :style="visibilityStyle5">
          <h3><i class="el-icon-cherry"> Contact</i></h3>
          <p>下記フォームからお気軽にお問い合わせください。</p>
          <p>メール(contact@konamilk.me)でも承っております。</p>
          <div v-if="errors.length" class="error">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{error}}</li>
            </ul>
          </div>
          <div class="row">
            <div class="six columns">
              <label>メールアドレス</label>
              <input class="u-full-width" type="email" placeholder="test@example.com" v-model="contactEmail">
            </div>
          </div>
          <label>お問い合わせ内容</label>
          <textarea class="u-full-width" cols="5" v-model="contactBody"></textarea>
          <button v-if="contactStatus===0 || contactStatus === 2" class="button-primary" @click="send">送信</button>
          <button v-else-if="contactStatus===1" class="button-primary"><i class="el-icon-loading"/></button>
          <transition>
            <p v-show="contactStatus === 2" style="display: inline; margin: 0 10px"><i class="el-icon-check" style="color: green"/>送信されました</p>
          </transition>
        </div>
        <div class="docs-footer">
          &nbsp;
        </div>
      </div> <!-- /container -->
      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script>

import FirstBgBox from '../components/anime/FirstBgBox'
import { Collapse, CollapseItem } from 'element-ui'

export default {
  name: 'Home',
  components: { FirstBgBox, ElCollapse: Collapse, ElCollapseItem: CollapseItem },
  data: () => {
    return {
      width: 100,
      height: 100,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      errors: [],
      contactEmail: '',
      contactBody: '',
      contactStatus: 0
    }
  },
  computed: {
    firstBodyBlockStyle () {
      return this.width > this.height ? 'transform: translate(-10vw, 30vh); text-align: right' : 'transform: translate(0vw, 20vh); text-align: center'
    },
    pageRect () {
      return `width:${this.width}px; height:${this.height}px`
    },
    isMobile () {
      return this.width < 400
    },
    visibilityStyle3 () {
      return this.show3 ? 'transform: translate(0, 0); transition: 1.5s' : 'transform: translate(-100px, 0)'
    },
    visibilityStyle4 () {
      return this.show4 ? 'transform: translate(0, 0); transition: 1.5s' : 'transform: translate(100px, 0)'
    },
    visibilityStyle5 () {
      return this.show5 ? 'transform: translate(0, 0); transition: 1.5s' : 'transform: translate(-100px, 0)'
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    visibilityChanged3 (isVisible, entry) {
      if (isVisible) this.show3 = true
    },
    visibilityChanged4 (isVisible, entry) {
      if (isVisible) this.show4 = true
    },
    visibilityChanged5 (isVisible, entry) {
      if (isVisible) this.show5 = true
    },
    send () {
      if (this.contactStatus === 1) {
        return false // 2度押し
      }
      this.errors = []
      if (!this.validEmail(this.contactEmail)) {
        this.errors.push('有効なメールアドレスを入力してください')
      }
      if (this.contactBody.length === 0) {
        this.errors.push('お問い合わせ入力を入力してください')
      }
      if (this.errors.length > 0) {
        return false
      }
      this.contactStatus = 1 // resolving
      const contactObj = {
        email: this.contactEmail,
        body: this.contactBody
      }
      const axios = require('axios')
      axios.post('/api/contact', contactObj)
        .then((response) => {
          this.contactEmail = ''
          this.contactBody = ''
          this.contactStatus = 2
          if (response.data.status !== 'success') {
            this.errors.push('メール送信に失敗しました')
          }
          console.log(response)
        })
        .catch((error) => {
          this.contactStatus = 0
          this.errors.push('メール送信に失敗しました')
          console.log(error)
        })
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    window.addEventListener('resize', this.handleResize)
    window.setTimeout(() => { this.show2 = true }, 500)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import "~element-ui/lib/theme-chalk/collapse.css";
@import "~element-ui/lib/theme-chalk/collapse-item.css";
@import "~element-ui/lib/theme-chalk/icon.css";

.home {
  margin: 0px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif;
}
.first {
  position: relative;
  overflow: hidden;
}
.first-body-block {
  position: absolute;
  width: 100%;
}
.first-body-block h1 {
  color: #89B0F9;
  letter-spacing: 0.06em;
  font-family: 'Fredoka One', cursive;
  margin: 0px;
  font-size: 4vmax;
}
.first-body-block p {
  color: #E86555;
  font-family: 'Fredoka One', cursive;
  font-size: 1.5vmax;

}
.v-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.v-enter-active {
  transition: all .5s ease;
}
.second {
  position:relative;
}
.docs-header, .docs-footer {
  margin-top: 18rem;
}
.docs-section {
  padding: 6rem 0;
  transition: 1.5s ease;
}
p {
  font-size: 15px;
}
img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
h1, h2, h3, h4, h5, h6 {
  letter-spacing: 0.01em;
}
.error {
  color: red;
}

</style>
