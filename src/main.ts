import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 0
    }
})
console.log('store',store.state.count);


const app = createApp(App)
app.use(router)
app.mount('#app')