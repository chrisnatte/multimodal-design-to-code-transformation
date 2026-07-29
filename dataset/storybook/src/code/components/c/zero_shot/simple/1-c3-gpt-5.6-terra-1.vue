<template>
    <div class="flex min-h-screen items-start justify-center bg-white px-6 pt-6">
        <form class="flex w-full max-w-[216px] flex-col gap-6" @submit.prevent="handleLogin">
            <Password
                v-model="password"
                input-id="password"
                placeholder="********"
                :feedback="false"
                toggle-mask
                fluid
                input-class="!text-sm"
            />
            <Button label="Anmelden" type="submit" severity="success" fluid />
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('********')

const handleLogin = () => {}
</script>