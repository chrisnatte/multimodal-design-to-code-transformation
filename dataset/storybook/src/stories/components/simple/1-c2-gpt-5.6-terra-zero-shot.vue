<template>
    <main class="flex h-[138px] w-[264px] flex-col gap-6 bg-white p-6">
        <Password
            v-model="password"
            inputId="password"
            aria-label="Passwort"
            :feedback="false"
            toggleMask
            size="small"
            fluid
            inputClass="w-full"
        />
        <Button
            label="Anmelden"
            size="small"
            class="w-full !bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
        />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const password = ref('password');
</script>