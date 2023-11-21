import { createRouter, createWebHistory } from "vue-router";
import PageHome from "../pages/PageHome.vue";
import PageBlog from "../pages/PageBlog.vue";
import PageArticles from "../pages/PageArticles.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/blog",
    name: "blog",
    component: PageBlog,
  },
  {
    path: "/articles",
    name: "articles",
    component: PageArticles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
