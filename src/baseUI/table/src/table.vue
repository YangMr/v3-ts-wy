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

  <div class="pagination" v-if="showPagination">
    <slot name="pagination">
      <el-pagination
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        v-bind="paginationParams"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  paginationParams: {
    type: Object,
    default: () => {
      return {
        'page-sizes': [10, 20, 30, 50],
        background: true,
        layout: 'total, sizes, prev, pager, next, jumper'
      }
    }
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  total: {
    type: Number,
    default: 0
  },
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
  },
  showPagination: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['update:page'])
const handleSizeChange = (pageSize: number | string) => {
  emits('update:page', { ...props.page, pageSize })
}

const handleCurrentChange = (currentPage: number | string) => {
  emits('update:page', { ...props.page, currentPage })
}
</script>

<style scoped></style>
