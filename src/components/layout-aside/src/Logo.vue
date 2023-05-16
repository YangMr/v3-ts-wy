<template>
  <div class="logo">
    <a class="link" href="/">
      <img
        class="logo-img"
        src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
        alt="logo"
      />
      <span class="logo-title">物业管理系统</span>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #2b2f3a;
}
.link {
  text-decoration: none;
  color: #fff;
}
.logo-img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}
.logo-title {
  font-size: 20px;
  font-weight: 600;
  vertical-align: middle;
}
</style>
