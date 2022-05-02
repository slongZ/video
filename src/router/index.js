import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Userinfo from '../views/Userinfo.vue'
import Edit from '../views/Edit.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: Userinfo,
    meta:{
      istoken: true
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    // 用于判断是否登陆
    meta:{
      istoken: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 保存状态添加该属性
    meta:{
      keepalive: true
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 只有定义过istoken会判断ID跳转
// router.beforeEach((to,from,next) => {
//   if(localStorage.getItem('token') && localStorage.getItem('id') && to.meta.istoken == true){
//     router.push('/login')
//     Vue.prototype.$msg.fail('请重新登陆')
//     return;
//   }
//   next();
// })

export default router
