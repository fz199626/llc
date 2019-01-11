import Vue from 'vue'
import Router from 'vue-router'
import Order from './components/order/Order.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'order',
      component: Order,
    },
    {
      path: '/bill',
      name: 'bill',
      component: () => import(/* webpackChunkName: "bill" */ './components/bill/Bill.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ './components/mine/Mine.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import(/* webpackChunkName: "card" */ './components/mine/Card.vue')
    },
    {
      path: '/cardRule',
      name: 'cardRule',
      component: () => import(/* webpackChunkName: "cardRule" */ './components/mine/CardRule.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import(/* webpackChunkName: "address" */ './components/mine/Address.vue')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import(/* webpackChunkName: "addAddress" */ './components/mine/AddAddress.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import(/* webpackChunkName: "feedback" */ './components/mine/Feedback.vue')
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: () => import(/* webpackChunkName: "settlement" */ './components/order/Settlement.vue'),
    },
    {
      path: '/remarks',
      name: 'remarks',
      component: () => import(/* webpackChunkName: "remarks" */ './components/order/Remarks.vue'),
    },
  ]
})
router.beforeEach((to, from, next) => {
  const whiteList = ['/'] // 路由白名单
  // const login = sessionStorage.getItem('login')
  const login = true
  if (login) {
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      console.log("请登录！")
    }
  }
});
export default router;
