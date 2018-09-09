<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <!-- 第二列 -->
        <el-col :span="4">
          <el-button type='primary' @click="addDialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data='userlist'>
        <el-table-column type='index'></el-table-column>
        <el-table-column label='姓名' prop='username'></el-table-column>
        <el-table-column label='电话' prop='mobile'></el-table-column>
        <el-table-column label='角色' prop='role_name'></el-table-column>
        <el-table-column label='状态'>
          <template slot-scope="scope">
            <!-- 开关 -->
            <!-- {{scope.row}} -->
            <!-- 让开关的状态，双向数据绑定到 当前数据行的 mg_state -->
            <el-switch v-model="scope.row.mg_state" @change='stateChange(scope.row.id,scope.row.mg_state )'>
            </el-switch>
          </template>

        </el-table-column>

        <el-table-column label='操作' width='200px'>
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size='mini'></el-button>
            <el-button type="danger" icon="el-icon-delete" size='mini'></el-button>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top" :enterable='false'>
              <el-button type="warning" icon="el-icon-setting" size='mini'> </el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page=" queryInfo.pagenum" :page-sizes="[2, 3, 5, 10, ]" :page-size=" queryInfo. pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="30%" >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import mix from './user-mixins.js'
export default {
  mixins: [mix]
}
</script>

<style lang="less" scoped>
</style>
