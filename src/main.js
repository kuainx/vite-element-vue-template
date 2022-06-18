import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import { createPinia } from 'pinia'

import axios from 'axios'

import './main.css'

axios.defaults.baseURL = '/api/'
axios.defaults.timeout = 10000

createApp(App)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
