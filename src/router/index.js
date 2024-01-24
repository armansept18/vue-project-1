import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Menu from "@/views/Menu.vue";
import MenuDetail from "@/views/MenuDetail.vue";
import Carts from "@/views/Carts.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/carts",
    name: "Carts",
    component: Carts,
  },
  {
    path: "/menu-details/:id",
    name: "MenuDetails",
    component: MenuDetail,
  },
  {
    path: "/about",
    name: "About",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
