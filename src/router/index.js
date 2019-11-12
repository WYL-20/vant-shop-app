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
  },
  {
    path: '/category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/goods_detail',
    component: () => import('../views/GoodsDetail.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
