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
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/me',
    component: () => import('../views/Me.vue'),
    meta: {
      mustLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 添加路由导航守卫
//  什么是导航守卫？答：就是一个函数，这个函数会在每次页面跳转之前自动被执行
// 三个参数：
// to：将要跳转到的路由
// from：当前页面的路由
// next ：函数，是否允许跳转过去
//      允许：next()
//      不允许：next(false)
//      重定向：next(重定向的新地址)
router.beforeEach((to, from, next) => {
  // 必须登录
  if (to.meta !== undefined && to.meta.mustLogin !== undefined && to.meta.mustLogin) {
    // 判断是否登录
    let token = localStorage.getItem('token')
    if (token === null) {
      next('/login')
    } else {
      // 允许
      next()
    }
  } else {
    next()
  }
})

export default router
