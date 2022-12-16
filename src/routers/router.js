import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import FreeBoardList from '../components/board/FreeBoardList.vue'
import BoardEditor from '../components/quillEditor/boardEditor.vue'
import FreeBoardDetail from '../components/board/FreeBoardDetail.vue'

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;