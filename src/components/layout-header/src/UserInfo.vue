<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar
        shape="square"
        :size="40"
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
      />

      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a" divided>重置密码</el-dropdown-item>
        <el-dropdown-item command="b" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
const handleCommand = (command) => {
  console.log('command', command)
}
</script>

<style scoped>
.el-dropdown {
  margin-left: auto;
  cursor: pointer;
}
:focus {
  outline: none;
}
</style>
