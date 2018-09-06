 <template>
  <!-- 登录表单 -->
  <div class="login-container">
    <!-- 图 -->
    <div class="avatar">
      <img src="../assets/logo.png" alt="">
    </div>
    <el-form :model="loginForm" :rules="loginFormrules" ref="loginFormRef" class="loginForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username">
          <i slot="prefix" class="iconfont icon-users"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type='password'>
          <i slot="prefix" class="iconfont icon-3702mima"></i>
        </el-input>
      </el-form-item>

      <el-form-item class="btns">
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//  导入当前 .vue 文件配套的行为
import mix from './login-mixins.js'
export default {
  // 把外界导入的行为，通过 mixins 属性，混入到当前组件中生效
  mixins: [mix]
}
</script>

 <style lang="less" scoped>
.login-container {
  width: 450px;
  height: 304px;
  background: #fff;
  position: absolute;
  border-radius: 4px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar {
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 7px;
    background: #fff;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      height: 130px;
      width: 130px;
      border-radius: 50%;
      background: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.loginForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
