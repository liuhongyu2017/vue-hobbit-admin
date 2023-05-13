<template>
  <div class="app-container">
    <el-dialog ref="dialog" :visible.sync="detailVisible" :title="title" @close="handleCancle ">
      <el-form inline label-width="110px" label-position="right">
        <el-form-item label="机构名称:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="机构全称:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="机构所属区域:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="上级机构:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="机构类型:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="排序:">
          <el-input :disabled="edit" />
        </el-form-item>
        <el-form-item label="备注:">
          <el-input type="textarea" :rows="4" :disabled="edit" />
        </el-form-item>
      </el-form>
      <div v-if="!edit" style="text-align: right">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    edit: {
      type: Boolean,
      default: false
    },
    // 显示/隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // 提交之后
    afterSubmint: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      detailVisible: false
    }
  },
  watch: {
    visible(val) {
      this.detailVisible = val
    }
  },
  methods: {
    handleCancle() {
      this.$emit('update:visible', false)
    },
    submit() {
      if (typeof this.afterSubmint === 'function') {
        this.afterSubmint()
      }
    }
  }
}
</script>
