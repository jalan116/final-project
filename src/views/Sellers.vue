<template>
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-3">
        <Seller v-for='n in 1' :key="n" class="rounded" />
    </div>
</template>