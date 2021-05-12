<template>
    <h1 class="text-center py-5 text-4xl"> Here is a Google Map on where to find Garage Sales near you</h1>
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-3">
        <Locations v-for="l in 8" key="l" class="rounded" />
    </div>
</template>