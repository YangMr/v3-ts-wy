<template>
  <div>
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="default" icon="EditPen" type="success">分配权限</el-button>
          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import { ref } from 'vue'
import { tableConfig } from './config/table.config'

const tableList = ref([
  {
    roleId: 5,
    roleName: '管理员角色',
    remark: '管理员角色'
  },
  {
    roleId: 6,
    roleName: '水费管理员',
    remark: '收水费'
  },
  {
    roleId: 8,
    roleName: '业主',
    remark: '租住房子的人'
  }
])
</script>

<style scoped></style>
