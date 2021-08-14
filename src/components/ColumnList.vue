<template>
    <ul>
        <li v-for="column in list" :key="column.id">
            <img :src="column.avatar" :alt="column.title">
            <h5>{{column.title}}</h5>
            <p>{{column.description}}</p>
            <a href="#">进入专栏</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    description: string
}
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
        
    }
});
</script>

<style scoped>

</style>