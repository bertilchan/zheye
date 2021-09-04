import axios from 'axios'
import { createStore, Commit } from 'vuex'
import { testData,testPosts,ColumnProps,PostProps,UserProps } from './testData'
export interface GlobalDataProps {
    loading: boolean,
    columns: ColumnProps[],
    posts: PostProps[],
    user: UserProps
}
const getAndCommit = async (url: string, mutationsName: string, commit: Commit)=>{
    const { data } = await axios.get(url)
    commit(mutationsName, data)
}
const store = createStore<GlobalDataProps>({
    // 全局状态
    state: {
        loading: false,
        columns: [],
        posts: [],
        user: { isLogin: false, }
    },
    //同步方法，用来修改state
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'viking' }
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        },
        fetchColumn(state,rawData) {
            state.columns = [rawData.data]
        },
        fetchPosts(state,rawData) {
            state.posts = rawData.data.list
        },
        setLoading(state,status) {
            state.loading = status
        }
    },
    //异步请求，然后调用mutations里的方法来修改state
    actions: {
        // async fetchColumns(context) {
        //     // axios.get('/columns').then((resp)=>{
        //     //     context.commit('fetchColumns',resp.data)
        //     // })
        //     // 使用async和await优化后
        //     const { data } = await axios.get('/columns')
        //     context.commit('fetchColumns',data)
        // },
        fetchColumns({ commit }) {
            getAndCommit('/columns', 'fetchColumns', commit)
        },
        // 由于只需要用context对象中的commit方法，可以解构出来
        fetchColumn({ commit }, cid) {
            getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
        },
        fetchPosts({ commit }, cid) {
            getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
        }
    },
    // store中的计算属性
    getters: {
        getColumnById: (state)=>(id: string)=>{
            return state.columns.find(c => c._id === id )
        },
        getPostsByCid: (state)=>(cid: string)=>{
            return state.posts.filter(post => post.column === cid)
        }
    }
})
export default store