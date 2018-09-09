export default {
  data() {
    return {
      // 登录表单的数据对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 登录表单的验证规则对象
      loginFormrules: {
        // 登录名称的验证规则
        username: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
        password: [{ required: true, message: '长度在8个字符', trigger: 'blur' }]
      }
    }
  },
  // 点击重置按钮，重置表单
  methods: {
    resetForm() {
      // resetFields为重置表单作用
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // 进行表单验证
      this.$refs.loginFormRef.validate(async valid => {
        // 如果验证失败，直接退出后续代码的执行
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // console.log(res)
        // 把登录成功的token保存到sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        // 使用编程式导航，跳转到后台页面
        this.$router.push('/home')
      })
    }
  }
}
