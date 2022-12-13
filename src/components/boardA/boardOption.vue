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
    <button @click="sendQuill">send</button>
    <div>야
      {{value}}
      {{options}}
      호
    </div>
    
  </template>
  
  <script>
  import { reactive } from "vue";
  
  export default {
    name: "App",
    data() {
      return {
        value:[],
        options:{},
      }
    },
    setup() {
      const state = reactive({
        content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>",
        _content: "",
        editorOption: {
          placeholder: "core",
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
        console.log("editor change!", quill4, html, text);
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
  };
  </script>