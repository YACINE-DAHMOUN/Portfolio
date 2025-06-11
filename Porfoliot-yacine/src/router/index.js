import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // eslint-disable-next-line no-dupe-keys
      path: 'public/success',

      // eslint-disable-next-line no-dupe-keys
      name: 'Success',
    // Pour servir le fichier HTML statique depuis public/
      beforeEnter() {
      window.location.href = '/success.html'
      }
    },
  ],
})

export default router
