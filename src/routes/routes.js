import Vue from "vue";
import VueRouter from "vue-router";
import { routes as GUEST } from "@/modules/guest/routes/guest.routes";
import { store } from "../store";
import Toast from "@/utils/Toast";

Vue.use(VueRouter);

const routes = [
  ...GUEST,
  {
    path: "/profile/:slug",
    component: () => import("@/modules/user/Profile.vue"),
    name: "Profile",
    meta: {
      requiresAuth: true,
    },
  },
  {
    // will match everything
    path: "*",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/components/404.vue"),
    name: "NotFound",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const requireAuth = to.matched.some((record) => record.meta.requiresAuth);
  const guest = to.matched.some((record) => record.meta.guest);

  if (!isAuthenticated && requireAuth) {
    if (guest) {
      next();
    } else {
      Toast("Access Denied!", "Please Login", "");
      next({
        path: "/login",
      });
    }
  } else {
    // Happens only when you are logged in and route is authenticated
    next(); // make sure to always call next()!
  }
});

export default router;
