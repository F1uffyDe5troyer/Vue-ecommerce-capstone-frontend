import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "../views/home/Products.vue"


Vue.use(VueRouter)

const routes = [
  { path: "/products",
  component: Products,
  name: 'Products'
},
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '/', component: () => import('../views/home/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/signup',
    component: () => import('../views/account/Signup.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/home/Contact.vue')
  },     
  {
    path: '/about',
    component: () => import('../views/home/About.vue')
  },     
  {
    path: '/userDetails',
    component: () => import('../views/home/UserDetails.vue')
  },
  {
    path: '/landing',
    component: () => import('../views/home/Landing.vue')
  },
  {
    path: '/Admin',
    component: () => import('../views/home/Admin.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
