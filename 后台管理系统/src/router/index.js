import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRouter from './login'
import SiboruiRouter from './siborui'


const routes = [
  ...SiboruiRouter,
  LoginRouter
];


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const Authorization = localStorage.getItem('token');
  // 设置标题
  if (to.name !== 'login') {
    if (!Authorization) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
