<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-col :span="6">
        <el-card v-loading="treeLoading">
          <el-input v-model="treeFilterText" placeholder="输入关键字进行过滤" />
          <div style="margin: 10px" />
          <el-tree ref="tree" :filter-node-method="filterNode" node-key="id" :data="treeData" :props="treeProps" :default-expanded-keys="defaultKeys" empty-text="暂无数据" @node-click="treeClick" />
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="form-card">
          <el-form :inline="true" label-width="100px" label-position="right" size="small">
            <el-form-item label="账户名：">
              <el-input />
            </el-form-item>
            <el-form-item label="用户名：">
              <el-input />
            </el-form-item>
            <el-button-group>
              <el-button icon="el-icon-search" type="primary" size="small" @click="search">搜索</el-button>
              <el-button icon="el-icon-delete" type="primary" size="small" @click="searchClear">清空</el-button>
            </el-button-group>
          </el-form>
        </el-card>
        <div style="margin: 10px" />
        <el-card v-loading="detalLoading" class="form-card">
          <el-row>
            <el-button icon="el-icon-circle-plus-outline" type="primary" size="small" @click="search">新增</el-button>
            <el-button icon="el-icon-delete" type="danger" size="small" @click="searchClear">删除</el-button>
            <el-button icon="el-icon-user" type="info" size="small" @click="searchClear">角色配置</el-button>
            <el-button icon="el-icon-refresh" size="small" @click="searchClear">密码重置</el-button>
          </el-row>
          <div style="margin: 10px;" />
          <el-row>
            <el-table
              :data="tableData"
              style="width: 100%"
              height="250"
              border
            >
              <el-table-column
                type="selection"
                width="50"
                align="center"
              />
              <el-table-column
                fixed
                prop="date"
                label="#"
                width="50"
                align="center"
              />
              <el-table-column
                fixed
                prop="date"
                label="登入账号"
              />
              <el-table-column
                fixed
                prop="name"
                label="用户姓名"
              />
              <el-table-column
                prop="province"
                label="所属角色"
              />
              <el-table-column
                prop="city"
                label="所属部门"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin: 10px;" />
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { tree } from '@/api/dept'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      defaultKeys: [],
      treeFilterText: '',
      treeProps: {
        children: 'children',
        label: 'title'
      },
      treeData: [],
      treeLoading: false,
      tableData: []
    }
  },
  watch: {
    treeFilterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.refreshTree()
  },
  methods: {
    // 树过滤
    filterNode(value, data) {
      if (!value) return true
      return data.title.indexOf(value) !== -1
    },
    // 刷新树的数据
    refreshTree() {
      this.treeLoading = true
      tree()
        .then((res) => {
          this.treeData = res.data
        })
        .finally(() => {
          this.treeLoading = false
          this.defaultKeys = [this.detailData.code]
        })
    },
    // 刷新详情数据
    refreshDetail(id) {
      this.detalLoading = true
    },
    // 树被点击
    treeClick(data) {
      this.refreshDetail(data.id)
    },
    // 清空
    clear() {
      for (const key in this.detailData) {
        this.detailData[key] = ''
      }
    },
    // 新增加下级
    addChild() {
      const code = this.detailData.code
      const name = this.detailData.name
      if (!code) {
        Message({
          message: '请先选择',
          type: 'warning',
          duration: 5 * 1000
        })
        return
      }
      this.clear()
      this.detailData.parentCode = code
      this.detailData.parentName = name
    },
    // 提交
    submit() {

    },
    remove() {

    }
  }
}
</script>
<style scoped>
</style>
