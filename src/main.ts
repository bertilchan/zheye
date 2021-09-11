import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://apis.imooc.com/api'
axios.interceptors.request.use((config) =>{
    store.commit('setLoading', true)
    store.commit('setError', { status: false, message: '' })
    config.params = { ...config.params, icode: '8B583DFE08F38B06' }
    let token = window.localStorage.getItem('token')
    if(token) {
        config.headers.token = token; 
    }
    return config
})
axios.interceptors.response.use((config)=>{
    setTimeout(() => {
        store.commit('setLoading', false)
      }, 500)
    return config
},(e)=>{
    console.log(e.response);
    const { error } = e.response.data
    store.commit('setError', { status: true, message: error })
    store.commit('setLoading', false)
    return Promise.reject(error)
})
// const payload = {
//   email: '111@test.com',
//   password: '111111',
//   icode: '8B583DFE08F38B06'
// }
// axios.get('user/current',).then((res)=>{
//   console.log(res.data);
  
// })

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')