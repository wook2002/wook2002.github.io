import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      quillContent:"quillContent",
      freeBoard:[],
      postDataTite:"",
      navBarNum:0,
      // userModal
      // modalStatus:false,
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
    getNavBarNum(state){
      state.navBarNum
    },
    setNavBarNum(state,payload){
      state.navBarNum = payload
    },

  },
  actions:{

  },
})

export default store;