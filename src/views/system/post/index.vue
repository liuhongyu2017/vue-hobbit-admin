<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-card>
        <el-form inline label-width="100px" label-position="right" size="small">
          <el-form-item label="岗位类型：">
            <el-input />
          </el-form-item>
          <el-form-item label="岗位编号：">
            <el-input />
          </el-form-item>
          <el-form-item label="岗位名称：">
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button icon="el-icon-search" type="primary" size="small" @click="search">搜索</el-button>
              <el-button icon="el-icon-delete" size="small" @click="searchClear">清空</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="margin: 10px;" />
      <el-card>
        <el-row>
          <el-button icon="el-icon-circle-plus-outline" type="primary" size="small" @click="addShow = true">新增</el-button>
          <el-button icon="el-icon-delete" type="danger" size="small" @click="handleDelete">删除</el-button>
        </el-row>
        <div style="margin: 10px;" />
        <el-row>
          <el-table :data="tableData" style="width: 100%" height="250" border>
            <el-table-column type="selection" width="50" align="center" />
            <el-table-column fixed prop="date" label="#" width="50" align="center" />
            <el-table-column fixed prop="deptName" label="岗位类型" />
            <el-table-column fixed prop="fullName" label="岗位编号" />
            <el-table-column prop="regionName" label="岗位名称" />
            <el-table-column prop="deptCategoryDesc" label="排序" />
            <el-table-column label="操作" width="300">
              <template slot-scope="scope">
                <el-button icon="el-icon-view" size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                <el-button icon="el-icon-edit" size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-row>
    <detail :visible.sync="addShow" :after-submint="detailSubmit" />
  </div>
</template>

<script>
import detail from './detail.vue'

export default {
  components: { detail },
  data() {
    return {
      loading: false,
      addShow: false,
      tableData: []
    }
  },
  methods: {
    // 搜索
    search() {},
    // 清空搜索条件
    searchClear() {},
    // 添加
    tableAdd() {},
    // 删除
    tableRemord() {},
    // 表格查看
    handleDetail() {},
    // 表格编辑
    handleEdit() {},
    // 表格删除
    handleDelete() {},
    // detail页面提交
    detailSubmit(e) {
      alert(1)
    }
  }
}
</script>
<style scoped>
</style>
