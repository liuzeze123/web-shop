import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
// 导入后台主页组件
import Home from '@/components/home/Home'
// 导入欢迎组件
import welcome from '@/components/home/welcome'
// 导入用户列表组件
import userList from '@/components/user/user'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    { path: '/login', component: login }, // 登录界面
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: welcome }, { path: '/users', component: userList }]
    }
  ]
})
// 为路由对象，添加beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
