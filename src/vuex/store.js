import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      quillContent:"",
    }
  },
  mutations:{
    getQuillContent(state){
      state.quillContent
    },
    setQuillContent(state,payload){
      state.quillContent = payload
    }

  },
  actions:{

  },
})

export default store;