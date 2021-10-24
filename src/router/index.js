import { createRouter, createWebHistory } from '@ionic/vue-router';
import Animes from '../pages/Animes.vue';
const routes = [
  {
    path: '/',
    redirect: '/animes'
  },
  {
    path: '/animes',
    component: Animes,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
