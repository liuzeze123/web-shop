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

// 为axios的请求拦截器，添加处理函数
// 今后，只要使用axios发起了ajax请求，必然会先调用 通过拦截器指定的回调函数
axios.interceptors.request.use(config => {
  // config形参，就是当前请求的相关参数
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})

// axios.interceptors.response.use(config=>{
//   console.log('调用了响应拦截器')
//   return config
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
