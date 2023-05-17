<template>
  <div>
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import { tableConfig } from './config/table.config'

import { ref } from 'vue'

const tableList = ref([
  {
    unitId: 2,
    buildId: 2,
    unitName: 'B-1',
    name: 'B栋'
  },
  {
    unitId: 3,
    buildId: 1,
    unitName: 'A-2',
    name: 'A栋'
  },
  {
    unitId: 4,
    buildId: 1,
    unitName: 'A-1',
    name: 'A栋'
  },
  {
    unitId: 8,
    buildId: 1,
    unitName: 'D单元111',
    name: 'A栋'
  },
  {
    unitId: 10,
    buildId: 6,
    unitName: 'D-1单元',
    name: 'D栋'
  },
  {
    unitId: 11,
    buildId: 1,
    unitName: '888',
    name: 'A栋'
  }
])
</script>

<style scoped></style>
