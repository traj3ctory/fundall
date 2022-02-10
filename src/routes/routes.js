import Vue from "vue";
import VueRouter from "vue-router";
// import { store } from "../store";
import { routes as GUEST } from "@/modules/guest/routes/guest.routes";

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

// router.beforeEach((to, from, next) => {
//   console.log(to.matched.some((record) => record.meta.requiresAuth));
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next("/profile:slug");
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default router;
