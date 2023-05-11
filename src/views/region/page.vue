<template>
  <div class="app-container">
    <el-row v-loading="loading" :gutter="20">
      <el-col :span="6">
        <el-card v-loading="treeLoading">
          <el-input v-model="treeFilterText" placeholder="输入关键字进行过滤" />
          <div style="margin: 10px" />
          <el-tree ref="tree" :filter-node-method="filterNode" :data="treeData" :props="treeProps" empty-text="暂无数据" @node-click="treeClick" />
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="form-card">
          <el-button-group>
            <el-button icon="el-icon-circle-plus-outline" type="primary" size="small" @click="addChild">新增下级</el-button>
            <el-button icon="el-icon-delete" type="primary" size="small" @click="remove">删除</el-button>
          </el-button-group>
        </el-card>
        <div style="margin: 10px" />
        <el-card v-loading="detalLoading" class="form-card">
          <el-form :inline="true" label-width="110px" label-position="right">
            <el-form-item label="父区划编号：">
              <el-input v-model="detailData.parentCode" class="form-width" disabled />
            </el-form-item>
            <el-form-item label="父区划名称：">
              <el-input v-model="detailData.parentName" class="form-width" disabled />
            </el-form-item>
            <el-form-item label="区划编号：">
              <el-input v-model="detailData.smailCode" class="form-width">
                <template slot="prepend">{{ detailData.parentCode }}</template>
              </el-input>
            </el-form-item>
            <el-form-item label="区划名称：">
              <el-input v-model="detailData.name" class="form-width" />
            </el-form-item>
            <el-form-item label="区划等级：">
              <el-radio-group v-model="detailData.regionLevel">
                <el-radio v-for="item in levelData" :key="item.label" :label="item.label">{{ item.value }}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="区划排序：">
              <el-input-number v-model="detailData.sort" controls-position="right" class="form-width" :min="0" />
            </el-form-item>
            <el-form-item label="区划备注：">
              <el-input v-model="detailData.remark" class="form-width" type="textarea" :rows="4" />
            </el-form-item>
          </el-form>
          <el-row type="flex" justify="center" align="middle">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="clear">清空</el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { tree, detail, submit, remove } from '@/api/region'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      treeFilterText: '',
      treeProps: {
        children: 'children',
        label: 'title'
      },
      treeData: [],
      treeLoading: false,
      detailData: {
        id: '',
        code: '',
        smailCode: '',
        name: '',
        parentCode: '',
        parentName: '',
        regionLevel: '',
        sort: '',
        remark: ''
      },
      detalLoading: false,
      loading: false,
      levelData: [
        { label: '1', value: '国家' }
      ]
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
    filterNode(value, data) {
      if (!value) return true
      return data.title.indexOf(value) !== -1
    },
    // 刷新树的数据
    refreshTree() {
      this.treeLoading = true
      tree().then((res) => {
        this.treeData = res.data
      }).finally(() => {
        this.treeLoading = false
      })
    },
    // 刷新详情数据
    refreshDetail(id) {
      this.detalLoading = true
      detail({ code: id }).then((res) => {
        const data = res.data
        for (const key in this.detailData) {
          this.detailData[key] = data[key]
        }
        const code = this.detailData.code
        const parentCode = this.detailData.parentCode
        this.detailData.smailCode = code.replace(parentCode, '')
      }).finally(() => {
        this.detalLoading = false
      })
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
      this.refreshTree()
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
      const parentCode = this.detailData.parentCode
      const smailCode = this.detailData.smailCode
      const code = parentCode + smailCode
      const detailData = this.detailData
      detailData.code = code
      this.loading = true
      submit(detailData).then((res) => {
        this.refreshDetail(code)
        this.refreshTree()
      }).finally(() => {
        this.loading = false
      })
    },
    remove() {
      const code = this.detailData.code
      remove({ ids: code }).then((res) => {
        this.refreshTree()
        this.clear()
      })
    }
  }
}
</script>
<style scoped>
.form-width {
  width: 500px;
}
.form-card {
  width: 700px;
}
</style>
