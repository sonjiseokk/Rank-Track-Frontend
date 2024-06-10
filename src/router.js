import { createWebHistory, createRouter } from "vue-router";
import MemberDetail from "@/components/detail/MemberDetail.vue";
import MainView from "@/views/MainView.vue";
const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/detail/:handle",
    name:"detail",
    component: MemberDetail,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
