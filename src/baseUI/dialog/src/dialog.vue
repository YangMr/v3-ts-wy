<template>
  <el-dialog
    :top="top"
    :model-value="dialogVisible"
    :title="title"
    :width="width + 'px'"
    destroy-on-close
    :before-close="handleCancel"
  >
    <div class="content" :style="{ height: height + 'px' }">
      <slot> </slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <slot name="footer">
          <el-button @click="handleCancel" type="danger">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </slot>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  modalConfig: {
    type: Object,
    default: () => {}
  },
  top: {
    type: String,
    default: '1vh'
  },
  title: {
    type: String,
    default: '标题'
  },
  dialogVisible: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '600'
  },
  height: {
    type: Number,
    default: 250
  }
})
// const visible = ref()
// watch(
//   () => props.dialogVisible,
//   (newValue) => {
//     visible.value = newValue
//   },
//   { deep: true }
// )

const emits = defineEmits(['cancel', 'confirm'])

const handleCancel = () => {
  emits('cancel')
}

const handleConfirm = () => {
  emits('confirm')
}
</script>

<style scoped lang="scss">
.content {
  overflow-y: auto;
}
.el-dialog__wrapper {
  v-deep .el-dialog {
    v-deep .el-dialog__header {
      background-color: yellow !important;
    }
    v-deep .el-dialog__footer {
      border-top: 1px solid #ccc !important;
    }
  }
}
</style>
