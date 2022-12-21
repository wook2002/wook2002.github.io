<template>
    <h1>update</h1>
    
    <div>
        <input type="text" placeholder="제목2" 
            class="titleInput"  
            :value=this.postData.title 
            @input="updateInput">
        <!-- @input="titleInputChange($event)" -->
        <quill-editor style="height: 250px"
      v-model:value=state.content
      :options="state.editorOption"
      :disabled="state.disabled"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
        /> 
  {{ postData.title }}

    </div>
    <div>
       <!-- 수정 -->
       <div>
        <button>취소</button>
        <button @click="updateSetBtn">등록</button>
      </div>
      <!-- 삭제 -->
      
      </div>
     
    
  <!-- 테스트
    {{$route.params.id}} -->
    <!-- {{connectData}} -->
  </template>
  
  <script>
import { reactive } from "vue";
import $ from 'jquery';
  
  export default {
      name:"FreeBoardDetailA",
      mounted: function () {
          this.$axios.get("/freeBoard/updateGet/"+ this.connectDataNum)
            .then(response => {
              this.connectData = response.data[0]
              this.state.content = this.connectData.content
              this.postData.title = this.connectData.title
            })
      },
    
      data() {
        return {
            connectDataNum:this.$route.params.id,
            connectData:{},
            postData: {
                title:'2',
                content: '',
                writer:   '글쓴이',
                no:'',
            },
            
        }
      },
      methods: {
        updateSetBtn(){
            // var connectTitle = $('.titleInput').val()
            this.postData.content = this.state._content
            this.postData.no = this.connectDataNum

            this.$axios.post('/freeBoard/updateSet', this.postData)
            this.$router.push('/freeBoard/list')
        },
        updateInput(){
            this.postData.title = $('.titleInput').val()
        }
      },
      
      setup() {
      const state = reactive({
        content: "",
        _content: "",
        storeQuill:"",
        editorOption: {
          placeholder: "내용입력",
          modules: {
            // toolbars: [
            // custom toolbars options
            // will override the default configuration
            // ],
            // other moudle options here
            // otherMoudle: {}
          },
          // more options
        },
        disabled: false,
      });
  
      const onEditorBlur = (quill1) => {
        console.log("editor blur!", quill1);
        // alert("quill1"+quill1);
      };
      const onEditorFocus = (quill2) => {
        console.log("editor focus!", quill2);
        // alert("quill2"+quill2);
      };
      const onEditorReady = (quill3) => {
        console.log("editor ready!", quill3);
        // alert("quill3"+quill3);
      };
      const onEditorChange = ({ html }) => {
        console.log(html);
        
        state._content = html;

        
      };
      // this.$store.commit('setQuillContent', state._content)
      // setTimeout(() => {
      //   state.disabled = true;
      // }, 2000);
  
      return {
        state,
        onEditorBlur,
        onEditorFocus,
        onEditorReady,
        onEditorChange,
        
      };
    },
      
      
      
  }
  </script>
  
  <style>
  
  </style>