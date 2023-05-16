<template>
  <el-table v-bind="tableParams" :data="tableList" border style="width: 100%">
    <el-table-column v-if="showExpandColumn" type="expand" width="60"></el-table-column>
    <el-table-column v-if="showSelectionColumn" type="selection" width="60"></el-table-column>
    <el-table-column v-if="showIndexColumn" label="序号" type="index" width="60"></el-table-column>

    <template v-for="(item, index) in propList" :key="index">
      <el-table-column v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row"> {{ scope.row[item.prop] }} </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
defineProps({
  tableParams: {
    type: Object,
    default: () => ({})
  },
  tableList: {
    type: Array,
    default: () => []
  },
  propList: {
    type: Array,
    default: () => []
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  showExpandColumn: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
