<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    :default-active="$route.path"
    text-color="#fff"
    router
  >
    <!--    菜单渲染思路: 1. 如果渲染的菜单有子菜单,则通过el-submenu渲染-->
    <!--                2. 如果渲染的菜单没有子菜单, 则通过el-menu-item渲染-->
    <MenuItem v-for="(item, index) in menus" :key="index" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
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
    path: '/xinchou',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '薪酬管理',
      icon: '',
      roles: ['/xinchou']
    },
    children: [
      {
        path: '/statff',
        alwaysShow: false,
        meta: {
          title: '人员管理',
          icon: '',
          roles: ['/statff']
        },
        children: [
          {
            path: '/dev',
            component: 'dev',
            alwaysShow: false,
            name: '/dev',
            meta: {
              title: '研发人员',
              icon: '',
              roles: ['/dev']
            }
          }
        ]
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

// 一级菜单数据 与 非一级菜单数据
let menuList = [
  {
    id: 1,
    parentId: null,
    name: '用户'
  },
  {
    id: 2,
    parentId: null,
    name: '系统'
  },
  {
    id: 3,
    parentId: 1,
    name: '员工管理'
  },
  {
    id: 4,
    parentId: 2,
    name: '系统管理'
  },
  {
    id: 5,
    parentId: 3,
    name: '正式员工'
  },
  {
    id: 6,
    parentId: 4,
    name: '设备管理'
  }
]

function formatToTree(menuList) {
  // 1. 先拿到一级菜单数据
  let parent = menuList.filter((item) => item.parentId == null)

  // 2. 拿到非一级菜单数据
  let notParent = menuList.filter((item) => item.parentId != null)

  function deepData(p, notParent) {
    p.forEach((item) => {
      notParent.forEach((child) => {
        if (item.id == child.parentId) {
          deepData([child], notParent)

          if (!item.children) {
            item.children = [item]
          } else {
            item.children.push(item)
          }
        }
      })
    })
  }
  deepData(parent, notParent)

  console.log('parent=', parent)
}
formatToTree(menuList)
</script>

<style scoped></style>
