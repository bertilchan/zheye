<template>
    <form action="">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit" >
                <button type="submit" class="btn btn-primary" >提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import mitt from 'mitt'
type ValidateFunc = ()=> boolean
export const emitter = mitt()
export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    
    setup(props,context) {
        let funcArr: ValidateFunc[] = []
        // 这里是提交表单后循环遍历验证每个input（整体验证）
        const submitForm = ()=>{
            //因为every遇到第一个false就会终止循环，所以得先用map遍历好
            const result = funcArr.map(func => func()).every(result => result)
            context.emit('form-submit',result)
        }

        const callback = (func: any) =>{
            funcArr.push(func)
        }
        emitter.on('form-item-created',callback)
        onUnmounted(()=>{
            emitter.off('form-item-created',callback)
            funcArr = []
        })
        return {
            submitForm
        }
    }
});
</script>

<style scoped>

</style>