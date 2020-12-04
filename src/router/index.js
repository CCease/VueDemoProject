import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Application from '../views/Application.vue'
import LifeCountPage from '../views/LifeCountPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChFnkName: "about" */ '../views/About.vue')
  },
  {
    path: '/app',
    name: 'Application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Application
  },
  {
    path: '/lifecount',
    name: 'LifeCountPage',
    component: LifeCountPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
