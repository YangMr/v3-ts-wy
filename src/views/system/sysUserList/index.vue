<template>
  <div>
    <!--表单 -->
    <QueryForm v-bind="formConfig" v-model="formData">
      <template #button>
        <el-button icon="search">查询</el-button>
        <el-button icon="delete" @click="handleReset">重置</el-button>
        <el-button icon="plus" type="primary" @click="handleOpenDialog('add')">新增</el-button>
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
      <template #action="scope">
        <div style="padding: 5px 0">
          <el-button
            size="default"
            icon="EditPen"
            type="primary"
            @click="handleOpenDialog('edit', scope.row)"
            >编辑</el-button
          >
          <el-button
            size="default"
            icon="EditPen"
            type="success"
            @click="handleOpenDialog('role', scope.row)"
            >分配角色</el-button
          >
          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>

    <!-- 弹窗-->
    <BaseDialog
      :title="dialogTitle"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      :dialogVisible="dialogVisible"
      :modalConfig="modalConfig"
    >
      <QueryForm v-bind="modalConfig" v-model="formDialogData"> </QueryForm>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import QueryForm from '@/baseUI/form'
import BaseDialog from '@/baseUI/dialog'
import { tableConfig } from './config/table.config'
import { formConfig } from './config/form.config'
import { ref } from 'vue'
import { modalConfig } from './config/modal.config'

const formDialogData = ref<any>({})

const dialogVisible = ref(false)
const dialogTitle = ref('')
const handleOpenDialog = (type, row) => {
  formDialogData.value = {}
  const typeEnum = {
    add: '新增用户',
    edit: '编辑用户',
    role: `为[${row.loginName}]分配角色`
  }

  if (type === 'edit') checkShowData(row)

  dialogTitle.value = typeEnum[type]
  dialogVisible.value = true
}

const checkShowData = (row: any) => {
  for (const item of modalConfig.formList) {
    console.log(item.field)
    console.log(row)
    formDialogData.value[item.field] = row[item.field]
  }
}

const handleConfirm = () => {
  if (Object.keys(formDialogData.value).length > 0) {
    alert('edit')
  } else {
    alert('add')
  }
}

const handleCancel = () => {
  dialogVisible.value = false
}

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
