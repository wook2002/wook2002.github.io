<template>
  <div>
    <div class=" w-100">
      <input type="text" placeholder="제목" 
      class="titleInput border border-1 border-secondary  w-100 " value="">
    </div>
    <quill-editor style="height: 250px"
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    /> 
    <div>
      <button>취소</button>
      <button type="submit" @click="insertContent">작성</button>
      
    </div>
  </div>
</template> 
  
  <script>
  import { reactive } from "vue";
  import $ from 'jquery';

  
  export default {
    name: "QuillEditorA",
    // 추가2
    data() {
      return {
        postData: {
          title: '',
          content:  '',
          writer:   '1'
        },
        categoryNo:this.$route.params.id,
      }
    },
 
    methods: {

      insertContent(){
        var titleInput = $('.titleInput').val()

        this.postData.title = titleInput
        this.postData.content = this.state._content
        this.$axios.post('/post/createBoard/'+ this.categoryNo, this.postData)
        .then((response)=>
          console.log(response)
        )
        this.$router.push('/post/readListPage/' + this.categoryNo)
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
   
    
  };
  </script>

<style>
.titleInput{
  background-color: rgb(242, 243, 246);
  border-color: rgb(118, 118, 118);
}

</style>