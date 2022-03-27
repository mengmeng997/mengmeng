/*
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 16:27:05
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 18:04:47
 */
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant';
import router from './router'
import store from './store'
import { axiosPlugin } from './plugins/axios';
const app = createApp(App)

app.use(Button);
app.use(router); 
app.use(store);
app.use(axiosPlugin)
app.mount('#app')
