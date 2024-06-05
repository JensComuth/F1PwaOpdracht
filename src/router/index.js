import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import DriverDetails from '../components/DriverDetails.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/news'
  },
  {
    path: '/tabs/driverDetails/:id',
    name: 'DriverDetails',
    component: DriverDetails,
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/news'
      },
      {
        path: 'driver',
        component: () => import('@/views/DriverPage.vue')
      },
      {
        path: 'calendar',
        component: () => import('@/views/CalendarPage.vue')
      },
      {
        path: 'standings',
        component: () => import('@/views/StandingsPage.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/NewsPage.vue')
      },
      {
        path: 'teams',
        component: () => import('@/views/TeamsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router