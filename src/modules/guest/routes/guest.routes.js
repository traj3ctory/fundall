export const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    meta: {
      guest: true,
    },
    children: [
      {
        path: "/fundall",
        alias: "/",
        component: () => import("../views/Home.vue"),
        name: "Home",
      },
      {
        path: "/login",
        component: () => import("../views/Login.vue"),
        name: "Login",
      },
      {
        path: "/register",
        component: () => import("../views/Register.vue"),
        name: "Register",
      },
    ],
  },
];
