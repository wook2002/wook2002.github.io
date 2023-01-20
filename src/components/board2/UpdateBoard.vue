<template>
  <div>
    <div class=" w-100">
      <input type="text" placeholder="제목" 
          class="titleInput  border border-1 border-secondary  w-100"  
          :value=this.postData.title 
          @input="updateTitleInput">
    </div>
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

  </div>
  <div>
     <!-- 수정 -->
     <div>
      <button>취소</button>
      <button @click="updateSetBtn">등록</button>
    </div>
    <!-- 삭제 -->
    
    </div>
  <br>
  ㅋ{{ this.$route.query.bno }}ㅋ
    <br>
<!-- 테스트
  {{$route.params.id}} -->
  {{connectData}}
</template>

<script>
import { reactive } from "vue";
import $ from 'jquery';

export default {
    name:"boardUpdateA",
    mounted: function () {
        this.$axios.get("/post/detail/"+ this.categoryNo,
          {params: {bno: this.$route.query.bno}}, 
        )
          .then(response => {
            console.log("야야 : " + response.data)
            this.connectData = response.data[0]
            this.state.content = this.connectData.content
            this.postData.title = this.connectData.title
          })
    },
  
    data() {
      return {
          categoryNo:this.$route.params.id,
          connectData:{},
          postData: {
              title:'test2',
              content: '',
              writer:   '글쓴이',
              categoryNo:'',
          },
          
      }
    },
    methods: {
      updateSetBtn(){
          // var connectTitle = $('.titleInput').val()
          this.postData.content = this.state._content
          this.postData.categoryNo = this.categoryNo

          this.$axios.post('/post/updateSet', this.postData,
            {params: {bno: this.$route.query.bno}},
          )
          this.$router.push('/post/readListPage/'+ this.categoryNo);
      },
      updateTitleInput(){
          this.postData.title = $('.titleInput').val()
      }
    },
    
    setup() {
    const state = reactive({
      content: "test3",
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