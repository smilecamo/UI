// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
import lang from './common/locale'
import en from 'iview/dist/locale/en-US'
import zh from 'iview/dist/locale/zh-CN'
import {
  Button,
  Table,
  Input,
  RadioGroup,
  Radio,
  Select,
  Option
} from 'iview'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Input', Input)
Vue.component('Radio', Radio)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Option', Option)
Vue.component('Select', Select)
Vue.use(VueI18n)
Vue.locale = () => {}
const messages = {
  'zh-CN': Object.assign(zh, lang['zh-CN']),
  'en-US': Object.assign(en, lang['en-US'])
}
const i18n = new VueI18n({
  locale: 'en-US',
  messages
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: {
    App
  },
  template: '<App/>'
})
