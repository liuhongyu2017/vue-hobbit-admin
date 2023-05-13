<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>字典列表</span>
          </div>
          <el-form inline label-position="right" size="small">
            <el-form-item label="字典编号：">
              <el-input style="width: 100px;" />
            </el-form-item>
            <el-form-item label="字典名称：">
              <el-input style="width: 100px;" />
            </el-form-item>
            <el-form-item>
              <el-button-group>
                <el-button icon="el-icon-search" type="primary" size="small" @click="search">搜索</el-button>
                <el-button icon="el-icon-delete" size="small" @click="searchClear">清空</el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
          <el-button icon="el-icon-circle-plus-outline" type="primary" size="small">新增</el-button>
          <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button>
          <div style="margin: 10px;" />
          <el-table style="width: 100%" height="250" border>
            <el-table-column fixed type="selection" width="50" align="center" />
            <el-table-column fixed prop="date" label="#" width="50" align="center" />
            <el-table-column prop="deptName" label="字典编号" />
            <el-table-column prop="fullName" label="字典名称" />
            <el-table-column prop="regionName" label="封存" />
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
      </el-col>
      <el-col :span="12">
        <el-card title="字典列表">
          <div slot="header">
            <span>[{{ detail.title || "暂无" }}]字典详情</span>
          </div>
          <el-form inline label-position="right" size="small">
            <el-form-item label="字典编号：">
              <el-input style="width: 100px;" />
            </el-form-item>
            <el-form-item label="字典名称：">
              <el-input style="width: 100px;" />
            </el-form-item>
            <el-form-item>
              <el-button-group>
                <el-button icon="el-icon-search" type="primary" size="small" @click="search">搜索</el-button>
                <el-button icon="el-icon-delete" size="small" @click="searchClear">清空</el-button>
              </el-button-group>
            </el-form-item>
            <el-button icon="el-icon-circle-plus-outline" type="primary" size="small">新增</el-button>
            <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button>
            <div style="margin: 10px;" />
            <el-table style="width: 100%" height="250" border>
              <el-table-column fixed type="selection" width="50" align="center" />
              <el-table-column fixed prop="date" label="#" width="50" align="center" />
              <el-table-column prop="deptName" label="字典编号" />
              <el-table-column prop="fullName" label="字典名称" />
              <el-table-column prop="regionName" label="封存" />
              <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                  <el-button icon="el-icon-view" size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                  <el-button icon="el-icon-edit" size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  <el-button icon="el-icon-circle-plus-outline" size="mini" type="text" @click="handleAdd(scope.$index, scope.row)">新增子项</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </el-card></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      detail: {
        title: ''
      }
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
    handleDelete() {}
  }
}
</script>
<style scoped>
</style>
