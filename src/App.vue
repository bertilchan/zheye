<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader,{ UserProps } from '@/components/GlobalHeader.vue'
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
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
