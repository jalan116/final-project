<template>
  <div class="mx-auto max-w-2xl p-8 space-y-3 rounded-xl bg-coolGray-700 text-coolGray-800 justify-items-stretch m-10">
      <h1 class="text-2xl font-bold text-center text-white">Login</h1>
      <form @submit.prevent class="space-y-6 ng-untouched ng-pristine ng-valid">
          <div class="space-y-1 text-sm">
              <label for="username" class="block text-white">Email</label>
              <input type="text" name="username" id="username" placeholder="Email" class="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800" v-model="email">
          </div>
          <div class="space-y-1 text-sm">
              <label for="password" class="block text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" class="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800" v-model="password">
          </div>
          <button  @click="login" class="block w-full p-3 text-center rounded-sm font-bold text-coolGray-50 bg-blue-600 hover:bg-blue-700">Login</button>
      </form>
      <div class="flex items-center pt-4 space-x-1">
          <div class="flex-1 h-px sm:w-16 bg-coolGray-300"></div>
          <p class="px-3 text-sm text-white">Login with social accounts</p>
          <div class="flex-1 h-px sm:w-16 bg-coolGray-300"></div>
      </div>
      <div class="flex justify-center space-x-4">
        <button @click="google" class="block w-full p-3 text-center rounded-sm font-bold text-coolGray-50 bg-red-600 hover:bg-red-700">Google</button>
      </div>
  </div>
</template>

<script setup>        
import {ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { signIn, googlePopup } from '../helpers/useFirebase'

const router = useRouter()

const login = async () => {
  try{
      await signIn (email.value, password.value)
      router.push('/')
  } catch (error){
      console.log(error)
  }
}

const google = async () => {
  try{
      await googlePopup ()
      router.push('/')
  } catch (error){
      console.log(error)
  }
}

const email = ref('')
const password = ref('')

defineProps({
  form:{
    type: String,
    default: 'login',
  },
})

</script>