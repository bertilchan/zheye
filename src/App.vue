<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <loader v-if="isLoading"></loader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2021 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader.vue'
import Loader from '@/components/Loader.vue'
import createMessage from './components/createMessage'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader,
  },
  setup() {
    const store = useStore()
    const currentUser = computed(()=>store.state.user)
    const isLoading = computed(()=>store.state.loading)
    const token = computed(()=>store.state.token)
    const error = computed(()=>store.state.error)
    // 这块的作用？？？
    onMounted(() => {
      if(!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        store.dispatch('fetchCurrentUser')
      }
    }),
    // 两个回调？？？
    watch(()=> error.value.status, ()=>{
      const { status, message } = error.value
      if(status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>
/* 取消按钮点击之后会有蓝色边框 */
.btn:focus,.btn:active:focus,
.btn.active:focus,.btn.focus,
.btn:active.focus,.btn.active.focus {  
 outline: none;   
 border-color: transparent;   
 box-shadow:none;
}
</style>
