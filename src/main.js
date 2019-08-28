// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store/store'
import './style/sass/app.scss'
import './style/less/app.less'
import './style/scroll.css'
import '../static/fonts/iconfont.css'
//饿了么ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.min.css'
//bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Print from 'print'

import md5 from 'md5'

import VueGlobalTool from './utilities/VueGlobalTool'

// 代码高亮
import VueHighlightJS from 'vue-highlightjs'
//  import 'highlight.js/styles/default.css'
import 'highlight.js/styles/routeros.css'
//  import 'highlight.js/styles/ir-black.css'
Vue.use(VueHighlightJS)


Vue.use(Print); 

Vue.use(Element)


//swiper
import '../static/css/swiper.min.css';

//小分队UI
import xfdUI from './components/index';
//图片压缩
import lrz from 'lrz';   

Vue.use(xfdUI)
// Vue.use(MintUI)

Vue.config.productionTip = false
// console.log($)

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
