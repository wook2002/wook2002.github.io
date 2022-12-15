import { createWebHistory, createRouter } from "vue-router";
import List from '../components/boardA/List.vue'
import Home from '../components/Home.vue'
import FreeBoardList from '../components/board/FreeBoardList.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/freeBoardList",
    component: FreeBoardList,
  },
 
  

// 	{
//     path: "/list2",
//     component: List2,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;