import { createApp } from 'vue'
import App from './App.vue'
import "jquery";
import "popper.js";
import v3b4 from 'vue3-bootstrap4';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routers/router.js'
import { quillEditor } from "vue3-quill";
import store from './vuex/store.js';
import axios from 'axios' ;
/* fontawesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPhone, faUser, faFlag, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const app = createApp(App);
app.use(v3b4)
    .use(router)
    .use(quillEditor)
    .use(store)
    
    /* fontawesome */
    // library.add(faPhone, faUser, faFlag, faBars)
    library.add(faBars, faUser)
    app.component('font-awesome-icon', FontAwesomeIcon)
    
    // axios 전역변수
    app.config.globalProperties.$axios = axios; 
    
app.mount('#app')

