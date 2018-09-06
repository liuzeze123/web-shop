import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标样式
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false
// 安装element-ui
Vue.use(ElementUI)
// 请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 配置axios
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
