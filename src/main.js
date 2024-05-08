import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { useREM } from './utils/flexable'
import libs from './libs'
import 'virtual:svg-icons-register' // 注册svg-icons, 为固定格式

useREM()
createApp(App).use(router).use(libs).mount('#app')
