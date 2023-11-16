import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/OnlineStore/Store.vue'
import ProductsView from '../views/OnlineStore/ProductsView.vue'
import PaymentRules from '../views/PaymentRules.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/:categoryId',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/payment-rules',
    name: 'payment-rules',
    component: PaymentRules
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
