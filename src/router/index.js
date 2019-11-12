import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/order_confirm',
    component: () => import('../views/OrderConfirm.vue')
  },
  {
    path: '/addresses',
    component: () => import('../views/Addresses.vue')
  },
  {
    path: '/address_add',
    component: () => import('../views/AddressAdd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
