export default {
  data() {
    return {
      // 查询参数对象
      queryInfo: {
        query: '', // 默认没有搜索条件
        pagenum: 1,
        pagesize: 2
      },
      total: 0, // 总数据条数
      userlist: [] , // 当前页中的数据列表
      addDialogVisible:false  // 控制添加对话框的显示与隐藏
    } 
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 根据查询条件和分页，获取用户列表
    async getUserList() {
      const { data: res } = await this.$http.get('users', { params: this.queryInfo })
      if (res.meta.status !== 200) return this.$message.error('请求用户列表失败')
      this.total = res.data.total
      this.userlist = res.data.users
    },
    // 开关状态改变就是启动这个函数
    async stateChange(id, newState) {
      const { data: res } = await this.$http.put(`users/${id}/state/${newState}`)
      if (res.meta.status !== 200) return this.$message.error('修改状态失败')
    },
    handleSizeChange(newSize) {
      // console.log('最新的pageSize是' + newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    handleCurrentChange(newPage) {
      // console.log('最新的页码值为' + newPage)
      // 最新的页码值 保存到查询对象中
      this.queryInfo.pagenum = newPage
      // 根据最新的页码值，从新获取数据
      this.getUserList()
    },
    
  }
}
