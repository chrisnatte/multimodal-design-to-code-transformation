<template>
    <div class="flex min-h-[138px] w-[264px] flex-col gap-6 bg-white px-6 pt-6">
        <Password
            v-model="password"
            :feedback="false"
            toggleMask
            placeholder="********"
            class="w-full"
            inputClass="w-full"
            aria-label="Passwort"
        />
        <Button label="Anmelden" class="w-full" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const password = ref('');
</script>