<template>
    <section>
        <h1>Login</h1>
    </section>
</template>

<script setup>
import { authentication } from '../helpers/useFirebase'

const { isAuthenticated, user, googlePopup, signOut } = authentication()

</script>