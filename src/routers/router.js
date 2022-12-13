import { createWebHistory, createRouter } from "vue-router";
import List from '../components/boardA/List.vue'

const routes = [
  {
    path: "/list",
    component: List,
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