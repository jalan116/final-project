<template> 
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div class="flex-1 px-2 mx-2 lg:flex-none">
          <img src="../assets/garage-sale.png" width="50">
          <span class="text-lg font-bold px-1">
                  Garage Sales Online
                </span>
        </div> 
        <div class="justify-center flex-1 flex px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
                    Home
                  </router-link> 
            <router-link to="/locator" class="btn btn-ghost btn-sm rounded-btn">
                    Locator
                  </router-link> 
            <router-link to="/items" class="btn btn-ghost btn-sm rounded-btn">
                    Items
                  </router-link> 
            <router-link to="/seller" class="btn btn-ghost btn-sm rounded-btn">
                    Seller
                  </router-link>
            <div v-if="!isAuthenticated">
              <router-link to="/login" class="btn btn-ghost btn-sm rounded-btn">
                Login
              </router-link>
            </div>
            <div v-else>
              <router-link to="/user" class="btn btn-ghost btn-sm rounded-btn">
                Welcome
              </router-link>
              <button to="/login" class="btn btn-ghost btn-sm rounded-btn" @click="logout">
                Logout
              </button>
            </div>
            <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn">
                    About Us
                  </router-link>
          </div>
        </div> 
      </div>
</template>

<script setup>        
import { useRouter } from 'vue-router'
import {isAuthenticated, signOut} from '../helpers/useFirebase'

const router = useRouter()

const logout = async () => {
    await signOut()
    router.push('/')
}

</script>