import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import pageA404 from '../components/page404.vue'
import BoardEditor from '../components/test/quillEditor/boardEditor.vue'

import CreateBoard from '../components/board2/CreateBoard.vue'
import ReadList from '../components/board2/ReadList.vue'
import ReadDetail from '../components/board2/ReadDetail.vue'
import UpdateBoard from '../components/board2/UpdateBoard.vue'
import DeleteBoard from '../components/board2/DeleteBoard.vue'

import FreeBoardList from '../components/test/board/freeBoard/FreeBoardList.vue'
import FreeBoardDetail from '../components/test/board/freeBoard/FreeBoardDetail.vue'
import FreeBoardDelete from '../components/test/board/freeBoard/FreeBoardDelete.vue'
import FreeBoardInsert from '../components/test/board/freeBoard/FreeBoardInsert.vue'
import FreeBoardUpdate from '../components/test/board/freeBoard/FreeBoardUpdate.vue'
import Pagination from '../components/test/board/Paging.vue'

const routes = [
  { path: "/", component: Home, name:"home" },
  { path: "/:anything(.*)", component: pageA404 },
  /* 게시판 */
  {
    path: "/post/detail/:id(\\d+)",
    component: ReadDetail,
    name: "readDetail",
  },
  {
    path: "/post/readListPage/:id(\\d+)",
    component: ReadList,
    name: "readListPage",
  },
  {
    path: "/post/createBoard/:id(\\d+)",
    component: CreateBoard,
    name: "createBoard",
  },  
  {
    path: "/post/deleteBoard/:id(\\d+)",
    component: DeleteBoard,
    name: "deleteBoard",
  },
  {
    path: "/post/updateBoard/:id(\\d+)",
    component: UpdateBoard,
    name: "updateBoard",
  },
  // {
  //   path: "/updateBoard/:id(\\d+)",
  //   component: UpdateBoard,
  //   name: "UpdateBoard",
  // },
  /* 로그인 */
  // {
  //   path: "/member/login",
  //   name: "login",
  // },
  







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