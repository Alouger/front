import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
      '@@': join(__dirname, './src/components')
    }
  },
  plugins: [vue()],
  // 代理配置
  server: {
    proxy: {
      // 代理匹配 /api 开头的请求
      '/api': {
        // 代理请求之后的请求地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        // 跨域
        changeOrigin: true
      }
    }
  }
})
