import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Checkin from '../views/public_views/Home'
import Visitors from '../views/visitors/Visitors'
import Sites from '../views/configuration_views/Sites'
import Department from '../views/configuration_views/Departments'
import Purpose from '../views/configuration_views/Purposes'

const routes = [
  {
    meta: {
      title: 'Sites'
    },
    path: '/sites',
    name: 'sites',
    component: Sites
  },
  {
    meta: {
      title: 'Department'
    },
    path: '/departments',
    name: 'departments',
    component: Department
  },
  {
    meta: {
      title: 'Purpose'
    },
    path: '/purposes',
    name: 'purposes',
    component: Purpose
  },
  {
    meta: {
      title: 'Check-In'
    },
    path: '/checkin',
    name: 'checkin',
    component: Checkin
  },
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Visitors'
    },
    path: '/visitors',
    name: 'visitors',
    component: Visitors
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

export default router
