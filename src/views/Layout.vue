<template>
  <el-container class="layout">
    <el-aside class="layout-aside" width="210px">
      <LayoutAside />
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <LayoutHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/components/layout-aside'
import LayoutHeader from '@/components/layout-header'
</script>

<style scoped>
.layout {
  height: 100%;
}
.layout-aside {
  background-color: #304156;
}
.layout-header {
  height: 84px;
  padding: 0;
}
</style>
