<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <!-- <router-view></router-view> -->
    <pre>151</pre>解决路由问题 和 pre标签的用法
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
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader,{ UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput,{ RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import router from './router'
const currentUser: UserProps = {
  isLogin: true,
  name: 'viki',
  id: 1
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏1',
    avatar: 'https://img2.baidu.com/it/u=2860557073,3347083343&fm=26&fmt=auto&gp=0.jpg',
    description: '描述'
  },
  {
    id: 2,
    title: '专栏2',
    avatar: 'https://img2.baidu.com/it/u=2860557073,3347083343&fm=26&fmt=auto&gp=0.jpg',
    description: '描述aaaaaa'
  },
  {
    id: 1,
    title: '专栏1',
    description: '描述'
  },
  {
    id: 2,
    title: '专栏2',
    avatar: 'https://img2.baidu.com/it/u=2860557073,3347083343&fm=26&fmt=auto&gp=0.jpg',
    description: '描述aaaaaa'
  },
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  
  setup() {
    return {
      list: testData,
      currentUser,
    }
  }
  
})
</script>

<style>

</style>
