<template>
    <h1 class="text-center text-3xl py-5">Here are a lists of items placed by sellers</h1>
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-3">
        <item v-for="i in 10" :key='i' />
    </div>
</template>