import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import pageA404 from '../components/page404.vue'
import BoardEditor from '../components/quillEditor/boardEditor.vue'

import CreateBoard from '../components/board2/CreateBoard.vue'
import ReadList from '../components/board2/ReadList.vue'
import ReadDetail from '../components/board2/ReadDetail.vue'
import UpdateBoard from '../components/board2/UpdateBoard.vue'
import DeleteBoard from '../components/board2/DeleteBoard.vue'

import FreeBoardList from '../components/board/freeBoard/FreeBoardList.vue'
import FreeBoardDetail from '../components/board/freeBoard/FreeBoardDetail.vue'
import FreeBoardDelete from '../components/board/freeBoard/FreeBoardDelete.vue'
import FreeBoardInsert from '../components/board/freeBoard/FreeBoardInsert.vue'
import FreeBoardUpdate from '../components/board/freeBoard/FreeBoardUpdate.vue'
import Pagination from '../components/board/Paging.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/:anything(.*)", component: pageA404 },
  // 게시판
  {
    path: "/post/readListPage/:id(\\d+)",
    component: ReadList,
    name: "ReadListPage",
  },
  {
    path: "/post/detail/:id(\\d+)",
    component: ReadDetail,
    name: "ReadDetail",
    query: "no",
  },

  {
    path: "/createBoard",
    component: CreateBoard,
    name: "CreateBoard",
  },
  
  {
    path: "/updateBoard",
    component: UpdateBoard,
    name: "UpdateBoard",
  },
  {
    path: "/deleteBoard",
    component: DeleteBoard,
    name: "DeleteBoard",
  },







  // 게시판테스트
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
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;