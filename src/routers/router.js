import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import BoardEditor from '../components/quillEditor/boardEditor.vue'
import FreeBoardList from '../components/board/freeBoard/FreeBoardList.vue'
import FreeBoardDetail from '../components/board/freeBoard/FreeBoardDetail.vue'
import FreeBoardDelete from '../components/board/freeBoard/FreeBoardDelete.vue'
import FreeBoardInsert from '../components/board/freeBoard/FreeBoardInsert.vue'
import FreeBoardUpdate from '../components/board/freeBoard/FreeBoardUpdate.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  // 404페이지
  // {
  //   path: "/:anything(.*)",
  //   component: pageA404,
  // },
  // 게시판
  {
    path: "/boardEditor",
    component: BoardEditor,
  },
  {
    path: "/freeBoard/list",
    component: FreeBoardList,
  },
  {
    path: "/freeBoard/detail/:id(\\d+)",
    component: FreeBoardDetail,
  },  
  {
    path: "/freeBoard/delete/:id(\\d+)",
    component: FreeBoardDelete,
  },  
  {
    path: "/freeBoard/insert",
    component: FreeBoardInsert,
  },
  {
    path: "/freeBoard/update/:id(\\d+)",
    component: FreeBoardUpdate,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;