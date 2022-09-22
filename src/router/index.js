import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: '/login',  // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/index",
    name: "Index",
    component: () =>
      import("../views/Index.vue"),
      children:[
        {
          path: "/member",
          name: "Member",
          component: () =>
            import("../views/Member.vue"),
        },
        {
          path: "/staff",
          name: "Staff",
          component: () =>
            import("../views/Staff.vue"),
        },
        {
          path: "/supplier",
          name: "Supplier",
          component: () =>
            import("../views/Supplier.vue"),
        },
        {
          path: "/commodity",
          name: "Commodity",
          component: () =>
            import("../views/Commodity.vue"),
        },
        {
          path: "/inde",
          name: "Inde",
          component: () =>
            import("../views/Inde.vue"),
        },
      ]
  },
 
  
];

const router = new VueRouter({
  routes,
});
// 访问的白名单, 可以直接通行
router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  if (sessionStorage.getItem('token')) {
    next()
  } else {
    if (to.path=="/login") {
      next()
    } else {
      next('/login')
    }
  }
})
export default router;
