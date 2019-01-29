import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './components/order/Order.vue')
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
      path: '/closeShop',
      name: 'closeShop',
      component: () => import(/* webpackChunkName: "closeShop" */ './components/mine/CloseShop.vue'),
    }
  ]
})
