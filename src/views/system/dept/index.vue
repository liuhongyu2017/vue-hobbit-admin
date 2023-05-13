<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-card class="form-card">
        <el-form inline label-width="100px" label-position="right" size="small">
          <el-form-item label="部门名称：">
            <el-input v-model="searchQuery.deptName" />
          </el-form-item>
          <el-form-item label="部门全称：">
            <el-input v-model="searchQuery.fullName" />
          </el-form-item>
          <el-button-group>
            <el-button icon="el-icon-search" type="primary" size="small" @click="search">搜索</el-button>
            <el-button icon="el-icon-delete" size="small" @click="searchClear">清空</el-button>
          </el-button-group>
        </el-form>
      </el-card>
      <div style="margin: 10px" />
      <el-card v-loading="tableLoading" class="form-card">
        <el-row>
          <el-button icon="el-icon-circle-plus-outline" type="primary" size="small" @click="dialog.edit = true">新增</el-button>
          <el-button icon="el-icon-delete" type="danger" size="small" @click="searchClear">删除</el-button>
        </el-row>
        <div style="margin: 10px;" />
        <el-row>
          <el-table :data="tableData" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}" style="width: 100%" height="250" border>
            <el-table-column type="selection" width="50" align="center" />
            <el-table-column fixed prop="date" label="#" width="50" align="center" />
            <el-table-column fixed prop="deptName" label="机构名称" />
            <el-table-column fixed prop="fullName" label="机构全称" />
            <el-table-column prop="regionName" label="所属区域" />
            <el-table-column prop="deptCategoryDesc" label="机构类型" />
            <el-table-column prop="sort" label="排序" />
            <el-table-column label="操作" width="300">
              <template slot-scope="scope">
                <el-button icon="el-icon-view" size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                <el-button icon="el-icon-edit" size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                <el-button icon="el-icon-circle-plus-outline" size="mini" type="text" @click="handleAdd(scope.$index, scope.row)">新增子项</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-row>
    <detail :visible.sync="dialog.edit" />
  </div>
</template>

<script>
import { treeTable } from '@/api/dept'
import detail from './detail.vue'

export default {
  components: { detail },
  data() {
    return {
      loading: false,
      tableLoading: false,
      dialog: {
        edit: false,
        title: '详情'
      },
      tableData: [],
      searchQuery: {
        deptName: '',
        fullName: ''
      }
    }
  },
  created() {
    this.refreshTable()
  },
  methods: {
    // 刷新表格数据
    refreshTable() {
      this.tableLoading = true
      treeTable()
        .then((res) => {
          this.tableData = res.data
        })
        .finally((res) => {
          this.tableLoading = false
        })
    },
    // 搜索
    search() {
      for (const key in this.detailData) {
        this.detailData[key] = ''
      }
    },
    // 清空
    searchClear() {
      for (const key in this.searchQuery) {
        this.searchQuery[key] = ''
      }
    },
    // 提交
    submit() {},
    // 删除
    remove() {},
    // 表格详情
    handleDetail() {},
    // 表格编辑
    handleEdit() {},
    // 表格删除
    handleDelete() {},
    // 表格新增子项
    handleAdd() {},
    // 隐藏窗口
    handleDrag() {}
  }
}
</script>
<style scoped>
</style>
