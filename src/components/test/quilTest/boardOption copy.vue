<template>
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />  
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  data() {
    return {
      
    }
  },
  setup() {
    const state = reactive({
      content: "",
      _content: "",
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
    const onEditorChange = ({ quill4, html, text }) => {
      console.log("editor change!1", quill4);
      console.log("editor change!2", html);
      console.log("editor change!3", text);
      state._content = html;
      // alert("quill4"+quill4);
    };
    
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
  methods: {
    
  },
  
};
</script>