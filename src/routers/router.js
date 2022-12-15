import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import FreeBoardList from '../components/board/FreeBoardList.vue'
import BoardEditor from '../components/quillEditor/boardEditor.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  // 게시판
  {
    path: "/freeBoardList",
    component: FreeBoardList,
  },
  {
    path: "/boardEditor",
    component: BoardEditor,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;