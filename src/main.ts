import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant';
import router from './router'
import store from './store'
import { axiosPlugin } from './plugins/axios';
import 'amfe-flexible'//适配插件
const app = createApp(App)

app.use(Button);
app.use(router); 
app.use(store);
app.use(axiosPlugin)
app.mount('#app')
