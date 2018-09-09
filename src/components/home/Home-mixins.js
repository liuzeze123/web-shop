export default {
  data() {
    return {
      // 所有菜单项
      menus: [],
      collapse: true,
      iconlist: ['icon-users', 'icon-tijikongjian', 'icon-shangpin', 'icon-danju', 'icon-baobiao'],
      // 被激活菜单的path
      ActivePath: ''
    }
  },
  created() {
    this.getMenus()
    const ap = window.sessionStorage.getItem('ActivePath')
    this.ActivePath = ap
    // console.log(this.ActivePath)
  },
  methods: {
    // 退出登录状态
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取左侧菜单列表
    async getMenus() {
      const { data: res } = await this.$http.get('menus')
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error('请求左侧菜单失败')
      this.menus = res.data
    },
    // 保存用户点击的当前二级菜单的index值
    saveActivePath(ActivePath) {
      // console.log(ActivePath)
      this.ActivePath = ActivePath
      // 把当前激活的菜单的值，保存到sessionStorage
      window.sessionStorage.setItem('ActivePath', ActivePath)
    }
  }
}
