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
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 在路由对象上注册导航守卫：就是一个函数，这个函数在每次跳转时就会被调用
// 参数 to：路由对象，将要跳转到的路由
// 参数 from：路由对象，当前正在的路由
// 参数 next：函数：
//      next()  : 允许跳转到下一个页dm
//      next(false)  ：不允许跳转
//      next(新的地址)  : 跳转到这个新的地址（重定向）
router.beforeEach((to, from, next) => {
  // 如果路由上有 meta 就是说明必须要登录才能访问
  if (to.meta !== undefined && to.meta.login !== undefined && to.meta.login) {
    let token = localStorage.getItem('token')
    if (token === null) {
      next('/login')
    } else {
      next() // 放行
    }
  } else {
    next() // 放行
  }
})

export default router
