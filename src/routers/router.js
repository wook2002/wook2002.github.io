import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import pageA404 from '../components/page404.vue'
import BoardEditor from '../components/quillEditor/boardEditor.vue'
import FreeBoardList from '../components/board/freeBoard/FreeBoardList.vue'
import FreeBoardDetail from '../components/board/freeBoard/FreeBoardDetail.vue'
import FreeBoardDelete from '../components/board/freeBoard/FreeBoardDelete.vue'
import FreeBoardInsert from '../components/board/freeBoard/FreeBoardInsert.vue'
import FreeBoardUpdate from '../components/board/freeBoard/FreeBoardUpdate.vue'
import Pagination from '../components/board/Paging.vue'


const routes = [
  {
    path: "/",
    component: Home,
  },
  // 404페이지
  {
    path: "/:anything(.*)",
    component: pageA404,
  },
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
    path: "/freeBoard/updateGet/:id(\\d+)",
    component: FreeBoardUpdate,
  },
  {
    path: "/testPage/",
    component: Pagination,
  },
  Pagination
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;