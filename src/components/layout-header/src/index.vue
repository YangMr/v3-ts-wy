<template>
  <div class="header-wrap">
    <div class="header">
      <!--menuIcon-->
      <MenuIcon />

      <!--breadcrumb  -->

      <!-- userinfo  -->
      <UserInfo />
    </div>
    <div class="tags"></div>
  </div>
</template>

<script setup lang="ts">
import MenuIcon from './MenuIcon.vue'
import UserInfo from './UserInfo.vue'
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.tags {
  height: 34px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
}
</style>
