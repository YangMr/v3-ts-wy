<template>
  <el-menu
    active-text-color="rgb(64, 158, 255)"
    background-color="#304156"
    class="el-menu-vertical"
    :default-active="$route.path"
    text-color="#fff"
    unique-opened
    router
  >
    <template v-for="item in menus" :key="item.path">
      <el-menu-item v-if="item && !item.children" :index="item.path">
        <el-icon><setting /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>

      <el-sub-menu v-else-if="item && item.children && item.children.length > 0" :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>

        <template v-for="childItem in item.children" :key="childItem.path">
          <el-menu-item :index="childItem.path">
            <el-icon><location /></el-icon>
            <span>{{ childItem.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
const menus = [
  {
    path: '/dashboard',
    component: 'Dashboard',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/system',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '系统管理',
      icon: 'el-icon-menu',
      roles: ['sys:system']
    },
    children: [
      {
        path: '/sysUserList',
        component: '/system/sysUserList',
        alwaysShow: false,
        name: 'sys:user:index',
        meta: {
          title: '员工管理',
          icon: 'el-icon-s-custom',
          roles: ['sys:sysUserList']
        }
      },
      {
        path: '/sysRoleList',
        component: '/system/sysRoleList',
        alwaysShow: false,
        name: 'sysRoleList',
        meta: {
          title: '角色管理',
          icon: 'el-icon-date',
          roles: ['sys:sysRoleList']
        }
      },
      {
        path: '/sysMenuList',
        component: '/system/sysMenuList',
        alwaysShow: false,
        name: 'sysMenuList',
        meta: {
          title: '权限管理',
          icon: 'el-icon-school',
          roles: ['sys:sysMenuList']
        }
      }
    ]
  },
  {
    path: '/sysHouse',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '房屋管理',
      icon: 'el-icon-s-help',
      roles: ['sys:home:index']
    },
    children: [
      {
        path: '/houseBuilding',
        component: '/house/houseBuilding',
        alwaysShow: false,
        name: 'houseBuilding',
        meta: {
          title: '栋数管理',
          icon: 'table',
          roles: ['sys:houseBuilding']
        }
      },
      {
        path: '/houseUnit',
        component: '/house/houseUnit',
        alwaysShow: false,
        name: 'houseUnit',
        meta: {
          title: '单元管理',
          icon: 'table',
          roles: ['sys:houseUnit']
        }
      },
      {
        path: '/sysHouseList',
        component: '/house/houseList',
        alwaysShow: false,
        name: 'sysHouseList',
        meta: {
          title: '房屋列表',
          icon: 'el-icon-mobile',
          roles: ['sys:house:list']
        }
      }
    ]
  },
  {
    path: '/sysPark',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '车位管理',
      icon: 'el-icon-money',
      roles: ['sys:sysPark']
    },
    children: [
      {
        path: '/parkList',
        component: '/park/parkList',
        alwaysShow: false,
        name: 'parkList',
        meta: {
          title: '车位管理',
          icon: 'el-icon-money',
          roles: ['sys:parkList']
        }
      }
    ]
  },
  {
    path: '/live',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '业主管理',
      icon: 'el-icon-s-grid',
      roles: ['sys:live']
    },
    children: [
      {
        path: '/liveUser',
        component: '/live/liveUser',
        alwaysShow: false,
        name: 'liveUser',
        meta: {
          title: '业主列表',
          icon: 'el-icon-s-data',
          roles: ['sys:liveUser']
        }
      }
    ]
  },
  {
    path: '/fee',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '收费管理',
      icon: 'el-icon-s-open',
      roles: ['sys:fee']
    },
    children: [
      {
        path: '/feePower',
        component: '/fee/feePower',
        alwaysShow: false,
        name: 'feePower',
        meta: {
          title: '电费管理',
          icon: 'el-icon-picture',
          roles: ['sys:feePower']
        }
      },
      {
        path: '/feeWater',
        component: '/fee/feeWater',
        alwaysShow: false,
        name: 'feeWater',
        meta: {
          title: '水费管理',
          icon: 'el-icon-s-data',
          roles: ['sys:feeWater']
        }
      },
      {
        path: '/feePark',
        component: '/fee/feePark',
        alwaysShow: false,
        name: 'feePark',
        meta: {
          title: '停车管理',
          icon: 'el-icon-s-order',
          roles: ['sys:feePark']
        }
      }
    ]
  },
  {
    path: '/userComplaint',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '投诉管理',
      icon: 'el-icon-date',
      roles: ['sys:userComplaint']
    },
    children: [
      {
        path: '/userComplaintList',
        component: '/userComplaint/userComplaint',
        alwaysShow: false,
        name: 'userComplaintList',
        meta: {
          title: '投诉列表',
          icon: 'el-icon-edit-outline',
          roles: ['sys:userComplaintList']
        }
      }
    ]
  },
  {
    path: '/repairModel',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '维修管理',
      icon: 'el-icon-picture-outline',
      roles: ['sys:repairModel']
    },
    children: [
      {
        path: '/repairList',
        component: '/repair/repairList',
        alwaysShow: false,
        name: 'repairList',
        meta: {
          title: '维修列表',
          icon: 'el-icon-s-marketing',
          roles: ['sys:repairList']
        }
      }
    ]
  },
  {
    path: '/notice',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '公告管理',
      icon: 'el-icon-document-copy',
      roles: ['sys:notice']
    },
    children: [
      {
        path: '/noticeList',
        component: '/notice/noticeList',
        alwaysShow: false,
        name: 'noticeList',
        meta: {
          title: '公告列表',
          icon: 'el-icon-s-marketing',
          roles: ['sys:noticeList']
        }
      }
    ]
  }
]
</script>

<style scoped>
.el-menu-vertical {
  border-right: none;
}
</style>
