import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://apis.imooc.com/api'
axios.interceptors.request.use((config) =>{
    store.commit('setLoading', true)
    config.params = { ...config.params, icode: '8B583DFE08F38B06' }
    return config
})
axios.interceptors.response.use((config)=>{
    setTimeout(() => {
        store.commit('setLoading', false)
      }, 500)
    return config
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')