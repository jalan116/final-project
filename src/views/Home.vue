<template>
    <div class="text-center">
        <h1 class="text-4xl">Welcome {{ user?.email || 'Shopper' }} to Garage Sales Online</h1>
        <h1 class="text-3xl py-2">Here are some of the items that you can find on Garage Sales Online</h1>
        <div class="container mx-auto flex">
            <img width="400" src="../assets/guitar.jpg" class="py-10 px-10 hover:bg-gray-200">
            <img width="400" src="../assets/nes.jpeg" class="py-10 px-10 rounded-full hover:bg-gray-200">
            <img width="400" src="../assets/record-player.jpg" class="py-10 px-10 hover:bg-gray-200">
        </div>
    </div>
    <div class="container flex mx-auto py-5">
        <p class="px-20 font-bold text-2xl">Old Guitar</p>
        <p class="px-20 font-bold text-2xl">Nintendo Entertainment System</p>
        <p class="px-20 font-bold text-2xl">Old Record Player</p>
    </div>
</template>

<script setup>
import {user} from '../helpers/useFirebase'

</script>