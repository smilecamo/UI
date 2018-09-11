// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import qs from 'qs'
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// import VueCookies from 'vue-cookies'
import Cookies from 'js-cookie'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
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
  Option,
  Form,
  FormItem,
  Icon,
  Message,
  Page,
  Spin,
  Modal,
  Menu,
  Submenu,
  MenuItem
} from 'iview'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Input', Input)
Vue.component('Radio', Radio)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Option', Option)
Vue.component('Select', Select)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Icon', Icon)
Vue.component('Page', Page)
Vue.component('Spin', Spin)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
// 翻译
Vue.use(VueI18n, router, VueQuillEditor)
// Vue.use(router)
Vue.locale = () => {}
const messages = {
  'zh-CN': Object.assign(zh, lang['zh-CN']),
  'en-US': Object.assign(en, lang['en-US'])
}
const i18n = new VueI18n({
  locale: 'en-US',
  messages
})
// cookie
// Vue.use(VueCookies)
// Vue.use(Cookies)
Vue.config.productionTip = false
// 注册iview
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal
Vue.prototype.$axios = Axios
Vue.prototype.qs = qs
Vue.prototype.Cookies = Cookies

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
