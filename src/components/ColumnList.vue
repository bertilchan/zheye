<template>
    <div class="row">
        <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm" >
                <div class="card-body text-center">
                    <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border border-light my-3">
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-left">{{column.description}}</p>
                    <!-- 两种路由传参方式都可以 -->
                    <!-- <router-link :to="{name: 'column', params: {id: column.id}}" class="btn btn-outline-primary">进入专栏</router-link> -->
                    <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进入专栏</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent,PropType } from 'vue';
import { ColumnProps } from '../testData'

export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            // Array是一个构造函数，如果要把构造函数断言成类型，需要用到vue2中的PropType泛型来断言
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup(props) {
        const columnList = computed(()=>{
            return props.list.map(column =>{
                if(!column.avatar) {
                    column.avatar = {
                        url: require('@/assets/column.jpg')
                    }
                } else {
                    //图片缩放在url后缀加上xxxx （阿里云的图片处理方法中有）
                    // column.avatar.url = column.avatar.url + 
                }
                return column
            })
        })
        return {
            columnList
        }
    }
});
</script>

<style scoped>
.card-body img {
    width: 50px;
    height: 50px;
}
</style>