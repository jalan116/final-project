import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Locator from './views/Locator.vue'
import Items from './views/Items.vue'
import Seller from './components/Seller.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import User from './views/User.vue'

import { isAuthenticated } from './helpers/useFirebase'

const routes = [
    { path: '/', component: Home },
    { path: '/user',
        component: User,
        beforeEnter: (to, from) => {
            if (isAuthenticated.value) return true
            return '/login'
        }
    }, 
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