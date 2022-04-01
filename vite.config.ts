/*
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 16:27:05
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 17:26:42
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import path from 'path';
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({ 
      libs: [ 
        { 
          libraryName: 'vant', 
          esModule: true, 
          resolveStyle: (name) => `vant/es/${name}/style`, 
        }, 
      ], 
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'comps': resolve('src/components'),
      'apis': resolve('src/apis'),
      'views': resolve('src/views'),
      'utils': resolve('src/utils'),
      'routes': resolve('src/routes'),
      'styles': resolve('src/styles')
    }
  },
  // 本地运行配置，及反向代理配置
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
        '/app-api': {
            target: 'http://10.10.77.174:28140',   //代理接口
            changeOrigin: true,
           
            // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
}
})
