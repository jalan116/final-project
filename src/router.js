import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Locator from './views/Locator.vue'
import Items from './views/Items.vue'
import Seller from './views/Seller.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/locator', component: Locator},
    { path: '/items', component: Items},
    { path: '/seller', component: Seller},
    { path: '/login', component: Login },
    { path: '/about', component: About },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})