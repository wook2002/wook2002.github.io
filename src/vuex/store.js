import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      quillContent:"quillContent",
      freeBoard:[],
      postDataTite:"",
    }
  },
  mutations:{
    getQuillContent(state){
      state.quillContent
    },
    setQuillContent(state,payload){
      state.quillContent = payload
    },
    getFreeBoard(state){
      state.freeBoard
    },
    setFreeBoard(state,payload){
      state.freeBoard = payload
    },

  },
  actions:{

  },
})

export default store;