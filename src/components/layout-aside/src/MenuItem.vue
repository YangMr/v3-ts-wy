<template>
  <!--  {{ item }}-->
  <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ item.meta.title }}</span>
    </template>
    <MenuItem v-for="(cItem, index) in item.children" :key="index" :item="cItem" />
  </el-sub-menu>
  <el-menu-item v-else :index="item.path">
    <el-icon><location /></el-icon>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
defineProps({
  // menuList: {
  //   type: Array,
  //   default: () => []
  // },
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped></style>
