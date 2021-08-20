<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input 
          type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div id="emailHelp" class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader,{ UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput,{ RulesProp } from '@/components/ValidateInput.vue'
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
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'},
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = ()=>{
      if(emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '不能为空'
      }else if(!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '请输入正确的邮箱地址'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
