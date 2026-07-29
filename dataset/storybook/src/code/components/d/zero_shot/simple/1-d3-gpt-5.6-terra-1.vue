<template>
    <div class="flex w-[264px] flex-col bg-white p-6">
        <div class="flex w-full flex-col gap-6">
            <Password
                v-model="password"
                placeholder="Passwort eingeben"
                :feedback="false"
                toggleMask
                fluid
                inputClass="h-[33px] !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm"
            />
            <Button
                label="Anmelden"
                class="h-[33px] w-full !border-0 !bg-[#10b981] !text-sm !font-medium hover:!bg-[#10b981]"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>