<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-card>
        <el-form inline label-position="right" size="small">
          <el-form-item label="菜单名称：">
            <el-input />
          </el-form-item>
          <el-form-item label="菜单编号：">
            <el-input />
          </el-form-item>
          <el-form-item label="菜单别名：">
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button icon="el-icon-search" type="primary" size="small">搜索</el-button>
              <el-button icon="el-icon-delete" size="small">清空</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="margin: 20px;" />
      <el-card>
        <el-button icon="el-icon-search" type="primary" size="small">新增</el-button>
        <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button>
        <div style="margin: 10px;" />
        <el-table style="width: 100%" height="250" border>
          <el-table-column fixed type="selection" width="50" align="center" />
          <el-table-column fixed prop="date" label="#" width="50" align="center" />
          <el-table-column prop="deptName" label="菜单名称" />
          <el-table-column prop="fullName" label="路由地址" />
          <el-table-column prop="regionName" label="菜单图标" width="100" />
          <el-table-column prop="regionName" label="菜单编号" />
          <el-table-column prop="regionName" label="菜单别名" />
          <el-table-column prop="regionName" label="排序" />
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button icon="el-icon-view" size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
              <el-button icon="el-icon-edit" size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <el-button icon="el-icon-circle-plus-outline" size="mini" type="text" @click="handleAdd(scope.$index, scope.row)">新增子项</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
