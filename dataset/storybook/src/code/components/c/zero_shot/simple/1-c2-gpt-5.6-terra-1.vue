<template>
    <form class="flex w-full flex-col gap-6 p-6" @submit.prevent="submitLogin">
        <Password
            v-model="password"
            inputId="password"
            aria-label="Password"
            :feedback="false"
            toggleMask
            size="small"
            fluid
            inputClass="w-full"
        />
        <Button type="submit" label="Anmelden" severity="success" size="small" fluid />
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const password = ref('password');

const submitLogin = () => {};
</script>