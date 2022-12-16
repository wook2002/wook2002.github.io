import { createApp } from 'vue'
import App from './App.vue'
import "jquery";
import "popper.js";
import v3b4 from 'vue3-bootstrap4';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routers from './routers/router.js'
import { quillEditor } from "vue3-quill";
import store from './vuex/store.js';
import axios from 'axios' ;
// import router from '@/routers/router.js'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const app = createApp(App);

app.use(v3b4)
app.use(routers)
app.use(quillEditor)
app.use(store)
// app.use(router);
app.config.globalProperties.$axios = axios; 
// app.config.globalProperties.$router = router; 



app.mount('#app')