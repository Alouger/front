import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '../utils/flexable'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 创建vueRouter实例
const router = createRouter({
  history: createWebHistory(),
  // 判断当前是移动端还是pc端加载对应的路由
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
