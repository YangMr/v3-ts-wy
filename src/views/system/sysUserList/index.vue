<template>
  <div>
    <!--表单 -->
    <QueryForm v-bind="formConfig" v-model="formData">
      <template #button>
        <el-button icon="search">查询</el-button>
        <el-button icon="delete" @click="handleReset">重置</el-button>
        <el-button icon="plus" type="primary">新增</el-button>
      </template>
    </QueryForm>
    <!--表格 -->
    <BaseTable v-model:page="page" :tableList="tableList" v-bind="tableConfig">
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 1 ? '男' : '女' }}
        </el-tag>
      </template>
      <template #isUsed="scope">
        <el-switch
          v-model="scope.row.isUsed"
          :active-value="1"
          :inactive-value="0"
          active-text="是"
          inactive-text="否"
        />
      </template>
      <template #status="scope">
        <el-switch
          v-if="!(scope.row.loginName == 'admin')"
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="0"
          active-text="是"
          inactive-text="否"
        />
        <span v-else></span>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="default" icon="EditPen" type="success">分配角色</el-button>
          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import QueryForm from '@/baseUI/form'
import { tableConfig } from './config/table.config'
import { formConfig } from './config/form.config'
import { ref } from 'vue'

const formItems = formConfig?.formList?.filter((item) => item.field)
const formOrigin = {}
for (const item of formItems) {
  formOrigin[item.field] = ''
}

const formData = ref(formOrigin)

const page = ref({
  currentPage: 1,
  pageSize: 10
})

const handleReset = () => {
  for (const key in formOrigin) {
    formData.value[key] = formOrigin[key]
  }
}

const tableList = ref([
  {
    userId: 4,
    loginName: 'admin',
    password: '',
    username: 'admin',
    phone: '186871162231',
    sex: '1',
    idCard: '53233119810262011',
    isAdmin: 0,
    status: '1',
    isUsed: 0,
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 13,
    loginName: '张三一',
    password: '',
    username: 'zs1',
    phone: '18687116223',
    sex: '1',
    idCard: '4561313131461531232',
    isAdmin: null,
    status: '0',
    isUsed: 1,
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 14,
    loginName: '张二',
    password: '',
    username: 'ze',
    phone: '18787171906',
    sex: '0',
    idCard: '894646413213132',
    isAdmin: null,
    status: '1',
    isUsed: 0,
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 15,
    loginName: 'yangmr',
    password: '',
    username: 'yangmr',
    phone: '17802901987',
    sex: '1',
    idCard: '110',
    isAdmin: null,
    status: '0',
    isUsed: 1,
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 16,
    loginName: '12',
    password: '',
    username: '21',
    phone: '21',
    sex: '0',
    idCard: '21',
    isAdmin: null,
    status: '1',
    isUsed: '1',
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 17,
    loginName: '21',
    password: '',
    username: '登录',
    phone: '21',
    sex: '1',
    idCard: '12',
    isAdmin: null,
    status: '1',
    isUsed: '1',
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 18,
    loginName: '姓名',
    password: '',
    username: '登录名',
    phone: '155',
    sex: '1',
    idCard: '411',
    isAdmin: null,
    status: '1',
    isUsed: '0',
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  }
])
</script>

<style scoped></style>
