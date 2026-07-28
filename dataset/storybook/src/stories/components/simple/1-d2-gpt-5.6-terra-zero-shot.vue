<template>
    <div class="flex w-[216px] flex-col gap-6">
        <Password
            v-model="password"
            inputId="password"
            aria-label="Passwort"
            :feedback="false"
            toggleMask
            fluid
            class="w-full"
            inputClass="!h-[33px] !w-full !text-sm"
        />
        <Button
            label="Anmelden"
            class="!h-[33px] !w-full !border-[#10b981] !bg-[#10b981] !text-sm hover:!border-[#059669] hover:!bg-[#059669]"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const password = ref('password1');
</script>