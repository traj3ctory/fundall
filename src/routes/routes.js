const router = [
    // make root route redirect to Dashboard,
    {
      path: "/",
      redirect: "/fundall",
    },
    {
      path: "/fundall",
      alias: "/",
      component: () => import("../views/Home.vue"),
      name: "Home",
    },
    {
      path: "/login",
      component: () => import("../views/login.vue"),
      name: "Login",
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
      name: "Register",
    },
    {
      path: "/profile:slug",
      component: () => import("../views/Profile.vue"),
      name: "Profile",
    },
  ];
  
  export default router;