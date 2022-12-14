import { createApp } from 'vue'
import App from './App.vue'
import "jquery";
import "popper.js";
import v3b4 from 'vue3-bootstrap4';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routers from './routers/router.js'
import { quillEditor } from "vue3-quill";
import store from './vuex/store.js'


const app = createApp(App);

app.use(v3b4)
app.use(routers)
app.use(quillEditor)
app.use(store);

app.mount('#app')