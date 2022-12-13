import { createApp } from 'vue'
import App from './App.vue'
import "jquery";
import "popper.js";
import v3b4 from 'vue3-bootstrap4';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routers from './routers/router.js'
import { quillEditor } from "vue3-quill";

const app = createApp(App);

app.use(v3b4).use(routers).use(quillEditor);

app.mount('#app')