import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { globalRegister } from './global'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globalRegister)

const buttonPermissions = [
  'sys:sysUserList',
  'sys:system',
  'sys:role:add',
  'sys:user:add',
  'sys:sysRoleList',
  'sys:user:edit'
]
app.directive('permission', {
  mounted(el, binding, vnode) {
    console.log('el', el)
    console.log('binding', binding)
    // 当前按钮所绑定的权限
    const value = binding.value

    // 判断按钮所绑定的权限数据是否存在于按钮权限列表中, 如果不存在,则移除当前元素
    const hasPermissions = buttonPermissions.includes(value)
    if (!hasPermissions) {
      el.style.display = 'none'
      setTimeout(() => {
        el.parentNode.removeChild(el)
      }, 30)
    }
  }
})

app.mount('#app')
