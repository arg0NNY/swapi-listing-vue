import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/peoples',
      name: 'people-list',
      component: () => import('@/views/people/PeopleList.vue')
    },
    {
      path: '/peoples/:id',
      name: 'people-single',
      component: () => import('@/views/people/PeopleSingle.vue')
    },
    {
      path: '/favorites',
      name: 'people-favorites',
      component: () => import('@/views/people/PeopleFavorites.vue')
    }
  ]
})

export default router
