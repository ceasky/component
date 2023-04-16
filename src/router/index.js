import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PageBar',
    name: 'PageBar',
    component: () => import('../views/PageBar.vue')
  },
  {
    path: '/TableList',
    name: 'TableList',
    component: () => import('../views/TableList.vue')
  },
  {
    path: '/FormType',
    name: 'FormType',
    component: () => import('../views/FormType.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
