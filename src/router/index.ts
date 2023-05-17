import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Layout from '../views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue')
        },
        {
          path: '/sysUserList',
          name: 'sysUserList',
          component: () => import('@/views/system/sysUserList/index.vue')
        },
        {
          path: '/sysRoleList',
          name: 'sysRoleList',
          component: () => import('@/views/system/sysRoleList/index.vue')
        },
        {
          path: '/sysMenuList',
          name: 'sysMenuList',
          component: () => import('@/views/system/sysMenuList/index.vue')
        },
        {
          path: '/houseBuilding',
          name: 'houseBuilding',
          component: () => import('@/views/house/houseBuilding/index.vue')
        },
        {
          path: '/houseUnit',
          name: 'houseUnit',
          component: () => import('@/views/house/houseUnit/index.vue')
        },
        {
          path: '/sysHouseList',
          name: 'sysHouseList',
          component: () => import('@/views/house/houseList/index.vue')
        }
      ]
    }
  ]
})

export default router
