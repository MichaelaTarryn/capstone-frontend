import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
  },
   {
      path: '/login',
      name: 'login',
      component: () => import( '../views/login.vue')
  },
    {
      path: '/register',
      name: 'register',
      component: () => import( '../views/register.vue')
    },
    ,
    {
      path: '/landing',
      name: 'landing',
      component: () => import( '../views/landingpage.vue')
    },
    ,
    {
      path: '/search',
      name: 'search',
      component: () => import( '../views/searchuser.vue')
    },
    ,
    {
      path: '/addapost',
      name: 'addapost',
      component: () => import( '../views/addtopost.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import( '../views/profile.vue'),
      props: true,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
