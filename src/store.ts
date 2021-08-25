import { createStore } from 'vuex'
import { testData,testPosts,ColumnProps,PostProps,UserProps } from './testData'
export interface GlobalDataProps {
    columns: ColumnProps[],
    posts: PostProps[],
    user: UserProps
}
const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLogin: false, }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'viking' }
        }
    },
    getters: {
        // 这个暂时不用
        biggerColumnsLen(state) {
            return state.columns.filter(c => c.id > 2).length
        },
        getColumnsById: (state)=>{(id: number)=>{
            return state.columns.find(c => c.id === id )
        }},
        getPostsByCid: (state)=>{(cid: number)=>{
            return state.posts.filter(post => post.columnId === cid)
        }}
    }
})
export default store